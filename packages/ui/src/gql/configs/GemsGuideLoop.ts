import { useMutation, useQuery } from '@apollo/client';

import { graphql } from './gen';

const GET_GEMS_GUIDE_LOOP = graphql(`
  query getGemsGuideLoop {
    gemsGuideLoop {
      pk
      aoEnabled
      focus
      rotation
      tipTilt
      anisopl
      flexure
    }
  }
`);

export function useGetGemsGuideLoop() {
  return useQuery(GET_GEMS_GUIDE_LOOP, {
    context: { clientName: 'navigateConfigs' },
  });
}

const UPDATE_GEMS_GUIDE_LOOP = graphql(`
  mutation updateGemsGuideLoop(
    $pk: PosInt!
    $aoEnabled: Boolean
    $focus: Boolean
    $rotation: Boolean
    $tipTilt: Boolean
    $anisopl: Boolean
    $flexure: Boolean
  ) {
    updateGemsGuideLoop(
      pk: $pk
      aoEnabled: $aoEnabled
      focus: $focus
      rotation: $rotation
      tipTilt: $tipTilt
      anisopl: $anisopl
      flexure: $flexure
    ) {
      pk
      aoEnabled
      focus
      rotation
      tipTilt
      anisopl
      flexure
    }
  }
`);

export function useUpdateGemsGuideLoop() {
  return useMutation(UPDATE_GEMS_GUIDE_LOOP, {
    context: { clientName: 'navigateConfigs' },
  });
}
