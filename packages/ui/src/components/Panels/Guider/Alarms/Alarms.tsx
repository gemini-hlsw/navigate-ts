import type { UpdateGuideAlarmMutationVariables } from '@gql/configs/gen/graphql';
import { useGuideAlarms, useUpdateGuideAlarm } from '@gql/configs/GuideAlarm';
import { useGuideQualities } from '@gql/server/GuideQuality';
import { useGuideState } from '@gql/server/GuideState';
import { Title } from '@Shared/Title/Title';
import { useCallback, useEffect } from 'react';

import { useSetGuideAlarmSound } from '@/components/atoms/alarm';
import { useCanEdit } from '@/components/atoms/auth';

import { Alarm } from './Alarm';
import { evaluateAlarm, evaluateAlarmSound } from './evaluate';

export function Alarms() {
  const canEdit = useCanEdit();
  const toggleGuideAlarm = useSetGuideAlarmSound();

  const { loading: guideStateLoading, data: guideState } = useGuideState();

  const { data, loading: subscriptionLoading } = useGuideQualities();
  const guideQualities = data?.guidersQualityValues;

  const { data: alarmsData, loading: alarmsLoading } = useGuideAlarms();
  const alarms = alarmsData?.guideAlarms;

  const [updateAlarm, { loading: updateLoading }] = useUpdateGuideAlarm();

  useEffect(() => {
    const hasAlarm =
      !!alarms &&
      !!guideQualities &&
      !!guideState &&
      (evaluateAlarmSound(alarms.OIWFS, guideQualities.oiwfs, guideState) ||
        evaluateAlarmSound(alarms.PWFS1, guideQualities.pwfs1, guideState) ||
        evaluateAlarmSound(alarms.PWFS2, guideQualities.pwfs2, guideState));

    toggleGuideAlarm(hasAlarm);
  }, [alarms, guideQualities, guideState, toggleGuideAlarm]);

  const onUpdateAlarm = useCallback(
    (variables: UpdateGuideAlarmMutationVariables) => {
      void updateAlarm({ variables });
    },
    [updateAlarm],
  );

  const disabled = !canEdit || subscriptionLoading || alarmsLoading || updateLoading || guideStateLoading;

  return (
    <div className="alarms">
      <Title title="Guide Alarms" />
      <div className="body">
        <Alarm
          wfs="PWFS1"
          guideQuality={guideQualities?.pwfs1}
          alarm={alarms?.PWFS1}
          disabled={disabled}
          onUpdateAlarm={onUpdateAlarm}
          hasAlarm={evaluateAlarm(alarms?.PWFS1, guideQualities?.pwfs1, guideState)}
        />
        <Alarm
          wfs="PWFS2"
          guideQuality={guideQualities?.pwfs2}
          alarm={alarms?.PWFS2}
          disabled={disabled}
          onUpdateAlarm={onUpdateAlarm}
          hasAlarm={evaluateAlarm(alarms?.PWFS2, guideQualities?.pwfs2, guideState)}
        />
        <Alarm
          wfs="OIWFS"
          guideQuality={guideQualities?.oiwfs}
          alarm={alarms?.OIWFS}
          disabled={disabled}
          onUpdateAlarm={onUpdateAlarm}
          hasAlarm={evaluateAlarm(alarms?.OIWFS, guideQualities?.oiwfs, guideState)}
        />
      </div>
    </div>
  );
}
