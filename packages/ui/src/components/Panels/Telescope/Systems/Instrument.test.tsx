import type { MockedResponse } from '@apollo/client/testing';
import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import { GET_INSTRUMENT, UPDATE_INSTRUMENT } from '@gql/configs/Instrument';
import { GET_INSTRUMENT_PORT } from '@gql/server/Instrument';
import type { MockedResponseOf } from '@gql/util';
import { userEvent } from '@vitest/browser/context';

import { importInstrumentAtom } from '@/components/atoms/instrument';
import type { RenderResultWithStore } from '@/test/render';
import { renderWithContext } from '@/test/render';

import { Instrument } from './Instrument';

describe(Instrument.name, () => {
  let sut: RenderResultWithStore;
  beforeEach(() => {
    sut = renderWithContext(<Instrument canEdit={true} />, {
      mocks: [...mocks, updateInstrumentMock],
    });
  });

  it('should render', async () => {
    await expect.element(sut.getByText('Instrument')).toBeInTheDocument();
  });

  it('should update instrument values when typing', async () => {
    const originXInput = sut.getByLabelText('Origin X');

    await userEvent.clear(originXInput);
    await userEvent.type(originXInput, '0.2{Enter}');

    await expect.element(originXInput).not.toBeDisabled();
    await expect.element(originXInput).toHaveValue('0.20');
    await expect.element(sut.getByRole('button')).not.toBeDisabled();
    expect(updateInstrumentMock.result).not.toHaveBeenCalled();
  });

  it('opens the instrument modal when the import button is clicked', async () => {
    expect(sut.store.get(importInstrumentAtom)).false;
    const titleDropdown = sut.getByLabelText('Settings');
    const importInstrumentButton = sut.getByText('Import instrument');

    await userEvent.click(titleDropdown);
    await userEvent.click(importInstrumentButton);

    expect(sut.store.get(importInstrumentAtom)).true;
  });

  it('should call updateInstrument when save button is clicked', async () => {
    const originXInput = sut.getByLabelText('Origin X');

    await userEvent.clear(originXInput);
    await userEvent.type(originXInput, '0.2{Enter}');

    const saveButton = sut.getByRole('button');
    await userEvent.click(saveButton, { timeout: 500 });

    expect(updateInstrumentMock.result).toHaveBeenCalledOnce();
  });
});

describe('instrument WFS', () => {
  let sut: RenderResultWithStore;
  beforeEach(() => {
    sut = renderWithContext(<Instrument canEdit={true} />, {
      mocks: [configWithOi, getInstrumentPortMock, getInstrumentMock],
    });
  });

  it('should query instrument using oiWfs', async () => {
    const originXInput = sut.getByLabelText('Origin X');
    await userEvent.clear(originXInput);
    await userEvent.type(originXInput, '0.2{Enter}');
    const saveButton = sut.getByRole('button');
    await expect.element(saveButton).toBeEnabled();
    expect(getInstrumentMock.variableMatcher).toHaveBeenCalledWith(expect.objectContaining({ wfs: 'OIWFS' }));
  });
});

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_CONFIGURATION,
      variables: {},
    },
    result: {
      data: {
        configuration: {
          pk: 1,
          selectedTarget: 1,
          selectedOiTarget: null,
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
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_CONFIGURATION>,
  {
    request: {
      query: GET_INSTRUMENT,
    },
    maxUsageCount: 5,
    variableMatcher: () => true,
    result: {
      data: {
        instrument: {
          pk: 1,
          name: 'GMOS_NORTH',
          iaa: 359.877,
          issPort: 3,
          focusOffset: 0,
          wfs: 'NONE',
          originX: 0.1,
          originY: 0,
          ao: false,
          extraParams: {},
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT>,
  {
    request: { query: GET_INSTRUMENT_PORT },
    maxUsageCount: Infinity,
    variableMatcher: () => true,
    result: {
      data: {
        instrumentPort: 3,
      },
    },
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>,
];

const updateInstrumentMock = {
  request: {
    query: UPDATE_INSTRUMENT,
  },
  variableMatcher: () => true,
  result: vi.fn().mockReturnValue({
    data: {
      updateInstrument: {
        pk: 1,
        name: 'GMOS_NORTH',
        iaa: 359.877,
        issPort: 3,
        focusOffset: 0,
        wfs: 'NONE',
        originX: 0.2,
        originY: 0,
        ao: false,
        extraParams: {},
      },
    },
  }),
} satisfies MockedResponseOf<typeof UPDATE_INSTRUMENT>;

const configWithOi = {
  request: {
    query: GET_CONFIGURATION,
    variables: {},
  },
  result: vi.fn().mockReturnValue({
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
      },
    },
  }),
} satisfies MockedResponseOf<typeof GET_CONFIGURATION>;

const getInstrumentMock = {
  request: {
    query: GET_INSTRUMENT,
  },
  maxUsageCount: 5,
  variableMatcher: vi.fn().mockReturnValue(true),
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
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENT>;

const getInstrumentPortMock = {
  request: { query: GET_INSTRUMENT_PORT },
  maxUsageCount: Infinity,
  variableMatcher: () => true,
  result: {
    data: {
      instrumentPort: 3,
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>;
