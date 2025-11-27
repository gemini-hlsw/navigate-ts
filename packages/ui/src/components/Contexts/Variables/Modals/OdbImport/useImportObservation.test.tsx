import { MockedProvider } from '@apollo/client/testing/react';
import { GET_CONFIGURATION, UPDATE_CONFIGURATION } from '@gql/configs/Configuration';
import { RESET_INSTRUMENTS } from '@gql/configs/Instrument';
import { GET_ROTATOR, UPDATE_ROTATOR } from '@gql/configs/Rotator';
import { REMOVE_AND_CREATE_BASE_TARGETS, REMOVE_AND_CREATE_WFS_TARGETS } from '@gql/configs/Target';
import { GET_CENTRAL_WAVELENGTH, GET_GUIDE_ENVIRONMENT } from '@gql/odb/Observation';
import type { MockedResponseOf } from '@gql/util';
import { describe, expect, it, type Mock } from 'vitest';
import { renderHook, type RenderHookResult } from 'vitest-browser-react';

import type { OdbObservationType } from '@/types';

import { useImportObservation } from './useImportObservation';

describe(useImportObservation.name, () => {
  let sut: RenderHookResult<ReturnType<typeof useImportObservation>, unknown>;
  let callback: Mock;
  beforeEach(async () => {
    callback = vi.fn();
    sut = await renderHook(() => useImportObservation(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={[...mocks, updateConfigurationMock]}>{children}</MockedProvider>
      ),
    });
    await expect.poll(() => sut.result.current[1].loading).toBe(false);
  });

  it('should call update configuration when a real observation is re-imported', async () => {
    const { result, act } = sut;
    const [importObservation] = result.current;

    await act(async () => {
      // test that import is awaited
      await importObservation(selectedObservation);
      callback();
    });

    expect(callback).toHaveBeenCalledOnce();
    expect(updateConfigurationMock.request.variables).toHaveBeenCalledTimes(2);
    expect(updateConfigurationMock.request.variables).toHaveBeenNthCalledWith(1, {
      pk: 1,
      baffleMode: 'AUTO',
      centralBaffle: null,
      deployableBaffle: null,
      obsId: 'o-2e5',
      obsInstrument: 'GMOS_NORTH',
      obsReference: 'G-2025B-0571-Q-0003',
      obsSubtitle: null,
      obsTitle: 'Mayall V',
      selectedTarget: 34,
    });
    expect(updateConfigurationMock.request.variables).toHaveBeenLastCalledWith({
      pk: 1,
      selectedGuiderTarget: null,
      selectedOiTarget: 35,
      selectedP1Target: 35,
      selectedP2Target: 35,
    });
  });
});

