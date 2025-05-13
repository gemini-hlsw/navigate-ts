import imgUrl from '@assets/underconstruction.png';
import type { GuideProbe } from '@gql/server/gen/graphql';
import { useGuideState } from '@gql/server/GuideState';
import { useOiwfsObserve, useOiwfsStopObserve, useTakeSky } from '@gql/server/WavefrontSensors';
import { clsx } from 'clsx';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { useCallback, useId, useState } from 'react';

import { Play, Stop } from '@/components/Icons';

export default function WavefrontSensor({
  canEdit,
  wfs,
  className = '',
}: {
  canEdit: boolean;
  wfs: string;
  className?: string;
}) {
  const id = useId();
  const [freq, setFreq] = useState(100);

  let observeButton: React.ReactNode | undefined;
  let skyButton: React.ReactNode | undefined;
  if (wfs === 'OIWFS') {
    observeButton = <OiwfsObserveButton freq={freq} canEdit={canEdit} />;
    skyButton = <TakeSkyButton freq={freq} wfs="GMOS_OIWFS" canEdit={canEdit} />;
  } else if (wfs === 'PWFS1') {
    /* Show placeholder */
    observeButton = <Pwfs1ObserveButton canEdit={canEdit} />;
    skyButton = <TakeSkyButton freq={freq} wfs="PWFS_1" canEdit={canEdit} />;
  } else if (wfs === 'PWFS2') {
    /* Show placeholder */
    observeButton = <Pwfs2ObserveButton canEdit={canEdit} />;
    skyButton = <TakeSkyButton freq={freq} wfs="PWFS_2" canEdit={canEdit} />;
  }

  return (
    <div className={`wfs ${className}`}>
      <span className="wfs-name">{wfs}</span>
      <img src={imgUrl} alt="wfs" />
      <div className="controls">
        <span style={{ alignSelf: 'center', gridArea: 'g11' }}>Freq</span>
        <Dropdown
          disabled={!canEdit}
          style={{ gridArea: 'g12' }}
          value={freq}
          options={[
            { label: '50', value: 50.0 },
            { label: '100', value: 100.0 },
            { label: '200', value: 200.0 },
          ]}
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
  const { data: guideStateData, loading: guideStateLoading, setStale } = useGuideState();

  const [startObserve, { loading: startObserveLoading }] = useOiwfsObserve(setStale);
  const [stopObserve, { loading: stopObserveLoading }] = useOiwfsStopObserve(setStale);

  const integrating = guideStateData?.oiIntegrating;

  const onClick = useCallback(
    () =>
      integrating
        ? void stopObserve({})
        : void startObserve({
            variables: { period: { milliseconds: (1 / freq) * 1000 } },
          }),
    [freq, integrating, startObserve, stopObserve],
  );

  return (
    <Button
      loading={guideStateLoading || startObserveLoading || stopObserveLoading}
      disabled={!canEdit}
      style={{ gridArea: 'g13' }}
      icon={integrating ? <Stop /> : <Play />}
      className={clsx(integrating && 'p-button-danger')}
      aria-label={integrating ? 'Stop' : 'Start'}
      tooltip={integrating ? 'Stop' : 'Start'}
      onClick={onClick}
    />
  );
}

function Pwfs1ObserveButton({ canEdit }: { canEdit: boolean }) {
  return (
    <Button
      className="under-construction"
      disabled={!canEdit}
      icon={<Play />}
      style={{ gridArea: 'g13' }}
      aria-label="Start"
      tooltip="Start"
    />
  );
}

function Pwfs2ObserveButton({ canEdit }: { canEdit: boolean }) {
  return (
    <Button
      className="under-construction"
      disabled={!canEdit}
      icon={<Play />}
      style={{ gridArea: 'g13' }}
      aria-label="Start"
      tooltip="Start"
    />
  );
}

function TakeSkyButton({ freq, wfs, canEdit }: { freq: number; wfs: GuideProbe; canEdit: boolean }) {
  const [takeSky, { loading: takeSkyLoading }] = useTakeSky();

  const onClick = useCallback(
    () => void takeSky({ variables: { wfs, period: { milliseconds: (1 / freq) * 1000 } } }),
    [freq, takeSky, wfs],
  );

  return (
    <Button
      className={wfs.includes('OIWFS') ? '' : 'under-construction'}
      loading={takeSkyLoading}
      disabled={!canEdit}
      style={{ gridArea: 'g23' }}
      aria-label="Take Sky"
      tooltip="Take Sky"
      onClick={onClick}
    >
      Sky
    </Button>
  );
}
