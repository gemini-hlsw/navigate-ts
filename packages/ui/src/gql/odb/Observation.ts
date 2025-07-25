import { useLazyQuery, useQuery } from '@apollo/client';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

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
        id
        existence
        title
        subtitle
        instrument
        reference {
          label
        }
        program {
          id
          existence
          name
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
            id
            existence
            name
            sidereal {
              epoch
              ra {
                hms
                degrees
              }
              dec {
                dms
                degrees
              }
            }
            sourceProfile {
              point {
                bandNormalized {
                  brightnesses {
                    band
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export function useObservationsByState(options: OptionsOf<typeof GET_OBSERVATIONS_BY_STATE>) {
  return useQuery(GET_OBSERVATIONS_BY_STATE, {
    context: { clientName: 'odb' },
    ...options,
  });
}

const GET_GUIDE_ENVIRONMENT = graphql(`
  # eslint-disable @graphql-eslint/selection-set-depth
  query getGuideEnvironment($obsId: ObservationId!) {
    observation(observationId: $obsId) {
      id
      targetEnvironment {
        guideEnvironment {
          posAngle {
            hms
            degrees
          }
          guideTargets {
            probe
            name
            sidereal {
              epoch
              ra {
                hms
                degrees
              }
              dec {
                dms
                degrees
              }
            }
            sourceProfile {
              point {
                bandNormalized {
                  brightnesses {
                    band
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export function useGetGuideEnvironment() {
  return useLazyQuery(GET_GUIDE_ENVIRONMENT, {
    context: { clientName: 'odb' },
  });
}

const GET_CENTRAL_WAVELENGTH = graphql(`
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
  return useLazyQuery(GET_CENTRAL_WAVELENGTH, {
    context: { clientName: 'odb' },
  });
}
