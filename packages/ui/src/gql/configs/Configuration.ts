import { useMutation, useQuery } from '@apollo/client/react';

import { graphql } from './gen';

export const CONFIGURATION_FRAGMENT = graphql(`
  fragment ConfigurationItem on Configuration {
    pk
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
`);

export const GET_CONFIGURATION = graphql(`
  query getConfiguration {
    configuration {
      ...ConfigurationItem
    }
  }
`);

export function useConfiguration() {
  return useQuery(GET_CONFIGURATION, {
    context: { clientName: 'navigateConfigs' },
  });
}

export const UPDATE_CONFIGURATION = graphql(`
  mutation updateConfiguration(
    $pk: PosInt!
    $selectedTarget: Int
    $selectedOiTarget: Int
    $selectedP1Target: Int
    $selectedP2Target: Int
    $oiGuidingType: GuidingType
    $p1GuidingType: GuidingType
    $p2GuidingType: GuidingType
    $obsTitle: String
    $obsId: ObservationId
    $obsInstrument: Instrument
    $obsSubtitle: String
    $obsReference: String
  ) {
    updateConfiguration(
      pk: $pk
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
      ...ConfigurationItem
    }
  }
`);

export function useUpdateConfiguration() {
  return useMutation(UPDATE_CONFIGURATION, {
    context: { clientName: 'navigateConfigs' },
  });
}
