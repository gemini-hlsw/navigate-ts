import type { PwfsFieldStop, PwfsFilter } from '@gql/server/gen/graphql';
import type { UsePwfsFieldStop, UsePwfsFilter, UsePwfsMechState } from '@gql/server/MechState';
import {
  usePwfs1FieldStop,
  usePwfs1Filter,
  usePwfs1MechsState,
  usePwfs2FieldStop,
  usePwfs2Filter,
  usePwfs2MechsState,
} from '@gql/server/MechState';
import { Dropdown } from 'primereact/dropdown';

import { useMovingLabel } from './hooks';

const filterOptions: { value: PwfsFilter; label: string }[] = [
  { value: 'NEUTRAL', label: 'neutral' },
  { value: 'BLUE', label: 'Blue' },
  { value: 'GREEN', label: 'Green' },
  { value: 'RED', label: 'Red' },
  { value: 'RED04', label: 'Red04' },
  { value: 'RED1', label: 'Red1' },
];

const fieldStopOptions: { value: PwfsFieldStop; label: string }[] = [
  { value: 'PRISM', label: 'prism' },
  { value: 'FS10', label: '10.0' },
  { value: 'FS6_4', label: '6.4' },
  { value: 'FS3_2', label: '3.2' },
  { value: 'FS1_6', label: '1.6' },
  { value: 'OPEN1', label: 'open1' },
  { value: 'OPEN2', label: 'open2' },
  { value: 'OPEN3', label: 'open3' },
  { value: 'OPEN4', label: 'open4' },
];

function PWFS({
  disabled,
  useMechState,
  useFilter,
  useFieldStop,
}: {
  disabled: boolean;
  useMechState: UsePwfsMechState;
  useFilter: UsePwfsFilter;
  useFieldStop: UsePwfsFieldStop;
}) {
  const { data, loading: mechStateLoading } = useMechState();

  const [setFilter, { loading: filterLoading }] = useFilter();
  const [setFieldStop, { loading: fieldStopLoading }] = useFieldStop();

  const loading = mechStateLoading || filterLoading || fieldStopLoading;

  const [filterMovingLabel, setRequestedFilter] = useMovingLabel(mechStateLoading, data?.filter, filterOptions);
  const [fieldStopMovingLabel, setRequestedFieldStop] = useMovingLabel(
    mechStateLoading,
    data?.fieldStop,
    fieldStopOptions,
  );

  return (
    <div className="pwfs">
      <label htmlFor="pwfs-filter" className="label">
        Filter
      </label>
      <span className="moving-label">{filterMovingLabel}</span>
      <Dropdown
        inputId="pwfs-filter"
        disabled={disabled}
        loading={loading}
        value={data?.filter ?? null}
        options={filterOptions}
        onChange={(e) => {
          setRequestedFilter(e.value as PwfsFilter);
          return setFilter({ variables: { filter: e.value as PwfsFilter } });
        }}
        placeholder="Select filter"
      />

      <label htmlFor="pwfs-field-stop" className="label">
        Field stop
      </label>
      <span className="moving-label">{fieldStopMovingLabel}</span>
      <Dropdown
        inputId="pwfs-field-stop"
        disabled={disabled}
        loading={loading}
        value={data?.fieldStop ?? null}
        options={fieldStopOptions}
        onChange={(e) => {
          setRequestedFieldStop(e.value as PwfsFieldStop);
          return setFieldStop({ variables: { fieldStop: e.value as PwfsFieldStop } });
        }}
        placeholder="Select stop"
      />
    </div>
  );
}

export function PWFS1({ disabled }: { disabled: boolean }) {
  return (
    <PWFS
      disabled={disabled}
      useMechState={usePwfs1MechsState}
      useFilter={usePwfs1Filter}
      useFieldStop={usePwfs1FieldStop}
    />
  );
}

export function PWFS2({ disabled }: { disabled: boolean }) {
  return (
    <PWFS
      disabled={disabled}
      useMechState={usePwfs2MechsState}
      useFilter={usePwfs2Filter}
      useFieldStop={usePwfs2FieldStop}
    />
  );
}
