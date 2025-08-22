import { useQuery } from '@apollo/client/react';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

export const GET_VERSION = graphql(`
  query version {
    version {
      serverVersion
      databaseVersion
    }
  }
`);

export function useVersion(options?: OptionsOf<typeof GET_VERSION>) {
  return useQuery(GET_VERSION, {
    ...options,
    context: { clientName: 'navigateConfigs' },
  });
}
