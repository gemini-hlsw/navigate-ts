import { GET_CONFIGURATION, UPDATE_CONFIGURATION } from '@gql/configs/Configuration';
import type { Configuration, InstrumentConfig } from '@gql/configs/gen/graphql';
import {
  GET_DISTINCT_INSTRUMENTS,
  GET_DISTINCT_PORTS,
  GET_INSTRUMENT,
  GET_INSTRUMENTS,
  SET_TEMPORARY_INSTRUMENT,
} from '@gql/configs/Instrument';
import { GET_INSTRUMENT_PORT } from '@gql/server/Instrument';
import type { MockedResponseOf } from '@gql/util';
import { page, userEvent } from 'vitest/browser';

import { importInstrumentAtom } from '@/components/atoms/instrument';
import { selectDropdownOption } from '@/test/helpers';
import { renderWithContext } from '@/test/render';

import { Instrument } from './Instrument';

describe(`${Instrument.name} modal`, () => {
  const mocks = [
    getConfigurationMock,
    getInstrumentPortMock,
    getInstrumentMock,
    distinctInstrumentsMock,
    distinctPortsMock,
    getInstrumentsMock,
    setTemporaryInstrumentMock,
    updateConfigurationMock,
  ];

  it('should hide with importInstrument false', async () => {
    const sut = await renderWithContext(<Instrument />, { mocks, initialValues: [[importInstrumentAtom, false]] });

    await expect.element(sut.getByTestId('import-instrument-modal-content')).not.toBeInTheDocument();
  });

  it('should show with importInstrument true', async () => {
    const sut = await renderWithContext(<Instrument />, { mocks, initialValues: [[importInstrumentAtom, true]] });

    await expect.element(sut.getByTestId('import-instrument-modal-content')).toBeInTheDocument();
  });

  it('should show instruments after selecting name and port', async () => {
    const sut = await renderWithContext(<Instrument />, { mocks, initialValues: [[importInstrumentAtom, true]] });

    // Select instrument options
    await selectDropdownOption(sut, 'Instrument', 'GMOS_SOUTH');
    await selectDropdownOption(sut, 'issPort', '3');
    await expect
      .poll(() => getInstrumentsMock.request.variables)
      .toHaveBeenCalledExactlyOnceWith({
        name: 'GMOS_SOUTH',
        issPort: 3,
      });

    // Select first row of instrument table and import it
    await userEvent.click(page.getByText('Initial configuration').first());
    await userEvent.click(page.getByTestId('import-button'));

    expect(updateConfigurationMock.request.variables).toHaveBeenCalledExactlyOnceWith({
      obsInstrument: 'GMOS_SOUTH',
      pk: 1,
    });
    expect(setTemporaryInstrumentMock.request.variables).toHaveBeenCalledExactlyOnceWith({
      __typename: 'InstrumentConfig',
      pk: 1,
      name: 'GMOS_SOUTH',
      iaa: 359.856,
      issPort: 3,
      focusOffset: 0,
      wfs: 'NONE',
      originX: 0,
      originY: 0,
      ao: false,
      extraParams: {},
      isTemporary: false,
      comment: 'Initial configuration',
      createdAt: now,
    });
  });
});

const getConfigurationMock = {
  request: {
    query: GET_CONFIGURATION,
    variables: {},
  },
  result: {
    data: {
      configuration: {
        pk: 1,
        selectedTarget: 1,
        selectedOiTarget: 3,
        selectedP1Target: null,
        selectedP2Target: null,
        oiGuidingType: 'NORMAL',
        p1GuidingType: 'NORMAL',
        p2GuidingType: 'NORMAL',
        obsTitle: 'Feige 110',
        obsId: 'o-2790',
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
} satisfies MockedResponseOf<typeof GET_CONFIGURATION>;

const getInstrumentPortMock = {
  request: {
    query: GET_INSTRUMENT_PORT,
    variables: () => true,
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      instrumentPort: 3,
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>;

const now = new Date();
const createdAt = now.toISOString();

const getInstrumentMock = {
  request: {
    query: GET_INSTRUMENT,
    variables: vi.fn().mockReturnValue(true),
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      instrument: {
        pk: 1,
        name: 'GMOS_NORTH',
        iaa: 359.877,
        issPort: 3,
        focusOffset: 0,
        wfs: 'OIWFS',
        originX: 0.1,
        originY: 0,
        ao: false,
        extraParams: {},
        isTemporary: true,
        comment: null,
        createdAt,
        __typename: 'InstrumentConfig',
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENT>;

const distinctInstrumentsMock = {
  request: {
    query: GET_DISTINCT_INSTRUMENTS,
    variables: {},
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      distinctInstruments: ['ACQ_CAM', 'FLAMINGOS2', 'GHOST', 'GMOS_NORTH', 'GMOS_SOUTH', 'GSAOI', 'VISITOR'],
    },
  },
} satisfies MockedResponseOf<typeof GET_DISTINCT_INSTRUMENTS>;

const distinctPortsMock = {
  request: {
    query: GET_DISTINCT_PORTS,
    variables: () => true,
  },
  result: {
    data: {
      distinctPorts: [3],
    },
  },
} satisfies MockedResponseOf<typeof GET_DISTINCT_PORTS>;

const getInstrumentsMock = {
  request: {
    query: GET_INSTRUMENTS,
    variables: vi.fn().mockReturnValue(true),
  },
  result: {
    data: {
      instruments: [
        {
          pk: 1,
          name: 'GMOS_SOUTH',
          iaa: 359.856,
          issPort: 3,
          focusOffset: 0,
          wfs: 'NONE',
          originX: 0,
          originY: 0,
          ao: false,
          extraParams: {},
          isTemporary: false,
          comment: 'Initial configuration',
          createdAt,
          __typename: 'InstrumentConfig',
        },
        {
          pk: 2,
          name: 'GMOS_SOUTH',
          iaa: 359.856,
          issPort: 3,
          focusOffset: 0,
          wfs: 'OIWFS',
          originX: 0,
          originY: 0,
          ao: false,
          extraParams: {},
          isTemporary: false,
          comment: 'Initial configuration',
          createdAt: '2025-10-13T09:44:57.930Z',
          __typename: 'InstrumentConfig',
        },
      ],
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENTS>;

const setTemporaryInstrumentMock = {
  request: {
    query: SET_TEMPORARY_INSTRUMENT,
    variables: vi.fn().mockReturnValue(true),
  },

  result: (arg) => ({
    data: {
      setTemporaryInstrument: {
        ...getInstrumentMock.result.data.instrument,
        ...(arg as InstrumentConfig),
        pk: 1,
        isTemporary: true,
        comment: null,
        createdAt,
      },
    },
  }),
} satisfies MockedResponseOf<typeof SET_TEMPORARY_INSTRUMENT>;

const updateConfigurationMock = {
  request: {
    query: UPDATE_CONFIGURATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: (arg) => ({
    data: {
      updateConfiguration: {
        ...getConfigurationMock.result.data.configuration,
        ...(arg as Configuration),
      },
    },
  }),
} satisfies MockedResponseOf<typeof UPDATE_CONFIGURATION>;
