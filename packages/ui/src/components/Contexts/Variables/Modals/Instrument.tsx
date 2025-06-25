import { useGetDistinctInstruments, useGetDistinctPorts, useGetInstruments } from '@gql/configs/Instrument';
import type { Instrument as InstrumentName } from '@gql/odb/gen/graphql';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';

import { useImportInstrument } from '@/components/atoms/instrument';
import type { InstrumentType } from '@/types';

export function Instrument() {
  const [importInstrument, setImportInstrument] = useImportInstrument();
  const getNames = useGetDistinctInstruments();
  const getPorts = useGetDistinctPorts();
  const getInstruments = useGetInstruments();
  const [nameOptions, setNameOptions] = useState<string[]>([]);
  const [name, setName] = useState<InstrumentName | ''>('');
  const [portOptions, setPortOptions] = useState<number[]>([]);
  const [port, setPort] = useState(0);
  const [instrumentOptions, setInstrumentOptions] = useState<InstrumentType[]>([]);
  const [currentInstrument, setCurrentInstrument] = useState<InstrumentType>({} as InstrumentType);

  useEffect(() => {
    if (importInstrument)
      void getNames({
        onCompleted: (data) => {
          setNameOptions(data.distinctInstruments.map((e) => e.name));
        },
      });
  }, [getNames, importInstrument]);

  useEffect(() => {
    if (name) {
      setPort(0);
      void getPorts({
        variables: { name: name },
        onCompleted: (data) => {
          setPortOptions(data.distinctPorts.map((e) => e.issPort));
        },
      });
    }
  }, [getPorts, name]);

  useEffect(() => {
    if (port && name) {
      void getInstruments({
        variables: { name: name, issPort: port },
        onCompleted: (data) => {
          setInstrumentOptions(data.instruments);
        },
      });
    }
  }, [getInstruments, name, port]);

  function modifyInstrument() {
    setImportInstrument(false);
  }

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button className="" label="Import" onClick={modifyInstrument} />
        <Button className="p-button-danger" label="Cancel" onClick={() => setImportInstrument(false)} />
      </div>
    </div>
  );

  const tableData = instrumentOptions.map((i) => (
    <InstrumentDetails
      instrument={i}
      selectedPk={currentInstrument.pk}
      setInstrument={setCurrentInstrument}
      key={i.name}
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
          <span>Instrument</span>
          <Dropdown
            value={name}
            options={nameOptions}
            onChange={(e) => setName(e.target.value as InstrumentName)}
            placeholder="Select instrument"
          />
          <span>issPort</span>
          <Dropdown
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
  setInstrument(this: void, _: InstrumentType): void;
  selectedPk: number;
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
