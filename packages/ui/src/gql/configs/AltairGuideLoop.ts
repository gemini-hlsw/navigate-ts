import { useMutation, useQuery } from '@apollo/client';

import { graphql } from './gen';

const GET_ALTAIR_GUIDE_LOOP = graphql(`
  query getAltairGuideLoop {
    altairGuideLoop {
      pk
      aoEnabled
      oiBlend
      focus
      p1Ttf
      strap
      oiTtf
      ttgs
      sfo
    }
  }
`);

export function useAltairGuideLoop() {
  return useQuery(GET_ALTAIR_GUIDE_LOOP, {
    context: { clientName: 'navigateConfigs' },
  });
}

const UPDATE_ALTAIR_GUIDE_LOOP = graphql(`
  mutation updateAltairGuideLoop(
    $pk: PosInt!
    $aoEnabled: Boolean
    $oiBlend: Boolean
    $focus: Boolean
    $p1Ttf: Boolean
    $strap: Boolean
    $oiTtf: Boolean
    $ttgs: Boolean
    $sfo: Boolean
  ) {
    updateAltairGuideLoop(
      pk: $pk
      aoEnabled: $aoEnabled
      oiBlend: $oiBlend
      focus: $focus
      p1Ttf: $p1Ttf
      strap: $strap
      oiTtf: $oiTtf
      ttgs: $ttgs
      sfo: $sfo
    ) {
      pk
      aoEnabled
      oiBlend
      focus
      p1Ttf
      strap
      oiTtf
      ttgs
      sfo
    }
  }
`);

export function useUpdateAltairGuideLoop() {
  return useMutation(UPDATE_ALTAIR_GUIDE_LOOP, {
    context: { clientName: 'navigateConfigs' },
  });
}
