import { useMutation, useQuery } from '@apollo/client/react';

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
  return useMutation(CREATE_CAL_PARAMS, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [CAL_PARAMS, CAL_PARAMS_HISTORY],
  });
}

const CAL_PARAMS_HISTORY = graphql(`
  query calParamsHistory($site: Site!) {
    calParamsHistory(site: $site) {
      pk
      comment
      createdAt
    }
  }
`);

export function useCalParamsHistory(site: Site) {
  return useQuery(CAL_PARAMS_HISTORY, {
    variables: { site },
    context: { clientName: 'navigateConfigs' },
  });
}

const REVERT_CAL_PARAMS = graphql(`
  mutation revertCalParams($pk: PosInt!, $comment: String) {
    revertCalParams(pk: $pk, comment: $comment) {
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

export function useRevertCalParams() {
  return useMutation(REVERT_CAL_PARAMS, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [CAL_PARAMS, CAL_PARAMS_HISTORY],
    awaitRefetchQueries: true,
  });
}

const DELETE_CAL_PARAMS = graphql(`
  mutation deleteCalParams($pk: PosInt!) {
    deleteCalParams(pk: $pk)
  }
`);

export function useDeleteCalParams() {
  return useMutation(DELETE_CAL_PARAMS, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [CAL_PARAMS, CAL_PARAMS_HISTORY],
    awaitRefetchQueries: true,
  });
}
