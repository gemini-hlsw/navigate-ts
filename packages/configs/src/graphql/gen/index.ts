import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApolloContext } from '../../server.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
  JSON: { input: any; output: any; }
};

export type AltairGuideLoop = {
  __typename?: 'AltairGuideLoop';
  aoEnabled: Scalars['Boolean']['output'];
  focus: Scalars['Boolean']['output'];
  oiBlend: Scalars['Boolean']['output'];
  oiTtf: Scalars['Boolean']['output'];
  p1Ttf: Scalars['Boolean']['output'];
  pk: Scalars['Int']['output'];
  sfo: Scalars['Boolean']['output'];
  strap: Scalars['Boolean']['output'];
  ttgs: Scalars['Boolean']['output'];
};

export type AltairInstrument = {
  __typename?: 'AltairInstrument';
  adjustAdc: Scalars['Boolean']['output'];
  beamsplitter: Scalars['String']['output'];
  deployAdc: Scalars['Boolean']['output'];
  fieldLens: Scalars['Boolean']['output'];
  forceMode: Scalars['Boolean']['output'];
  lgs: Scalars['Boolean']['output'];
  ndFilter: Scalars['Boolean']['output'];
  pk: Scalars['Int']['output'];
  seeing: Scalars['Float']['output'];
  startMagnitude: Scalars['Float']['output'];
  windSpeed: Scalars['Float']['output'];
};

export type Az = {
  __typename?: 'Az';
  degrees: Scalars['Float']['output'];
  dms: Scalars['String']['output'];
};

export type Configuration = {
  __typename?: 'Configuration';
  obsId?: Maybe<Scalars['String']['output']>;
  obsInstrument?: Maybe<Scalars['String']['output']>;
  obsReference?: Maybe<Scalars['String']['output']>;
  obsSubtitle?: Maybe<Scalars['String']['output']>;
  obsTitle?: Maybe<Scalars['String']['output']>;
  oiGuidingType: GuidingType;
  p1GuidingType: GuidingType;
  p2GuidingType: GuidingType;
  pk: Scalars['Int']['output'];
  selectedOiTarget?: Maybe<Scalars['Int']['output']>;
  selectedP1Target?: Maybe<Scalars['Int']['output']>;
  selectedP2Target?: Maybe<Scalars['Int']['output']>;
  selectedTarget?: Maybe<Scalars['Int']['output']>;
  site: SiteType;
};

export type Dec = {
  __typename?: 'Dec';
  degrees: Scalars['Float']['output'];
  dms: Scalars['String']['output'];
};

export type DistinctInstrument = {
  __typename?: 'DistinctInstrument';
  name: Scalars['String']['output'];
};

export type DistinctPort = {
  __typename?: 'DistinctPort';
  issPort: Scalars['Int']['output'];
};

export type El = {
  __typename?: 'El';
  degrees: Scalars['Float']['output'];
  dms: Scalars['String']['output'];
};

export type EngineeringTarget = {
  __typename?: 'EngineeringTarget';
  az?: Maybe<Az>;
  createdAt: Scalars['DateTime']['output'];
  dec?: Maybe<Dec>;
  el?: Maybe<El>;
  epoch?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  instrument: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pk: Scalars['Int']['output'];
  ra?: Maybe<Ra>;
  rotatorAngle?: Maybe<Scalars['Float']['output']>;
  rotatorMode?: Maybe<TrackingType>;
  type: TargetType;
  wavelength?: Maybe<Scalars['Int']['output']>;
};

export type GemsGuideLoop = {
  __typename?: 'GemsGuideLoop';
  anisopl: Scalars['Boolean']['output'];
  aoEnabled: Scalars['Boolean']['output'];
  flexure: Scalars['Boolean']['output'];
  focus: Scalars['Boolean']['output'];
  pk: Scalars['Int']['output'];
  rotation: Scalars['Boolean']['output'];
  tipTilt: Scalars['Boolean']['output'];
};

export type GemsInstrument = {
  __typename?: 'GemsInstrument';
  adc: Scalars['Boolean']['output'];
  astrometricMode: Scalars['String']['output'];
  beamsplitter: Scalars['String']['output'];
  pk: Scalars['Int']['output'];
};

export type GuideAlarm = {
  __typename?: 'GuideAlarm';
  enabled: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  wfs: WfsType;
};

export type GuideAlarms = {
  __typename?: 'GuideAlarms';
  OIWFS: GuideAlarm;
  PWFS1: GuideAlarm;
  PWFS2: GuideAlarm;
};

