import imgUrl from '@assets/underconstruction.png';
import { useConfiguration } from '@gql/configs/Configuration';
import type { WfsType } from '@gql/configs/gen/graphql';
import type { GuideProbe } from '@gql/server/gen/graphql';
import { useGuideState } from '@gql/server/GuideState';
import {
  type ObserveResult,
  type StopObserveResult,
  useOiwfsObserve,
  useOiwfsStopObserve,
  usePwfs1Observe,
  usePwfs1StopObserve,
  usePwfs2Observe,
  usePwfs2StopObserve,
  useTakeSky,
} from '@gql/server/WavefrontSensors';
import { clsx } from 'clsx';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useId, useState } from 'react';

import { Play, Stop } from '@/components/Icons';
import { instrumentToOiwfs } from '@/Helpers/functions';

export default function WavefrontSensor({
  canEdit,
  wfs,
  className,
}: {
  canEdit: boolean;
  wfs: Omit<WfsType, 'NONE'>;
  className?: string;
}) {
  const id = useId();
  const [freq, setFreq] = useState(200);
  const [freqOptions, setFreqOptions] = useState([1, 2, 10, 20, 50, 100, 125, 200]);

  const { data: configData, loading: configLoading } = useConfiguration();
  const configuration = configData?.configuration;

  useEffect(() => {
    function checkFreqList(list: number[]) {
      if (!list.includes(freq)) {
        setFreq(200);
      }
      setFreqOptions(list);
    }

    if (!configuration?.obsInstrument) return;

    if (configuration.obsInstrument.includes('GMOS')) {
      checkFreqList([1, 2, 10, 20, 50, 100, 200]);
    } else if (configuration.obsInstrument === 'FLAMINGOS2') {
      checkFreqList([1, 2, 10, 20, 50, 125, 200]);
    } else {
      checkFreqList([1, 2, 10, 20, 50, 100, 125, 200]);
    }
  }, [configuration?.obsInstrument, freq]);

  let observeButton: React.ReactNode | undefined;
  let skyButton: React.ReactNode | undefined;
  if (wfs === 'OIWFS') {
    observeButton = <OiwfsObserveButton freq={freq} canEdit={canEdit && !configLoading} />;
    skyButton = <TakeSkyButton freq={freq} wfs="GMOS_OIWFS" canEdit={canEdit} />;
  } else if (wfs === 'PWFS1') {
    observeButton = <Pwfs1ObserveButton freq={freq} canEdit={canEdit && !configLoading} />;
    skyButton = <TakeSkyButton freq={freq} wfs="PWFS1" canEdit={canEdit} />;
  } else if (wfs === 'PWFS2') {
    observeButton = <Pwfs2ObserveButton freq={freq} canEdit={canEdit && !configLoading} />;
    skyButton = <TakeSkyButton freq={freq} wfs="PWFS2" canEdit={canEdit} />;
  }

  return (
    <div className={clsx('wfs', className)} data-testid={`${wfs.toLowerCase()}-controls`}>
      <span className="wfs-name">{wfs}</span>
      <img src={imgUrl} alt="wfs" />
      <div className="controls">
        <span style={{ alignSelf: 'center', gridArea: 'g11' }}>Freq</span>
        <Dropdown
          disabled={!canEdit || configLoading}
          style={{ gridArea: 'g12' }}
          value={freq}
          options={freqOptions.map((f) => ({ label: f.toString(), value: f }))}
          onChange={(e) => setFreq(e.value as number)}
        />
        {observeButton}
        <label htmlFor={`save-${id}`} style={{ alignSelf: 'center', gridArea: 'g21' }}>
          Save
        </label>
        <Checkbox
          inputId={`save-${id}`}
          className="under-construction"
          disabled={!canEdit}
          style={{ gridArea: 'g22' }}
          checked={true}
        />
        {skyButton}
        <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g3' }} label="Autoadjust" />
      </div>
    </div>
  );
}

function OiwfsObserveButton({ freq, canEdit }: { freq: number; canEdit: boolean }) {
  const { data: guideStateData, loading, setStale } = useGuideState();

  const observe = useOiwfsObserve(setStale);
  const stopObserve = useOiwfsStopObserve(setStale);

  return (
    <ObserveButton
      loading={loading}
      freq={freq}
      canEdit={canEdit}
      integrating={guideStateData?.oiIntegrating}
      observeResult={observe}
      stopObserveResult={stopObserve}
    />
  );
}

function Pwfs1ObserveButton({ freq, canEdit }: { freq: number; canEdit: boolean }) {
  const { data: guideStateData, loading, setStale } = useGuideState();

  const observe = usePwfs1Observe(setStale);
  const stopObserve = usePwfs1StopObserve(setStale);
  return (
    <ObserveButton
      loading={loading}
      freq={freq}
      canEdit={canEdit}
      integrating={guideStateData?.p1Integrating}
      observeResult={observe}
      stopObserveResult={stopObserve}
    />
  );
}

function Pwfs2ObserveButton({ freq, canEdit }: { freq: number; canEdit: boolean }) {
  const { data: guideStateData, loading, setStale } = useGuideState();

  const observe = usePwfs2Observe(setStale);
  const stopObserve = usePwfs2StopObserve(setStale);
  return (
    <ObserveButton
      loading={loading}
      freq={freq}
      canEdit={canEdit}
      integrating={guideStateData?.p2Integrating}
      observeResult={observe}
      stopObserveResult={stopObserve}
    />
  );
}

export function ObserveButton({
  freq,
  canEdit,
  integrating,
  observeResult,
  stopObserveResult,
  loading,
  style = { gridArea: 'g13' },
}: {
  freq: number;
  canEdit: boolean;
  integrating: boolean | undefined;
  observeResult: ObserveResult;
  stopObserveResult: StopObserveResult;
  loading: boolean;
  style?: React.CSSProperties;
}) {
  const [startObserve, { loading: startObserveLoading }] = observeResult;
  const [stopObserve, { loading: stopObserveLoading }] = stopObserveResult;

  const onClick = () =>
    integrating
      ? stopObserve({})
      : startObserve({
          variables: { period: { milliseconds: (1 / freq) * 1000 } },
        });

  return (
    <Button
      loading={loading || startObserveLoading || stopObserveLoading}
      disabled={!canEdit}
      style={style}
      icon={integrating ? <Stop /> : <Play />}
      severity={integrating ? 'danger' : undefined}
      aria-label={integrating ? 'Stop' : 'Start'}
      tooltip={integrating ? 'Stop' : 'Start'}
      onClick={onClick}
    />
  );
}

function TakeSkyButton({ freq, wfs, canEdit }: { freq: number; wfs: GuideProbe; canEdit: boolean }) {
  const [takeSky, { loading: takeSkyLoading }] = useTakeSky();

  // Instrument being used
  const { data: configData, loading: configLoading } = useConfiguration();
  const instrument = configData?.configuration?.obsInstrument;

  const onClick = () =>
    takeSky({
      variables: {
        wfs: wfs.includes('OIWFS') ? instrumentToOiwfs(instrument)! : wfs,
        period: { milliseconds: (1 / freq) * 1000 },
      },
    });

  return (
    <Button
      loading={takeSkyLoading}
      disabled={!canEdit || configLoading}
      style={{ gridArea: 'g23' }}
      aria-label="Take Sky"
      tooltip="Take Sky"
      onClick={onClick}
    >
      Sky
    </Button>
  );
}
