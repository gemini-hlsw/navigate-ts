import { useMutation } from '@apollo/client/react';
import { useQueryAndSubscription } from '@gql/use-query-and-subscription';
import type { Dispatch } from 'react';

import { graphql } from './gen';

const AC_OBSERVE = graphql(`
  mutation acObserve($period: TimeSpanInput!) {
    acObserve(period: $period) {
      result
      msg
    }
  }
`);

export function useAcObserve(setStale: Dispatch<boolean>) {
  return useMutation(AC_OBSERVE, {
    onCompleted: () => setStale(true),
  });
}

const AC_STOP_OBSERVE = graphql(`
  mutation acStopObserve {
    acStopObserve {
      result
      msg
    }
  }
`);

export function useAcStopObserve(setStale: Dispatch<boolean>) {
  return useMutation(AC_STOP_OBSERVE, {
    onCompleted: () => setStale(true),
  });
}

const AC_MECHS_STATE = graphql(`
  query acMechsState {
    acMechsState {
      lens
      filter
      ndFilter
    }
  }
`);

const AC_MECHS_STATE_SUB = graphql(`
  subscription acMechsStateSub {
    acMechsState {
      lens
      filter
      ndFilter
    }
  }
`);

export function useAcMechsState() {
  return useQueryAndSubscription(AC_MECHS_STATE, AC_MECHS_STATE_SUB, 'acMechsState', { useStale: true });
}

const AC_LENS = graphql(`
  mutation acLens($lens: AcLens!) {
    acLens(lens: $lens) {
      result
      msg
    }
  }
`);

export function useAcLens(setStale: Dispatch<boolean>) {
  return useMutation(AC_LENS, {
    onCompleted: () => setStale(true),
  });
}

const AC_FILTER = graphql(`
  mutation acFilter($filter: AcFilter!) {
    acFilter(filter: $filter) {
      result
      msg
    }
  }
`);

export function useAcFilter(setStale: Dispatch<boolean>) {
  return useMutation(AC_FILTER, {
    onCompleted: () => setStale(true),
  });
}

const AC_ND_FILTER = graphql(`
  mutation acNdFilter($ndFilter: AcNdFilter!) {
    acNdFilter(ndFilter: $ndFilter) {
      result
      msg
    }
  }
`);

export function useAcNdFilter(setStale: Dispatch<boolean>) {
  return useMutation(AC_ND_FILTER, {
    onCompleted: () => setStale(true),
  });
}

const AC_WINDOW_SIZE = graphql(`
  mutation acWindowSize($size: AcWindowInput!) {
    acWindowSize(size: $size) {
      result
      msg
    }
  }
`);

export function useAcWindowSize(setStale: Dispatch<boolean>) {
  return useMutation(AC_WINDOW_SIZE, {
    onCompleted: () => setStale(true),
  });
}
