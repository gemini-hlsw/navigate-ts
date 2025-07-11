import type { GuideLoop, UpdateGuideLoopMutationVariables } from '@gql/configs/gen/graphql';
import { useGetGuideLoop, useUpdateGuideLoop } from '@gql/configs/GuideLoop';
import type { GuideConfigurationInput, M1CorrectionSource, TipTiltSource } from '@gql/server/gen/graphql';
import { useGuideDisable, useGuideEnable } from '@gql/server/GuideState';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressSpinner } from 'primereact/progressspinner';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useServerConfigValue } from '@/components/atoms/config';

import { Altair, GeMS } from './AdaptiveOptics';
import { BrokenChain, ConnectedChain } from './Chain';

export function Configuration() {
  const canEdit = useCanEdit();
  const { data, loading: guideLoopLoading } = useGetGuideLoop();

  const { site } = useServerConfigValue();
  const state = useMemo(
    () =>
      data?.guideLoop ??
      ({
        m1CorrectionsEnable: true,
        m2ComaM1CorrectionsSource: 'OIWFS',
      } as GuideLoop),
    [data?.guideLoop],
  );

  const m2ComaNotAllowed = state.m2TipTiltSource?.includes('OIWFS');

  const [updateGuideLoop, { loading: updateLoading }] = useUpdateGuideLoop();
  const [guideEnable, { loading: enableLoading }] = useGuideEnable();
  const [guideDisable, { loading: disableLoading }] = useGuideDisable();

  const modifyGuideLoop = useCallback(
    <T extends keyof UpdateGuideLoopMutationVariables>(name: T, value: UpdateGuideLoopMutationVariables[T]) => {
      if (state.pk)
        void updateGuideLoop({
          variables: {
            pk: state.pk,
            [name]: value,
          },
          optimisticResponse: {
            updateGuideLoop: {
              ...state,
              [name]: value,
            },
          },
        });
    },
    [state, updateGuideLoop],
  );

  function translateStateGuideInput(): GuideConfigurationInput {
    const m2Inputs: TipTiltSource[] = [];
    if (state.m2TipTiltEnable) {
      if (state.m2TipTiltSource.split(',').includes('OIWFS')) {
        m2Inputs.push('OIWFS');
      }
    }
    const m1Input =
      state.m1CorrectionsEnable && state.m2ComaM1CorrectionsSource ? state.m2ComaM1CorrectionsSource : undefined;
    if (state.probeTracking === 'NONE') {
      return {
        m2Inputs: m2Inputs,
        m2Coma: state.m2ComaEnable,
        m1Input: m1Input as M1CorrectionSource,
        mountOffload: state.mountOffload,
        daytimeMode: state.daytimeMode,
      };
    }

    const [probeFrom, probeTo] = state.probeTracking.split('➡');
    return {
      m2Inputs: m2Inputs,
      m2Coma: state.m2ComaEnable,
      m1Input: m1Input as M1CorrectionSource,
      mountOffload: state.mountOffload,
      daytimeMode: state.daytimeMode,
      probeGuide: {
        from: probeFrom === 'OI' ? 'GMOS_OIWFS' : probeFrom === 'P1' ? 'PWFS_1' : 'PWFS_2',
        to: probeTo === 'OI' ? 'GMOS_OIWFS' : probeTo === 'P1' ? 'PWFS_1' : 'PWFS_2',
      },
    };
  }

  useEffect(() => {
    if (m2ComaNotAllowed && state.m2ComaEnable) {
      modifyGuideLoop('m2ComaEnable', false);
    }
  }, [m2ComaNotAllowed, state.m2ComaEnable, modifyGuideLoop]);

  let aoSystem: ReactNode | null = null;
  if (
    state.m2TipTiltSource?.split(',').includes('GAOS') ||
    state.m2FocusSource?.split(',').includes('GAOS') ||
    state.m2ComaM1CorrectionsSource === 'GAOS'
  ) {
    if (site === 'GN') {
      aoSystem = <Altair />;
    } else if (site === 'GS') {
      aoSystem = <GeMS />;
    }
  }

  const disabled = !canEdit;
  const loading = guideLoopLoading || updateLoading;

  return (
    <>
      <div className="configuration">
        <div className="body">
          <label
            htmlFor={state.m2TipTiltEnable ? 'm2TipTiltSource' : 'm2TipTiltEnable'}
            className="label"
            style={{ gridArea: 'l1' }}
          >
            M2 Tip/Tilt
          </label>
          <Checkbox
            inputId="m2TipTiltEnable"
            style={{ gridArea: 's1' }}
            disabled={disabled || loading}
            checked={state.m2TipTiltEnable}
            onChange={() => modifyGuideLoop('m2TipTiltEnable', !state.m2TipTiltEnable)}
          />
          {loading ? (
            <ProgressSpinner style={{ width: '20px', height: '20px' }} />
          ) : (
            <MultiSelect
              inputId="m2TipTiltSource"
              value={state.m2TipTiltSource ? state.m2TipTiltSource.split(',') : []}
              onChange={(e) => modifyGuideLoop('m2TipTiltSource', (e.value as string[]).join(','))}
              options={[
                { label: 'OIWFS', value: 'OIWFS' },
                // { label: "PWFS1", value: "PWFS1" },
                // { label: "PWFS2", value: "PWFS2" },
                // { label: "GAOS", value: "GAOS" },
              ]}
              placeholder="Select sources"
              maxSelectedLabels={3}
              showClear={false}
              showSelectAll={false}
              style={{ gridArea: 'd1' }}
              disabled={disabled || !state.m2TipTiltEnable}
            />
          )}
          <div className="lever" onClick={() => modifyGuideLoop('m2TipTiltFocusLink', !state.m2TipTiltFocusLink)}>
            {state.m2TipTiltFocusLink ? <ConnectedChain /> : <BrokenChain />}
          </div>
          <label
            htmlFor={state.m2FocusEnable && !state.m2TipTiltFocusLink ? 'm2FocusSource' : 'm2FocusEnable'}
            className="label"
            style={{ gridArea: 'l2' }}
          >
            M2 Focus
          </label>
          <Checkbox
            inputId="m2FocusEnable"
            style={{ gridArea: 's2' }}
            disabled={disabled || loading}
            checked={state.m2FocusEnable}
            onChange={() => modifyGuideLoop('m2FocusEnable', !state.m2FocusEnable)}
          />
          {loading ? (
            <ProgressSpinner style={{ width: '20px', height: '20px' }} />
          ) : (
            <MultiSelect
              inputId="m2FocusSource"
              value={
                state.m2TipTiltFocusLink
                  ? state.m2TipTiltSource
                    ? state.m2TipTiltSource.split(',')
                    : []
                  : state.m2FocusSource
                    ? state.m2FocusSource.split(',')
                    : []
              }
              onChange={(e) => modifyGuideLoop('m2FocusSource', (e.value as string[]).join(','))}
              options={[
                { label: 'OIWFS', value: 'OIWFS' },
                // { label: "PWFS1", value: "PWFS1" },
                // { label: "PWFS2", value: "PWFS2" },
                // { label: "GAOS", value: "GAOS" },
              ]}
              placeholder="Select sources"
              maxSelectedLabels={3}
              showClear={false}
              showSelectAll={false}
              style={{ gridArea: 'd2' }}
              disabled={disabled || state.m2TipTiltFocusLink || !state.m2FocusEnable}
            />
          )}
          <label
            htmlFor={state.m2ComaEnable ? 'm2ComaM1CorrectionsSource' : 'm2ComaEnable'}
            className="label"
            style={{ gridArea: 'l3' }}
          >
            M2 Coma
          </label>
          <Checkbox
            inputId="m2ComaEnable"
            disabled={disabled || loading || m2ComaNotAllowed}
            checked={state.m2ComaEnable}
            onChange={() => modifyGuideLoop('m2ComaEnable', !state.m2ComaEnable)}
          />
          <Dropdown
            inputId="m2ComaM1CorrectionsSource"
            style={{ gridArea: 'd3' }}
            disabled={disabled || (!state.m2ComaEnable && !state.m1CorrectionsEnable)}
            loading={loading}
            value={state.m2ComaM1CorrectionsSource}
            // options={["PWFS1", "PWFS2", "PWFS1 & PWFS2", "OIWFS", "GAOS"]}
            options={['OIWFS']}
            onChange={(e) => modifyGuideLoop('m2ComaM1CorrectionsSource', e.target.value as string)}
            placeholder="Select a source"
          />
          <label htmlFor="m1CorrectionsEnable" className="label" style={{ gridArea: 'l4' }}>
            M1 Corrections
          </label>
          <Checkbox
            inputId="m1CorrectionsEnable"
            style={{ gridArea: 's4' }}
            disabled={disabled || loading}
            checked={state.m1CorrectionsEnable}
            onChange={() => modifyGuideLoop('m1CorrectionsEnable', !state.m1CorrectionsEnable)}
          />
          <label htmlFor="mountOffload" className="label" style={{ gridArea: 'l5' }}>
            Mount offload
          </label>
          <Checkbox
            inputId="mountOffload"
            style={{ gridArea: 's5' }}
            disabled={disabled || loading}
            checked={state.mountOffload}
            onChange={() => modifyGuideLoop('mountOffload', !state.mountOffload)}
          />
          <label htmlFor="daytimeMode" className="label" style={{ gridArea: 'l6' }}>
            Daytime mode
          </label>
          <Checkbox
            inputId="daytimeMode"
            style={{ gridArea: 's6' }}
            disabled={disabled || loading}
            checked={state.daytimeMode}
            onChange={() => modifyGuideLoop('daytimeMode', !state.daytimeMode)}
          />
          <label htmlFor="probeTracking" className="label" style={{ gridArea: 'l7' }}>
            Probe tracking
          </label>
          <Dropdown
            inputId="probeTracking"
            style={{ gridArea: 'd7' }}
            disabled={disabled}
            loading={loading}
            value={state.probeTracking}
            options={['OI➡OI', 'OI➡P1', 'OI➡P2', 'P1➡P1', 'P2➡P2', 'NONE']}
            onChange={(e) => modifyGuideLoop('probeTracking', e.target.value as string)}
            placeholder="Select a tracking"
          />
        </div>
        <div className="buttons">
          <Button
            disabled={disabled || enableLoading || disableLoading}
            onClick={() =>
              void guideEnable({
                variables: {
                  config: translateStateGuideInput(),
                },
              })
            }
          >
            Enable
          </Button>
          <Button disabled={disabled || enableLoading || disableLoading} onClick={() => void guideDisable()}>
            Disable
          </Button>
        </div>
      </div>
      {aoSystem}
    </>
  );
}
