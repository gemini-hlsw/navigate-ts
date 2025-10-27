import type { MockLink } from '@apollo/client/testing';
import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import { GET_INSTRUMENT, SET_TEMPORARY_INSTRUMENT, UPDATE_INSTRUMENT } from '@gql/configs/Instrument';
import { GET_INSTRUMENT_PORT } from '@gql/server/Instrument';
import type { MockedResponseOf } from '@gql/util';
import type { ResultOf } from '@graphql-typed-document-node/core';
import { userEvent } from 'vitest/browser';

import { importInstrumentAtom } from '@/components/atoms/instrument';
import type { RenderResultWithStore } from '@/test/render';
import { renderWithContext } from '@/test/render';

import { Instrument } from './Instrument';

describe(Instrument.name, () => {
  let sut: RenderResultWithStore;
  beforeEach(async () => {
    sut = await renderWithContext(<Instrument canEdit={true} />, {
      mocks: [...mocks, getInstrumentMock, updateInstrumentMock, setTempInstrumentMock],
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
    await expect.element(sut.getByRole('button', { name: 'Save instrument' })).not.toBeDisabled();
    expect(setTempInstrumentMock.result).toHaveBeenCalledExactlyOnceWith({
      pk: 1,
      name: 'GMOS_NORTH',
      iaa: 359.877,
      issPort: 3,
      focusOffset: 0,
      wfs: 'OIWFS',
      originX: 0.2,
      originY: 0,
      ao: false,
      extraParams: {},
      comment: null,
      isTemporary: true,
      createdAt,
    });
  });

  it('opens the instrument modal when the import button is clicked', async () => {
    expect(sut.store.get(importInstrumentAtom)).false;
    const importInstrumentButton = sut.getByLabelText('Import instrument');

    await userEvent.click(importInstrumentButton);

    expect(sut.store.get(importInstrumentAtom)).true;
  });

  it('should call updateInstrument when save button is clicked', async () => {
    const saveButton = sut.getByRole('button', { name: 'Save instrument' });
    await userEvent.click(saveButton, { timeout: 500 });
    await userEvent.fill(sut.getByRole('textbox', { name: 'Enter a comment (optional)' }), 'My comment');
    await userEvent.click(sut.getByRole('button', { name: 'Save', exact: true }));

    await expect
      .poll(() => updateInstrumentMock.result)
      .toHaveBeenCalledExactlyOnceWith({ pk: 1, comment: 'My comment', isTemporary: false });
  });

  it('should query instrument using oiWfs', async () => {
    const originXInput = sut.getByLabelText('Origin X');
    await userEvent.clear(originXInput);
    await userEvent.type(originXInput, '0.2{Enter}');

    const saveButton = sut.getByRole('button', { name: 'Save instrument' });
    await expect.element(saveButton).toBeEnabled();

    expect(getInstrumentMock.request.variables).toHaveBeenCalledWith(expect.objectContaining({ wfs: 'OIWFS' }));
  });
});

const mocks: MockLink.MockedResponse[] = [
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
    },
  } satisfies MockedResponseOf<typeof GET_CONFIGURATION>,
  {
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
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>,
];

const createdAt = new Date().toISOString();

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
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENT>;

const updateInstrumentMock = {
  request: {
    query: UPDATE_INSTRUMENT,
    variables: () => true,
  },
  maxUsageCount: Infinity,
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
        comment: null,
        isTemporary: true,
        createdAt,
      },
    } satisfies ResultOf<typeof UPDATE_INSTRUMENT>,
  }),
} satisfies MockedResponseOf<typeof UPDATE_INSTRUMENT>;

const setTempInstrumentMock = {
  request: {
    query: SET_TEMPORARY_INSTRUMENT,
    variables: () => true,
  },
  maxUsageCount: Infinity,
  result: vi.fn().mockReturnValue({
    data: {
      setTemporaryInstrument: {
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
        comment: null,
        isTemporary: true,
        createdAt,
      },
    } satisfies ResultOf<typeof SET_TEMPORARY_INSTRUMENT>,
  }),
} satisfies MockedResponseOf<typeof SET_TEMPORARY_INSTRUMENT>;
