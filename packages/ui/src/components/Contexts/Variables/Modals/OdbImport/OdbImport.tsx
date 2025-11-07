import { skipToken } from '@apollo/client/react';
import { useObservationsByState } from '@gql/odb/Observation';
import { dateToLocalObservingNight } from 'lucuma-core';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useServerConfigValue } from '@/components/atoms/config';
import { useOdbVisible } from '@/components/atoms/odb';
import type { OdbObservationType } from '@/types';

import { ObservationTable } from './ObservationTable';
import { useImportObservation } from './useImportObservation';

export function OdbImport() {
  const canEdit = useCanEdit();
  const { site } = useServerConfigValue();
  const [odbVisible, setOdbVisible] = useOdbVisible();
  const [selectedObservation, setSelectedObservation] = useState<OdbObservationType | null>(null);
  const observingNight = dateToLocalObservingNight(new Date());

  const { data, loading } = useObservationsByState(
    !odbVisible || !site
      ? skipToken
      : {
          variables: {
            date: observingNight,
            site,
            states: ['READY', 'ONGOING', 'COMPLETED'],
          },
        },
  );

  const [importObservation, { loading: importLoading }] = useImportObservation();

  async function updateObs() {
    await importObservation(selectedObservation, () => {
      setOdbVisible(false);
    });
  }

  const header = (
    <div className="header-item">
      <span>
        Observing Night {observingNight} @ {site}
      </span>
    </div>
  );

  const { firstScienceTarget, blindOffsetTarget } = selectedObservation?.targetEnvironment ?? {};

  const footer = (
    <div className="modal-footer">
      <Button text severity="danger" label="Cancel" onClick={() => setOdbVisible(false)} />
      <Button
        disabled={!canEdit || !(firstScienceTarget?.name ?? blindOffsetTarget?.name)}
        label="Import to Navigate"
        loading={importLoading}
        onClick={updateObs}
      />
    </div>
  );

  return (
    <Dialog header="Import from ODB" footer={footer} visible={odbVisible} modal onHide={() => setOdbVisible(false)}>
      {
        <ObservationTable
          headerItems={header}
          loading={loading}
          observations_list={data?.observations?.matches}
          selectedObservation={selectedObservation}
          setSelectedObservation={setSelectedObservation}
        />
      }
    </Dialog>
  );
}