const selectedObservation: OdbObservationType = {
  __typename: 'Observation',
  id: 'o-2e5',
  title: 'Mayall V',
  subtitle: null,
  instrument: 'GMOS_NORTH',
  reference: {
    label: 'G-2025B-0571-Q-0003',
    __typename: 'ObservationReference',
  },
  program: {
    id: 'p-11d',
    pi: {
      id: 'm-14f',
      user: {
        id: 'u-7ea',
        profile: {
          givenName: 'Bryan',
          familyName: 'Miller',
          __typename: 'UserProfile',
        },
        __typename: 'User',
      },
      __typename: 'ProgramUser',
    },
    __typename: 'Program',
  },
  targetEnvironment: {
    firstScienceTarget: {
      id: 't-60d',
      name: 'Mayall V',
      sidereal: {
        epoch: 'J2000.000',
        ra: {
          hms: '00:50:09.964808',
          degrees: 12.541520033333333,
          __typename: 'RightAscension',
        },
        dec: {
          dms: '+41:41:01.034928',
          degrees: 41.683620813333334,
          __typename: 'Declination',
        },
        properMotion: null,
        parallax: {
          microarcseconds: 0,
          __typename: 'Parallax',
        },
        radialVelocity: {
          centimetersPerSecond: -33200000,
          __typename: 'RadialVelocity',
        },
        __typename: 'Sidereal',
      },
      sourceProfile: {
        point: null,
        __typename: 'SourceProfile',
      },
      __typename: 'Target',
    },
    blindOffsetTarget: null,
    __typename: 'TargetEnvironment',
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
          __typename: 'Rotator',
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
          selectedGuiderTarget: null,
          oiGuidingType: 'NORMAL',
          p1GuidingType: 'NORMAL',
          p2GuidingType: 'NORMAL',
          obsTitle: 'Markarian 573',
          obsId: 'o-1e1',
          obsInstrument: 'GMOS_NORTH',
          obsSubtitle: null,
          obsReference: 'G-2025A-ENG-GMOSN-01-0004',
          baffleMode: 'AUTO',
          centralBaffle: null,
          deployableBaffle: null,
          __typename: 'Configuration',
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
                        __typename: 'Wavelength',
                      },
                      __typename: 'GmosNorthDynamic',
                    },
                    __typename: 'GmosNorthStep',
                  },
                  {
                    id: 's-b803cf26-55db-310d-b965-e01b5acb4621',
                    instrumentConfig: {
                      centralWavelength: {
                        nanometers: 630.0,
                        __typename: 'Wavelength',
                      },
                      __typename: 'GmosNorthDynamic',
                    },
                    __typename: 'GmosNorthStep',
                  },
                  {
                    id: 's-0efe1e18-ca7a-3ae5-8395-007c99c446d6',
                    instrumentConfig: {
                      centralWavelength: {
                        nanometers: 630.0,
                        __typename: 'Wavelength',
                      },
                      __typename: 'GmosNorthDynamic',
                    },
                    __typename: 'GmosNorthStep',
                  },
                ],
                __typename: 'GmosNorthAtom',
              },
              __typename: 'GmosNorthExecutionSequence',
            },
            __typename: 'GmosNorthExecutionConfig',
          },
          gmosSouth: null,
          flamingos2: null,
          __typename: 'ExecutionConfig',
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_CENTRAL_WAVELENGTH>,
  {
    request: {
      query: REMOVE_AND_CREATE_BASE_TARGETS,
      variables: () => true,
    },
    maxUsageCount: Infinity,
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
              __typename: 'RA',
            },
            dec: {
              degrees: 41.68362081333333,
              dms: '+41:41:01.034925',
              __typename: 'Dec',
            },
            az: null,
            el: null,
            properMotion: null,
            radialVelocity: -33200000,
            parallax: 0,
            magnitude: null,
            band: null,
            epoch: 'J2000.000',
            type: 'SCIENCE',
            wavelength: 630,
            createdAt: '2025-10-23T14:55:52.655Z',
            __typename: 'Target',
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
          __typename: 'Rotator',
        },
      },
    },
  } satisfies MockedResponseOf<typeof UPDATE_ROTATOR>,
  {
    request: {
      query: REMOVE_AND_CREATE_WFS_TARGETS,
      variables: () => true,
    },
    maxUsageCount: Infinity,
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
              __typename: 'RA',
            },
            dec: {
              degrees: 41.69727150555556,
              dms: '+41:41:50.177415',
              __typename: 'Dec',
            },
            az: null,
            el: null,
            properMotion: {
              ra: 1121,
              dec: -6810,
              __typename: 'ProperMotion',
            },
            radialVelocity: 0,
            parallax: 712,
            magnitude: 13.935516,
            band: 'G_RP',
            epoch: 'J2025.763',
            type: 'OIWFS',
            wavelength: null,
            createdAt: '2025-10-23T14:55:55.258Z',
            __typename: 'Target',
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
  {
    request: {
      query: GET_GUIDE_ENVIRONMENT,
      variables: () => true,
    },
    result: (arg) => ({
      data: {
        observation: {
          __typename: 'Observation',
          id: arg.obsId,
          targetEnvironment: {
            guideEnvironment: {
              posAngle: {
                hms: '00:00:00.000000',
                degrees: 0.0,
                __typename: 'Angle',
              },
              guideTargets: [
                {
                  probe: 'GMOS_OIWFS',
                  name: 'Gaia DR3 375250953351514624',
                  sidereal: {
                    epoch: 'J2025.763',
                    ra: {
                      hms: '00:49:59.315742',
                      degrees: 12.497148925,
                      __typename: 'RightAscension',
                    },
                    dec: {
                      dms: '+41:41:50.177420',
                      degrees: 41.697271505555555,
                      __typename: 'Declination',
                    },
                    properMotion: {
                      ra: {
                        microarcsecondsPerYear: 1121,
                        __typename: 'ProperMotionRA',
                      },
                      dec: {
                        microarcsecondsPerYear: -6810,
                        __typename: 'ProperMotionDeclination',
                      },
                      __typename: 'ProperMotion',
                    },
                    parallax: null,
                    radialVelocity: {
                      centimetersPerSecond: 0,
                      __typename: 'RadialVelocity',
                    },
                    __typename: 'Sidereal',
                  },
                  sourceProfile: {
                    point: {
                      bandNormalized: {
                        brightnesses: [
                          {
                            band: 'GAIA_RP',
                            value: '13.935516',
                            __typename: 'BandBrightnessIntegrated',
                          },
                        ],
                        __typename: 'BandNormalizedIntegrated',
                      },
                      __typename: 'SpectralDefinitionIntegrated',
                    },
                    __typename: 'SourceProfile',
                  },
                  __typename: 'GuideTarget',
                },
              ],
              __typename: 'GuideEnvironment',
            },
            __typename: 'TargetEnvironment',
          },
        },
      },
    }),
  } satisfies MockedResponseOf<typeof GET_GUIDE_ENVIRONMENT>,
];

const updateConfigurationMock = {
  request: {
    query: UPDATE_CONFIGURATION,
    variables: vi.fn().mockReturnValue(true),
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      updateConfiguration: {
        pk: 1,
        selectedTarget: 3,
        selectedOiTarget: 8,
        selectedP1Target: null,
        selectedP2Target: null,
        selectedGuiderTarget: null,
        oiGuidingType: 'NORMAL',
        p1GuidingType: 'NORMAL',
        p2GuidingType: 'NORMAL',
        obsTitle: 'Mayall V',
        obsId: 'o-2e5',
        obsInstrument: 'GMOS_NORTH',
        obsSubtitle: null,
        obsReference: 'G-2025B-0571-Q-0003',
        baffleMode: 'AUTO',
        centralBaffle: null,
        deployableBaffle: null,
        __typename: 'Configuration',
      },
    },
  },
} satisfies MockedResponseOf<typeof UPDATE_CONFIGURATION>;
