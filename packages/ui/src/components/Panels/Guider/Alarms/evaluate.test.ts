import { createGuideAlarm, createGuideQuality, createGuideState } from '@/test/create';

import { evaluateAlarm, evaluateAlarmSound } from './evaluate';

describe(evaluateAlarm.name, () => {
  it('should be false if no alarm is set', () => {
    expect(evaluateAlarm(undefined, createGuideQuality({}), createGuideState())).toBeUndefined();
  });

  it('should be false if no guide quality is set', () => {
    expect(evaluateAlarm(createGuideAlarm(), undefined, createGuideState())).toBeUndefined();
  });

  it('should be false if no guide state is set', () => {
    expect(
      evaluateAlarm(
        createGuideAlarm(),
        createGuideQuality({
          flux: 900,
        }),
        undefined,
      ),
    ).toBeUndefined();
  });

  it('should be false if the flux is above the limit', () => {
    expect(
      evaluateAlarm(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 900,
        }),
        createGuideState(),
      ),
    ).toBeUndefined();
  });

  it('should be true if no centroid is detected', () => {
    expect(
      evaluateAlarm(
        createGuideAlarm(),
        createGuideQuality({
          flux: 900,
        }),
        createGuideState(),
      ),
    ).toEqual('SUBAPERTURES_BAD');
  });

  it('should be true if flux is below the limit', () => {
    expect(
      evaluateAlarm(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState(),
      ),
    ).toEqual('GUIDE_COUNTS');
  });

  it('should be false if the alarm is not active', () => {
    expect(
      evaluateAlarm(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState({ oiIntegrating: false }),
      ),
    ).toBeUndefined();
  });

  it('should be true if the alarm is active', () => {
    expect(
      evaluateAlarm(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState({ oiIntegrating: true }),
      ),
    ).toEqual('GUIDE_COUNTS');
  });
});

describe(evaluateAlarmSound.name, () => {
  it('should be true if all conditions are met', () => {
    expect(
      evaluateAlarmSound(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState(),
      ),
    ).toEqual('GUIDE_COUNTS');
  });

  it('should be false if the alarm is disabled', () => {
    expect(
      evaluateAlarmSound(
        createGuideAlarm({
          enabled: false,
        }),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState(),
      ),
    ).toBeUndefined();
  });

  it('should be false if not correcting', () => {
    expect(
      evaluateAlarmSound(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState({ m2Inputs: [] }),
      ),
    ).toBeUndefined();
  });

  it('should be false if not offloading', () => {
    expect(
      evaluateAlarmSound(
        createGuideAlarm(),
        createGuideQuality({
          centroidDetected: true,
          flux: 899,
        }),
        createGuideState({ mountOffload: false }),
      ),
    ).toBeUndefined();
  });
});
