import { useSetWindowCenter, useWindowCenter } from '@gql/configs/WindowCenter';
import { useAcFilter, useAcLens, useAcMechsState, useAcNdFilter, useAcWindowSize } from '@gql/server/AcquisitionCamera';
import type { AcFilter, AcLens, AcNdFilter, AcWindowSize } from '@gql/server/gen/graphql';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { useState } from 'react';

import { useServerConfigValue } from '@/components/atoms/config';

const lensOptions: { value: AcLens; label: string }[] = [
  { value: 'AC', label: 'AC' },
  { value: 'HRWFS', label: 'HRWFS' },
];
const filterOptions: { value: AcFilter; label: string }[] = [
  { value: 'NEUTRAL', label: 'neutral' },
  { value: 'B_BLUE', label: 'B-blue' },
  { value: 'V_GREEN', label: 'V-green' },
  { value: 'U_RED1', label: 'U-red1' },
  { value: 'R_RED2', label: 'R-red2' },
  { value: 'I_RED3', label: 'I-red3' },
];

const gsNdFilterOptions: { value: AcNdFilter; label: string }[] = [
  { value: 'OPEN', label: 'Open' },
  { value: 'ND1', label: 'ND1' },
  { value: 'ND2', label: 'ND2' },
  { value: 'ND3', label: 'ND3' },
];

const gnNdFilterOptions: { value: AcNdFilter; label: string }[] = [
  { value: 'OPEN', label: 'open' },

  { value: 'ND100', label: 'nd100' },
  { value: 'ND1000', label: 'nd1000' },
  { value: 'FILT04', label: 'filt04' },
  { value: 'FILT06', label: 'filt06' },
  { value: 'FILT08', label: 'filt08' },
];
const windowSizeOptions: { value: AcWindowSize; label: string }[] = [
  { value: 'WINDOW_100X100', label: '100x100' },
  { value: 'WINDOW_200X200', label: '200x200' },
  { value: 'FULL', label: 'Full' },
];

export function ACHR({ disabled }: { disabled: boolean }) {
  const { site } = useServerConfigValue();

  const { data: mechsState, loading: mechsStateLoading, setStale } = useAcMechsState();
  const { data: windowCenterData, loading: windowCenterLoading } = useWindowCenter(site);
  const windowCenter = windowCenterData?.windowCenter;

  const [setLens, { loading: lensLoading }] = useAcLens(setStale);
  const [setFilter, { loading: filterLoading }] = useAcFilter(setStale);
  const [setNdFilter, { loading: ndFilterLoading }] = useAcNdFilter(setStale);
  const [setWindowSize, { loading: windowSizeLoading }] = useAcWindowSize(setStale);
  const [setWindowCenter, { loading: setWindowCenterLoading }] = useSetWindowCenter();

  const loading =
    mechsStateLoading ||
    windowCenterLoading ||
    lensLoading ||
    ndFilterLoading ||
    filterLoading ||
    windowSizeLoading ||
    setWindowCenterLoading;

  const ndFilterOptions = site === 'GN' ? gnNdFilterOptions : gsNdFilterOptions;

  const [auxWindowSize, setAuxWindowSize] = useState<AcWindowSize>(windowSizeOptions[0]!.value);

  return (
    <div className="achr">
      <label htmlFor="achr-lens" className="label">
        Lens
      </label>
      <Dropdown
        loading={loading}
        inputId="achr-lens"
        disabled={disabled}
        value={mechsState?.lens ?? null}
        options={lensOptions}
        onChange={(e) => setLens({ variables: { lens: e.value as AcLens } })}
        placeholder="Select lens pos"
      />

      <label htmlFor="achr-filter" className="label">
        Filter
      </label>
      <Dropdown
        loading={loading}
        inputId="achr-filter"
        disabled={disabled}
        value={mechsState?.filter ?? null}
        options={filterOptions}
        onChange={(e) => setFilter({ variables: { filter: e.value as AcFilter } })}
        placeholder="Select filter"
      />

      <label htmlFor="achr-nd" className="label">
        Neutral density
      </label>
      <Dropdown
        loading={loading}
        inputId="achr-nd"
        disabled={disabled}
        value={mechsState?.ndFilter ?? null}
        options={ndFilterOptions}
        onChange={(e) => setNdFilter({ variables: { ndFilter: e.value as AcNdFilter } })}
        placeholder="Select state"
      />

      <label htmlFor="achr-window-size" className="label">
        ROI
      </label>
      <div className="window-size">
        <Dropdown
          loading={loading}
          className="under-construction"
          inputId="achr-window-size"
          disabled={disabled}
          value={auxWindowSize}
          options={windowSizeOptions}
          onChange={async (e) => {
            setAuxWindowSize(e.value as AcWindowSize);
            await setWindowSize({
              variables: {
                size: {
                  type: e.value as AcWindowSize,
                  center: e.value !== 'FULL' ? { x: windowCenter?.x, y: windowCenter?.y } : undefined,
                },
              },
            });
          }}
          placeholder="Select ROI"
        />
        {auxWindowSize !== 'FULL' && (
          <div className="window-size-inputs">
            <label htmlFor="achr-window-center-x" className="label">
              X
            </label>
            <InputNumber
              inputId="achr-window-center-x"
              disabled={disabled || setWindowCenterLoading}
              value={windowCenter?.x ?? null}
              onValueChange={(e) =>
                Promise.all([
                  setWindowCenter({ variables: { site, x: e.value } }),
                  setWindowSize({
                    variables: { size: { type: auxWindowSize, center: { x: e.value, y: windowCenter?.y } } },
                  }),
                ])
              }
              maxFractionDigits={0}
            />
            <label htmlFor="achr-window-center-y" className="label">
              Y
            </label>
            <InputNumber
              inputId="achr-window-center-y"
              disabled={disabled || setWindowCenterLoading}
              value={windowCenter?.y ?? null}
              onValueChange={(e) =>
                Promise.all([
                  setWindowCenter({ variables: { site, y: e.value } }),
                  setWindowSize({
                    variables: { size: { type: auxWindowSize, center: { x: windowCenter?.x, y: e.value } } },
                  }),
                ])
              }
              maxFractionDigits={0}
            />
          </div>
        )}
      </div>
    </div>
  );
}
