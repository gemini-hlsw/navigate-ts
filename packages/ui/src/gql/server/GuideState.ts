import { useMutation } from '@apollo/client/react';
import { useQueryAndSubscription } from '@gql/use-query-and-subscription';

import { graphql } from './gen';

export const GUIDE_STATE_SUBSCRIPTION = graphql(`
  subscription guideState {
    guideState {
      m2Inputs
      m2Coma
      m1Input
      mountOffload
      p1Integrating
      p2Integrating
      oiIntegrating
      acIntegrating
    }
  }
`);

export const GUIDE_STATE_QUERY = graphql(`
  query getGuideState {
    guideState {
      m2Inputs
      m2Coma
      m1Input
      mountOffload
      p1Integrating
      p2Integrating
      oiIntegrating
      acIntegrating
    }
  }
`);

export function useGuideState() {
  return useQueryAndSubscription(GUIDE_STATE_QUERY, GUIDE_STATE_SUBSCRIPTION, 'guideState');
}

const GUIDE_ENABLE = graphql(`
  mutation guideEnable($config: GuideConfigurationInput!) {
    guideEnable(config: $config) {
      result
      msg
    }
  }
`);

export function useGuideEnable() {
  return useMutation(GUIDE_ENABLE);
}

const GUIDE_DISABLE = graphql(`
  mutation guideDisable {
    guideDisable {
      result
      msg
    }
  }
`);

export function useGuideDisable() {
  return useMutation(GUIDE_DISABLE);
}
