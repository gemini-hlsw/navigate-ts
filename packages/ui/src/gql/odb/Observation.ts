import { skipToken, useLazyQuery, useQuery } from '@apollo/client/react';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

export const OBSERVATION_FRAGMENT = graphql(`
  fragment ObservationItem on Observation {
    id
    title
    subtitle
    instrument
    reference {
      label
    }
    program {
      id
      pi {
        id
        user {
          id
          profile {
            givenName
            familyName
          }
        }
      }
    }
    targetEnvironment {
      firstScienceTarget {
        ...TargetItem
      }
      blindOffsetTarget {
        ...TargetItem
      }
    }
  }
`);

export const TARGET_FRAGMENT = graphql(`
  fragment TargetItem on Target {
    id
    name
    sidereal {
      ...SiderealItem
    }
    sourceProfile {
      ...SourceProfileItem
    }
    nonsidereal {
      ...NonsiderealItem
    }
  }
`);

export const SIDEREAL_FRAGMENT = graphql(`
  fragment SiderealItem on Sidereal {
    epoch
    ra {
      hms
      degrees
    }
    dec {
      dms
      degrees
    }
    properMotion {
      ra {
        microarcsecondsPerYear
      }
      dec {
        microarcsecondsPerYear
      }
    }
    parallax {
      microarcseconds
    }
    radialVelocity {
      centimetersPerSecond
    }
  }
`);

export const NONSIDEREAL_FRAGMENT = graphql(`
  fragment NonsiderealItem on Nonsidereal {
    des
    keyType
    key
  }
`);

export const BRIGHTNESS_FRAGMENT = graphql(`
  fragment BrightnessItem on BandBrightnessIntegrated {
    band
    value
  }
`);

export const SOURCE_PROFILE_FRAGMENT = graphql(`
  fragment SourceProfileItem on SourceProfile {
    point {
      bandNormalized {
        brightnesses {
          ...BrightnessItem
        }
      }
    }
  }
`);

const GET_OBSERVATION_BY_ID = graphql(`
  query getObservationById($obsId: ObservationId!) {
    observation(observationId: $obsId) {
      ...ObservationItem
    }
  }
`);

export function useObservationById() {
  return useLazyQuery(GET_OBSERVATION_BY_ID, { fetchPolicy: 'network-only' });
}

const GET_OBSERVATIONS_BY_STATE = graphql(`
  # eslint-disable @graphql-eslint/selection-set-depth
  query getObservationsByState($states: [ObservationWorkflowState!]!, $site: Site!, $date: Date!) {
    observations(
      WHERE: {
        workflow: { workflowState: { IN: $states } }
        site: { EQ: $site }
        program: { AND: [{ activeStart: { LTE: $date } }, { activeEnd: { GTE: $date } }] }
        reference: { IS_NULL: false }
      }
    ) {
      matches {
        ...ObservationItem
      }
    }
  }
`);

export function useObservationsByState(options: OptionsOf<typeof GET_OBSERVATIONS_BY_STATE>) {
  return useQuery(
    GET_OBSERVATIONS_BY_STATE,
    options === skipToken
      ? skipToken
      : {
          ...options,
          context: { clientName: 'odb' },
          fetchPolicy: 'cache-and-network',
        },
  );
}

export const GET_GUIDE_ENVIRONMENT = graphql(`
  # eslint-disable @graphql-eslint/selection-set-depth
  query getGuideEnvironment($obsId: ObservationId!) {
    observation(observationId: $obsId) {
      id
      targetEnvironment {
        guideEnvironment {
          posAngle {
            degrees
          }
          guideTargets {
            probe
            name
            sidereal {
              ...SiderealItem
            }
            sourceProfile {
              ...SourceProfileItem
            }
            nonsidereal {
              ...NonsiderealItem
            }
          }
        }
      }
    }
  }
`);

export function useGetGuideEnvironment() {
  return useLazyQuery(GET_GUIDE_ENVIRONMENT, { errorPolicy: 'all', fetchPolicy: 'network-only' });
}

export const GET_CENTRAL_WAVELENGTH = graphql(`
  query getCentralWavelength($obsId: ObservationId!) {
    executionConfig(observationId: $obsId) {
      gmosNorth {
        acquisition {
          nextAtom {
            id
            steps {
              id
              instrumentConfig {
                centralWavelength {
                  nanometers
                }
              }
            }
          }
        }
      }
      gmosSouth {
        acquisition {
          nextAtom {
            id
            steps {
              id
              instrumentConfig {
                centralWavelength {
                  nanometers
                }
              }
            }
          }
        }
      }
      flamingos2 {
        acquisition {
          nextAtom {
            id
            steps {
              id
              instrumentConfig {
                centralWavelength {
                  nanometers
                }
              }
            }
          }
        }
      }
    }
  }
`);

export function useGetCentralWavelength() {
  return useLazyQuery(GET_CENTRAL_WAVELENGTH, { errorPolicy: 'all', fetchPolicy: 'network-only' });
}
