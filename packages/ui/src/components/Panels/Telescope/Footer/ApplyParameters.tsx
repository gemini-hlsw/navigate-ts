import { useCalParams } from '@gql/configs/CalParams';
import { useConfiguration } from '@gql/configs/Configuration';
import { useConfiguredInstrument } from '@gql/configs/Instrument';
import { useRotator } from '@gql/configs/Rotator';
import { useTargets } from '@gql/configs/Target';
import type { TcsConfigInput } from '@gql/server/gen/graphql';
import { useConfigureTcs } from '@gql/server/TcsConfiguration';
import { createTcsConfigInput } from '@Telescope/Targets/inputs';
import { Button } from 'primereact/button';

import { useServerConfigValue } from '@/components/atoms/config';
import { useToast } from '@/Helpers/toast';

export function ApplyParameters({ canEdit }: { canEdit: boolean }) {
  const toast = useToast();

  const [configureTcs, { loading: configureTcsLoading }] = useConfigureTcs();
  const { data: tcsConfigInput, loading: inputLoading, detail } = useTcsConfigInput();

  const loading = inputLoading || configureTcsLoading;

  const onApplyParameters = async () => {
    if (tcsConfigInput) {
      await configureTcs({
        variables: {
          config: tcsConfigInput,
        },
      });
    } else {
      toast?.show({
        severity: 'warn',
        summary: 'Cannot apply parameters',
        detail,
      });
    }
  };

  return <Button disabled={!canEdit} loading={loading} label="Apply Parameters" onClick={onApplyParameters} />;
}

/**
 * Create TCS config input from current configuration, instrument, rotator and target.
 *
 * @returns either the input data, or a detail string explaining why it could not be created.
 */
function useTcsConfigInput():
  | { data: TcsConfigInput; loading: boolean; detail: undefined }
  | { data: undefined; loading: boolean; detail: string } {
  const { site } = useServerConfigValue();

  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;

  const { data: instrument, loading: instrumentLoading } = useConfiguredInstrument();

  const { data: rotatorData, loading: rotatorLoading } = useRotator();
  const rotator = rotatorData?.rotator;

  const { data: targetsData, loading: targetsLoading } = useTargets();

  const { data: calParamsData, loading: calParamsLoading } = useCalParams(site);
  const calParams = calParamsData?.calParams;

  const loading = configurationLoading || instrumentLoading || rotatorLoading || targetsLoading || calParamsLoading;

  const baseTarget = targetsData.baseTargets.find((t) => t.pk === configuration?.selectedTarget);

  if (!instrument || !rotator || !baseTarget || !calParams) {
    let detail: string;
    if (!instrument) {
      detail = 'No instrument';
    } else if (!rotator) {
      detail = 'No rotator';
    } else if (!baseTarget) {
      detail = 'No target';
    } else if (!calParams) {
      detail = 'No cal params configuration';
    } else {
      detail = 'Missing configuration';
    }
    return { data: undefined, loading, detail };
  }

  const oiTarget = targetsData.oiTargets.find((t) => t.pk === configuration?.selectedOiTarget);

  return {
    data: createTcsConfigInput(instrument, rotator, baseTarget, oiTarget, calParams),
    loading,
    detail: undefined,
  };
}
