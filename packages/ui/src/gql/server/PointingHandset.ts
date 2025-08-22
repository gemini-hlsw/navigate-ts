import { useMutation } from '@apollo/client/react';
import type { QueryAndSubscriptionOptions } from '@gql/use-query-and-subscription';
import { useQueryAndSubscription } from '@gql/use-query-and-subscription';

import { graphql } from './gen';

const POINTING_ADJUSTMENT_OFFSET_QUERY = graphql(`
  query getPointingAdjustmentOffset {
    pointingAdjustmentOffset {
      local {
        azimuth {
          arcseconds
        }
        elevation {
          arcseconds
        }
      }
      guide {
        azimuth {
          arcseconds
        }
        elevation {
          arcseconds
        }
      }
    }
  }
`);

const POINTING_ADJUSTMENT_OFFSET_SUBSCRIPTION = graphql(`
  subscription pointingAdjustmentOffset {
    pointingAdjustmentOffset {
      local {
        azimuth {
          arcseconds
        }
        elevation {
          arcseconds
        }
      }
      guide {
        azimuth {
          arcseconds
        }
        elevation {
          arcseconds
        }
      }
    }
  }
`);

export function usePointingAdjustmentOffset(options?: QueryAndSubscriptionOptions) {
  return useQueryAndSubscription(
    POINTING_ADJUSTMENT_OFFSET_QUERY,
    POINTING_ADJUSTMENT_OFFSET_SUBSCRIPTION,
    'pointingAdjustmentOffset',
    options,
  );
}

const ADJUST_POINTING_MUTATION = graphql(`
  mutation adjustPointing($offset: HandsetAdjustmentInput!) {
    adjustPointing(offset: $offset) {
      result
      msg
    }
  }
`);

export function useAdjustPointing() {
  return useMutation(ADJUST_POINTING_MUTATION);
}

const RESET_LOCAL_POINTING_ADJUSTMENT_MUTATION = graphql(`
  mutation resetLocalPointingAdjustment {
    resetLocalPointingAdjustment {
      result
      msg
    }
  }
`);

export function useResetLocalPointingAdjustment() {
  return useMutation(RESET_LOCAL_POINTING_ADJUSTMENT_MUTATION);
}

const RESET_GUIDE_POINTING_ADJUSTMENT_MUTATION = graphql(`
  mutation resetGuidePointingAdjustment {
    resetGuidePointingAdjustment {
      result
      msg
    }
  }
`);

export function useResetGuidePointingAdjustment() {
  return useMutation(RESET_GUIDE_POINTING_ADJUSTMENT_MUTATION);
}

const ABSORB_GUIDE_POINTING_ADJUSTMENT_MUTATION = graphql(`
  mutation absorbGuidePointingAdjustment {
    absorbGuidePointingAdjustment {
      result
      msg
    }
  }
`);

export function useAbsorbGuidePointingAdjustment() {
  return useMutation(ABSORB_GUIDE_POINTING_ADJUSTMENT_MUTATION);
}
