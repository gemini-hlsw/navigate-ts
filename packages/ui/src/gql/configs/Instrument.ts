import { useMutation, useQuery } from '@apollo/client';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

const GET_DISTINCT_INSTRUMENTS = graphql(`
  query getDistinctInstruments {
    distinctInstruments {
      name
    }
  }
`);

export function useDistinctInstruments(options: OptionsOf<typeof GET_DISTINCT_INSTRUMENTS> = {}) {
  return useQuery(GET_DISTINCT_INSTRUMENTS, {
    context: { clientName: 'navigateConfigs' },
    ...options,
  });
}

const GET_DISTINCT_PORTS = graphql(`
  query getDistinctPorts($name: Instrument!) {
    distinctPorts(name: $name) {
      issPort
    }
  }
`);

export function useDistinctPorts(options: OptionsOf<typeof GET_DISTINCT_PORTS> = {}) {
  return useQuery(GET_DISTINCT_PORTS, {
    context: { clientName: 'navigateConfigs' },
    ...options,
  });
}

export const GET_INSTRUMENTS = graphql(`
  query getInstruments($name: Instrument!, $issPort: Int!) {
    instruments(name: $name, issPort: $issPort) {
      pk
      name
      iaa
      issPort
      focusOffset
      wfs
      originX
      originY
      ao
      extraParams
    }
  }
`);

export function useInstruments(options: OptionsOf<typeof GET_INSTRUMENTS> = {}) {
  return useQuery(GET_INSTRUMENTS, {
    context: { clientName: 'navigateConfigs' },
    ...options,
  });
}

export const GET_INSTRUMENT = graphql(`
  query getInstrument($name: Instrument, $issPort: Int, $wfs: WfsType) {
    instrument(name: $name, issPort: $issPort, wfs: $wfs) {
      pk
      name
      iaa
      issPort
      focusOffset
      wfs
      originX
      originY
      ao
      extraParams
    }
  }
`);

export function useInstrument(options: OptionsOf<typeof GET_INSTRUMENT> = {}) {
  return useQuery(GET_INSTRUMENT, {
    ...options,
    context: { clientName: 'navigateConfigs' },
  });
}

export const UPDATE_INSTRUMENT = graphql(`
  mutation updateInstrument(
    $pk: PosInt!
    $name: Instrument
    $iaa: Float
    $issPort: Int
    $focusOffset: Float
    $wfs: WfsType
    $originX: Float
    $originY: Float
    $ao: Boolean
    $extraParams: JSON
  ) {
    updateInstrument(
      pk: $pk
      name: $name
      iaa: $iaa
      issPort: $issPort
      focusOffset: $focusOffset
      wfs: $wfs
      originX: $originX
      originY: $originY
      ao: $ao
      extraParams: $extraParams
    ) {
      pk
      name
      iaa
      issPort
      focusOffset
      wfs
      originX
      originY
      ao
      extraParams
    }
  }
`);

export function useUpdateInstrument() {
  return useMutation(UPDATE_INSTRUMENT, {
    context: { clientName: 'navigateConfigs' },
  });
}

const RESET_INSTRUMENTS = graphql(`
  mutation resetInstruments($name: Instrument!) {
    resetInstruments(name: $name) {
      pk
      name
      iaa
      issPort
      focusOffset
      wfs
      originX
      originY
      ao
      extraParams
    }
  }
`);

export function useResetInstruments() {
  return useMutation(RESET_INSTRUMENTS, {
    context: { clientName: 'navigateConfigs' },
  });
}
