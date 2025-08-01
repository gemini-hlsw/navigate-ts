import { useMutation, useQuery } from '@apollo/client';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

const GET_MECHANISM = graphql(`
  query getMechanism {
    mechanism {
      pk
      mcs
      mcsPark
      mcsUnwrap
      scs
      crcs
      crcsPark
      crcsUnwrap
      pwfs1
      pwfs1Park
      pwfs1Unwrap
      pwfs2
      pwfs2Park
      pwfs2Unwrap
      oiwfs
      oiwfsPark
      odgw
      odgwPark
      aowfs
      aowfsPark
      dome
      domePark
      domeMode
      shutters
      shuttersPark
      shutterMode
      shutterAperture
      wVGate
      wVGateClose
      wVGateValue
      eVGate
      eVGateClose
      eVGateValue
      agScienceFoldPark
      agAoFoldPark
      agAcPickoffPark
      agParkAll
    }
  }
`);

export function useMechanism(options: OptionsOf<typeof GET_MECHANISM> = {}) {
  return useQuery(GET_MECHANISM, {
    ...options,
    context: { clientName: 'navigateConfigs' },
  });
}

const UPDATE_MECHANISM = graphql(`
  mutation updateMechanism(
    $pk: PosInt!
    $mcs: StatusType
    $mcsPark: StatusType
    $mcsUnwrap: StatusType
    $scs: StatusType
    $crcs: StatusType
    $crcsPark: StatusType
    $crcsUnwrap: StatusType
    $pwfs1: StatusType
    $pwfs1Park: StatusType
    $pwfs1Unwrap: StatusType
    $pwfs2: StatusType
    $pwfs2Park: StatusType
    $pwfs2Unwrap: StatusType
    $oiwfs: StatusType
    $oiwfsPark: StatusType
    $odgw: StatusType
    $odgwPark: StatusType
    $aowfs: StatusType
    $aowfsPark: StatusType
    $dome: StatusType
    $domePark: StatusType
    $domeMode: String
    $shutters: StatusType
    $shuttersPark: StatusType
    $shutterMode: String
    $shutterAperture: Int
    $wVGate: StatusType
    $wVGateClose: StatusType
    $wVGateValue: Int
    $eVGate: StatusType
    $eVGateClose: StatusType
    $eVGateValue: Int
    $agScienceFoldPark: StatusType
    $agAoFoldPark: StatusType
    $agAcPickoffPark: StatusType
    $agParkAll: StatusType
  ) {
    updateMechanism(
      pk: $pk
      mcs: $mcs
      mcsPark: $mcsPark
      mcsUnwrap: $mcsUnwrap
      scs: $scs
      crcs: $crcs
      crcsPark: $crcsPark
      crcsUnwrap: $crcsUnwrap
      pwfs1: $pwfs1
      pwfs1Park: $pwfs1Park
      pwfs1Unwrap: $pwfs1Unwrap
      pwfs2: $pwfs2
      pwfs2Park: $pwfs2Park
      pwfs2Unwrap: $pwfs2Unwrap
      oiwfs: $oiwfs
      oiwfsPark: $oiwfsPark
      odgw: $odgw
      odgwPark: $odgwPark
      aowfs: $aowfs
      aowfsPark: $aowfsPark
      dome: $dome
      domePark: $domePark
      domeMode: $domeMode
      shutters: $shutters
      shuttersPark: $shuttersPark
      shutterMode: $shutterMode
      shutterAperture: $shutterAperture
      wVGate: $wVGate
      wVGateClose: $wVGateClose
      wVGateValue: $wVGateValue
      eVGate: $eVGate
      eVGateClose: $eVGateClose
      eVGateValue: $eVGateValue
      agScienceFoldPark: $agScienceFoldPark
      agAoFoldPark: $agAoFoldPark
      agAcPickoffPark: $agAcPickoffPark
      agParkAll: $agParkAll
    ) {
      pk
      mcs
      mcsPark
      mcsUnwrap
      scs
      crcs
      crcsPark
      crcsUnwrap
      pwfs1
      pwfs1Park
      pwfs1Unwrap
      pwfs2
      pwfs2Park
      pwfs2Unwrap
      oiwfs
      oiwfsPark
      odgw
      odgwPark
      aowfs
      aowfsPark
      dome
      domePark
      domeMode
      shutters
      shuttersPark
      shutterMode
      shutterAperture
      wVGate
      wVGateClose
      wVGateValue
      eVGate
      eVGateClose
      eVGateValue
      agScienceFoldPark
      agAoFoldPark
      agAcPickoffPark
      agParkAll
    }
  }
`);

export function useUpdateMechanism() {
  const [mutationFunction] = useMutation(UPDATE_MECHANISM, {
    context: { clientName: 'navigateConfigs' },
  });

  return mutationFunction;
}
