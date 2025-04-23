import type { MockedResponse } from '@apollo/client/testing';
import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import { GET_INSTRUMENT, UPDATE_INSTRUMENT } from '@gql/configs/Instrument';
import type { RenderResultWithStore } from '@gql/render';
import { renderWithContext } from '@gql/render';
import type { MockedResponseOf } from '@gql/util';
import { userEvent } from '@vitest/browser/context';

import { importInstrumentAtom } from '@/components/atoms/instrument';

import { Instrument } from './Instrument';

describe(Instrument.name, () => {
  let sut: RenderResultWithStore;
  beforeEach(() => {
    sut = renderWithContext(<Instrument canEdit={true} />, { mocks });
  });

  it('should render', async () => {
    await expect.element(sut.getByText('Instrument')).toBeInTheDocument();
  });

  it('should call updateInstrument when originX is changed', async () => {
    const originXInput = sut.getByLabelText('Origin X');

    await userEvent.clear(originXInput);
    await userEvent.type(originXInput, '0.2{Enter}');

    await expect.element(originXInput).not.toBeDisabled();
    await expect.element(originXInput).toHaveValue('0.20');
  });

  it('opens the instrument modal when the import button is clicked', async () => {
    expect(sut.store.get(importInstrumentAtom)).false;
    const titleDropdown = sut.getByLabelText('Settings');
    const importInstrumentButton = sut.getByText('Import instrument');

    await userEvent.click(titleDropdown);
    await userEvent.click(importInstrumentButton);

    expect(sut.store.get(importInstrumentAtom)).true;
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
          site: 'GN',
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
    request: {
      query: UPDATE_INSTRUMENT,
      variables: {
        pk: 1,
        originX: 0.2,
      },
    },
    result: {
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
    },
  } satisfies MockedResponseOf<typeof UPDATE_INSTRUMENT>,
];
