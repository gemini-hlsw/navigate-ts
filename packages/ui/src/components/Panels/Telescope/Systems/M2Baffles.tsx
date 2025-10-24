import type { CentralBaffle, DeployableBaffle } from '@gql/server/gen/graphql';
import { Title } from '@Shared/Title/Title';
import { Dropdown } from 'primereact/dropdown';

import { type M2BaffleConfig, useM2BaffleConfig } from '@/components/atoms/baffles';
import { isNullish } from '@/Helpers/functions';

const modeOptions: M2BaffleConfig['mode'][] = ['AUTO', 'MANUAL'];
const centralOptions: CentralBaffle[] = ['OPEN', 'CLOSED'];
const deployableOptions: DeployableBaffle[] = ['EXTENDED', 'NEAR_IR', 'THERMAL_IR', 'VISIBLE'];

export function M2Baffles({ canEdit }: { canEdit: boolean }) {
  const [baffleConfig, setBaffleConfig] = useM2BaffleConfig();

  return (
    <div className="baffles">
      <Title title="M2 Baffles" />
      <div className="body">
        <label htmlFor="m2baffles-config">Mode</label>
        <Dropdown
          disabled={!canEdit}
          inputId="m2baffles-config"
          options={modeOptions}
          value={baffleConfig.mode}
          onChange={(e) => setBaffleConfig((prev) => ({ ...prev, mode: e.value as M2BaffleConfig['mode'] }))}
        />

        {baffleConfig.mode === 'MANUAL' && (
          <>
            <label htmlFor="m2baffles-central">Central Baffle</label>
            <Dropdown
              disabled={!canEdit}
              inputId="m2baffles-central"
              options={centralOptions}
              value={baffleConfig.input.centralBaffle}
              invalid={isNullish(baffleConfig.input.centralBaffle)}
              onChange={(e) =>
                setBaffleConfig((prev) => ({
                  ...prev,
                  input: { ...prev.input, centralBaffle: e.value as CentralBaffle },
                }))
              }
            />

            <label htmlFor="m2baffles-deployable">Deployable Baffle</label>
            <Dropdown
              disabled={!canEdit}
              inputId="m2baffles-deployable"
              options={deployableOptions}
              value={baffleConfig.input.deployableBaffle}
              invalid={isNullish(baffleConfig.input.deployableBaffle)}
              onChange={(e) =>
                setBaffleConfig((prev) => ({
                  ...prev,
                  input: {
                    ...prev.input,
                    deployableBaffle: e.value as DeployableBaffle,
                  },
                }))
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
