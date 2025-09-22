import { skipToken } from '@apollo/client/react';
import { useConfiguration, useUpdateConfiguration } from '@gql/configs/Configuration';
import {
  GET_INSTRUMENT,
  useConfiguredInstrument,
  useDeleteInstrument,
  useDistinctInstruments,
  useDistinctPorts,
  useInstruments,
  useSetTemporaryInstrument,
} from '@gql/configs/Instrument';
import type { Instrument as InstrumentName } from '@gql/odb/gen/graphql';
import { formatDate } from 'date-fns';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { useRef, useState } from 'react';

import { useImportInstrument } from '@/components/atoms/instrument';
import { CircleCheck, CircleXMark, Trash } from '@/components/Icons';
import { useToast } from '@/Helpers/toast';
import type { InstrumentType } from '@/types';

export function Instrument() {
  const [importInstrument, setImportInstrument] = useImportInstrument();

  const [instrument, setInstrument] = useState<InstrumentType | null>(null);

  const { data: configurationData, loading: configurationLoading } = useConfiguration();

  const { data: configuredInstrument, loading: configuredInstrumentLoading } = useConfiguredInstrument();

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

  const loading =
    setTemporaryInstrumentLoading || updateConfigurationLoading || configurationLoading || configuredInstrumentLoading;

  const footer = (
    <div className="modal-footer">
      <Button text severity="danger" label="Cancel" onClick={closeModal} />
      <Button label="Import" disabled={!instrument} loading={loading} onClick={modifyInstrument} />
    </div>
  );

  return (
    <Dialog header="Import instrument" visible={importInstrument} footer={footer} modal onHide={closeModal}>
      <InstrumentModalContent
        instrument={instrument}
        setInstrument={setInstrument}
        importInstrument={importInstrument}
        configuredInstrument={configuredInstrument}
      />
    </Dialog>
  );
}

function InstrumentModalContent({
  importInstrument,
  instrument,
  setInstrument,
  configuredInstrument,
}: {
  importInstrument: boolean;
  instrument: InstrumentType | null;
  setInstrument: (_: InstrumentType | null) => void;
  configuredInstrument: InstrumentType | undefined;
}) {
  const [name, setName] = useState<InstrumentName | null>(configuredInstrument?.name ?? null);
  const [port, setPort] = useState<number | null>(configuredInstrument?.issPort ?? null);

  const [deleteInstrument, { loading: deleteInstrumentLoading }] = useDeleteInstrument();

  const { data: distinctInstrumentsData, loading: distinctInstrumentsLoading } = useDistinctInstruments({
    skip: !importInstrument,
  });
  const { data: distinctPortsData, loading: distinctPortsLoading } = useDistinctPorts(
    !name ? skipToken : { skip: !importInstrument, variables: { name } },
  );
  const { data: instrumentsData, loading: instrumentsLoading } = useInstruments(
    !name || !port
      ? skipToken
      : { skip: !importInstrument, fetchPolicy: 'cache-and-network', variables: { name, issPort: port } },
  );

  const nameOptions = distinctInstrumentsData?.distinctInstruments ?? [];
  const portOptions = distinctPortsData?.distinctPorts ?? [];

  const loading = distinctInstrumentsLoading || distinctPortsLoading || instrumentsLoading || deleteInstrumentLoading;

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
      {port && name ? (
        <InstrumentTable
          instruments={instrumentsData?.instruments ?? []}
          selectedInstrument={instrument}
          setInstrument={setInstrument}
          deleteInstrument={(pk) => deleteInstrument({ variables: { pk } })}
          loading={loading}
        />
      ) : undefined}
    </div>
  );
}

function InstrumentTable({
  instruments,
  selectedInstrument,
  setInstrument,
  deleteInstrument,
  loading,
}: {
  instruments: InstrumentType[];
  selectedInstrument: InstrumentType | null;
  setInstrument: (_: InstrumentType) => void;
  deleteInstrument: (pk: number) => void;
  loading: boolean;
}) {
  const tableData = instruments
    .filter((i) => !i.isTemporary)
    .map((i) => ({ ...i, extraParams: JSON.stringify(i.extraParams, undefined, 2), createdAt: new Date(i.createdAt) }));

  const uniqueWfs = Array.from(new Set(tableData.map((i) => i.wfs)));

  const makeDeleteInstrumentButton = (i: InstrumentType) => (
    <DeleteInstrumentButton instrument={i} onDelete={deleteInstrument} />
  );

  return (
    <>
      <DataTable
        value={tableData}
        selection={selectedInstrument}
        onSelectionChange={(e) => setInstrument(e.value as InstrumentType)}
        selectionMode="single"
        scrollable
        scrollHeight="flex"
        dataKey="pk"
        loading={loading}
        filterDisplay="row"
        emptyMessage="No instruments found."
      >
        <Column
          field="createdAt"
          header="Created"
          sortable
          dataType="date"
          body={(i: InstrumentType) => formatDate(new Date(i.createdAt), 'Pp')}
        />
        <Column
          field="wfs"
          header="WFS"
          sortable
          filter
          filterMatchMode={FilterMatchMode.IN}
          showFilterMenu={false}
          // eslint-disable-next-line @typescript-eslint/unbound-method
          filterElement={({ filterApplyCallback, value }) => (
            <MultiSelect
              placeholder="Filter WFS"
              value={value as string[] | null}
              options={uniqueWfs}
              onChange={(e) => filterApplyCallback(e.value)}
              style={{ maxWidth: '8rem' }}
            />
          )}
        />
        <Column
          field="extraParams"
          header="Extra Params"
          filter
          filterPlaceholder="Filter params"
          filterMatchMode={FilterMatchMode.CONTAINS}
          showFilterMenu={false}
        />
        <Column
          field="ao"
          header="AO"
          headerTooltip="Adaptive Optics"
          dataType="boolean"
          body={(i: InstrumentType) => (i.ao ? <CircleCheck /> : <CircleXMark />)}
          style={{ minWidth: '3rem' }}
        />
        <Column field="originX" header="Origin X" dataType="numeric" style={{ minWidth: '4rem' }} />
        <Column field="originY" header="Origin Y" dataType="numeric" style={{ minWidth: '4rem' }} />
        <Column field="focusOffset" header="Focus Offset" dataType="numeric" style={{ minWidth: '6rem' }} />
        <Column field="iaa" header="IAA" />
        <Column field="comment" header="Comment" />
        <Column
          headerStyle={{ width: '5rem', textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
          body={makeDeleteInstrumentButton}
        />
      </DataTable>
      <ConfirmPopup />
    </>
  );
}

function DeleteInstrumentButton({
  onDelete,
  instrument,
}: {
  instrument: InstrumentType;
  onDelete: (pk: number) => void;
}) {
  const ref = useRef<Button>(null);
  return (
    <Button
      ref={ref}
      icon={<Trash />}
      outlined
      severity="danger"
      tooltip="Delete entry"
      onClick={() =>
        confirmPopup({
          target: ref.current as unknown as HTMLElement,
          message: 'Are you sure you want to delete this entry?',
          accept: () => onDelete(instrument.pk),
        })
      }
    />
  );
}