export type GuideLoop = {
  __typename?: 'GuideLoop';
  daytimeMode: Scalars['Boolean']['output'];
  lightPath: Scalars['String']['output'];
  m1CorrectionsEnable: Scalars['Boolean']['output'];
  m2ComaEnable: Scalars['Boolean']['output'];
  m2ComaM1CorrectionsSource: Scalars['String']['output'];
  m2FocusEnable: Scalars['Boolean']['output'];
  m2FocusSource: Scalars['String']['output'];
  m2TipTiltEnable: Scalars['Boolean']['output'];
  m2TipTiltFocusLink: Scalars['Boolean']['output'];
  m2TipTiltSource: Scalars['String']['output'];
  mountOffload: Scalars['Boolean']['output'];
  pk: Scalars['Int']['output'];
  probeTracking: Scalars['String']['output'];
};

export type GuidingType =
  | 'NORMAL';

export type Instrument = {
  __typename?: 'Instrument';
  ao: Scalars['Boolean']['output'];
  extraParams: Scalars['JSON']['output'];
  focusOffset: Scalars['Float']['output'];
  iaa: Scalars['Float']['output'];
  issPort: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  originX: Scalars['Float']['output'];
  originY: Scalars['Float']['output'];
  pk: Scalars['Int']['output'];
  wfs: WfsType;
};

export type Mechanism = {
  __typename?: 'Mechanism';
  agAcPickoffPark: StatusType;
  agAoFoldPark: StatusType;
  agParkAll: StatusType;
  agScienceFoldPark: StatusType;
  aowfs: StatusType;
  aowfsPark: StatusType;
  crcs: StatusType;
  crcsPark: StatusType;
  crcsUnwrap: StatusType;
  dome: StatusType;
  domeMode: Scalars['String']['output'];
  domePark: StatusType;
  eVGate: StatusType;
  eVGateClose: StatusType;
  eVGateValue: Scalars['Int']['output'];
  mcs: StatusType;
  mcsPark: StatusType;
  mcsUnwrap: StatusType;
  odgw: StatusType;
  odgwPark: StatusType;
  oiwfs: StatusType;
  oiwfsPark: StatusType;
  pk: Scalars['Int']['output'];
  pwfs1: StatusType;
  pwfs1Park: StatusType;
  pwfs1Unwrap: StatusType;
  pwfs2: StatusType;
  pwfs2Park: StatusType;
  pwfs2Unwrap: StatusType;
  scs: StatusType;
  shutterAperture: Scalars['Int']['output'];
  shutterMode: Scalars['String']['output'];
  shutters: StatusType;
  shuttersPark: StatusType;
  wVGate: StatusType;
  wVGateClose: StatusType;
  wVGateValue: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createConfiguration: Configuration;
  createEngineeringTarget: EngineeringTarget;
  createInstrument: Instrument;
  createTarget: Target;
  createUser: User;
  removeAndCreateBaseTargets: Array<Target>;
  removeAndCreateWfsTargets: Array<Target>;
  updateAltairGuideLoop: AltairGuideLoop;
  updateAltairInstrument: AltairInstrument;
  updateConfiguration: Configuration;
  updateEngineeringTarget: EngineeringTarget;
  updateGemsGuideLoop: GemsGuideLoop;
  updateGemsInstrument: GemsInstrument;
  updateGuideAlarm: GuideAlarm;
  updateGuideLoop: GuideLoop;
  updateInstrument: Instrument;
  updateMechanism: Mechanism;
  updateRotator: Rotator;
  updateSlewFlags: SlewFlags;
  updateTarget: Target;
};


export type MutationCreateConfigurationArgs = {
  obsId?: InputMaybe<Scalars['String']['input']>;
  obsInstrument?: InputMaybe<Scalars['String']['input']>;
  obsReference?: InputMaybe<Scalars['String']['input']>;
  obsSubtitle?: InputMaybe<Scalars['String']['input']>;
  obsTitle?: InputMaybe<Scalars['String']['input']>;
  oiGuidingType: GuidingType;
  p1GuidingType: GuidingType;
  p2GuidingType: GuidingType;
  selectedOiTarget?: InputMaybe<Scalars['Int']['input']>;
  selectedP1Target?: InputMaybe<Scalars['Int']['input']>;
  selectedP2Target?: InputMaybe<Scalars['Int']['input']>;
  selectedTarget?: InputMaybe<Scalars['Int']['input']>;
  site?: InputMaybe<SiteType>;
};


