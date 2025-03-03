import { FilterMatchMode } from 'primereact/api';
import type { ColumnProps as PColumnProps } from 'primereact/column';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { useCallback, useMemo, useState } from 'react';

import type { OdbObservationType } from '@/types';

interface ParamsInterface {
  loading: boolean;
  observations_list: OdbObservationType[] | undefined;
  selectedObservation: OdbObservationType | null;
  setSelectedObservation: (_: OdbObservationType | null) => void;
  headerItems?: React.ReactNode;
}

interface ColumnProps extends PColumnProps {
  field: string;
  header: string;
  filterPlaceholder: string;
  visible: boolean;
}

const defaultColumns: ColumnProps[] = [
  { field: 'id', header: 'ID', filterPlaceholder: 'Search ID', visible: true },
  { field: 'title', header: 'Title', filterPlaceholder: 'Search Title', visible: true },
  {
    field: 'program.pi.user.profile.givenName',
    header: 'PI Given Name',
    filterPlaceholder: 'Filter Given Name',
    visible: true,
  },
  {
    field: 'program.pi.user.profile.familyName',
    header: 'PI Family Name',
    filterPlaceholder: 'Filter Family Name',
    visible: true,
  },
  {
    field: 'reference.label',
    header: 'Observation Reference',
    filterPlaceholder: 'Filter Observation Reference',
    visible: true,
  },
  {
    field: 'targetEnvironment.firstScienceTarget.name',
    header: 'Target Name',
    filterPlaceholder: 'Filter Target Name',
    visible: false,
  },
  { field: 'instrument', header: 'Instrument', filterPlaceholder: 'Filter Instrument', visible: false },
];

export function ObservationTable({
  loading,
  observations_list,
  selectedObservation,
  setSelectedObservation,
  headerItems,
}: ParamsInterface) {
  const [filters, setFilters] = useState({
    id: { value: '', matchMode: FilterMatchMode.CONTAINS },
    title: { value: '', matchMode: FilterMatchMode.CONTAINS },
    'program.pi.user.profile.givenName': {
      value: '',
      matchMode: FilterMatchMode.CONTAINS,
    },
    'program.pi.user.profile.familyName': {
      value: '',
      matchMode: FilterMatchMode.CONTAINS,
    },
    'targetEnvironment.firstScienceTarget.name': {
      value: '',
      matchMode: FilterMatchMode.CONTAINS,
    },
    global: { value: '', matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  function onGlobalFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const _filters = { ...filters };
    _filters.global.value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  }

  const [columns, setColumns] = useState(defaultColumns);

  const visibleColumns = useMemo(() => columns.filter((c) => c.visible), [columns]);

  const onMultiSelectChange = useCallback(
    (e: { value: ColumnProps[] }) =>
      setColumns(columns.map((c) => ({ ...c, visible: e.value.some((v) => v.field === c.field) }))),
    [setColumns, columns],
  );

  const header = (
    <div className="header-table">
      {selectedObservation?.title && <span>Selected Observation: {selectedObservation.title}</span>}
      {headerItems}
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
      </IconField>
      <MultiSelect
        selectedItemsLabel={`${visibleColumns.length} columns selected`}
        maxSelectedLabels={2}
        value={visibleColumns}
        options={columns}
        onChange={onMultiSelectChange}
        optionLabel="header"
        placeholder="Select columns"
      />
    </div>
  );

  return (
    <div className="target-table">
      <DataTable
        value={observations_list}
        paginator
        selectionMode="single"
        selection={selectedObservation}
        onSelectionChange={(e) => setSelectedObservation(e.value as OdbObservationType | null)}
        className="p-datatable-customers"
        rows={15}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={visibleColumns.map((c) => c.field)}
        header={header}
        emptyMessage="No observations found."
      >
        {visibleColumns.map((column) => (
          <Column {...column} key={column.field} filter />
        ))}
      </DataTable>
    </div>
  );
}
