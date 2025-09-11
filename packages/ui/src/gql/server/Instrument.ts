import { skipToken, useQuery } from '@apollo/client/react';
import type { OptionsOf } from '@gql/util';

import { isNullish } from '@/Helpers/functions';

import { graphql } from './gen';

export const GET_INSTRUMENT_PORT = graphql(`
  query instrumentPort($instrument: Instrument!) {
    instrumentPort(instrument: $instrument)
  }
`);

export function useInstrumentPort(options: OptionsOf<typeof GET_INSTRUMENT_PORT>) {
  return useQuery(
    GET_INSTRUMENT_PORT,
    options === skipToken ? skipToken : { ...options, skip: isNullish(options.variables.instrument) },
  );
}
