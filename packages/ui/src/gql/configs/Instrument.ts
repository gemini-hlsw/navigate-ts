import { skipToken, useMutation, useQuery } from '@apollo/client/react';
import { useInstrumentPort } from '@gql/server/Instrument';
import type { OptionsOf } from '@gql/util';

import { getConfigWfs, isNullish } from '@/Helpers/functions';

import { useConfiguration } from './Configuration';
import { graphql } from './gen';

export const GET_DISTINCT_INSTRUMENTS = graphql(`
  query getDistinctInstruments {
    distinctInstruments
  }
`);

export function useDistinctInstruments(options: OptionsOf<typeof GET_DISTINCT_INSTRUMENTS> = {}) {
  return useQuery(
    GET_DISTINCT_INSTRUMENTS,
    options === skipToken
      ? skipToken
      : {
          ...options,
          context: { clientName: 'navigateConfigs' },
        },
  );
}

export const GET_DISTINCT_PORTS = graphql(`
  query getDistinctPorts($name: Instrument!) {
    distinctPorts(name: $name)
  }
`);

export function useDistinctPorts(options: OptionsOf<typeof GET_DISTINCT_PORTS>) {
  return useQuery(
    GET_DISTINCT_PORTS,
    options === skipToken
      ? skipToken
      : {
          ...options,
          context: { clientName: 'navigateConfigs' },
        },
  );
}

export const GET_INSTRUMENTS = graphql(`
  query getInstruments($name: Instrument!, $issPort: Int, $wfs: WfsType) {
    instruments(name: $name, issPort: $issPort, wfs: $wfs) {
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
  return useQuery(
    GET_INSTRUMENTS,
    options === skipToken
      ? skipToken
      : {
          ...options,
          context: { clientName: 'navigateConfigs' },
        },
  );
}

export const GET_INSTRUMENT = graphql(`
  query getInstrument($name: Instrument!, $issPort: Int, $wfs: WfsType) {
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

export function useInstrument(options: OptionsOf<typeof GET_INSTRUMENT>) {
  return useQuery(
    GET_INSTRUMENT,
    options === skipToken
      ? skipToken
      : {
          ...options,
          skip: isNullish(options.variables?.name),
          context: { clientName: 'navigateConfigs' },
        },
  );
}

export const SET_TEMPORARY_INSTRUMENT = graphql(`
  mutation setTemporaryInstrument(
    $name: Instrument!
    $iaa: Float
    $issPort: Int!
    $focusOffset: Float
    $wfs: WfsType
    $originX: Float
    $originY: Float
    $ao: Boolean!
    $extraParams: JSON
  ) {
    setTemporaryInstrument(
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
      isTemporary
      comment
      createdAt
    }
  }
`);

export function useSetTemporaryInstrument() {
  return useMutation(SET_TEMPORARY_INSTRUMENT, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [GET_INSTRUMENT],
    awaitRefetchQueries: true,
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

export const RESET_INSTRUMENTS = graphql(`
  mutation resetInstruments($name: Instrument!) {
    resetInstruments(name: $name)
  }
`);

export function useResetInstruments() {
  return useMutation(RESET_INSTRUMENTS, {
    context: { clientName: 'navigateConfigs' },
  });
}

const DELETE_INSTRUMENT = graphql(`
  mutation deleteInstrument($pk: PosInt!) {
    deleteInstrument(pk: $pk)
  }
`);

export function useDeleteInstrument() {
  return useMutation(DELETE_INSTRUMENT, {
    refetchQueries: [GET_INSTRUMENTS, GET_INSTRUMENT],
    awaitRefetchQueries: true,
    context: { clientName: 'navigateConfigs' },
  });
}

export function useConfiguredInstrument() {
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;

  const { data: instrumentPortData, loading: instrumentPortLoading } = useInstrumentPort(
    isNullish(configuration?.obsInstrument)
      ? skipToken
      : {
          variables: { instrument: configuration.obsInstrument },
        },
  );

  const instrument = useInstrument(
    isNullish(configuration?.obsInstrument)
      ? skipToken
      : {
          variables: {
            name: configuration.obsInstrument,
            issPort: instrumentPortData?.instrumentPort ?? undefined,
            wfs: getConfigWfs(configuration),
          },
        },
  );

  return {
    ...instrument,
    data: instrument.data?.instrument,
    loading: configurationLoading || instrumentPortLoading || instrument.loading,
  };
}
