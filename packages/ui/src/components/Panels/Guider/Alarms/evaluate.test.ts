import type { GuideConfigurationState } from '@gql/server/gen/graphql';

import { evaluateAlarm, evaluateAlarmSound } from './evaluate';

describe(evaluateAlarm.name, () => {
  it('should be false if no alarm is set', () => {
    expect(evaluateAlarm(undefined, { centroidDetected: false, flux: 900 }, createGuideState())).false;
  });

  it('should be false if no guide quality is set', () => {
    expect(evaluateAlarm({ enabled: true, limit: 900, wfs: 'OIWFS' }, undefined, createGuideState())).false;
  });

  it('should be false if no guide state is set', () => {
    expect(
      evaluateAlarm({ enabled: true, limit: 900, wfs: 'OIWFS' }, { centroidDetected: false, flux: 900 }, undefined),
    ).false;
  });

  it('should be false if the flux is above the limit', () => {
    expect(
      evaluateAlarm(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 900 },
        createGuideState(),
      ),
    ).false;
  });

  it('should be true if no centroid is detected', () => {
    expect(
      evaluateAlarm(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: false, flux: 900 },
        createGuideState(),
      ),
    ).true;
  });

  it('should be true if flux is below the limit', () => {
    expect(
      evaluateAlarm(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState(),
      ),
    ).true;
  });

  it('should be false if the alarm is not active', () => {
    expect(
      evaluateAlarm(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState({ oiIntegrating: false }),
      ),
    ).false;
  });

  it('should be true if the alarm is active', () => {
    expect(
      evaluateAlarm(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState({ oiIntegrating: true }),
      ),
    ).true;
  });
});

describe(evaluateAlarmSound.name, () => {
  it('should be true if all conditions are met', () => {
    expect(
      evaluateAlarmSound(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState(),
      ),
    ).true;
  });

  it('should be false if the alarm is disabled', () => {
    expect(
      evaluateAlarmSound(
        { enabled: false, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState(),
      ),
    ).false;
  });

  it('should be false if not correcting', () => {
    expect(
      evaluateAlarmSound(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState({ m2Inputs: [] }),
      ),
    ).false;
  });

  it('should be false if not offloading', () => {
    expect(
      evaluateAlarmSound(
        { enabled: true, limit: 900, wfs: 'OIWFS' },
        { centroidDetected: true, flux: 899 },
        createGuideState({ mountOffload: false }),
      ),
    ).false;
  });
});

function createGuideState(overrides: Partial<GuideConfigurationState> = {}): GuideConfigurationState {
  return {
    m1Input: 'OIWFS',
    m2Inputs: ['OIWFS'],
    mountOffload: true,
    m2Coma: false,
    oiIntegrating: true,
    acIntegrating: false,
    p1Integrating: false,
    p2Integrating: false,
    ...overrides,
  };
}
