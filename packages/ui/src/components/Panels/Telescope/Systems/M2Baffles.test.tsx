import { m2BaffleConfig } from '@/components/atoms/baffles';
import { selectDropdownOption } from '@/test/helpers';
import { renderWithContext } from '@/test/render';

import { M2Baffles } from './M2Baffles';

describe(M2Baffles.name, () => {
  it('should render', async () => {
    const sut = renderWithContext(<M2Baffles canEdit={true} />);
    expect(sut.getByLabelText('Mode')).toBeVisible();
    expect(sut.store.get(m2BaffleConfig).mode).toEqual('AUTO');
    await expect.element(sut.getByLabelText('Central Baffle')).not.toBeInTheDocument();
    await expect.element(sut.getByLabelText('Deployable Baffle')).not.toBeInTheDocument();
  });

  it('should render manual options when mode is MANUAL', async () => {
    const sut = renderWithContext(<M2Baffles canEdit={true} />);
    await selectDropdownOption(sut, 'Mode', 'MANUAL');

    expect(sut.store.get(m2BaffleConfig).mode).toEqual('MANUAL');
    expect(sut.store.get(m2BaffleConfig).input.centralBaffle).toBeUndefined();
    expect(sut.store.get(m2BaffleConfig).input.deployableBaffle).toBeUndefined();
    expect(sut.getByLabelText('Central Baffle')).toBeVisible();
    expect(sut.getByLabelText('Deployable Baffle')).toBeVisible();
  });

  it('should update central and deployable baffles', async () => {
    const sut = renderWithContext(<M2Baffles canEdit={true} />);
    await selectDropdownOption(sut, 'Mode', 'MANUAL');

    await selectDropdownOption(sut, 'Central Baffle', 'CLOSED');
    expect(sut.store.get(m2BaffleConfig).input.centralBaffle).toEqual('CLOSED');

    await selectDropdownOption(sut, 'Deployable Baffle', 'THERMAL_IR');
    expect(sut.store.get(m2BaffleConfig).input.deployableBaffle).toEqual('THERMAL_IR');
  });
});
