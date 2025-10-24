import { useCreateCalParams, useSuspenseCalParams } from '@gql/configs/CalParams';
import type { CalParamsCreateInput } from '@gql/configs/gen/graphql';
import { CommentConfirmButton } from '@Shared/CommentConfirmButton';
import { clsx } from 'clsx';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Tooltip } from 'primereact/tooltip';
import { Suspense, useId, useState } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useCalParamsVisible } from '@/components/atoms/calparams';
import { useServerConfigValue } from '@/components/atoms/config';
import { ClockRotateLeft, TriangleExclamation } from '@/components/Icons';
import { SolarProgress } from '@/components/SolarProgress';
import { isNotNullish } from '@/Helpers/functions';

export function CalParams() {
  const [visible, setVisible] = useCalParamsVisible();

  return (
    <Dialog header="Calibration Parameters" visible={visible} onHide={() => setVisible(false)}>
      <Suspense
        fallback={
          <div className="cal-params-loading">
            <SolarProgress />
          </div>
        }
      >
        <CalParamsContent />
      </Suspense>
    </Dialog>
  );
}

function CalParamsContent() {
  const { site } = useServerConfigValue();

  const { data: calParamsData } = useSuspenseCalParams(site);
  const calParams = calParamsData.calParams;
  const canEdit = useCanEdit();

  const [createCalparams, { loading: createCalparamsLoading }] = useCreateCalParams();

  const loading = createCalparamsLoading;

  const [auxCalParams, setAuxCalParams] = useState<Omit<CalParamsCreateInput, 'site'>>({
    acqCamX: calParams.acqCamX,
    acqCamY: calParams.acqCamY,
    baffleVisible: calParams.baffleVisible,
    baffleNearIR: calParams.baffleNearIR,
    topShutterCurrentLimit: calParams.topShutterCurrentLimit,
    bottomShutterCurrentLimit: calParams.bottomShutterCurrentLimit,
    pwfs1CenterX: calParams.pwfs1CenterX,
    pwfs1CenterY: calParams.pwfs1CenterY,
    pwfs1CenterZ: calParams.pwfs1CenterZ,
    pwfs2CenterX: calParams.pwfs2CenterX,
    pwfs2CenterY: calParams.pwfs2CenterY,
    pwfs2CenterZ: calParams.pwfs2CenterZ,
    defocusEnabled: calParams.defocusEnabled,
    gnirsSfoDefocus: calParams.gnirsSfoDefocus,
    gmosSfoDefocus: calParams.gmosSfoDefocus,
    gmosOiDefocus: calParams.gmosOiDefocus,
    gmosP1Defocus: calParams.gmosP1Defocus,
    gnirsP1Defocus: calParams.gnirsP1Defocus,
  });

  const changedKeys = new Set(
    (Object.keys(auxCalParams) as (keyof typeof auxCalParams)[]).filter((k) => auxCalParams[k] !== calParams[k]),
  );

  const updateCalParam = (key: keyof CalParamsCreateInput, value: number) =>
    setAuxCalParams((prev) => ({
      ...prev,
      [key]: value,
    }));

  const saveButton = (
    <CommentConfirmButton
      loading={loading}
      disabled={!canEdit}
      tooltip="Save params"
      message="Save parameters?"
      initialComment={changedKeys.size > 0 ? `Changed parameters: ${[...changedKeys].join(', ')}` : ''}
      onConfirm={async (comment) => {
        await createCalparams({ variables: { input: { ...auxCalParams, site, comment } } });
      }}
    />
  );

  return (
    <>
      <div className="cal-params-header-buttons">
        <Button severity="secondary" icon={<ClockRotateLeft />} tooltip="Revert to previous configuration" />
        {saveButton}
      </div>

      <div className="cal-params-content">
        <CalParamInputGroup title="Acquisition Cam">
          <CalParamInput
            label="X"
            value={auxCalParams?.acqCamX}
            onChange={(value) => updateCalParam('acqCamX', value)}
            loading={loading}
            filled={changedKeys.has('acqCamX')}
          />
          <CalParamInput
            label="Y"
            value={auxCalParams?.acqCamY}
            onChange={(value) => updateCalParam('acqCamY', value)}
            loading={loading}
            filled={changedKeys.has('acqCamY')}
          />
        </CalParamInputGroup>

        <CalParamInputGroup title="Baffle">
          <CalParamInput
            label="Visible"
            value={auxCalParams?.baffleVisible}
            onChange={(value) => updateCalParam('baffleVisible', value)}
            loading={loading}
            filled={changedKeys.has('baffleVisible')}
          />
          <CalParamInput
            label="Near IR"
            value={auxCalParams?.baffleNearIR}
            onChange={(value) => updateCalParam('baffleNearIR', value)}
            loading={loading}
            filled={changedKeys.has('baffleNearIR')}
          />
        </CalParamInputGroup>

        <CalParamInputGroup title="Shutter Current Limits" underConstruction>
          <CalParamInput
            label="Top"
            value={auxCalParams?.topShutterCurrentLimit}
            onChange={(value) => updateCalParam('topShutterCurrentLimit', value)}
            loading={loading}
            filled={changedKeys.has('topShutterCurrentLimit')}
          />
          <CalParamInput
            label="Bottom"
            value={auxCalParams?.bottomShutterCurrentLimit}
            onChange={(value) => updateCalParam('bottomShutterCurrentLimit', value)}
            loading={loading}
            filled={changedKeys.has('bottomShutterCurrentLimit')}
          />
        </CalParamInputGroup>

        <CalParamInputGroup title="PWFS1 Center" underConstruction>
          <CalParamInput
            label="X"
            value={auxCalParams?.pwfs1CenterX}
            onChange={(value) => updateCalParam('pwfs1CenterX', value)}
            loading={loading}
            filled={changedKeys.has('pwfs1CenterX')}
          />
          <CalParamInput
            label="Y"
            value={auxCalParams?.pwfs1CenterY}
            onChange={(value) => updateCalParam('pwfs1CenterY', value)}
            loading={loading}
            filled={changedKeys.has('pwfs1CenterY')}
          />
          <CalParamInput
            label="Z"
            value={auxCalParams?.pwfs1CenterZ}
            onChange={(value) => updateCalParam('pwfs1CenterZ', value)}
            loading={loading}
            filled={changedKeys.has('pwfs1CenterZ')}
          />
        </CalParamInputGroup>

        <CalParamInputGroup title="PWFS2 Center" underConstruction>
          <CalParamInput
            label="X"
            value={auxCalParams?.pwfs2CenterX}
            onChange={(value) => updateCalParam('pwfs2CenterX', value)}
            loading={loading}
            filled={changedKeys.has('pwfs2CenterX')}
          />
          <CalParamInput
            label="Y"
            value={auxCalParams?.pwfs2CenterY}
            onChange={(value) => updateCalParam('pwfs2CenterY', value)}
            loading={loading}
            filled={changedKeys.has('pwfs2CenterY')}
          />
          <CalParamInput
            label="Z"
            value={auxCalParams?.pwfs2CenterZ}
            onChange={(value) => updateCalParam('pwfs2CenterZ', value)}
            loading={loading}
            filled={changedKeys.has('pwfs2CenterZ')}
          />
        </CalParamInputGroup>

        {calParams.defocusEnabled && (
          <>
            <CalParamInputGroup title="SFO Defocus" underConstruction>
              <CalParamInput
                label="GNIRS"
                value={auxCalParams?.gnirsSfoDefocus}
                onChange={(value) => updateCalParam('gnirsSfoDefocus', value)}
                loading={loading}
                filled={changedKeys.has('gnirsSfoDefocus')}
              />
              <CalParamInput
                label="GMOS"
                value={auxCalParams?.gmosSfoDefocus}
                onChange={(value) => updateCalParam('gmosSfoDefocus', value)}
                loading={loading}
                filled={changedKeys.has('gmosSfoDefocus')}
              />
            </CalParamInputGroup>

            <CalParamInputGroup title="LGS+P1 Defocus" underConstruction>
              <CalParamInput
                label="GNIRS"
                value={auxCalParams?.gnirsP1Defocus}
                onChange={(value) => updateCalParam('gnirsP1Defocus', value)}
                loading={loading}
                filled={changedKeys.has('gnirsP1Defocus')}
              />
              <CalParamInput
                label="GMOS P1"
                value={auxCalParams?.gmosP1Defocus}
                onChange={(value) => updateCalParam('gmosP1Defocus', value)}
                loading={loading}
                filled={changedKeys.has('gmosP1Defocus')}
              />
              <CalParamInput
                label="GMOS OI"
                value={auxCalParams?.gmosOiDefocus}
                onChange={(value) => updateCalParam('gmosOiDefocus', value)}
                loading={loading}
                filled={changedKeys.has('gmosOiDefocus')}
              />
            </CalParamInputGroup>
          </>
        )}
      </div>
    </>
  );
}

function CalParamInput({
  label,
  value,
  loading,
  filled,
  onChange,
}: {
  label: string;
  value: number | undefined | null;
  loading: boolean;
  filled: boolean;
  onChange: (value: number) => void;
}) {
  const canEdit = useCanEdit();
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputNumber
        className={clsx('cal-param-input', { 'cal-param-input-filled': filled })}
        inputId={id}
        value={value ?? null}
        minFractionDigits={2}
        maxFractionDigits={10}
        onChange={(e) => (isNotNullish(e.value) ? onChange(e.value) : undefined)}
        disabled={loading || !canEdit}
      />
    </>
  );
}

function CalParamInputGroup({
  title,
  children,
  underConstruction,
}: React.PropsWithChildren<{ title: string; underConstruction?: boolean }>) {
  const id = useId();
  return (
    <div className="cal-params-input-group">
      {underConstruction && <Tooltip target={`#${id}-not-implemented`} />}
      <div className="title">
        <span>{title}</span>
        {underConstruction && (
          <span
            id={`${id}-not-implemented`}
            className="under-construction"
            data-pr-tooltip="Not implemented yet. Not used for any functionality."
          >
            <TriangleExclamation />
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
