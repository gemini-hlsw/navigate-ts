import { useQueryAndSubscription } from '@gql/use-query-and-subscription';

import { graphql } from './gen';

export const GUIDE_QUALITY_QUERY = graphql(`
  query getGuidersQualityValues {
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
  return useQueryAndSubscription(GUIDE_QUALITY_QUERY, GUIDE_QUALITY_SUBSCRIPTION, 'guidersQualityValues', {
    useStale: false,
  });
}
