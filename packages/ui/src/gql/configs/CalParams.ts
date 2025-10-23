import { useMutation, useQuery, useSuspenseQuery } from '@apollo/client/react';

import { graphql } from './gen';
import type { Site } from './gen/graphql';

export const CAL_PARAMS = graphql(`
  query calParams($site: Site!) {
    calParams(site: $site) {
      pk
      site
      acqCamX
      acqCamY
      baffleVisible
      baffleNearIR
      topShutterCurrentLimit
      bottomShutterCurrentLimit
      pwfs1CenterX
      pwfs1CenterY
      pwfs1CenterZ
      pwfs2CenterX
      pwfs2CenterY
      pwfs2CenterZ
      defocusEnabled
      gnirsSfoDefocus
      gmosSfoDefocus
      gnirsP1Defocus
      gmosP1Defocus
      gmosOiDefocus
      comment
      createdAt
    }
  }
`);

export function useSuspenseCalParams(site: Site) {
  return useSuspenseQuery(CAL_PARAMS, {
    variables: { site },
    context: { clientName: 'navigateConfigs' },
  });
}

export function useCalParams(site: Site) {
  return useQuery(CAL_PARAMS, {
    variables: { site },
    context: { clientName: 'navigateConfigs' },
  });
}
const CREATE_CAL_PARAMS = graphql(`
  mutation createCalParams($input: CalParamsCreateInput!) {
    createCalParams(input: $input) {
      pk
      acqCamX
      acqCamY
      baffleVisible
      baffleNearIR
      topShutterCurrentLimit
      bottomShutterCurrentLimit
      pwfs1CenterX
      pwfs1CenterY
      pwfs1CenterZ
      pwfs2CenterX
      pwfs2CenterY
      pwfs2CenterZ
      defocusEnabled
      gnirsSfoDefocus
      gmosSfoDefocus
      gnirsP1Defocus
      gmosP1Defocus
      gmosOiDefocus
      comment
      createdAt
    }
  }
`);

export function useCreateCalParams() {
  return useMutation(CREATE_CAL_PARAMS, { context: { clientName: 'navigateConfigs' }, refetchQueries: [CAL_PARAMS] });
}
