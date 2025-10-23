import { MockedProvider } from '@apollo/client/testing/react';
import { GET_CONFIGURATION, UPDATE_CONFIGURATION } from '@gql/configs/Configuration';
import { RESET_INSTRUMENTS } from '@gql/configs/Instrument';
import { GET_ROTATOR, UPDATE_ROTATOR } from '@gql/configs/Rotator';
import { REMOVE_AND_CREATE_BASE_TARGETS, REMOVE_AND_CREATE_WFS_TARGETS } from '@gql/configs/Target';
import { GET_CENTRAL_WAVELENGTH } from '@gql/odb/Observation';
import type { MockedResponseOf } from '@gql/util';
import { describe, expect, it } from 'vitest';
import { renderHook } from 'vitest-browser-react';

import type { OdbObservationType } from '@/types';

import { useImportObservation } from './useImportObservation';

describe('useImportObservation', () => {
  it('should not update configuration until a real observation is re-imported', () => {
    const { result, act } = renderHook(() => useImportObservation(), {
      wrapper: ({ children }) => <MockedProvider mocks={[...mocks, mockInstrumentUpdate]}>{children}</MockedProvider>,
    });
    const [importObservation, { loading: importLoading }] = result.current;

    expect(importLoading).toBe(false);

    const callback = vitest.fn();

    act(() => {
      importObservation(null, callback)
        .then(() => {
          expect(callback).toHaveBeenCalledOnce();
          expect(mockInstrumentUpdate.result).not.toHaveBeenCalled();
        })
        .catch(() => {
          expect(callback).toHaveBeenCalledOnce();
          expect(mockInstrumentUpdate.result).not.toHaveBeenCalled();
        });
    });

    act(() => {
      importObservation(selectedObservation, callback)
        .then(() => {
          expect(callback).toHaveBeenCalledOnce();
          expect(mockInstrumentUpdate.result).toHaveBeenCalled();
        })
        .catch(() => {
          expect(callback).toHaveBeenCalledOnce();
          expect(mockInstrumentUpdate.result).toHaveBeenCalled();
        });
    });
  });
});

const selectedObservation: OdbObservationType = {
  id: 'o-2e5',
  existence: 'PRESENT',
  title: 'Mayall V',
  subtitle: null,
  instrument: 'GMOS_NORTH',
  reference: {
    label: 'G-2025B-0571-Q-0003',
  },
  program: {
    id: 10, //"p-11d",
    existence: 'PRESENT',
    name: 'Variable Sources in Nearby Galaxies',
    pi: {
      id: 'm-14f',
      user: {
        id: 'u-7ea',
        profile: {
          givenName: 'Bryan',
          familyName: 'Miller',
        },
      },
    },
  },
  targetEnvironment: {
    firstScienceTarget: {
      id: 't-60d',
      existence: 'PRESENT',
      name: 'Mayall V',
      sidereal: {
        epoch: 'J2000.000',
        ra: {
          hms: '00:50:09.964808',
          degrees: 12.541520033333333,
        },
        dec: {
          dms: '+41:41:01.034928',
          degrees: 41.683620813333334,
        },
        properMotion: null,
        parallax: {
          microarcseconds: 0,
        },
        radialVelocity: {
          centimetersPerSecond: -33200000,
        },
      },
      sourceProfile: {
        point: null,
      },
    },
  },
};

