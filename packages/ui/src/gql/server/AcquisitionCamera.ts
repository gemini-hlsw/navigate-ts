import { useMutation } from '@apollo/client';
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
