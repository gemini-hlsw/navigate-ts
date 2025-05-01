import { useGuideState } from '@gql/server/GuideState';

export function useGetGuideState() {
  const { data } = useGuideState();

  if (!data)
    return {
      mountOffload: false,
      daytimeMode: false,
      m1CorrectionsEnable: false,
      m2ComaEnable: false,
      m2ComaM1CorrectionsSource: 'OIWFS',
      m2FocusEnable: false,
      m2FocusSource: 'OIWFS',
      m2TipTiltEnable: false,
      m2TipTiltFocusLink: false,
      m2TipTiltSource: 'OIWFS',
      probeTracking: 'OI➡OI',
      p1Integrating: false,
      p2Integrating: false,
      oiIntegrating: false,
    };

  return {
    mountOffload: data.mountOffload,
    daytimeMode: true,
    m1CorrectionsEnable: Boolean(data.m1Input),
    m2ComaEnable: data.m2Coma,
    m2ComaM1CorrectionsSource: data.m1Input,
    m2FocusEnable: data.m2Inputs ? data.m2Inputs.length : false,
    m2FocusSource: 'OIWFS',
    m2TipTiltEnable: data.m2Inputs ? data.m2Inputs.length : false,
    m2TipTiltFocusLink: data.m2Inputs ? data.m2Inputs.length : false,
    m2TipTiltSource: data.m2Inputs ? (data.m2Inputs as string[]).join(',') : 'NONE',
    probeTracking: 'OI➡OI',
    p1Integrating: data.p1Integrating,
    p2Integrating: data.p2Integrating,
    oiIntegrating: data.oiIntegrating,
  };
}