const mocks = [
  {
    request: {
      query: GET_ROTATOR,
      variables: {},
    },
    result: {
      data: {
        rotator: {
          pk: 2,
          angle: 0,
          tracking: 'TRACKING',
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_ROTATOR>,
  {
    request: {
      query: GET_CONFIGURATION,
      variables: () => true,
    },
    result: {
      data: {
        configuration: {
          pk: 1,
          selectedTarget: 3,
          selectedOiTarget: 8,
          selectedP1Target: null,
          selectedP2Target: null,
          oiGuidingType: 'NORMAL',
          p1GuidingType: 'NORMAL',
          p2GuidingType: 'NORMAL',
          obsTitle: 'Markarian 573',
          obsId: 'o-1e1',
          obsInstrument: 'GMOS_NORTH',
          obsSubtitle: null,
          obsReference: 'G-2025A-ENG-GMOSN-01-0004',
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_CONFIGURATION>,
  {
    request: {
      query: GET_CENTRAL_WAVELENGTH,
      variables: () => true,
    },
    result: {
      data: {
        executionConfig: {
          gmosNorth: {
            acquisition: {
              nextAtom: {
                id: 'a-e4720c1d-27e9-3544-b99b-2b94a483fee8',
                steps: [
                  {
                    id: 's-20ab2eeb-b3f4-3462-9044-0a1176a7e349',
                    instrumentConfig: {
                      centralWavelength: {
                        nanometers: 630.0,
                      },
                    },
                  },
                  {
                    id: 's-b803cf26-55db-310d-b965-e01b5acb4621',
                    instrumentConfig: {
                      centralWavelength: {
                        nanometers: 630.0,
                      },
                    },
                  },
                  {
                    id: 's-0efe1e18-ca7a-3ae5-8395-007c99c446d6',
                    instrumentConfig: {
                      centralWavelength: {
                        nanometers: 630.0,
                      },
                    },
                  },
                ],
              },
            },
          },
          gmosSouth: null,
          flamingos2: null,
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_CENTRAL_WAVELENGTH>,
  {
    request: {
      query: REMOVE_AND_CREATE_BASE_TARGETS,
      variables: () => true,
    },
    result: {
      data: {
        removeAndCreateBaseTargets: [
          {
            pk: 34,
            id: 't-60d',
            name: 'Mayall V',
            ra: {
              degrees: 12.54152003333333,
              hms: '00:50:09.964807',
            },
            dec: {
              degrees: 41.68362081333333,
              dms: '+41:41:01.034925',
            },
            az: null,
            el: null,
            properMotion: {
              ra: null,
              dec: null,
            },
            radialVelocity: -33200000,
            parallax: 0,
            magnitude: null,
            band: null,
            epoch: 'J2000.000',
            type: 'SCIENCE',
            wavelength: 630,
            createdAt: '2025-10-23T14:55:52.655Z',
          },
        ],
      },
    },
  } satisfies MockedResponseOf<typeof REMOVE_AND_CREATE_BASE_TARGETS>,
  {
    request: {
      query: UPDATE_ROTATOR,
      variables: () => true,
    },
    result: {
      data: {
        updateRotator: {
          pk: 1,
          angle: 0,
          tracking: 'TRACKING',
        },
      },
    },
  } satisfies MockedResponseOf<typeof UPDATE_ROTATOR>,
  {
    request: {
      query: REMOVE_AND_CREATE_WFS_TARGETS,
      variables: () => true,
    },
    result: {
      data: {
        removeAndCreateWfsTargets: [
          {
            pk: 35,
            id: 't-1',
            name: 'Gaia DR3 375250953351514624',
            ra: {
              degrees: 12.497148925,
              hms: '00:49:59.315741',
            },
            dec: {
              degrees: 41.69727150555556,
              dms: '+41:41:50.177415',
            },
            az: null,
            el: null,
            properMotion: {
              ra: 1121,
              dec: -6810,
            },
            radialVelocity: 0,
            parallax: 712,
            magnitude: 13.935516,
            band: 'G_RP',
            epoch: 'J2025.763',
            type: 'OIWFS',
            wavelength: null,
            createdAt: '2025-10-23T14:55:55.258Z',
          },
        ],
      },
    },
  } satisfies MockedResponseOf<typeof REMOVE_AND_CREATE_WFS_TARGETS>,
  {
    request: {
      query: RESET_INSTRUMENTS,
      variables: () => true,
    },
    result: {
      data: {
        resetInstruments: null,
      },
    },
  } satisfies MockedResponseOf<typeof RESET_INSTRUMENTS>,
];

const mockInstrumentUpdate = {
  request: {
    query: UPDATE_CONFIGURATION,
    variables: () => true,
  },
  result: vi.fn().mockReturnValue({
    data: {
      updateConfiguration: {
        pk: 1,
        selectedTarget: 3,
        selectedOiTarget: 8,
        selectedP1Target: null,
        selectedP2Target: null,
        oiGuidingType: 'NORMAL',
        p1GuidingType: 'NORMAL',
        p2GuidingType: 'NORMAL',
        obsTitle: 'Mayall V',
        obsId: 'o-2e5',
        obsInstrument: 'GMOS_NORTH',
        obsSubtitle: null,
        obsReference: 'G-2025B-0571-Q-0003',
      },
    },
  }),
} satisfies MockedResponseOf<typeof UPDATE_CONFIGURATION>;
