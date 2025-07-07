import type { AdjustTarget } from '@gql/server/gen/graphql';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { Slider } from 'primereact/slider';
import { useState } from 'react';

import { CaretDown, CaretLeft, CaretRight, CaretUp } from '@/components/Icons';

import type { Coords, HandsetStrategy } from './strategy';

export type CoordOnChange = (value: Coords) => void;

export const targetOptions: AdjustTarget[] = ['OIWFS', 'PWFS1', 'PWFS2', 'SOURCE_A'];

export const coordSystemOptions = ['Az/El', 'AC', 'Instrument', 'RA/Dec'] as const;
export type CoordSystem = (typeof coordSystemOptions)[number];

export function CoordSystemControls({
  onChange,
  coordSystem,
  loading,
  canEdit,
}: {
  onChange: (value: CoordSystem) => void;
  coordSystem: CoordSystem;
  loading: boolean;
  canEdit: boolean;
}) {
  return (
    <>
      <label htmlFor="coord-system">Coordinates</label>
      <Dropdown
        inputId="coord-system"
        disabled={loading || !canEdit}
        value={coordSystem}
        options={coordSystemOptions.map((cs) => cs)}
        onChange={(e) => onChange(e.value as CoordSystem)}
      />
    </>
  );
}

export function TargetSelector({
  target,
  onChange,
  loading,
  canEdit,
}: {
  target: AdjustTarget;
  onChange: (value: AdjustTarget) => void;
  loading: boolean;
  canEdit: boolean;
}) {
  return (
    <>
      <label htmlFor="handsets-target">Target</label>
      <Dropdown
        inputId="handsets-target"
        loading={loading}
        disabled={!canEdit}
        value={target}
        onChange={(e) => onChange(e.value as AdjustTarget)}
        options={targetOptions}
      />
    </>
  );
}

export function CoordinatesInput({
  onChange,
  x,
  y,
  strategy,
  loading,
  canEdit,
}: {
  onChange?: CoordOnChange;
  x: number;
  y: number;
  strategy: HandsetStrategy;
  loading: boolean;
  canEdit: boolean;
}) {
  const { up, down, right, left } = strategy;
  const [stepSize, setStepSize] = useState(5);

  return (
    <div className="control-row coordinates-input">
      <div className="coordinates-buttons">
        <Button
          tooltip={up.label}
          data-testid={up.label}
          style={{ gridArea: 'gu' }}
          onClick={() => onChange?.(up.mod({ horizontal: x, vertical: y }, stepSize))}
          className="coordinate-up"
          icon={<CaretUp />}
          disabled={loading || !canEdit}
        />
        <Button
          tooltip={left.label}
          data-testid={left.label}
          style={{ gridArea: 'gl' }}
          onClick={() => onChange?.(left.mod({ horizontal: x, vertical: y }, stepSize))}
          className="coordinate-left"
          icon={<CaretLeft />}
          disabled={loading || !canEdit}
        />
        <Button
          tooltip={right.label}
          data-testid={right.label}
          style={{ gridArea: 'gr' }}
          onClick={() => onChange?.(right.mod({ horizontal: x, vertical: y }, stepSize))}
          className="coordinate-right"
          icon={<CaretRight />}
          disabled={loading || !canEdit}
        />
        <Button
          tooltip={down.label}
          data-testid={down.label}
          style={{ gridArea: 'gd' }}
          onClick={() => onChange?.(down.mod({ horizontal: x, vertical: y }, stepSize))}
          className="coordinate-down"
          icon={<CaretDown />}
          disabled={loading || !canEdit}
        />
      </div>
      <div className="coordinates-stepsize">
        <div className="control-row">
          <label htmlFor="step-stepsize">Step</label>
          <InputNumber
            disabled={loading || !canEdit}
            inputId="step-stepsize"
            min={0}
            maxFractionDigits={1}
            value={stepSize}
            onValueChange={(e) => setStepSize(e.value!)}
          />
        </div>

        <Slider
          disabled={loading || !canEdit}
          min={0.1}
          max={5}
          step={0.1}
          value={stepSize}
          onChange={(e) => setStepSize(e.value as number)}
        />
      </div>
    </div>
  );
}
export function ManualInput({
  onChange,
  auxCoords,
  strategy,
  loading,
  canEdit,
}: {
  onChange: CoordOnChange;
  auxCoords: { horizontal: number; vertical: number };
  strategy: HandsetStrategy;
  loading: boolean;
  canEdit: boolean;
}) {
  return (
    <div className="control-row">
      <label htmlFor="manual-input-second">{strategy.vertical.label}</label>
      <InputNumber
        inputId="manual-input-second"
        disabled={loading || !canEdit}
        value={auxCoords.vertical}
        maxFractionDigits={2}
        onValueChange={(e) =>
          onChange(strategy.vertical.mod({ horizontal: auxCoords.horizontal, vertical: auxCoords.vertical }, e.value!))
        }
      />
      <label htmlFor="manual-input-first">{strategy.horizontal.label}</label>
      <InputNumber
        inputId="manual-input-first"
        disabled={loading || !canEdit}
        value={auxCoords.horizontal}
        maxFractionDigits={2}
        onValueChange={(e) =>
          onChange(
            strategy.horizontal.mod({ horizontal: auxCoords.horizontal, vertical: auxCoords.vertical }, e.value!),
          )
        }
      />
    </div>
  );
}

export function CurrentCoordinates({
  horizontal,
  vertical,
  horizontalLabel,
  verticalLabel,
  currentLabel,
}: {
  horizontal: number | string | undefined;
  vertical: number | string | undefined;
  horizontalLabel: string;
  verticalLabel: string;
  currentLabel?: string;
}) {
  const current = currentLabel ?? 'Current offset:';
  return (
    <div className="control-row">
      <span>
        <b>{current}</b> {horizontalLabel} {horizontal} {verticalLabel} {vertical}
      </span>
    </div>
  );
}

export function OpenLoopsInput({
  openLoops,
  onChange,
  loading,
  canEdit,
}: {
  openLoops: boolean;
  onChange: (value: boolean) => void;
  loading: boolean;
  canEdit: boolean;
}) {
  return (
    <div className="control-row open-loops">
      <label htmlFor="open-loops">Open loops</label>
      <InputSwitch
        disabled={loading || !canEdit}
        inputId="open-loops"
        checked={openLoops}
        onChange={(e) => onChange(e.value)}
      />
    </div>
  );
}

export function Autoadjust() {
  return (
    <div className="control-row under-construction">
      <Button size="small" label="Autoadjust" />
    </div>
  );
}
