import { useSubscription } from '@apollo/client';

import { graphql } from './gen';

export const GUIDE_QUALITY_SUBSCRIPTION = graphql(`
  subscription guidersQualityValues {
    guidersQualityValues {
      pwfs1 {
        flux
        centroidDetected
      }
      pwfs2 {
        flux
        centroidDetected
      }
      oiwfs {
        flux
        centroidDetected
      }
    }
  }
`);

export function useGuideQualities() {
  return useSubscription(GUIDE_QUALITY_SUBSCRIPTION);
}
