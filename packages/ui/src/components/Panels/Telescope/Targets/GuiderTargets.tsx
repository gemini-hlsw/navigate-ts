import { useConfiguration } from '@gql/configs/Configuration';
import { useTargets } from '@gql/configs/Target';
import { Title } from '@Shared/Title/Title';
import { Dropdown } from 'primereact/dropdown';

import { useCanEdit } from '@/components/atoms/auth';

import { TargetList } from './TargetList';
import { TargetSwapButton } from './TargetSwapButton';

function GuiderFooter({ disabled }: { disabled: boolean }) {
  return (
    <div className="guiders-footer">
      <Dropdown
        disabled={disabled} // check is a valid target
        value="NORMAL"
        options={[{ label: 'Normal Guiding', value: 'NORMAL' }]}
      />
    </div>
  );
}

export function GuiderTargets() {
  const canEdit = useCanEdit();
  const { data: targetsData, loading: targetsLoading } = useTargets();
  const { oiTargets, p1Targets, p2Targets, guiderTargets } = targetsData;
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;

  const loading = targetsLoading || configurationLoading;

  const selectedOi = oiTargets.find((t) => t.pk === configuration?.selectedOiTarget);
  const selectedP1 = p1Targets.find((t) => t.pk === configuration?.selectedP1Target);
  const selectedP2 = p2Targets.find((t) => t.pk === configuration?.selectedP2Target);
  const selectedGuider = guiderTargets.find((t) => t.pk === configuration?.selectedGuiderTarget);

  const displayProbes: React.ReactNode[] = [];
  if (oiTargets.length) {
    displayProbes.push(
      <div key="OIWFS" className="guide-probe">
        <Title title={selectedOi ? `OIWFS: ${selectedOi.name}` : 'OIWFS'} />
        <TargetList targets={oiTargets} type="OIWFS" />
        <GuiderFooter disabled={!canEdit} />
      </div>,
    );
  }

  if (p1Targets.length) {
    displayProbes.push(
      <div key="PWFS1" className="guide-probe">
        <Title title={selectedP1 ? `PWFS1: ${selectedP1.name}` : 'PWFS1'} />
        <TargetList targets={p1Targets} type="PWFS1" />
        <GuiderFooter disabled={!canEdit} />
      </div>,
    );
  }

  if (p2Targets.length) {
    displayProbes.push(
      <div key="PWFS2" className="guide-probe">
        <Title title={selectedP2 ? `PWFS2: ${selectedP2.name}` : 'PWFS2'} />
        <TargetList targets={p2Targets} type="PWFS2" />
        <GuiderFooter disabled={!canEdit} />
      </div>,
    );
  }

  if (!displayProbes.length) {
    displayProbes.push(
      <div key="guideProbe-0" className="guide-probe">
        <Title title="OIWFS" />
        <TargetList targets={[]} />
        <GuiderFooter disabled={true} />
      </div>,
    );
  }
  return (
    <div className="guiders">
      <Title title="Guiders" />
      <div className="body">{displayProbes}</div>
      <TargetSwapButton
        guiderTargets={guiderTargets}
        selectedGuider={selectedGuider}
        loading={loading}
        configurationPk={configuration?.pk}
      />
    </div>
  );
}
