import { useLazyQuery } from '@apollo/client';

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
        }
      }
    }
  }
`);

export function useGetObservationsByState() {
  return useLazyQuery(GET_OBSERVATIONS_BY_STATE, {
    context: { clientName: 'odb' },
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
