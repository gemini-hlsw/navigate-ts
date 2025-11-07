import { UPDATE_TARGET } from '@gql/configs/Target';
import type { MockedResponseOf } from '@gql/util';
import { page, userEvent } from 'vitest/browser';

import { odbTokenAtom } from '@/components/atoms/auth';
import { targetEditAtom } from '@/components/atoms/target';
import { expiredJwt } from '@/test/helpers';
import { renderWithContext } from '@/test/render';
import type { TargetType } from '@/types';

import { Target } from './Target';

describe(Target.name, () => {
  const targetEditVisible = {
    isVisible: true,
    target: target,
    targetIndex: 0,
  };

  it('should render', async () => {
    await renderWithContext(<Target />, {
      initialValues: [[targetEditAtom, targetEditVisible]],
    });
    const dialog = page.getByRole('dialog');
    await expect.element(dialog).toBeVisible();
    expect(dialog.getByText(`Edit target ${target.name}`)).toBeVisible();
    const name = dialog.getByLabelText('Name');
    expect(name).toBeEnabled();
    expect(name).toHaveValue(target.name);
    expect(dialog.getByRole('button', { name: 'Update' })).toBeEnabled();
  });

  it('should disable when canEdit=false', async () => {
    await renderWithContext(<Target />, {
      initialValues: [
        [targetEditAtom, targetEditVisible],
        [odbTokenAtom, expiredJwt],
      ],
    });
    const dialog = page.getByRole('dialog');
    await expect.element(dialog.getByLabelText('Name')).toBeDisabled();
    expect(dialog.getByRole('button', { name: 'Update' })).toBeDisabled();
  });

  it('calls updateTarget mutation when updating', async () => {
    await renderWithContext(<Target />, {
      mocks: [updateTargetMock],
      initialValues: [[targetEditAtom, targetEditVisible]],
    });
    const dialog = page.getByRole('dialog');
    const nameInput = dialog.getByLabelText('Name');
    await userEvent.fill(nameInput, 'New Target Name');
    const updateButton = dialog.getByRole('button', { name: 'Update' });
    await userEvent.click(updateButton);

    expect(updateTargetMock.request.variables).toHaveBeenCalledExactlyOnceWith({
      ...target,
      name: 'New Target Name',
      coord1: 12.497148925,
      coord2: 41.69727150555556,
    });
    await expect.element(dialog).not.toBeInTheDocument();
  });
});

const target: TargetType = {
  __typename: 'Target',
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
};

const updateTargetMock = {
  request: {
    query: UPDATE_TARGET,
    variables: vi.fn().mockReturnValue(true),
  },
  result: (arg) => ({
    data: {
      updateTarget: { ...(arg as TargetType), __typename: 'Target' },
    },
  }),
} satisfies MockedResponseOf<typeof UPDATE_TARGET>;
