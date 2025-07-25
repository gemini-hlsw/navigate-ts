import { useDistinctInstruments, useDistinctPorts, useInstruments } from '@gql/configs/Instrument';
import type { Instrument as InstrumentName } from '@gql/odb/gen/graphql';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { useCallback, useMemo, useState } from 'react';

import { useImportInstrument } from '@/components/atoms/instrument';
import type { InstrumentType } from '@/types';

export function Instrument() {
  const [name, setName] = useState<InstrumentName | ''>('');
  const [port, setPort] = useState(0);
  const [currentInstrument, setCurrentInstrument] = useState<InstrumentType | undefined>();

  const [importInstrument, setImportInstrument] = useImportInstrument();

  const { data: distinctInstrumentsData, loading: distinctInstrumentsLoading } = useDistinctInstruments({
    skip: !importInstrument,
  });
  const { data: distinctPortsData, loading: distinctPortsLoading } = useDistinctPorts({
    skip: !importInstrument || !name,
    variables: { name: name as InstrumentName },
  });
  const { data: instrumentsData, loading: instrumentsLoading } = useInstruments({
    skip: !importInstrument || !name || !port,
    variables: { name: name as InstrumentName, issPort: port },
  });

  const nameOptions = useMemo(
    () => distinctInstrumentsData?.distinctInstruments.map((e) => e.name) ?? [],
    [distinctInstrumentsData],
  );
  const portOptions = useMemo(() => distinctPortsData?.distinctPorts.map((e) => e.issPort) ?? [], [distinctPortsData]);

  const loading = distinctInstrumentsLoading || distinctPortsLoading || instrumentsLoading;

  const modifyInstrument = useCallback(() => {
    setImportInstrument(false);
  }, [setImportInstrument]);

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button label="Import" onClick={modifyInstrument} />
        <Button severity="danger" label="Cancel" onClick={() => setImportInstrument(false)} />
      </div>
    </div>
  );

  const tableData = instrumentsData?.instruments.map((i) => (
    <InstrumentDetails
      instrument={i}
      selectedPk={currentInstrument?.pk}
      setInstrument={setCurrentInstrument}
      key={i.pk}
    />
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
    <Dialog
      header="Import instrument"
      visible={importInstrument}
      footer={footer}
      modal
      onHide={() => setImportInstrument(false)}
    >
      <div className="import-instrument">
        <div className="selectors">
          <label htmlFor="instrument-import-name">Instrument</label>
          <Dropdown
            inputId="instrument-import-name"
            value={name}
            loading={loading}
            options={nameOptions}
            onChange={(e) => setName(e.target.value as InstrumentName)}
            placeholder="Select instrument"
          />
          <label htmlFor="instrument-import-issPort">issPort</label>
          <Dropdown
            inputId="instrument-import-issPort"
            loading={loading}
            disabled={portOptions.length <= 0}
            value={port}
            options={portOptions}
            onChange={(e) => setPort(e.target.value as number)}
            placeholder="Select port"
          />
        </div>
        {table}
      </div>
    </Dialog>
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
      <td>{JSON.stringify(instrument.extraParams)}</td>
    </tr>
  );
}
