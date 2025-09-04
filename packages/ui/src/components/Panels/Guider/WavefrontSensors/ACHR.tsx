import { useAcFilter, useAcLens, useAcMechsState, useAcNdFilter, useAcWindowSize } from '@gql/server/AcquisitionCamera';
import type { AcFilter, AcLens, AcNdFilter, AcWindowCenter, AcWindowSize } from '@gql/server/gen/graphql';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';

import { useServerConfigValue } from '@/components/atoms/config';

const lensOptions: { value: AcLens; label: string }[] = [
  { value: 'AC', label: 'AC' },
  { value: 'HRWFS', label: 'HRWFS' },
];
const filterOptions: { value: AcFilter; label: string }[] = [
  { value: 'NEUTRAL', label: 'NEUTRAL' },
  { value: 'B_BLUE', label: 'B_BLUE' },
  { value: 'V_GREEN', label: 'V_GREEN' },
  { value: 'U_RED1', label: 'U_RED1' },
  { value: 'R_RED2', label: 'R_RED2' },
  { value: 'I_RED3', label: 'I_RED3' },
];

const gsNdFilterOptions: { value: AcNdFilter; label: string }[] = [
  { value: 'Open', label: 'Open' },
  { value: 'ND1', label: 'ND1' },
  { value: 'ND2', label: 'ND2' },
  { value: 'ND3', label: 'ND3' },
];

const gnNdFilterOptions: { value: AcNdFilter; label: string }[] = [
  { value: 'Open', label: 'Open' },

  { value: 'ND100', label: 'ND100' },
  { value: 'ND1000', label: 'ND1000' },
  { value: 'FILT04', label: 'FILT04' },
  { value: 'FILT06', label: 'FILT06' },
  { value: 'FILT08', label: 'FILT08' },
];
const windowSizeOptions: { value: AcWindowSize; label: string }[] = [
  { value: 'WINDOW_100X100', label: '100x100' },
  { value: 'WINDOW_200X200', label: '200x200' },
  { value: 'FULL', label: 'Full' },
];

export function ACHR({ disabled }: { disabled: boolean }) {
  const { data: mechsState, loading: mechsStateLoading, setStale } = useAcMechsState();
  const { site } = useServerConfigValue();

  const windowCenter: AcWindowCenter = site === 'GN' ? { x: 518, y: 550 } : { x: 449, y: 522 };

  const [setLens, { loading: lensLoading }] = useAcLens(setStale);
  const [setFilter, { loading: filterLoading }] = useAcFilter(setStale);
  const [setNdFilter, { loading: ndFilterLoading }] = useAcNdFilter(setStale);
  const [setWindowSize, { loading: windowSizeLoading }] = useAcWindowSize(setStale);

  const loading = mechsStateLoading || lensLoading || ndFilterLoading || filterLoading || windowSizeLoading;

  const ndFilterOptions = site === 'GN' ? gnNdFilterOptions : gsNdFilterOptions;

  const [auxLens, setAuxLens] = useState<AcLens>(lensOptions[0]!.value);
  const [auxFilter, setAuxFilter] = useState<AcFilter>(filterOptions[0]!.value);
  const [auxNdFilter, setAuxNdFilter] = useState<AcNdFilter>(ndFilterOptions[0]!.value);
  const [auxWindowSize, setAuxWindowSize] = useState<AcWindowSize>(windowSizeOptions[0]!.value);

  useEffect(() => {
    if (mechsState?.lens) setAuxLens(mechsState.lens);
    if (mechsState?.filter) setAuxFilter(mechsState.filter);
    if (mechsState?.ndFilter) setAuxNdFilter(mechsState.ndFilter);
    // TODO: windowSize update from configs db
  }, [mechsState]);

  const lensValueLabel = lensOptions.find(({ value }) => value === mechsState?.lens)?.label ?? '';
  const filterValueLabel = filterOptions.find(({ value }) => value === mechsState?.filter)?.label ?? '';
  const ndFilterValueLabel = ndFilterOptions.find(({ value }) => value === mechsState?.ndFilter)?.label ?? '';
  const windowSizeValueLabel = 'TODO';

  return (
    <div className="achr">
      <label htmlFor="achr-lens" className="label">
        Lens
      </label>
      <span title="Current value">{lensValueLabel}</span>
      <Dropdown
        loading={lensLoading}
        inputId="achr-lens"
        disabled={disabled}
        value={auxLens}
        options={lensOptions}
        onChange={(e) => setAuxLens(e.value as AcLens)}
        placeholder="Select lens pos"
      />
      <Button
        disabled={loading || mechsState?.lens === auxLens}
        label="Set"
        onClick={() => setLens({ variables: { lens: auxLens } })}
      />

      <label htmlFor="achr-filter" className="label">
        Filter
      </label>
      <span title="Current value">{filterValueLabel}</span>
      <Dropdown
        loading={filterLoading}
        inputId="achr-filter"
        disabled={disabled}
        value={auxFilter}
        options={filterOptions}
        onChange={(e) => setAuxFilter(e.value as AcFilter)}
        placeholder="Select filter"
      />
      <Button
        disabled={loading || mechsState?.filter === auxFilter}
        label="Set"
        onClick={() => setFilter({ variables: { filter: auxFilter } })}
      />

      <label htmlFor="achr-nd" className="label">
        Neutral density
      </label>
      <span title="Current value">{ndFilterValueLabel}</span>
      <Dropdown
        loading={ndFilterLoading}
        inputId="achr-nd"
        disabled={disabled}
        value={auxNdFilter}
        options={ndFilterOptions}
        onChange={(e) => setAuxNdFilter(e.value as AcNdFilter)}
        placeholder="Select state"
      />
      <Button
        disabled={loading || mechsState?.ndFilter === auxNdFilter}
        label="Set"
        onClick={() => setNdFilter({ variables: { ndFilter: auxNdFilter } })}
      />

      <label htmlFor="achr-window-size" className="label">
        ROI
      </label>
      <span title="Current value">{windowSizeValueLabel}</span>
      <Dropdown
        loading={windowSizeLoading}
        className="under-construction"
        inputId="achr-window-size"
        disabled={disabled}
        value={auxWindowSize}
        options={windowSizeOptions}
        onChange={(e) => setAuxWindowSize(e.value as AcWindowSize)}
        placeholder="Select ROI"
      />
      <Button
        disabled={loading}
        label="Set"
        onClick={() =>
          setWindowSize({
            variables: {
              size: { type: auxWindowSize, center: auxWindowSize !== 'FULL' ? windowCenter : undefined },
            },
          })
        }
      />
    </div>
  );
}
