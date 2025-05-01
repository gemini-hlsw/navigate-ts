import { useMutation } from '@apollo/client';
import type { Dispatch } from 'react';

import type { SetStale } from '@/Helpers/hooks';

import { graphql } from './gen';

const OIWFS_OBSERVE = graphql(`
  mutation oiwfsObserve($period: TimeSpanInput!) {
    oiwfsObserve(period: $period) {
      result
      msg
    }
  }
`);

export function useOiwfsObserve(setStale: SetStale) {
  return useMutation(OIWFS_OBSERVE, {
    onCompleted: () => setStale(true),
  });
}

const OIWFS_STOP_OBSERVE = graphql(`
  mutation oiwfsStopObserve {
    oiwfsStopObserve {
      result
      msg
    }
  }
`);

export function useOiwfsStopObserve(setStale: Dispatch<boolean>) {
  return useMutation(OIWFS_STOP_OBSERVE, {
    onCompleted: () => setStale(true),
  });
}
