import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import type { UpdateConfigurationMutationVariables } from '@gql/configs/gen/graphql';

import type { TargetType, TypeOfTarget } from '@/types';

import { Target } from './Target';

export function TargetList({ targets, type }: { targets: TargetType[]; type?: TypeOfTarget }) {
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;

  const [updateConfiguration, { loading: updateLoading }] = useUpdateConfiguration();

  const loading = configurationLoading || updateLoading;

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
    if (configuration) {
      const variables: Pick<
        UpdateConfigurationMutationVariables,
        'pk' | 'selectedOiTarget' | 'selectedP1Target' | 'selectedP2Target' | 'selectedTarget'
      > = { pk: configuration.pk };

      switch (type) {
        case 'OIWFS':
          variables.selectedOiTarget = targetPk;
          break;
        case 'PWFS1':
          variables.selectedP1Target = targetPk;
          break;
        case 'PWFS2':
          variables.selectedP2Target = targetPk;
          break;
        default:
        case 'SCIENCE':
        case 'BLINDOFFSET':
        case 'FIXED':
          variables.selectedTarget = targetPk;
          break;
      }
      await updateConfiguration({
        variables,
        optimisticResponse: {
          updateConfiguration: {
            ...configuration,
            ...variables,
          },
        },
      });
    }
  }

  const displayTargets = targets.map((target: TargetType, index: number) => (
    <Target
      key={`obsTarget-${target.pk ?? ''}-${target.id ?? ''}`}
      target={target}
      updateSelectedTarget={updateSelectedTarget}
      selectedTarget={selectedTarget}
      targetIndex={index}
      disabled={loading}
    />
  ));

  if (!displayTargets.length) {
    // Return an empty target as placeholder
    displayTargets.push(
      <Target
        key="obsTarget-0"
        target={{} as TargetType}
        updateSelectedTarget={() => undefined}
        selectedTarget={0}
        disabled={loading}
      />,
    );
  }
  return (
    <div className="target">
      <ul className="target-list">{displayTargets}</ul>
    </div>
  );
}
