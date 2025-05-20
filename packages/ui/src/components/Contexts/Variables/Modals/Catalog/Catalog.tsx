import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import { useEngineeringTargets } from '@gql/configs/EngineeringTarget';
import type { EngineeringTarget } from '@gql/configs/gen/graphql';
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

  const updateLoading = updateConfigLoading || removeCreateLoading || targetsLoading;

  function updateTarget() {
    if (!selectedTarget) {
      toast?.show({
        severity: 'warn',
        summary: 'No target selected',
        detail: 'Please select a target to import',
      });
      return;
    }

    void updateConfiguration({
      variables: {
        ...(configuration as ConfigurationType),
        obsId: selectedTarget.id,
        obsTitle: selectedTarget.name,
        obsSubtitle: '',
        obsInstrument: selectedTarget.instrument,
        obsReference: undefined,
      },
      async onCompleted() {
        setCatalogVisible(false);

        // Second create the observation base target
        await removeAndCreateBaseTargets({
          variables: {
            targets: [
              {
                id: selectedTarget.id,
                name: selectedTarget.name,
                coord1: selectedTarget.type === 'FIXED' ? selectedTarget.az?.degrees : selectedTarget.ra?.degrees,
                coord2: selectedTarget.type === 'FIXED' ? selectedTarget.el?.degrees : selectedTarget.dec?.degrees,
                epoch: selectedTarget.epoch,
                magnitude: undefined,
                band: undefined,
                type: selectedTarget.type,
                wavelength: selectedTarget.wavelength,
              },
            ],
          },
          async onCompleted(t) {
            await updateConfiguration({
              variables: {
                pk: configuration?.pk ?? 1,
                selectedTarget: t.removeAndCreateBaseTargets[0].pk,
              },
            });
          },
        });
      },
    });
  }

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button
          disabled={!canEdit}
          className=""
          label="Import to Navigate"
          loading={updateLoading}
          onClick={updateTarget}
        />
        <Button
          disabled={!canEdit}
          className="p-button-danger"
          label="Cancel"
          onClick={() => setCatalogVisible(false)}
        />
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
