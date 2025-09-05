import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import { useEngineeringTargets } from '@gql/configs/EngineeringTarget';
import type { EngineeringTarget } from '@gql/configs/gen/graphql';
import { useRotator, useUpdateRotator } from '@gql/configs/Rotator';
import { useRemoveAndCreateBaseTargets } from '@gql/configs/Target';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useCatalogVisible } from '@/components/atoms/catalog';
import { useToast } from '@/Helpers/toast';
import type { ConfigurationType } from '@/types';

import { CatalogTable } from './CatalogTable';

export function Catalog() {
  const [catalogVisible, setCatalogVisible] = useCatalogVisible();
  const configuration = useConfiguration().data?.configuration;
  const [removeAndCreateBaseTargets, { loading: removeCreateLoading }] = useRemoveAndCreateBaseTargets();
  const [updateConfiguration, { loading: updateConfigLoading }] = useUpdateConfiguration();
  const canEdit = useCanEdit();
  const { data: targetsData, loading: targetsLoading } = useEngineeringTargets();
  const [selectedTarget, setSelectedTarget] = useState<EngineeringTarget | null>(null);
  const toast = useToast();
  const rotator = useRotator().data?.rotator;
  const [updateRotator, { loading: updateRotatorLoading }] = useUpdateRotator();

  const updateLoading = updateConfigLoading || removeCreateLoading || targetsLoading || updateRotatorLoading;

  async function updateTarget() {
    if (!selectedTarget) {
      toast?.show({
        severity: 'warn',
        summary: 'No target selected',
        detail: 'Please select a target to import',
      });
      return;
    }

    await updateConfiguration({
      variables: {
        ...(configuration as ConfigurationType),
        obsId: 'o-100',
        obsTitle: selectedTarget.name,
        obsSubtitle: '',
        obsInstrument: selectedTarget.instrument,
        obsReference: '',
        selectedOiTarget: null,
        selectedP1Target: null,
        selectedP2Target: null,
      },
    });

    setCatalogVisible(false);

    // Second create the observation base target
    const { data: t } = await removeAndCreateBaseTargets({
      variables: {
        targets: [
          {
            id: 't-100',
            name: selectedTarget.name,
            coord1: selectedTarget.type === 'FIXED' ? selectedTarget.az?.degrees : selectedTarget.ra?.degrees,
            coord2: selectedTarget.type === 'FIXED' ? selectedTarget.el?.degrees : selectedTarget.dec?.degrees,
            epoch: selectedTarget.epoch,
            magnitude: undefined,
            pmRa: null,
            pmDec: null,
            radialVelocity: null,
            parallax: null,
            band: undefined,
            type: selectedTarget.type,
            wavelength: selectedTarget.wavelength,
          },
        ],
      },
    });

    await updateConfiguration({
      variables: {
        pk: configuration?.pk ?? 1,
        selectedTarget: t?.removeAndCreateBaseTargets[0]?.pk,
      },
    });

    if (rotator && selectedTarget.rotatorMode && selectedTarget.rotatorAngle !== null) {
      await updateRotator({
        variables: {
          pk: rotator.pk,
          angle: selectedTarget.rotatorAngle,
          tracking: selectedTarget.rotatorMode,
        },
      });
    }
  }

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button disabled={!canEdit} label="Import to Navigate" loading={updateLoading} onClick={updateTarget} />
        <Button disabled={!canEdit} severity="danger" label="Cancel" onClick={() => setCatalogVisible(false)} />
      </div>
    </div>
  );

  return (
    <Dialog
      header="Import from catalog"
      footer={footer}
      visible={catalogVisible}
      modal
      onHide={() => setCatalogVisible(false)}
    >
      {
        <CatalogTable
          loading={targetsLoading}
          engineeringTargets={targetsData}
          selectedTarget={selectedTarget}
          setSelectedTarget={setSelectedTarget}
        />
      }
    </Dialog>
  );
}
