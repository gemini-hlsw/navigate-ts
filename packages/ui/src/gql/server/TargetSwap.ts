import { useMutation } from '@apollo/client';
import type { Dispatch } from 'react';

import { graphql } from './gen';

export const SWAP_TARGET_MUTATION = graphql(`
  mutation swapTarget($swapConfig: SwapConfigInput!) {
    swapTarget(swapConfig: $swapConfig) {
      result
      msg
    }
  }
`);
export const RESTORE_TARGET_MUTATION = graphql(`
  mutation restoreTarget($config: TcsConfigInput!) {
    restoreTarget(config: $config) {
      result
      msg
    }
  }
`);

export function useSwapTarget(setStale: Dispatch<boolean>) {
  return useMutation(SWAP_TARGET_MUTATION, {
    onCompleted: () => setStale(true),
  });
}

export function useRestoreTarget(setStale: Dispatch<boolean>) {
  return useMutation(RESTORE_TARGET_MUTATION, {
    onCompleted: () => setStale(true),
  });
}