export type MutationCreateEngineeringTargetArgs = {
  az?: InputMaybe<Scalars['Float']['input']>;
  dec?: InputMaybe<Scalars['Float']['input']>;
  el?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  instrument: Scalars['String']['input'];
  name: Scalars['String']['input'];
  ra?: InputMaybe<Scalars['Float']['input']>;
  rotatorAngle?: InputMaybe<Scalars['Float']['input']>;
  rotatorMode?: InputMaybe<TrackingType>;
  type: TargetType;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateInstrumentArgs = {
  ao?: InputMaybe<Scalars['Boolean']['input']>;
  extraParams?: InputMaybe<Scalars['JSON']['input']>;
  focusOffset?: InputMaybe<Scalars['Float']['input']>;
  iaa?: InputMaybe<Scalars['Float']['input']>;
  issPort: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  originX?: InputMaybe<Scalars['Float']['input']>;
  originY?: InputMaybe<Scalars['Float']['input']>;
  wfs?: InputMaybe<WfsType>;
};


export type MutationCreateTargetArgs = {
  az?: InputMaybe<Scalars['Float']['input']>;
  band?: InputMaybe<Scalars['String']['input']>;
  dec?: InputMaybe<Scalars['Float']['input']>;
  el?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  ra?: InputMaybe<Scalars['Float']['input']>;
  type: TargetType;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationRemoveAndCreateBaseTargetsArgs = {
  targets?: InputMaybe<Array<TargetInput>>;
};


export type MutationRemoveAndCreateWfsTargetsArgs = {
  targets?: InputMaybe<Array<TargetInput>>;
  wfs?: InputMaybe<TargetType>;
};


export type MutationUpdateAltairGuideLoopArgs = {
  aoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  focus?: InputMaybe<Scalars['Boolean']['input']>;
  oiBlend?: InputMaybe<Scalars['Boolean']['input']>;
  oiTtf?: InputMaybe<Scalars['Boolean']['input']>;
  p1Ttf?: InputMaybe<Scalars['Boolean']['input']>;
  pk: Scalars['Int']['input'];
  sfo?: InputMaybe<Scalars['Boolean']['input']>;
  strap?: InputMaybe<Scalars['Boolean']['input']>;
  ttgs?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateAltairInstrumentArgs = {
  adjustAdc?: InputMaybe<Scalars['Boolean']['input']>;
  beamsplitter?: InputMaybe<Scalars['String']['input']>;
  deployAdc?: InputMaybe<Scalars['Boolean']['input']>;
  fieldLens?: InputMaybe<Scalars['Boolean']['input']>;
  forceMode?: InputMaybe<Scalars['Boolean']['input']>;
  lgs?: InputMaybe<Scalars['Boolean']['input']>;
  ndFilter?: InputMaybe<Scalars['Boolean']['input']>;
  pk: Scalars['Int']['input'];
  seeing?: InputMaybe<Scalars['Float']['input']>;
  startMagnitude?: InputMaybe<Scalars['Float']['input']>;
  windSpeed?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateConfigurationArgs = {
  obsId?: InputMaybe<Scalars['String']['input']>;
  obsInstrument?: InputMaybe<Scalars['String']['input']>;
  obsReference?: InputMaybe<Scalars['String']['input']>;
  obsSubtitle?: InputMaybe<Scalars['String']['input']>;
  obsTitle?: InputMaybe<Scalars['String']['input']>;
  oiGuidingType?: InputMaybe<GuidingType>;
  p1GuidingType?: InputMaybe<GuidingType>;
  p2GuidingType?: InputMaybe<GuidingType>;
  pk: Scalars['Int']['input'];
  selectedOiTarget?: InputMaybe<Scalars['Int']['input']>;
  selectedP1Target?: InputMaybe<Scalars['Int']['input']>;
  selectedP2Target?: InputMaybe<Scalars['Int']['input']>;
  selectedTarget?: InputMaybe<Scalars['Int']['input']>;
  site?: InputMaybe<SiteType>;
};


export type MutationUpdateEngineeringTargetArgs = {
  coord1?: InputMaybe<Scalars['Float']['input']>;
  coord2?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  instrument?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pk: Scalars['Int']['input'];
  rotatorAngle?: InputMaybe<Scalars['Float']['input']>;
  rotatorMode?: InputMaybe<TrackingType>;
  type?: InputMaybe<TargetType>;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateGemsGuideLoopArgs = {
  anisopl?: InputMaybe<Scalars['Boolean']['input']>;
  aoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  flexure?: InputMaybe<Scalars['Boolean']['input']>;
  focus?: InputMaybe<Scalars['Boolean']['input']>;
  pk: Scalars['Int']['input'];
  rotation?: InputMaybe<Scalars['Boolean']['input']>;
  tipTilt?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateGemsInstrumentArgs = {
  adc?: InputMaybe<Scalars['Boolean']['input']>;
  astrometricMode?: InputMaybe<Scalars['String']['input']>;
  beamsplitter?: InputMaybe<Scalars['String']['input']>;
  pk: Scalars['Int']['input'];
};


export type MutationUpdateGuideAlarmArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  wfs: WfsType;
};


export type MutationUpdateGuideLoopArgs = {
  daytimeMode?: InputMaybe<Scalars['Boolean']['input']>;
  lightPath?: InputMaybe<Scalars['String']['input']>;
  m1CorrectionsEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2ComaEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2ComaM1CorrectionsSource?: InputMaybe<Scalars['String']['input']>;
  m2FocusEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2FocusSource?: InputMaybe<Scalars['String']['input']>;
  m2TipTiltEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2TipTiltFocusLink?: InputMaybe<Scalars['Boolean']['input']>;
  m2TipTiltSource?: InputMaybe<Scalars['String']['input']>;
  mountOffload?: InputMaybe<Scalars['Boolean']['input']>;
  pk: Scalars['Int']['input'];
  probeTracking?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateInstrumentArgs = {
  ao?: InputMaybe<Scalars['Boolean']['input']>;
  extraParams?: InputMaybe<Scalars['JSON']['input']>;
  focusOffset?: InputMaybe<Scalars['Float']['input']>;
  iaa?: InputMaybe<Scalars['Float']['input']>;
  issPort?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  originX?: InputMaybe<Scalars['Float']['input']>;
  originY?: InputMaybe<Scalars['Float']['input']>;
  pk: Scalars['Int']['input'];
  wfs?: InputMaybe<WfsType>;
};


export type MutationUpdateMechanismArgs = {
  agAcPickoffPark?: InputMaybe<StatusType>;
  agAoFoldPark?: InputMaybe<StatusType>;
  agParkAll?: InputMaybe<StatusType>;
  agScienceFoldPark?: InputMaybe<StatusType>;
  aowfs?: InputMaybe<StatusType>;
  aowfsPark?: InputMaybe<StatusType>;
  crcs?: InputMaybe<StatusType>;
  crcsPark?: InputMaybe<StatusType>;
  crcsUnwrap?: InputMaybe<StatusType>;
  dome?: InputMaybe<StatusType>;
  domeMode?: InputMaybe<Scalars['String']['input']>;
  domePark?: InputMaybe<StatusType>;
  eVGate?: InputMaybe<StatusType>;
  eVGateClose?: InputMaybe<StatusType>;
  eVGateValue?: InputMaybe<Scalars['Int']['input']>;
  mcs?: InputMaybe<StatusType>;
  mcsPark?: InputMaybe<StatusType>;
  mcsUnwrap?: InputMaybe<StatusType>;
  odgw?: InputMaybe<StatusType>;
  odgwPark?: InputMaybe<StatusType>;
  oiwfs?: InputMaybe<StatusType>;
  oiwfsPark?: InputMaybe<StatusType>;
  pk: Scalars['Int']['input'];
  pwfs1?: InputMaybe<StatusType>;
  pwfs1Park?: InputMaybe<StatusType>;
  pwfs1Unwrap?: InputMaybe<StatusType>;
  pwfs2?: InputMaybe<StatusType>;
  pwfs2Park?: InputMaybe<StatusType>;
  pwfs2Unwrap?: InputMaybe<StatusType>;
  scs?: InputMaybe<StatusType>;
  shutterAperture?: InputMaybe<Scalars['Int']['input']>;
  shutterMode?: InputMaybe<Scalars['String']['input']>;
  shutters?: InputMaybe<StatusType>;
  shuttersPark?: InputMaybe<StatusType>;
  wVGate?: InputMaybe<StatusType>;
  wVGateClose?: InputMaybe<StatusType>;
  wVGateValue?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateRotatorArgs = {
  angle?: InputMaybe<Scalars['Float']['input']>;
  pk: Scalars['Int']['input'];
  tracking?: InputMaybe<TrackingType>;
};


export type MutationUpdateSlewFlagsArgs = {
  autoparkAowfs?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkGems?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkOiwfs?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkPwfs1?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkPwfs2?: InputMaybe<Scalars['Boolean']['input']>;
  pk: Scalars['Int']['input'];
  resetPointing?: InputMaybe<Scalars['Boolean']['input']>;
  shortcircuitMountFilter?: InputMaybe<Scalars['Boolean']['input']>;
  shortcircuitTargetFilter?: InputMaybe<Scalars['Boolean']['input']>;
  stopGuide?: InputMaybe<Scalars['Boolean']['input']>;
  zeroChopThrow?: InputMaybe<Scalars['Boolean']['input']>;
  zeroGuideOffset?: InputMaybe<Scalars['Boolean']['input']>;
  zeroInstrumentOffset?: InputMaybe<Scalars['Boolean']['input']>;
  zeroMountDiffTrack?: InputMaybe<Scalars['Boolean']['input']>;
  zeroMountOffset?: InputMaybe<Scalars['Boolean']['input']>;
  zeroSourceDiffTrack?: InputMaybe<Scalars['Boolean']['input']>;
  zeroSourceOffset?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTargetArgs = {
  band?: InputMaybe<Scalars['String']['input']>;
  coord1?: InputMaybe<Scalars['Float']['input']>;
  coord2?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pk: Scalars['Int']['input'];
  type?: InputMaybe<TargetType>;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  altairGuideLoop?: Maybe<AltairGuideLoop>;
  altairInstrument?: Maybe<AltairInstrument>;
  configuration?: Maybe<Configuration>;
  distinctInstruments: Array<DistinctInstrument>;
  distinctPorts: Array<DistinctPort>;
  engineeringTarget?: Maybe<EngineeringTarget>;
  engineeringTargets: Array<EngineeringTarget>;
  gemsGuideLoop?: Maybe<GemsGuideLoop>;
  gemsInstrument?: Maybe<GemsInstrument>;
  guideAlarms: GuideAlarms;
  guideLoop?: Maybe<GuideLoop>;
  instrument?: Maybe<Instrument>;
  instruments: Array<Instrument>;
  mechanism?: Maybe<Mechanism>;
  rotator?: Maybe<Rotator>;
  slewFlags?: Maybe<SlewFlags>;
  target?: Maybe<Target>;
  targets: Array<Target>;
  user?: Maybe<User>;
  users: Array<User>;
  version: Version;
};


export type QueryConfigurationArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDistinctPortsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEngineeringTargetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEngineeringTargetsArgs = {
  type?: InputMaybe<TargetType>;
};


export type QueryInstrumentArgs = {
  extraParams?: InputMaybe<Scalars['JSON']['input']>;
  issPort?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  wfs?: InputMaybe<WfsType>;
};


export type QueryInstrumentsArgs = {
  extraParams?: InputMaybe<Scalars['JSON']['input']>;
  issPort?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  wfs?: InputMaybe<WfsType>;
};


export type QueryTargetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTargetsArgs = {
  type?: InputMaybe<TargetType>;
};


export type QueryUserArgs = {
  pk: Scalars['Int']['input'];
};

export type Ra = {
  __typename?: 'RA';
  degrees: Scalars['Float']['output'];
  hms: Scalars['String']['output'];
};

export type Rotator = {
  __typename?: 'Rotator';
  angle: Scalars['Float']['output'];
  pk: Scalars['Int']['output'];
  tracking: TrackingType;
};

export type SiteType =
  | 'GN'
  | 'GS';

export type SlewFlags = {
  __typename?: 'SlewFlags';
  autoparkAowfs: Scalars['Boolean']['output'];
  autoparkGems: Scalars['Boolean']['output'];
  autoparkOiwfs: Scalars['Boolean']['output'];
  autoparkPwfs1: Scalars['Boolean']['output'];
  autoparkPwfs2: Scalars['Boolean']['output'];
  pk: Scalars['Int']['output'];
  resetPointing: Scalars['Boolean']['output'];
  shortcircuitMountFilter: Scalars['Boolean']['output'];
  shortcircuitTargetFilter: Scalars['Boolean']['output'];
  stopGuide: Scalars['Boolean']['output'];
  zeroChopThrow: Scalars['Boolean']['output'];
  zeroGuideOffset: Scalars['Boolean']['output'];
  zeroInstrumentOffset: Scalars['Boolean']['output'];
  zeroMountDiffTrack: Scalars['Boolean']['output'];
  zeroMountOffset: Scalars['Boolean']['output'];
  zeroSourceDiffTrack: Scalars['Boolean']['output'];
  zeroSourceOffset: Scalars['Boolean']['output'];
};

export type StatusType =
  | 'ACTIVE'
  | 'DONE'
  | 'ERROR'
  | 'PENDING';

export type Target = {
  __typename?: 'Target';
  az?: Maybe<Az>;
  band?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dec?: Maybe<Dec>;
  el?: Maybe<El>;
  epoch: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  magnitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  pk: Scalars['Int']['output'];
  ra?: Maybe<Ra>;
  type: TargetType;
  wavelength?: Maybe<Scalars['Int']['output']>;
};

export type TargetInput = {
  band?: InputMaybe<Scalars['String']['input']>;
  coord1?: InputMaybe<Scalars['Float']['input']>;
  coord2?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
};

export type TargetType =
  | 'BLINDOFFSET'
  | 'FIXED'
  | 'OIWFS'
  | 'PWFS1'
  | 'PWFS2'
  | 'SCIENCE';

export type TrackingType =
  | 'FIXED'
  | 'TRACKING';

export type User = {
  __typename?: 'User';
  name: Scalars['String']['output'];
  pk: Scalars['Int']['output'];
};

export type Version = {
  __typename?: 'Version';
  databaseVersion: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type WfsType =
  | 'NONE'
  | 'OIWFS'
  | 'PWFS1'
  | 'PWFS2';



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AltairGuideLoop: ResolverTypeWrapper<AltairGuideLoop>;
  AltairInstrument: ResolverTypeWrapper<AltairInstrument>;
  Az: ResolverTypeWrapper<Az>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Configuration: ResolverTypeWrapper<Configuration>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Dec: ResolverTypeWrapper<Dec>;
  DistinctInstrument: ResolverTypeWrapper<DistinctInstrument>;
  DistinctPort: ResolverTypeWrapper<DistinctPort>;
  El: ResolverTypeWrapper<El>;
  EngineeringTarget: ResolverTypeWrapper<EngineeringTarget>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GemsGuideLoop: ResolverTypeWrapper<GemsGuideLoop>;
  GemsInstrument: ResolverTypeWrapper<GemsInstrument>;
  GuideAlarm: ResolverTypeWrapper<GuideAlarm>;
  GuideAlarms: ResolverTypeWrapper<GuideAlarms>;
  GuideLoop: ResolverTypeWrapper<GuideLoop>;
  GuidingType: GuidingType;
  Instrument: ResolverTypeWrapper<Instrument>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Mechanism: ResolverTypeWrapper<Mechanism>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RA: ResolverTypeWrapper<Ra>;
  Rotator: ResolverTypeWrapper<Rotator>;
  SiteType: SiteType;
  SlewFlags: ResolverTypeWrapper<SlewFlags>;
  StatusType: StatusType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Target: ResolverTypeWrapper<Target>;
  TargetInput: TargetInput;
  TargetType: TargetType;
  TrackingType: TrackingType;
  User: ResolverTypeWrapper<User>;
  Version: ResolverTypeWrapper<Version>;
  WfsType: WfsType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AltairGuideLoop: AltairGuideLoop;
  AltairInstrument: AltairInstrument;
  Az: Az;
  Boolean: Scalars['Boolean']['output'];
  Configuration: Configuration;
  DateTime: Scalars['DateTime']['output'];
  Dec: Dec;
  DistinctInstrument: DistinctInstrument;
  DistinctPort: DistinctPort;
  El: El;
  EngineeringTarget: EngineeringTarget;
  Float: Scalars['Float']['output'];
  GemsGuideLoop: GemsGuideLoop;
  GemsInstrument: GemsInstrument;
  GuideAlarm: GuideAlarm;
  GuideAlarms: GuideAlarms;
  GuideLoop: GuideLoop;
  Instrument: Instrument;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Mechanism: Mechanism;
  Mutation: {};
  Query: {};
  RA: Ra;
  Rotator: Rotator;
  SlewFlags: SlewFlags;
  String: Scalars['String']['output'];
  Target: Target;
  TargetInput: TargetInput;
  User: User;
  Version: Version;
};

export type AltairGuideLoopResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['AltairGuideLoop'] = ResolversParentTypes['AltairGuideLoop']> = {
  aoEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  focus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  oiBlend?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  oiTtf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  p1Ttf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sfo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  strap?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ttgs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AltairInstrumentResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['AltairInstrument'] = ResolversParentTypes['AltairInstrument']> = {
  adjustAdc?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  beamsplitter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deployAdc?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  fieldLens?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  forceMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lgs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ndFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seeing?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startMagnitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  windSpeed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AzResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Az'] = ResolversParentTypes['Az']> = {
  degrees?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Configuration'] = ResolversParentTypes['Configuration']> = {
  obsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obsInstrument?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obsReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obsSubtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obsTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oiGuidingType?: Resolver<ResolversTypes['GuidingType'], ParentType, ContextType>;
  p1GuidingType?: Resolver<ResolversTypes['GuidingType'], ParentType, ContextType>;
  p2GuidingType?: Resolver<ResolversTypes['GuidingType'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  selectedOiTarget?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selectedP1Target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selectedP2Target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selectedTarget?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  site?: Resolver<ResolversTypes['SiteType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DecResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Dec'] = ResolversParentTypes['Dec']> = {
  degrees?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistinctInstrumentResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DistinctInstrument'] = ResolversParentTypes['DistinctInstrument']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistinctPortResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DistinctPort'] = ResolversParentTypes['DistinctPort']> = {
  issPort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['El'] = ResolversParentTypes['El']> = {
  degrees?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EngineeringTargetResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['EngineeringTarget'] = ResolversParentTypes['EngineeringTarget']> = {
  az?: Resolver<Maybe<ResolversTypes['Az']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dec?: Resolver<Maybe<ResolversTypes['Dec']>, ParentType, ContextType>;
  el?: Resolver<Maybe<ResolversTypes['El']>, ParentType, ContextType>;
  epoch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instrument?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ra?: Resolver<Maybe<ResolversTypes['RA']>, ParentType, ContextType>;
  rotatorAngle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rotatorMode?: Resolver<Maybe<ResolversTypes['TrackingType']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TargetType'], ParentType, ContextType>;
  wavelength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GemsGuideLoopResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GemsGuideLoop'] = ResolversParentTypes['GemsGuideLoop']> = {
  anisopl?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  aoEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  flexure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  focus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rotation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tipTilt?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GemsInstrumentResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GemsInstrument'] = ResolversParentTypes['GemsInstrument']> = {
  adc?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  astrometricMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beamsplitter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuideAlarmResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GuideAlarm'] = ResolversParentTypes['GuideAlarm']> = {
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wfs?: Resolver<ResolversTypes['WfsType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuideAlarmsResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GuideAlarms'] = ResolversParentTypes['GuideAlarms']> = {
  OIWFS?: Resolver<ResolversTypes['GuideAlarm'], ParentType, ContextType>;
  PWFS1?: Resolver<ResolversTypes['GuideAlarm'], ParentType, ContextType>;
  PWFS2?: Resolver<ResolversTypes['GuideAlarm'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuideLoopResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GuideLoop'] = ResolversParentTypes['GuideLoop']> = {
  daytimeMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lightPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  m1CorrectionsEnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  m2ComaEnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  m2ComaM1CorrectionsSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  m2FocusEnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  m2FocusSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  m2TipTiltEnable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  m2TipTiltFocusLink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  m2TipTiltSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mountOffload?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  probeTracking?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstrumentResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Instrument'] = ResolversParentTypes['Instrument']> = {
  ao?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  extraParams?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  focusOffset?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  iaa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  issPort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originX?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  originY?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wfs?: Resolver<ResolversTypes['WfsType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MechanismResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mechanism'] = ResolversParentTypes['Mechanism']> = {
  agAcPickoffPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  agAoFoldPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  agParkAll?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  agScienceFoldPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  aowfs?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  aowfsPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  crcs?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  crcsPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  crcsUnwrap?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  dome?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  domeMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  domePark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  eVGate?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  eVGateClose?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  eVGateValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mcs?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  mcsPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  mcsUnwrap?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  odgw?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  odgwPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  oiwfs?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  oiwfsPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pwfs1?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  pwfs1Park?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  pwfs1Unwrap?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  pwfs2?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  pwfs2Park?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  pwfs2Unwrap?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  scs?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  shutterAperture?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shutterMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shutters?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  shuttersPark?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  wVGate?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  wVGateClose?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  wVGateValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createConfiguration?: Resolver<ResolversTypes['Configuration'], ParentType, ContextType, RequireFields<MutationCreateConfigurationArgs, 'oiGuidingType' | 'p1GuidingType' | 'p2GuidingType'>>;
  createEngineeringTarget?: Resolver<ResolversTypes['EngineeringTarget'], ParentType, ContextType, RequireFields<MutationCreateEngineeringTargetArgs, 'instrument' | 'name' | 'type'>>;
  createInstrument?: Resolver<ResolversTypes['Instrument'], ParentType, ContextType, RequireFields<MutationCreateInstrumentArgs, 'issPort' | 'name'>>;
  createTarget?: Resolver<ResolversTypes['Target'], ParentType, ContextType, RequireFields<MutationCreateTargetArgs, 'name' | 'type'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'name'>>;
  removeAndCreateBaseTargets?: Resolver<Array<ResolversTypes['Target']>, ParentType, ContextType, Partial<MutationRemoveAndCreateBaseTargetsArgs>>;
  removeAndCreateWfsTargets?: Resolver<Array<ResolversTypes['Target']>, ParentType, ContextType, Partial<MutationRemoveAndCreateWfsTargetsArgs>>;
  updateAltairGuideLoop?: Resolver<ResolversTypes['AltairGuideLoop'], ParentType, ContextType, RequireFields<MutationUpdateAltairGuideLoopArgs, 'pk'>>;
  updateAltairInstrument?: Resolver<ResolversTypes['AltairInstrument'], ParentType, ContextType, RequireFields<MutationUpdateAltairInstrumentArgs, 'pk'>>;
  updateConfiguration?: Resolver<ResolversTypes['Configuration'], ParentType, ContextType, RequireFields<MutationUpdateConfigurationArgs, 'pk'>>;
  updateEngineeringTarget?: Resolver<ResolversTypes['EngineeringTarget'], ParentType, ContextType, RequireFields<MutationUpdateEngineeringTargetArgs, 'pk'>>;
  updateGemsGuideLoop?: Resolver<ResolversTypes['GemsGuideLoop'], ParentType, ContextType, RequireFields<MutationUpdateGemsGuideLoopArgs, 'pk'>>;
  updateGemsInstrument?: Resolver<ResolversTypes['GemsInstrument'], ParentType, ContextType, RequireFields<MutationUpdateGemsInstrumentArgs, 'pk'>>;
  updateGuideAlarm?: Resolver<ResolversTypes['GuideAlarm'], ParentType, ContextType, RequireFields<MutationUpdateGuideAlarmArgs, 'wfs'>>;
  updateGuideLoop?: Resolver<ResolversTypes['GuideLoop'], ParentType, ContextType, RequireFields<MutationUpdateGuideLoopArgs, 'pk'>>;
  updateInstrument?: Resolver<ResolversTypes['Instrument'], ParentType, ContextType, RequireFields<MutationUpdateInstrumentArgs, 'pk'>>;
  updateMechanism?: Resolver<ResolversTypes['Mechanism'], ParentType, ContextType, RequireFields<MutationUpdateMechanismArgs, 'pk'>>;
  updateRotator?: Resolver<ResolversTypes['Rotator'], ParentType, ContextType, RequireFields<MutationUpdateRotatorArgs, 'pk'>>;
  updateSlewFlags?: Resolver<ResolversTypes['SlewFlags'], ParentType, ContextType, RequireFields<MutationUpdateSlewFlagsArgs, 'pk'>>;
  updateTarget?: Resolver<ResolversTypes['Target'], ParentType, ContextType, RequireFields<MutationUpdateTargetArgs, 'pk'>>;
};

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  altairGuideLoop?: Resolver<Maybe<ResolversTypes['AltairGuideLoop']>, ParentType, ContextType>;
  altairInstrument?: Resolver<Maybe<ResolversTypes['AltairInstrument']>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['Configuration']>, ParentType, ContextType, Partial<QueryConfigurationArgs>>;
  distinctInstruments?: Resolver<Array<ResolversTypes['DistinctInstrument']>, ParentType, ContextType>;
  distinctPorts?: Resolver<Array<ResolversTypes['DistinctPort']>, ParentType, ContextType, Partial<QueryDistinctPortsArgs>>;
  engineeringTarget?: Resolver<Maybe<ResolversTypes['EngineeringTarget']>, ParentType, ContextType, Partial<QueryEngineeringTargetArgs>>;
  engineeringTargets?: Resolver<Array<ResolversTypes['EngineeringTarget']>, ParentType, ContextType, Partial<QueryEngineeringTargetsArgs>>;
  gemsGuideLoop?: Resolver<Maybe<ResolversTypes['GemsGuideLoop']>, ParentType, ContextType>;
  gemsInstrument?: Resolver<Maybe<ResolversTypes['GemsInstrument']>, ParentType, ContextType>;
  guideAlarms?: Resolver<ResolversTypes['GuideAlarms'], ParentType, ContextType>;
  guideLoop?: Resolver<Maybe<ResolversTypes['GuideLoop']>, ParentType, ContextType>;
  instrument?: Resolver<Maybe<ResolversTypes['Instrument']>, ParentType, ContextType, Partial<QueryInstrumentArgs>>;
  instruments?: Resolver<Array<ResolversTypes['Instrument']>, ParentType, ContextType, Partial<QueryInstrumentsArgs>>;
  mechanism?: Resolver<Maybe<ResolversTypes['Mechanism']>, ParentType, ContextType>;
  rotator?: Resolver<Maybe<ResolversTypes['Rotator']>, ParentType, ContextType>;
  slewFlags?: Resolver<Maybe<ResolversTypes['SlewFlags']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Target']>, ParentType, ContextType, Partial<QueryTargetArgs>>;
  targets?: Resolver<Array<ResolversTypes['Target']>, ParentType, ContextType, Partial<QueryTargetsArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'pk'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
};

export type RaResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RA'] = ResolversParentTypes['RA']> = {
  degrees?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RotatorResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Rotator'] = ResolversParentTypes['Rotator']> = {
  angle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracking?: Resolver<ResolversTypes['TrackingType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlewFlagsResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SlewFlags'] = ResolversParentTypes['SlewFlags']> = {
  autoparkAowfs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  autoparkGems?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  autoparkOiwfs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  autoparkPwfs1?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  autoparkPwfs2?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resetPointing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shortcircuitMountFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shortcircuitTargetFilter?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stopGuide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroChopThrow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroGuideOffset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroInstrumentOffset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroMountDiffTrack?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroMountOffset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroSourceDiffTrack?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  zeroSourceOffset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Target'] = ResolversParentTypes['Target']> = {
  az?: Resolver<Maybe<ResolversTypes['Az']>, ParentType, ContextType>;
  band?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dec?: Resolver<Maybe<ResolversTypes['Dec']>, ParentType, ContextType>;
  el?: Resolver<Maybe<ResolversTypes['El']>, ParentType, ContextType>;
  epoch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ra?: Resolver<Maybe<ResolversTypes['RA']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TargetType'], ParentType, ContextType>;
  wavelength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  databaseVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ApolloContext> = {
  AltairGuideLoop?: AltairGuideLoopResolvers<ContextType>;
  AltairInstrument?: AltairInstrumentResolvers<ContextType>;
  Az?: AzResolvers<ContextType>;
  Configuration?: ConfigurationResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dec?: DecResolvers<ContextType>;
  DistinctInstrument?: DistinctInstrumentResolvers<ContextType>;
  DistinctPort?: DistinctPortResolvers<ContextType>;
  El?: ElResolvers<ContextType>;
  EngineeringTarget?: EngineeringTargetResolvers<ContextType>;
  GemsGuideLoop?: GemsGuideLoopResolvers<ContextType>;
  GemsInstrument?: GemsInstrumentResolvers<ContextType>;
  GuideAlarm?: GuideAlarmResolvers<ContextType>;
  GuideAlarms?: GuideAlarmsResolvers<ContextType>;
  GuideLoop?: GuideLoopResolvers<ContextType>;
  Instrument?: InstrumentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mechanism?: MechanismResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RA?: RaResolvers<ContextType>;
  Rotator?: RotatorResolvers<ContextType>;
  SlewFlags?: SlewFlagsResolvers<ContextType>;
  Target?: TargetResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
};

