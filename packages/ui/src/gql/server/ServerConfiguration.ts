import { useQuery } from '@apollo/client';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

const SERVER_CONFIGURATION = graphql(`
  query serverConfiguration {
    serverConfiguration {
      version
      site
      odbUri
      ssoUri
    }
  }
`);

export function useServerConfiguration(options: OptionsOf<typeof SERVER_CONFIGURATION> = {}) {
  return useQuery(SERVER_CONFIGURATION, options);
}
