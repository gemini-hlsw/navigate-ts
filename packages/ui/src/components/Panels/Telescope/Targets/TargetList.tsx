import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';

import type { TargetType, TypeOfTarget } from '@/types';

import { Target } from './Target';

export function TargetList({ targets, type }: { targets: TargetType[]; type?: TypeOfTarget }) {
  const configuration = useConfiguration().data?.configuration;
  const [updateConfiguration] = useUpdateConfiguration();

  let selectedTarget: number | null | undefined = null;
  switch (type) {
    case 'OIWFS':
      selectedTarget = configuration?.selectedOiTarget;
      break;
    case 'PWFS1':
      selectedTarget = configuration?.selectedP1Target;
      break;
    case 'PWFS2':
      selectedTarget = configuration?.selectedP2Target;
      break;

    default:
    case 'SCIENCE':
    case 'BLINDOFFSET':
    case 'FIXED':
      selectedTarget = configuration?.selectedTarget;
      break;
  }

  async function updateSelectedTarget(targetPk: number) {
    if (configuration?.pk) {
      switch (type) {
        case 'OIWFS':
          await updateConfiguration({
            variables: { pk: configuration.pk, selectedOiTarget: targetPk },
          });
          break;

        case 'PWFS1':
          await updateConfiguration({
            variables: { pk: configuration.pk, selectedP1Target: targetPk },
          });
          break;

        case 'PWFS2':
          await updateConfiguration({
            variables: { pk: configuration.pk, selectedP2Target: targetPk },
          });
          break;

        default:
        case 'SCIENCE':
        case 'BLINDOFFSET':
        case 'FIXED':
          await updateConfiguration({
            variables: { pk: configuration.pk, selectedTarget: targetPk },
          });
          break;
      }
    }
  }

  const displayTargets = targets.map((target: TargetType, index: number) => (
    <Target
      key={`obsTarget-${target.pk}-${target.id}`}
      target={target}
      updateSelectedTarget={updateSelectedTarget}
      selectedTarget={selectedTarget}
      targetIndex={index}
    />
  ));

  if (!displayTargets.length) {
    // Return an empty target as placeholder
    displayTargets.push(
      <Target key="obsTarget-0" target={{} as TargetType} updateSelectedTarget={() => undefined} selectedTarget={0} />,
    );
  }
  return (
    <div className="target">
      <ul className="target-list">{displayTargets}</ul>
    </div>
  );
}
