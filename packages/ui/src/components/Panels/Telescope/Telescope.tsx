import './Telescope.css';

import { useConfiguration } from '@gql/configs/Configuration';
import { useTargets } from '@gql/configs/Target';
import { Title } from '@Shared/Title/Title';

import { GuidersDetails } from './Details/GuidersDetails';
import { TargetDetails } from './Details/TargetDetails';
import { Footer } from './Footer/Footer';
import { Systems } from './Systems/Systems';
import { GuiderTargets } from './Targets/GuiderTargets';
import { TargetList } from './Targets/TargetList';
import { TelescopeTitle } from './Title/TelescopeTitle';

export function Telescope({ prevPanel, nextPanel }: { prevPanel: () => void; nextPanel: () => void }) {
  const { baseTargets } = useTargets().data;
  const configuration = useConfiguration().data?.configuration;

  const selectedTarget = baseTargets.find((t) => t.pk === configuration?.selectedTarget);

  return (
    <div className="telescope">
      <TelescopeTitle prevPanel={prevPanel} nextPanel={nextPanel} />
      <div className="body">
        <div className="base-target">
          <Title title={selectedTarget ? `Base Target: ${selectedTarget.name}` : 'No Base Target Selected'} />
          <TargetList targets={baseTargets} />
        </div>
        <GuiderTargets />
        <Systems />
        <TargetDetails target={selectedTarget} />
        <GuidersDetails />
        <Footer />
      </div>
      {/* Add a way to import fixed targets <FixedTargetImport /> */}
    </div>
  );
}
