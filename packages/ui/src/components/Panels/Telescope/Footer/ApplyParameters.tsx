import { useConfigureTcs } from '@gql/server/TcsConfiguration';
import { useTcsConfigInput } from '@Telescope/Targets/inputs';
import { Button } from 'primereact/button';

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
