import { useConfiguration } from '@gql/configs/Configuration';
import type { Target } from '@gql/configs/gen/graphql';
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
        value={'NORMAL'}
        options={[{ label: 'Normal Guiding', value: 'NORMAL' }]}
      />
    </div>
  );
}

export function GuiderTargets() {
  const canEdit = useCanEdit();
  const { oiTargets, p1Targets, p2Targets, allTargets } = useTargets().data;
  const configuration = useConfiguration().data?.configuration;

  const selectedTarget: Target | undefined = allTargets.find((t) => t.pk === configuration?.selectedTarget);
  const oiSelected: Target | undefined = oiTargets.find((t) => t.pk === configuration?.selectedOiTarget);
  const p1Selected: Target | undefined = p1Targets.find((t) => t.pk === configuration?.selectedP1Target);
  const p2Selected: Target | undefined = p2Targets.find((t) => t.pk === configuration?.selectedP2Target);

  const displayProbes: React.ReactNode[] = [];
  if (oiTargets.length) {
    displayProbes.push(
      <div key={'OIWFS'} className="guide-probe">
        <Title title={oiSelected ? `OIWFS: ${oiSelected.name}` : 'OIWFS'} />
        <TargetList targets={oiTargets} type="OIWFS" />
        <GuiderFooter disabled={!canEdit} />
      </div>,
    );
  }

  if (p1Targets.length) {
    displayProbes.push(
      <div key={'PWFS1'} className="guide-probe">
        <Title title={p1Selected ? `PWFS1: ${p1Selected.name}` : 'PWFS1'} />
        <TargetList targets={p1Targets} type="PWFS1" />
        <GuiderFooter disabled={!canEdit} />
      </div>,
    );
  }

  if (p2Targets.length) {
    displayProbes.push(
      <div key={'PWFS2'} className="guide-probe">
        <Title title={p2Selected ? `PWFS2: ${p2Selected.name}` : 'PWFS2'} />
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
        selectedTarget={selectedTarget}
        oiSelected={oiSelected}
        // p1Selected={p1Selected}
        // p2Selected={p2Selected}
      />
    </div>
  );
}
