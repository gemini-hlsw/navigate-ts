import { useMutation, useQuery } from '@apollo/client/react';

import { graphql } from './gen';

export const GEMS_INSTRUMENT_FRAGMENT = graphql(`
  fragment GemsInstrumentItem on GemsInstrument {
    pk
    beamsplitter
    adc
    astrometricMode
  }
`);

const GET_GEMS_INSTRUMENT = graphql(`
  query getGemsInstrument {
    gemsInstrument {
      ...GemsInstrumentItem
    }
  }
`);

export function useGemsInstrument() {
  return useQuery(GET_GEMS_INSTRUMENT, {
    context: { clientName: 'navigateConfigs' },
  });
}

const UPDATE_GEMS_INSTRUMENT = graphql(`
  mutation updateGemsInstrument($pk: PosInt!, $beamsplitter: String, $adc: Boolean, $astrometricMode: String) {
    updateGemsInstrument(pk: $pk, beamsplitter: $beamsplitter, adc: $adc, astrometricMode: $astrometricMode) {
      ...GemsInstrumentItem
    }
  }
`);

export function useUpdateGemsInstrument() {
  return useMutation(UPDATE_GEMS_INSTRUMENT, {
    context: { clientName: 'navigateConfigs' },
  });
}
