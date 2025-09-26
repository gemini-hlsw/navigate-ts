import type { MockLink } from '@apollo/client/testing';
import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import type {
  AdjustTarget,
  MutationAdjustOriginArgs,
  MutationAdjustPointingArgs,
  MutationAdjustTargetArgs,
} from '@gql/server/gen/graphql';
import {
  ABSORB_TARGET_ADJUSTMENT_MUTATION,
  ADJUST_TARGET_MUTATION,
  RESET_TARGET_ADJUSTMENT_MUTATION,
  TARGET_ADJUSTMENT_OFFSETS_QUERY,
  TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION,
} from '@gql/server/TargetsHandset';
import type { MockedResponseOf } from '@gql/util';
import type { ResultOf } from '@graphql-typed-document-node/core';
import type { Mock } from 'vitest';

import { selectDropdownOption } from '@/test/helpers';
import { renderWithContext } from '@/test/render';

import type { Alignment } from './Controls';
import TargetsHandset from './TargetsHandset';

describe(TargetsHandset.name, () => {
  let sut: ReturnType<typeof renderWithContext>;

  beforeEach(() => {
    sut = renderWithContext(<TargetsHandset canEdit={true} />, { mocks });
  });

  it('should render', () => {
    expect(sut.container).toBeVisible();
  });

  it('clicking applies calls adjustTarget mutation', async () => {
    await sut.getByRole('button', { name: 'Apply' }).click();

    await expect
      .poll(() => adjustTargetMutationMock.result)
      .toHaveBeenCalledExactlyOnceWith({
        target: 'OIWFS',
        offset: {
          focalPlaneAdjustment: {
            deltaX: { arcseconds: 0.0 },
            deltaY: { arcseconds: 0.0 },
          },
        },
        openLoops: true,
      });
  });

  it('clicking reset calls resetTargetAdjustment mutation', async () => {
    await sut.getByRole('button', { name: 'Reset' }).click();

    await expect
      .poll(() => resetTargetAdjustmentMutationMock.request.variables)
      .toHaveBeenCalledExactlyOnceWith({
        target: 'OIWFS',
        openLoops: true,
      });
  });

  it('clicking absorb calls absorbTargetAdjustment mutation', async () => {
    await sut.getByRole('button', { name: 'Absorb' }).click();

    await expect
      .poll(() => absorbTargetAdjustmentMutationMock.request.variables)
      .toHaveBeenCalledExactlyOnceWith({
        target: 'OIWFS',
      });
  });

  it('switching target sends different target to absorbTargetAdjustment mutation', async () => {
    await selectTarget('PWFS1');
    await sut.getByRole('button', { name: 'Absorb' }).click();

    expect(absorbTargetAdjustmentMutationMock.request.variables).toHaveBeenCalledWith({
      target: 'PWFS1',
    });
  });

  it('should be disabled when canEdit is false', () => {
    sut.unmount();
    sut = renderWithContext(<TargetsHandset canEdit={false} />, { mocks });

    expect(sut.getByRole('button', { name: 'Apply' })).toBeDisabled();
    expect(sut.getByRole('button', { name: 'Reset' })).toBeDisabled();
    expect(sut.getByRole('button', { name: 'Absorb' })).toBeDisabled();
  });

  it.each([
    [
      'UP',
      '+El',
      {
        elevation: { arcseconds: 0.5 },
        azimuth: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      '-El',
      {
        elevation: { arcseconds: -0.5 },
        azimuth: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      '+Az',
      {
        elevation: { arcseconds: 0 },
        azimuth: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      '-Az',
      {
        elevation: { arcseconds: 0 },
        azimuth: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for Az/El %s matches %s', async (testId, label, expectedInput) => {
    await selectAlignment('Az/El');
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.request.variables, {
      target: 'OIWFS',
      offset: { horizontalAdjustment: expectedInput },
      openLoops: true,
    });
  });

  it.each([
    [
      'UP',
      '-X',
      {
        deltaX: { arcseconds: -0.5 },
        deltaY: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      '+X',
      {
        deltaX: { arcseconds: 0.5 },
        deltaY: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      '+Y',
      {
        deltaY: { arcseconds: 0.5 },
        deltaX: { arcseconds: 0 },
      },
    ],
    [
      'LEFT',
      '-Y',
      {
        deltaX: { arcseconds: 0 },
        deltaY: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for AC %s matches %s', async (testId, label, expectedInput) => {
    await sut.getByLabelText('Open loops').click();
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.request.variables, {
      target: 'OIWFS',
      openLoops: false,
      offset: { focalPlaneAdjustment: expectedInput },
    });
  });

  it.each([
    [
      'UP',
      '-Q',
      {
        q: { arcseconds: -0.5 },
        p: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      '+Q',
      {
        q: { arcseconds: 0.5 },
        p: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      '+P',
      {
        q: { arcseconds: 0 },
        p: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      '-P',
      {
        q: { arcseconds: 0 },
        p: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for Instrument %s matches %s', async (testId, label, expectedInput) => {
    await selectAlignment('Instrument');
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.request.variables, {
      target: 'OIWFS',
      offset: { instrumentAdjustment: expectedInput },
      openLoops: true,
    });
  });

  it.each([
    [
      'UP',
      'N',
      {
        deltaDec: { arcseconds: 0.5 },
        deltaRA: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      'S',
      {
        deltaDec: { arcseconds: -0.5 },
        deltaRA: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      'W',
      {
        deltaDec: { arcseconds: 0 },
        deltaRA: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      'E',
      {
        deltaDec: { arcseconds: 0 },
        deltaRA: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for RA/Dec %s matches %s', async (testId, label, expectedInput) => {
    await selectAlignment('RA/Dec');
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.request.variables, {
      target: 'OIWFS',
      offset: { equatorialAdjustment: expectedInput },
      openLoops: true,
    });
  });

  it.each([
    [
      'UP',
      {
        deltaV: { arcseconds: 0.5 },
        deltaU: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      {
        deltaV: { arcseconds: -0.5 },
        deltaU: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      {
        deltaV: { arcseconds: 0 },
        deltaU: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      {
        deltaV: { arcseconds: 0 },
        deltaU: { arcseconds: -0.5 },
      },
    ],
  ] as const)('inputs for PWFS2 %s matches', async (testId, expectedInput) => {
    await selectAlignment('PWFS2');
    await testDirectionButtonClick(testId, undefined, adjustTargetMutationMock.request.variables, {
      target: 'OIWFS',
      openLoops: true,
      offset: { probeFrameAdjustment: { ...expectedInput, probeFrame: 'PWFS_2' } },
    });
  });

  async function selectAlignment(alignment: Alignment) {
    await selectDropdownOption(sut, 'Alignment', alignment);
  }

  async function selectTarget(target: AdjustTarget) {
    await selectDropdownOption(sut, 'Target', target);
  }

  async function testDirectionButtonClick(
    testId: string,
    label: string | undefined,
    mock: Mock,
    expectedInput: MutationAdjustOriginArgs | MutationAdjustPointingArgs | MutationAdjustTargetArgs,
  ) {
    const button = sut.getByTestId(testId);
    if (label) expect(button).toHaveAttribute('aria-label', label);
    await button.click();

    await expect.poll(() => mock).toHaveBeenCalledWith(expectedInput);
  }
});

const targetAdjustmentOffsetsData: ResultOf<typeof TARGET_ADJUSTMENT_OFFSETS_QUERY> = {
  targetAdjustmentOffsets: {
    sourceA: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
    pwfs1: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
    pwfs2: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
    oiwfs: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
  },
};

const resetTargetAdjustmentMutationMock = {
  request: {
    query: RESET_TARGET_ADJUSTMENT_MUTATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: vi.fn().mockReturnValue({
    data: {
      resetTargetAdjustment: {
        result: 'SUCCESS',
        msg: null,
      },
    } satisfies ResultOf<typeof RESET_TARGET_ADJUSTMENT_MUTATION>,
  }),
} satisfies MockedResponseOf<typeof RESET_TARGET_ADJUSTMENT_MUTATION>;

const adjustTargetMutationMock = {
  request: {
    query: ADJUST_TARGET_MUTATION,
    variables: vi.fn().mockReturnValue(true),
  },
  maxUsageCount: Infinity,
  result: vi.fn().mockReturnValue({
    data: {
      adjustTarget: {
        result: 'SUCCESS',
        msg: null,
      },
    } satisfies ResultOf<typeof ADJUST_TARGET_MUTATION>,
  }),
} satisfies MockedResponseOf<typeof ADJUST_TARGET_MUTATION>;

const absorbTargetAdjustmentMutationMock = {
  request: {
    query: ABSORB_TARGET_ADJUSTMENT_MUTATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: vi.fn().mockReturnValue({
    data: {
      absorbTargetAdjustment: {
        result: 'SUCCESS',
        msg: null,
      },
    } satisfies ResultOf<typeof ABSORB_TARGET_ADJUSTMENT_MUTATION>,
  }),
} satisfies MockedResponseOf<typeof ABSORB_TARGET_ADJUSTMENT_MUTATION>;

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
      query: TARGET_ADJUSTMENT_OFFSETS_QUERY,
      variables: {},
    },
    result: {
      data: targetAdjustmentOffsetsData,
    },
  } satisfies MockedResponseOf<typeof TARGET_ADJUSTMENT_OFFSETS_QUERY>,
  {
    request: {
      query: TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION,
      variables: {},
    },
    maxUsageCount: Infinity,
    result: {
      data: targetAdjustmentOffsetsData,
    },
  } satisfies MockedResponseOf<typeof TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION>,
  adjustTargetMutationMock,
  resetTargetAdjustmentMutationMock,
  absorbTargetAdjustmentMutationMock,
];
