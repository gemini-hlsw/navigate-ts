import { PWFS1_PARK_MUTATION, PWFS2_PARK_MUTATION } from '@gql/server/park';
import type { MockedResponseOf } from '@gql/util';
import { userEvent } from 'vitest/browser';

import { operationOutcome } from '@/test/helpers';
import { type RenderResultWithStore, renderWithContext } from '@/test/render';

import { TopSubsystems } from './Subsystems';

describe(TopSubsystems.name, () => {
  let sut: RenderResultWithStore;
  beforeEach(async () => {
    sut = await renderWithContext(<TopSubsystems canEdit={true} />, { mocks: [pwfs1ParkMock, pwfs2ParkMock] });
  });
  it('should render', async () => {
    await expect.element(sut.baseElement).toBeVisible();
    expect(sut.getByTestId('park-mcs')).toBeVisible();
    expect(sut.getByTestId('park-crcs')).toBeVisible();
    expect(sut.getByTestId('park-pwfs1')).toBeVisible();
    expect(sut.getByTestId('park-pwfs2')).toBeVisible();
  });

  it('pwfs1 park button calls mutation', async () => {
    const button = sut.getByTestId('park-pwfs1');
    await userEvent.click(button);

    expect(pwfs1ParkMock.request.variables).toHaveBeenCalled();
  });

  it('pwfs2 park button calls mutation', async () => {
    const button = sut.getByTestId('park-pwfs2');
    await userEvent.click(button);

    expect(pwfs2ParkMock.request.variables).toHaveBeenCalled();
  });
});

const pwfs1ParkMock = {
  request: {
    query: PWFS1_PARK_MUTATION,
    variables: vi.fn().mockReturnValue({}),
  },
  result: {
    data: { pwfs1Park: operationOutcome },
  },
} satisfies MockedResponseOf<typeof PWFS1_PARK_MUTATION>;

const pwfs2ParkMock = {
  request: {
    query: PWFS2_PARK_MUTATION,
    variables: vi.fn().mockReturnValue({}),
  },
  result: {
    data: { pwfs2Park: operationOutcome },
  },
} satisfies MockedResponseOf<typeof PWFS2_PARK_MUTATION>;
