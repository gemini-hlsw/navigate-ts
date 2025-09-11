import { skipToken } from '@apollo/client/react';
import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import {
  GET_INSTRUMENT,
  useDistinctInstruments,
  useDistinctPorts,
  useInstruments,
  useSetTemporaryInstrument,
} from '@gql/configs/Instrument';
import type { Instrument as InstrumentName } from '@gql/odb/gen/graphql';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

import { useImportInstrument } from '@/components/atoms/instrument';
import { useToast } from '@/Helpers/toast';
import type { InstrumentType } from '@/types';

export function Instrument() {
  const [importInstrument, setImportInstrument] = useImportInstrument();

  const [instrument, setInstrument] = useState<InstrumentType | null>(null);

  const { data: configurationData, loading: configurationLoading } = useConfiguration();

  const [setTemporaryInstrument, { loading: setTemporaryInstrumentLoading }] = useSetTemporaryInstrument();
  const [updateConfiguration, { loading: updateConfigurationLoading }] = useUpdateConfiguration();

  const toast = useToast();

  const closeModal = () => {
    setImportInstrument(false);
    setInstrument(null);
  };

  const modifyInstrument = async () => {
    if (instrument && configurationData?.configuration) {
      await setTemporaryInstrument({
        variables: {
          ...instrument,
          comment: 'Imported instrument',
        },
      });
      await updateConfiguration({
        variables: {
          pk: configurationData.configuration.pk,
          obsInstrument: instrument.name,
        },
        optimisticResponse: {
          updateConfiguration: {
            ...configurationData.configuration,
            obsInstrument: instrument.name,
          },
        },
        refetchQueries: [GET_INSTRUMENT],
        awaitRefetchQueries: true,
      });

      closeModal();
    } else {
      toast?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'No instrument selected',
      });
    }
  };

  const loading = setTemporaryInstrumentLoading || updateConfigurationLoading || configurationLoading;

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button label="Import" disabled={!instrument} loading={loading} onClick={modifyInstrument} />
        <Button severity="danger" label="Cancel" onClick={closeModal} />
      </div>
    </div>
  );

  return (
    <Dialog header="Import instrument" visible={importInstrument} footer={footer} modal onHide={closeModal}>
      <InstrumentModalContent
        instrument={instrument}
        setInstrument={setInstrument}
        importInstrument={importInstrument}
      />
    </Dialog>
  );
}

function InstrumentModalContent({
  importInstrument,
  instrument,
  setInstrument,
}: {
  importInstrument: boolean;
  instrument: InstrumentType | null;
  setInstrument: (_: InstrumentType | null) => void;
}) {
  const [name, setName] = useState<InstrumentName | null>(null);
  const [port, setPort] = useState<number | null>(null);

  const { data: distinctInstrumentsData, loading: distinctInstrumentsLoading } = useDistinctInstruments(
    !importInstrument ? skipToken : undefined,
  );
  const { data: distinctPortsData, loading: distinctPortsLoading } = useDistinctPorts(
    !importInstrument || !name ? skipToken : { variables: { name } },
  );
  const { data: instrumentsData, loading: instrumentsLoading } = useInstruments(
    !importInstrument || !name || !port
      ? skipToken
      : {
          variables: { name, issPort: port },
        },
  );

  const nameOptions = distinctInstrumentsData?.distinctInstruments ?? [];
  const portOptions = distinctPortsData?.distinctPorts ?? [];

  const loading = distinctInstrumentsLoading || distinctPortsLoading || instrumentsLoading;

  const tableData = instrumentsData?.instruments
    .filter((i) => !i.isTemporary)
    .map((i) => (
      <InstrumentDetails instrument={i} selectedPk={instrument?.pk} setInstrument={setInstrument} key={i.pk} />
    ));

  let table: React.ReactNode | null = null;
  if (port && name) {
    table = (
      <table className="table">
        <thead>
          <tr>
            <th>ao</th>
            <th>focusOffset</th>
            <th>iaa</th>
            <th>originX</th>
            <th>originY</th>
            <th>wfs</th>
            <th>extraParams</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    );
  }

  return (
    <div className="import-instrument">
      <div className="selectors">
        <label htmlFor="instrument-import-name">Instrument</label>
        <Dropdown
          inputId="instrument-import-name"
          value={name}
          loading={loading}
          options={nameOptions}
          onChange={(e) => {
            setName(e.target.value as InstrumentName);
            setPort(null);
            setInstrument(null);
          }}
          placeholder="Select instrument"
        />
        <label htmlFor="instrument-import-issPort">issPort</label>
        <Dropdown
          inputId="instrument-import-issPort"
          loading={loading}
          disabled={portOptions.length <= 0 || !name}
          value={port}
          options={portOptions}
          onChange={(e) => {
            setPort(e.target.value as number);
            setInstrument(null);
          }}
          placeholder="Select port"
        />
      </div>
      {table}
    </div>
  );
}

function InstrumentDetails({
  instrument,
  setInstrument,
  selectedPk,
}: {
  instrument: InstrumentType;
  setInstrument: (_: InstrumentType) => void;
  selectedPk: number | undefined;
}) {
  return (
    <tr onClick={() => setInstrument(instrument)} className={instrument.pk === selectedPk ? 'active' : ''}>
      <td>{instrument.ao}</td>
      <td>{instrument.focusOffset}</td>
      <td>{instrument.iaa}</td>
      <td>{instrument.originX}</td>
      <td>{instrument.originY}</td>
      <td>{instrument.wfs}</td>
      <td>{JSON.stringify(instrument.extraParams, undefined, 2)}</td>
    </tr>
  );
}
