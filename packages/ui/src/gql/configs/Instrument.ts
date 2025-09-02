import { useMutation, useQuery } from '@apollo/client/react';
import { useInstrumentPort } from '@gql/server/Instrument';
import type { OptionsOf } from '@gql/util';

import { getConfigWfs, isNullish } from '@/Helpers/functions';

import { useConfiguration } from './Configuration';
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

export function useDistinctPorts(options: OptionsOf<typeof GET_DISTINCT_PORTS>) {
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
      isTemporary
      comment
      createdAt
    }
  }
`);

export function useInstruments(options: OptionsOf<typeof GET_INSTRUMENTS>) {
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
      isTemporary
      comment
      createdAt
    }
  }
`);

export function useInstrument(options: OptionsOf<typeof GET_INSTRUMENT> = {}) {
  return useQuery(GET_INSTRUMENT, {
    ...options,
    context: { clientName: 'navigateConfigs' },
  });
}

export const CREATE_INSTRUMENT = graphql(`
  mutation createInstrument(
    $name: Instrument!
    $iaa: Float
    $issPort: Int!
    $focusOffset: Float
    $wfs: WfsType
    $originX: Float
    $originY: Float
    $ao: Boolean!
    $extraParams: JSON
    $isTemporary: Boolean!
    $comment: String
  ) {
    createInstrument(
      name: $name
      iaa: $iaa
      issPort: $issPort
      focusOffset: $focusOffset
      wfs: $wfs
      originX: $originX
      originY: $originY
      ao: $ao
      extraParams: $extraParams
      isTemporary: $isTemporary
      comment: $comment
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
      isTemporary
      comment
      createdAt
    }
  }
`);

export function useCreateInstrument() {
  return useMutation(CREATE_INSTRUMENT, {
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
    $isTemporary: Boolean
    $comment: String
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
      isTemporary: $isTemporary
      comment: $comment
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
      isTemporary
      comment
      createdAt
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
    resetInstruments(name: $name)
  }
`);

export function useResetInstruments() {
  return useMutation(RESET_INSTRUMENTS, {
    context: { clientName: 'navigateConfigs' },
  });
}

export function useConfiguredInstrument(options: Omit<OptionsOf<typeof GET_INSTRUMENT>, 'variables'> = {}) {
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;

  const { data: instrumentPortData, loading: instrumentPortLoading } = useInstrumentPort({
    skip: isNullish(configuration?.obsInstrument),
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    variables: { instrument: configuration?.obsInstrument! },
  });

  const instrument = useInstrument({
    ...options,
    skip: isNullish(configuration?.obsInstrument) || isNullish(instrumentPortData?.instrumentPort) || options.skip,
    variables: {
      name: configuration?.obsInstrument,
      issPort: instrumentPortData?.instrumentPort,
      wfs: getConfigWfs(configuration),
    },
  });

  return {
    ...instrument,
    data: instrument.data?.instrument,
    loading: configurationLoading || instrumentPortLoading || instrument.loading,
  };
}
