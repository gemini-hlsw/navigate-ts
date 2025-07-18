import { useLazyQuery, useQuery } from '@apollo/client';
import type { OptionsOf } from '@gql/util';

import { graphql } from './gen';

const GET_OBSERVATIONS_BY_STATE = graphql(`
  query getObservationsByState($states: [ObservationWorkflowState!]!, $site: Site!, $date: Date!) {
    observationsByWorkflowState(
      states: $states
      WHERE: {
        site: { EQ: $site }
        program: { AND: [{ activeStart: { LTE: $date } }, { activeEnd: { GTE: $date } }] }
        reference: { IS_NULL: false }
      }
    ) {
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
          user {
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
`);

export function useObservationsByState(options: OptionsOf<typeof GET_OBSERVATIONS_BY_STATE>) {
  return useQuery(GET_OBSERVATIONS_BY_STATE, {
    context: { clientName: 'odb' },
    ...options,
  });
}

const GET_GUIDE_ENVIRONMENT = graphql(`
  query getGuideEnvironment($obsId: ObservationId!) {
    observation(observationId: $obsId) {
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
    observation(observationId: $obsId) {
      execution {
        config {
          gmosNorth {
            acquisition {
              nextAtom {
                steps {
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
                steps {
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
                steps {
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
    }
  }
`);

export function useGetCentralWavelength() {
  return useLazyQuery(GET_CENTRAL_WAVELENGTH, {
    context: { clientName: 'odb' },
  });
}
