import { useQueryAndSubscription } from '@gql/use-query-and-subscription';

import { graphql } from './gen';

export const NAVIGATE_STATE = graphql(`
  query getNavigateState {
    navigateState {
      onSwappedTarget
    }
  }
`);

export const NAVIGATE_STATE_SUBSCRIPTION = graphql(`
  subscription navigateStates {
    navigateState {
      onSwappedTarget
    }
  }
`);

export function useNavigateState() {
  return useQueryAndSubscription(NAVIGATE_STATE, NAVIGATE_STATE_SUBSCRIPTION, 'navigateState');
}
