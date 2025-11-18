import imgUrl from '@assets/underconstruction.png';
import { useGuideState } from '@gql/server/GuideState';
import { useAcObserve, useAcStopObserve } from '@gql/server/WavefrontSensors';
import { ObserveButton } from '@WavefrontSensors/WavefrontSensor/WavefrontSensor';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useState } from 'react';

import MainControls from './MainControls';

export default function AcquisitionCamera({ canEdit, ac }: { canEdit: boolean; ac: string }) {
  const { data: guideStateData, loading, setStale } = useGuideState();

  const observeResult = useAcObserve(setStale);
  const stopObserveResult = useAcStopObserve(setStale);

  const [exp, setExp] = useState(0.01);

  return (
    <div className="acquisition-camera">
      <Splitter>
        <SplitterPanel size={60}>
          <div className="left">
            <div className="image">
              <span className="ac-name">{ac}</span>
              <img src={imgUrl} alt="wfs" />
            </div>
            <div className="controls">
              <label htmlFor="exp" style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g1' }}>
                Exp
              </label>
              <Dropdown
                inputId="exp"
                disabled={!canEdit}
                style={{ gridArea: 'g2' }}
                value={exp}
                onChange={(e) => setExp(e.value as number)}
                options={[
                  { label: '0.01', value: 0.01 },
                  { label: '0.1', value: 0.1 },
                  { label: '1.0', value: 1.0 },
                  { label: '10', value: 10 },
                ]}
              />
              <label htmlFor="save" style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g4' }}>
                Save
              </label>
              <Checkbox
                className="under-construction"
                inputId="save"
                disabled={!canEdit}
                style={{ gridArea: 'g5' }}
                checked={true}
              />

              <ObserveButton
                loading={loading}
                freq={1 / exp}
                canEdit={canEdit}
                integrating={guideStateData?.acIntegrating}
                observeResult={observeResult}
                stopObserveResult={stopObserveResult}
                style={{ gridArea: 'g6' }}
              />
              <Button
                className="under-construction"
                disabled={!canEdit}
                style={{ gridArea: 'g7' }}
                aria-label="Take Sky"
                tooltip="Take Sky"
              >
                Sky
              </Button>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel size={40}>
          <MainControls canEdit={canEdit} />
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
