import guideCountsMp3 from '@assets/sounds/guide-counts-below-threshold.mp3';
import guideCountsWebm from '@assets/sounds/guide-counts-below-threshold.webm';
import subapBadMp3 from '@assets/sounds/subapertures-bad.mp3';
import subapBadWebm from '@assets/sounds/subapertures-bad.webm';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, RESET } from 'jotai/utils';

// More types can be added as needed
export type AlarmType = 'GUIDE_COUNTS' | 'SUBAPERTURES_BAD';

interface Alarm {
  type: AlarmType;
  mp3: string;
  webm: string;
}

const alarmAtom = atomWithReset<Alarm | null>(null);
export const useAlarm = () => useAtom(alarmAtom);
export const useAlarmValue = () => useAtomValue(alarmAtom);

const guideCountsAlarm: Alarm = { type: 'GUIDE_COUNTS', mp3: guideCountsMp3, webm: guideCountsWebm };
const subaperturesAlarm: Alarm = { type: 'SUBAPERTURES_BAD', mp3: subapBadMp3, webm: subapBadWebm };
export const guideAlarmSoundAtom = atom(
  (get) => get(alarmAtom)?.type,
  (_get, set, value: AlarmType | undefined) => {
    switch (value) {
      case 'GUIDE_COUNTS':
        return set(alarmAtom, guideCountsAlarm);
      case 'SUBAPERTURES_BAD':
        return set(alarmAtom, subaperturesAlarm);
      default:
        return set(alarmAtom, RESET);
    }
  },
);
export const useGuideAlarm = () => useAtom(guideAlarmSoundAtom);
export const useSetGuideAlarmSound = () => useSetAtom(guideAlarmSoundAtom);
export const useGuideAlarmSoundValue = () => useAtomValue(guideAlarmSoundAtom);
