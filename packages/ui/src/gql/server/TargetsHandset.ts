import { useMutation } from '@apollo/client';
import type { QueryAndSubscriptionOptions } from '@gql/use-query-and-subscription';
import { useQueryAndSubscription } from '@gql/use-query-and-subscription';

import { graphql } from './gen';

const TARGET_ADJUSTMENT_OFFSETS_QUERY = graphql(`
  query getTargetAdjustmentOffsets {
    targetAdjustmentOffsets {
      sourceA {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
      pwfs1 {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
      pwfs2 {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
      oiwfs {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
    }
  }
`);

const TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION = graphql(`
  subscription targetAdjustmentOffsets {
    targetAdjustmentOffsets {
      sourceA {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
      pwfs1 {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
      pwfs2 {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
      oiwfs {
        deltaX {
          arcseconds
        }
        deltaY {
          arcseconds
        }
      }
    }
  }
`);

export function useTargetAdjustmentOffsets(options?: QueryAndSubscriptionOptions) {
  return useQueryAndSubscription(
    TARGET_ADJUSTMENT_OFFSETS_QUERY,
    TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION,
    'targetAdjustmentOffsets',
    options,
  );
}

const ADJUST_TARGET_MUTATION = graphql(`
  mutation adjustTarget($target: AdjustTarget!, $offset: HandsetAdjustmentInput!, $openLoops: Boolean!) {
    adjustTarget(target: $target, offset: $offset, openLoops: $openLoops) {
      result
      msg
    }
  }
`);

export function useAdjustTarget() {
  return useMutation(ADJUST_TARGET_MUTATION);
}

const RESET_TARGET_ADJUSTMENT_MUTATION = graphql(`
  mutation resetTargetAdjustment($target: AdjustTarget!, $openLoops: Boolean!) {
    resetTargetAdjustment(target: $target, openLoops: $openLoops) {
      result
      msg
    }
  }
`);

export function useResetTargetAdjustment() {
  return useMutation(RESET_TARGET_ADJUSTMENT_MUTATION);
}

const ABSORB_TARGET_ADJUSTMENT_MUTATION = graphql(`
  mutation absorbTargetAdjustment($target: AdjustTarget!) {
    absorbTargetAdjustment(target: $target) {
      result
      msg
    }
  }
`);

export function useAbsorbTargetAdjustment() {
  return useMutation(ABSORB_TARGET_ADJUSTMENT_MUTATION);
}
