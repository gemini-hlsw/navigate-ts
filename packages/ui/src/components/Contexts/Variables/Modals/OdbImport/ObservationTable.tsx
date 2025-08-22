import { FilterMatchMode } from 'primereact/api';
import type { ColumnProps as PColumnProps } from 'primereact/column';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { useState } from 'react';

import { Search } from '@/components/Icons';
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
  {
    field: 'reference.label',
    header: 'Observation Reference',
    filterPlaceholder: 'Filter Observation Reference',
    visible: true,
  },
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
  const [columns, setColumns] = useState(defaultColumns);
  const visibleColumns = columns.filter((c) => c.visible);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const filters = visibleColumns.reduce(
    (acc, c) => ({ ...acc, [c.field]: { value: '', matchMode: FilterMatchMode.CONTAINS } }),
    {
      global: { value: globalFilterValue, matchMode: FilterMatchMode.CONTAINS },
    },
  );

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
  };

  const onMultiSelectChange = (e: { value: ColumnProps[] }) => {
    setColumns(columns.map((c) => ({ ...c, visible: e.value.some((v) => v.field === c.field) })));
  };

  const header = (
    <div className="header-table">
      {selectedObservation?.title && <span>Selected Observation: {selectedObservation.title}</span>}
      {headerItems}
      <IconField iconPosition="left">
        <InputIcon>
          <Search />
        </InputIcon>
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
