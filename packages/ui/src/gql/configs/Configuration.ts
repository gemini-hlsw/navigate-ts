import { useMutation, useQuery } from '@apollo/client';

import { graphql } from './gen';

export const GET_CONFIGURATION = graphql(`
  query getConfiguration {
    configuration {
      pk
      site
      selectedTarget
      selectedOiTarget
      selectedP1Target
      selectedP2Target
      oiGuidingType
      p1GuidingType
      p2GuidingType
      obsTitle
      obsId
      obsInstrument
      obsSubtitle
      obsReference
    }
  }
`);

export function useConfiguration() {
  return useQuery(GET_CONFIGURATION, {
    context: { clientName: 'navigateConfigs' },
  });
}

const UPDATE_CONFIGURATION = graphql(`
  mutation updateConfiguration(
    $pk: Int!
    $site: SiteType
    $selectedTarget: Int
    $selectedOiTarget: Int
    $selectedP1Target: Int
    $selectedP2Target: Int
    $oiGuidingType: GuidingType
    $p1GuidingType: GuidingType
    $p2GuidingType: GuidingType
    $obsTitle: String
    $obsId: String
    $obsInstrument: Instrument
    $obsSubtitle: String
    $obsReference: String
  ) {
    updateConfiguration(
      pk: $pk
      site: $site
      selectedTarget: $selectedTarget
      selectedOiTarget: $selectedOiTarget
      selectedP1Target: $selectedP1Target
      selectedP2Target: $selectedP2Target
      oiGuidingType: $oiGuidingType
      p1GuidingType: $p1GuidingType
      p2GuidingType: $p2GuidingType
      obsTitle: $obsTitle
      obsId: $obsId
      obsInstrument: $obsInstrument
      obsSubtitle: $obsSubtitle
      obsReference: $obsReference
    ) {
      pk
      site
      selectedTarget
      selectedOiTarget
      selectedP1Target
      selectedP2Target
      oiGuidingType
      p1GuidingType
      p2GuidingType
      obsTitle
      obsId
      obsInstrument
      obsSubtitle
      obsReference
    }
  }
`);

export function useUpdateConfiguration() {
  return useMutation(UPDATE_CONFIGURATION, {
    context: { clientName: 'navigateConfigs' },
  });
}
