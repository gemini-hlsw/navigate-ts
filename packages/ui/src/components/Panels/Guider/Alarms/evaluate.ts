import type { GuideAlarm, WfsType } from '@gql/configs/gen/graphql';
import type { GuideConfigurationState, GuideQuality } from '@gql/server/gen/graphql';

type GuideState = Pick<
  GuideConfigurationState,
  'm1Input' | 'm2Inputs' | 'mountOffload' | 'p1Integrating' | 'p2Integrating' | 'oiIntegrating'
>;

/**
 * Alarms should trigger only for active WFS that are being used for correction M2 or M1, and only if the guide quality is below the limit or the centroid is not detected.
 */
export function evaluateAlarm(
  alarm: GuideAlarm | undefined,
  guideQuality: GuideQuality | undefined,
  guideState: GuideState | undefined,
): boolean {
  if (!alarm || !guideQuality || !guideState) return false;

  const allInputs = [...(guideState.m2Inputs ?? []), guideState.m1Input] as (string | undefined)[];

  const correctingM1OrM2 = allInputs.includes(alarm.wfs);

  const isDrifting = guideQuality.flux < alarm.limit || !guideQuality.centroidDetected;

  const isActive = alarmIsActive(guideState, alarm);

  return correctingM1OrM2 && isDrifting && isActive;
}

/**
 * In addition to other alarm rules, if a WFS is used for M2 tip/tilt correction and The offloading of corrections to the mount is enabled, the alarm must also produce a sound.
 * Disabling alarms should only stop the sound.
 */
export function evaluateAlarmSound(alarm: GuideAlarm, guideQuality: GuideQuality, guideState: GuideState): boolean {
  const correctingM2TipTilt = ((guideState.m2Inputs ?? []) as WfsType[]).includes(alarm.wfs);

  return (
    alarm.enabled && evaluateAlarm(alarm, guideQuality, guideState) && guideState.mountOffload && correctingM2TipTilt
  );
}

function alarmIsActive(guideState: GuideState, alarm: GuideAlarm): boolean {
  switch (alarm.wfs) {
    case 'OIWFS':
      return guideState.oiIntegrating;
    case 'PWFS1':
      return guideState.p1Integrating;
    case 'PWFS2':
      return guideState.p2Integrating;
    default:
      return false;
  }
}
