import type { DocumentNode } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import type { ResultOf } from '@graphql-typed-document-node/core';
import { useEffect } from 'react';

import type { SetStale } from '@/Helpers/hooks';
import { useStale } from '@/Helpers/hooks';

export interface QueryAndSubscriptionOptions {
  /**
   * If true, the returned `setStale` can be used to set stale (loading) to true after a mutation. New data in the subscription will set stale to false.
   *
   * Default: true
   */
  useStale: boolean;
}

/**
 * Combines the results of a query and a subscription into a single object.
 *
 * Subscription data is preferred over query data. Until the subscription data is received, the query data is used.
 */
export function useQueryAndSubscription<
  TQuery extends DocumentNode,
  TSub extends DocumentNode,
  K extends keyof Omit<ResultOf<TQuery | TSub>, '__typename'>,
>(
  queryNode: TQuery,
  subscriptionNode: TSub,
  key: K,
  options: QueryAndSubscriptionOptions = { useStale: true },
): Pick<useQuery.Result<TQuery | TSub>, 'error' | 'loading'> & {
  data: ResultOf<TQuery | TSub>[K] | undefined;
  setStale: SetStale;
} {
  const [stale, setStale] = useStale();

  const { subscribeToMore, ...query } = useQuery<ResultOf<TQuery | TSub>>(queryNode, {
    nextFetchPolicy: 'cache-only',
  });

  useEffect(
    () =>
      subscribeToMore({
        document: subscriptionNode,
        updateQuery: (prev, { subscriptionData }) => subscriptionData.data ?? (prev as ResultOf<TQuery>),
      }),
    [subscribeToMore, subscriptionNode],
  );

  useEffect(() => {
    if (options.useStale) setStale(false);
  }, [query.data, setStale, options.useStale]);

  return {
    ...query,
    data: query.data?.[key],
    loading: query.loading || query.data === undefined || (options.useStale && stale),
    setStale,
  };
}
