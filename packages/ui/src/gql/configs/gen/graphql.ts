/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
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

export type GetAltairGuideLoopQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAltairGuideLoopQuery = { __typename?: 'Query', altairGuideLoop?: { __typename?: 'AltairGuideLoop', pk: number, aoEnabled: boolean, oiBlend: boolean, focus: boolean, p1Ttf: boolean, strap: boolean, oiTtf: boolean, ttgs: boolean, sfo: boolean } | null };

export type UpdateAltairGuideLoopMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  aoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  oiBlend?: InputMaybe<Scalars['Boolean']['input']>;
  focus?: InputMaybe<Scalars['Boolean']['input']>;
  p1Ttf?: InputMaybe<Scalars['Boolean']['input']>;
  strap?: InputMaybe<Scalars['Boolean']['input']>;
  oiTtf?: InputMaybe<Scalars['Boolean']['input']>;
  ttgs?: InputMaybe<Scalars['Boolean']['input']>;
  sfo?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateAltairGuideLoopMutation = { __typename?: 'Mutation', updateAltairGuideLoop: { __typename?: 'AltairGuideLoop', pk: number, aoEnabled: boolean, oiBlend: boolean, focus: boolean, p1Ttf: boolean, strap: boolean, oiTtf: boolean, ttgs: boolean, sfo: boolean } };

export type GetAltairInstrumentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAltairInstrumentQuery = { __typename?: 'Query', altairInstrument?: { __typename?: 'AltairInstrument', pk: number, beamsplitter: string, startMagnitude: number, seeing: number, windSpeed: number, forceMode: boolean, ndFilter: boolean, fieldLens: boolean, deployAdc: boolean, adjustAdc: boolean, lgs: boolean } | null };

export type UpdateAltairInstrumentMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  beamsplitter?: InputMaybe<Scalars['String']['input']>;
  startMagnitude?: InputMaybe<Scalars['Float']['input']>;
  seeing?: InputMaybe<Scalars['Float']['input']>;
  windSpeed?: InputMaybe<Scalars['Float']['input']>;
  forceMode?: InputMaybe<Scalars['Boolean']['input']>;
  ndFilter?: InputMaybe<Scalars['Boolean']['input']>;
  fieldLens?: InputMaybe<Scalars['Boolean']['input']>;
  deployAdc?: InputMaybe<Scalars['Boolean']['input']>;
  adjustAdc?: InputMaybe<Scalars['Boolean']['input']>;
  lgs?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateAltairInstrumentMutation = { __typename?: 'Mutation', updateAltairInstrument: { __typename?: 'AltairInstrument', pk: number, beamsplitter: string, startMagnitude: number, seeing: number, windSpeed: number, forceMode: boolean, ndFilter: boolean, fieldLens: boolean, deployAdc: boolean, adjustAdc: boolean, lgs: boolean } };

export type GetConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConfigurationQuery = { __typename?: 'Query', configuration?: { __typename?: 'Configuration', pk: number, site: SiteType, selectedTarget?: number | null, selectedOiTarget?: number | null, selectedP1Target?: number | null, selectedP2Target?: number | null, oiGuidingType: GuidingType, p1GuidingType: GuidingType, p2GuidingType: GuidingType, obsTitle?: string | null, obsId?: string | null, obsInstrument?: string | null, obsSubtitle?: string | null, obsReference?: string | null } | null };

export type UpdateConfigurationMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  site?: InputMaybe<SiteType>;
  selectedTarget?: InputMaybe<Scalars['Int']['input']>;
  selectedOiTarget?: InputMaybe<Scalars['Int']['input']>;
  selectedP1Target?: InputMaybe<Scalars['Int']['input']>;
  selectedP2Target?: InputMaybe<Scalars['Int']['input']>;
  oiGuidingType?: InputMaybe<GuidingType>;
  p1GuidingType?: InputMaybe<GuidingType>;
  p2GuidingType?: InputMaybe<GuidingType>;
  obsTitle?: InputMaybe<Scalars['String']['input']>;
  obsId?: InputMaybe<Scalars['String']['input']>;
  obsInstrument?: InputMaybe<Scalars['String']['input']>;
  obsSubtitle?: InputMaybe<Scalars['String']['input']>;
  obsReference?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateConfigurationMutation = { __typename?: 'Mutation', updateConfiguration: { __typename?: 'Configuration', pk: number, site: SiteType, selectedTarget?: number | null, selectedOiTarget?: number | null, selectedP1Target?: number | null, selectedP2Target?: number | null, oiGuidingType: GuidingType, p1GuidingType: GuidingType, p2GuidingType: GuidingType, obsTitle?: string | null, obsId?: string | null, obsInstrument?: string | null, obsSubtitle?: string | null, obsReference?: string | null } };

export type GetEngineeringTargetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEngineeringTargetsQuery = { __typename?: 'Query', engineeringTargets: Array<{ __typename?: 'EngineeringTarget', pk: number, id?: string | null, name: string, epoch?: string | null, type: TargetType, wavelength?: number | null, instrument: string, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null }> };

export type UpdateEngineeringTargetMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  coord1?: InputMaybe<Scalars['Float']['input']>;
  coord2?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TargetType>;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
  instrument?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateEngineeringTargetMutation = { __typename?: 'Mutation', updateEngineeringTarget: { __typename?: 'EngineeringTarget', pk: number, id?: string | null, name: string, epoch?: string | null, type: TargetType, wavelength?: number | null, instrument: string, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null } };

export type GetGemsGuideLoopQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGemsGuideLoopQuery = { __typename?: 'Query', gemsGuideLoop?: { __typename?: 'GemsGuideLoop', pk: number, aoEnabled: boolean, focus: boolean, rotation: boolean, tipTilt: boolean, anisopl: boolean, flexure: boolean } | null };

export type UpdateGemsGuideLoopMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  aoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  focus?: InputMaybe<Scalars['Boolean']['input']>;
  rotation?: InputMaybe<Scalars['Boolean']['input']>;
  tipTilt?: InputMaybe<Scalars['Boolean']['input']>;
  anisopl?: InputMaybe<Scalars['Boolean']['input']>;
  flexure?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateGemsGuideLoopMutation = { __typename?: 'Mutation', updateGemsGuideLoop: { __typename?: 'GemsGuideLoop', pk: number, aoEnabled: boolean, focus: boolean, rotation: boolean, tipTilt: boolean, anisopl: boolean, flexure: boolean } };

export type GetGemsInstrumentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGemsInstrumentQuery = { __typename?: 'Query', gemsInstrument?: { __typename?: 'GemsInstrument', pk: number, beamsplitter: string, adc: boolean, astrometricMode: string } | null };

export type UpdateGemsInstrumentMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  beamsplitter?: InputMaybe<Scalars['String']['input']>;
  adc?: InputMaybe<Scalars['Boolean']['input']>;
  astrometricMode?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGemsInstrumentMutation = { __typename?: 'Mutation', updateGemsInstrument: { __typename?: 'GemsInstrument', pk: number, beamsplitter: string, adc: boolean, astrometricMode: string } };

export type GuideAlarmsQueryVariables = Exact<{ [key: string]: never; }>;


export type GuideAlarmsQuery = { __typename?: 'Query', guideAlarms: { __typename?: 'GuideAlarms', OIWFS: { __typename?: 'GuideAlarm', wfs: WfsType, limit: number, enabled: boolean }, PWFS1: { __typename?: 'GuideAlarm', wfs: WfsType, limit: number, enabled: boolean }, PWFS2: { __typename?: 'GuideAlarm', wfs: WfsType, limit: number, enabled: boolean } } };

export type UpdateGuideAlarmMutationVariables = Exact<{
  wfs: WfsType;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateGuideAlarmMutation = { __typename?: 'Mutation', updateGuideAlarm: { __typename?: 'GuideAlarm', wfs: WfsType, limit: number, enabled: boolean } };

export type GetGuideLoopQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGuideLoopQuery = { __typename?: 'Query', guideLoop?: { __typename?: 'GuideLoop', pk: number, m2TipTiltEnable: boolean, m2TipTiltSource: string, m2FocusEnable: boolean, m2FocusSource: string, m2TipTiltFocusLink: boolean, m2ComaEnable: boolean, m1CorrectionsEnable: boolean, m2ComaM1CorrectionsSource: string, mountOffload: boolean, daytimeMode: boolean, probeTracking: string, lightPath: string } | null };

export type UpdateGuideLoopMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  m2TipTiltEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2TipTiltSource?: InputMaybe<Scalars['String']['input']>;
  m2FocusEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2FocusSource?: InputMaybe<Scalars['String']['input']>;
  m2TipTiltFocusLink?: InputMaybe<Scalars['Boolean']['input']>;
  m2ComaEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m1CorrectionsEnable?: InputMaybe<Scalars['Boolean']['input']>;
  m2ComaM1CorrectionsSource?: InputMaybe<Scalars['String']['input']>;
  mountOffload?: InputMaybe<Scalars['Boolean']['input']>;
  daytimeMode?: InputMaybe<Scalars['Boolean']['input']>;
  probeTracking?: InputMaybe<Scalars['String']['input']>;
  lightPath?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGuideLoopMutation = { __typename?: 'Mutation', updateGuideLoop: { __typename?: 'GuideLoop', pk: number, m2TipTiltEnable: boolean, m2TipTiltSource: string, m2FocusEnable: boolean, m2FocusSource: string, m2TipTiltFocusLink: boolean, m2ComaEnable: boolean, m1CorrectionsEnable: boolean, m2ComaM1CorrectionsSource: string, mountOffload: boolean, daytimeMode: boolean, probeTracking: string, lightPath: string } };

export type GetDistinctInstrumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDistinctInstrumentsQuery = { __typename?: 'Query', distinctInstruments: Array<{ __typename?: 'DistinctInstrument', name: string }> };

export type GetDistinctPortsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetDistinctPortsQuery = { __typename?: 'Query', distinctPorts: Array<{ __typename?: 'DistinctPort', issPort: number }> };

export type GetInstrumentsQueryVariables = Exact<{
  name: Scalars['String']['input'];
  issPort: Scalars['Int']['input'];
}>;


export type GetInstrumentsQuery = { __typename?: 'Query', instruments: Array<{ __typename?: 'Instrument', pk: number, name: string, iaa: number, issPort: number, focusOffset: number, wfs: WfsType, originX: number, originY: number, ao: boolean, extraParams: any }> };

export type GetInstrumentQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  issPort?: InputMaybe<Scalars['Int']['input']>;
  wfs?: InputMaybe<WfsType>;
}>;


export type GetInstrumentQuery = { __typename?: 'Query', instrument?: { __typename?: 'Instrument', pk: number, name: string, iaa: number, issPort: number, focusOffset: number, wfs: WfsType, originX: number, originY: number, ao: boolean, extraParams: any } | null };

export type UpdateInstrumentMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  iaa?: InputMaybe<Scalars['Float']['input']>;
  issPort?: InputMaybe<Scalars['Int']['input']>;
  focusOffset?: InputMaybe<Scalars['Float']['input']>;
  wfs?: InputMaybe<WfsType>;
  originX?: InputMaybe<Scalars['Float']['input']>;
  originY?: InputMaybe<Scalars['Float']['input']>;
  ao?: InputMaybe<Scalars['Boolean']['input']>;
  extraParams?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type UpdateInstrumentMutation = { __typename?: 'Mutation', updateInstrument: { __typename?: 'Instrument', pk: number, name: string, iaa: number, issPort: number, focusOffset: number, wfs: WfsType, originX: number, originY: number, ao: boolean, extraParams: any } };

export type GetMechanismQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMechanismQuery = { __typename?: 'Query', mechanism?: { __typename?: 'Mechanism', pk: number, mcs: StatusType, mcsPark: StatusType, mcsUnwrap: StatusType, scs: StatusType, crcs: StatusType, crcsPark: StatusType, crcsUnwrap: StatusType, pwfs1: StatusType, pwfs1Park: StatusType, pwfs1Unwrap: StatusType, pwfs2: StatusType, pwfs2Park: StatusType, pwfs2Unwrap: StatusType, oiwfs: StatusType, oiwfsPark: StatusType, odgw: StatusType, odgwPark: StatusType, aowfs: StatusType, aowfsPark: StatusType, dome: StatusType, domePark: StatusType, domeMode: string, shutters: StatusType, shuttersPark: StatusType, shutterMode: string, shutterAperture: number, wVGate: StatusType, wVGateClose: StatusType, wVGateValue: number, eVGate: StatusType, eVGateClose: StatusType, eVGateValue: number, agScienceFoldPark: StatusType, agAoFoldPark: StatusType, agAcPickoffPark: StatusType, agParkAll: StatusType } | null };

export type UpdateMechanismMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  mcs?: InputMaybe<StatusType>;
  mcsPark?: InputMaybe<StatusType>;
  mcsUnwrap?: InputMaybe<StatusType>;
  scs?: InputMaybe<StatusType>;
  crcs?: InputMaybe<StatusType>;
  crcsPark?: InputMaybe<StatusType>;
  crcsUnwrap?: InputMaybe<StatusType>;
  pwfs1?: InputMaybe<StatusType>;
  pwfs1Park?: InputMaybe<StatusType>;
  pwfs1Unwrap?: InputMaybe<StatusType>;
  pwfs2?: InputMaybe<StatusType>;
  pwfs2Park?: InputMaybe<StatusType>;
  pwfs2Unwrap?: InputMaybe<StatusType>;
  oiwfs?: InputMaybe<StatusType>;
  oiwfsPark?: InputMaybe<StatusType>;
  odgw?: InputMaybe<StatusType>;
  odgwPark?: InputMaybe<StatusType>;
  aowfs?: InputMaybe<StatusType>;
  aowfsPark?: InputMaybe<StatusType>;
  dome?: InputMaybe<StatusType>;
  domePark?: InputMaybe<StatusType>;
  domeMode?: InputMaybe<Scalars['String']['input']>;
  shutters?: InputMaybe<StatusType>;
  shuttersPark?: InputMaybe<StatusType>;
  shutterMode?: InputMaybe<Scalars['String']['input']>;
  shutterAperture?: InputMaybe<Scalars['Int']['input']>;
  wVGate?: InputMaybe<StatusType>;
  wVGateClose?: InputMaybe<StatusType>;
  wVGateValue?: InputMaybe<Scalars['Int']['input']>;
  eVGate?: InputMaybe<StatusType>;
  eVGateClose?: InputMaybe<StatusType>;
  eVGateValue?: InputMaybe<Scalars['Int']['input']>;
  agScienceFoldPark?: InputMaybe<StatusType>;
  agAoFoldPark?: InputMaybe<StatusType>;
  agAcPickoffPark?: InputMaybe<StatusType>;
  agParkAll?: InputMaybe<StatusType>;
}>;


export type UpdateMechanismMutation = { __typename?: 'Mutation', updateMechanism: { __typename?: 'Mechanism', pk: number, mcs: StatusType, mcsPark: StatusType, mcsUnwrap: StatusType, scs: StatusType, crcs: StatusType, crcsPark: StatusType, crcsUnwrap: StatusType, pwfs1: StatusType, pwfs1Park: StatusType, pwfs1Unwrap: StatusType, pwfs2: StatusType, pwfs2Park: StatusType, pwfs2Unwrap: StatusType, oiwfs: StatusType, oiwfsPark: StatusType, odgw: StatusType, odgwPark: StatusType, aowfs: StatusType, aowfsPark: StatusType, dome: StatusType, domePark: StatusType, domeMode: string, shutters: StatusType, shuttersPark: StatusType, shutterMode: string, shutterAperture: number, wVGate: StatusType, wVGateClose: StatusType, wVGateValue: number, eVGate: StatusType, eVGateClose: StatusType, eVGateValue: number, agScienceFoldPark: StatusType, agAoFoldPark: StatusType, agAcPickoffPark: StatusType, agParkAll: StatusType } };

export type GetRotatorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRotatorQuery = { __typename?: 'Query', rotator?: { __typename?: 'Rotator', pk: number, angle: number, tracking: TrackingType } | null };

export type UpdateRotatorMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  angle?: InputMaybe<Scalars['Float']['input']>;
  tracking?: InputMaybe<TrackingType>;
}>;


export type UpdateRotatorMutation = { __typename?: 'Mutation', updateRotator: { __typename?: 'Rotator', pk: number, angle: number, tracking: TrackingType } };

export type GetSlewFlagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSlewFlagsQuery = { __typename?: 'Query', slewFlags?: { __typename?: 'SlewFlags', pk: number, zeroChopThrow: boolean, zeroSourceOffset: boolean, zeroSourceDiffTrack: boolean, zeroMountOffset: boolean, zeroMountDiffTrack: boolean, shortcircuitTargetFilter: boolean, shortcircuitMountFilter: boolean, resetPointing: boolean, stopGuide: boolean, zeroGuideOffset: boolean, zeroInstrumentOffset: boolean, autoparkPwfs1: boolean, autoparkPwfs2: boolean, autoparkOiwfs: boolean, autoparkGems: boolean, autoparkAowfs: boolean } | null };

export type UpdateSlewFlagsMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  zeroChopThrow?: InputMaybe<Scalars['Boolean']['input']>;
  zeroSourceOffset?: InputMaybe<Scalars['Boolean']['input']>;
  zeroSourceDiffTrack?: InputMaybe<Scalars['Boolean']['input']>;
  zeroMountOffset?: InputMaybe<Scalars['Boolean']['input']>;
  zeroMountDiffTrack?: InputMaybe<Scalars['Boolean']['input']>;
  shortcircuitTargetFilter?: InputMaybe<Scalars['Boolean']['input']>;
  shortcircuitMountFilter?: InputMaybe<Scalars['Boolean']['input']>;
  resetPointing?: InputMaybe<Scalars['Boolean']['input']>;
  stopGuide?: InputMaybe<Scalars['Boolean']['input']>;
  zeroGuideOffset?: InputMaybe<Scalars['Boolean']['input']>;
  zeroInstrumentOffset?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkPwfs1?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkPwfs2?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkOiwfs?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkGems?: InputMaybe<Scalars['Boolean']['input']>;
  autoparkAowfs?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateSlewFlagsMutation = { __typename?: 'Mutation', updateSlewFlags: { __typename?: 'SlewFlags', pk: number, zeroChopThrow: boolean, zeroSourceOffset: boolean, zeroSourceDiffTrack: boolean, zeroMountOffset: boolean, zeroMountDiffTrack: boolean, shortcircuitTargetFilter: boolean, shortcircuitMountFilter: boolean, resetPointing: boolean, stopGuide: boolean, zeroGuideOffset: boolean, zeroInstrumentOffset: boolean, autoparkPwfs1: boolean, autoparkPwfs2: boolean, autoparkOiwfs: boolean, autoparkGems: boolean, autoparkAowfs: boolean } };

export type GetTargetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTargetsQuery = { __typename?: 'Query', targets: Array<{ __typename?: 'Target', pk: number, id?: string | null, name: string, magnitude?: number | null, band?: string | null, epoch: string, type: TargetType, wavelength?: number | null, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null }> };

export type UpdateTargetMutationVariables = Exact<{
  pk: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  coord1?: InputMaybe<Scalars['Float']['input']>;
  coord2?: InputMaybe<Scalars['Float']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  band?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TargetType>;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateTargetMutation = { __typename?: 'Mutation', updateTarget: { __typename?: 'Target', pk: number, id?: string | null, name: string, magnitude?: number | null, band?: string | null, epoch: string, type: TargetType, wavelength?: number | null, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null } };

export type CreateTargetMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ra?: InputMaybe<Scalars['Float']['input']>;
  az?: InputMaybe<Scalars['Float']['input']>;
  dec?: InputMaybe<Scalars['Float']['input']>;
  el?: InputMaybe<Scalars['Float']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
  band?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['String']['input']>;
  type: TargetType;
  wavelength?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateTargetMutation = { __typename?: 'Mutation', createTarget: { __typename?: 'Target', pk: number, id?: string | null, name: string, magnitude?: number | null, band?: string | null, epoch: string, type: TargetType, wavelength?: number | null, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null } };

export type RemoveAndCreateBaseTargetsMutationVariables = Exact<{
  targets: Array<TargetInput> | TargetInput;
}>;


export type RemoveAndCreateBaseTargetsMutation = { __typename?: 'Mutation', removeAndCreateBaseTargets: Array<{ __typename?: 'Target', pk: number, id?: string | null, name: string, magnitude?: number | null, band?: string | null, epoch: string, type: TargetType, wavelength?: number | null, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null }> };

export type RemoveAndCreateWfsTargetsMutationVariables = Exact<{
  wfs: TargetType;
  targets: Array<TargetInput> | TargetInput;
}>;


export type RemoveAndCreateWfsTargetsMutation = { __typename?: 'Mutation', removeAndCreateWfsTargets: Array<{ __typename?: 'Target', pk: number, id?: string | null, name: string, magnitude?: number | null, band?: string | null, epoch: string, type: TargetType, wavelength?: number | null, createdAt: string, ra?: { __typename?: 'RA', degrees: number, hms: string } | null, dec?: { __typename?: 'Dec', degrees: number, dms: string } | null, az?: { __typename?: 'Az', degrees: number, dms: string } | null, el?: { __typename?: 'El', degrees: number, dms: string } | null }> };

export type VersionQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionQuery = { __typename?: 'Query', version: { __typename?: 'Version', version: string, databaseVersion: string } };


export const GetAltairGuideLoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAltairGuideLoop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altairGuideLoop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"aoEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"oiBlend"}},{"kind":"Field","name":{"kind":"Name","value":"focus"}},{"kind":"Field","name":{"kind":"Name","value":"p1Ttf"}},{"kind":"Field","name":{"kind":"Name","value":"strap"}},{"kind":"Field","name":{"kind":"Name","value":"oiTtf"}},{"kind":"Field","name":{"kind":"Name","value":"ttgs"}},{"kind":"Field","name":{"kind":"Name","value":"sfo"}}]}}]}}]} as unknown as DocumentNode<GetAltairGuideLoopQuery, GetAltairGuideLoopQueryVariables>;
export const UpdateAltairGuideLoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAltairGuideLoop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aoEnabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oiBlend"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"focus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"p1Ttf"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"strap"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oiTtf"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ttgs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sfo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAltairGuideLoop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"aoEnabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aoEnabled"}}},{"kind":"Argument","name":{"kind":"Name","value":"oiBlend"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oiBlend"}}},{"kind":"Argument","name":{"kind":"Name","value":"focus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"focus"}}},{"kind":"Argument","name":{"kind":"Name","value":"p1Ttf"},"value":{"kind":"Variable","name":{"kind":"Name","value":"p1Ttf"}}},{"kind":"Argument","name":{"kind":"Name","value":"strap"},"value":{"kind":"Variable","name":{"kind":"Name","value":"strap"}}},{"kind":"Argument","name":{"kind":"Name","value":"oiTtf"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oiTtf"}}},{"kind":"Argument","name":{"kind":"Name","value":"ttgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ttgs"}}},{"kind":"Argument","name":{"kind":"Name","value":"sfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"aoEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"oiBlend"}},{"kind":"Field","name":{"kind":"Name","value":"focus"}},{"kind":"Field","name":{"kind":"Name","value":"p1Ttf"}},{"kind":"Field","name":{"kind":"Name","value":"strap"}},{"kind":"Field","name":{"kind":"Name","value":"oiTtf"}},{"kind":"Field","name":{"kind":"Name","value":"ttgs"}},{"kind":"Field","name":{"kind":"Name","value":"sfo"}}]}}]}}]} as unknown as DocumentNode<UpdateAltairGuideLoopMutation, UpdateAltairGuideLoopMutationVariables>;
export const GetAltairInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAltairInstrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altairInstrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"beamsplitter"}},{"kind":"Field","name":{"kind":"Name","value":"startMagnitude"}},{"kind":"Field","name":{"kind":"Name","value":"seeing"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"forceMode"}},{"kind":"Field","name":{"kind":"Name","value":"ndFilter"}},{"kind":"Field","name":{"kind":"Name","value":"fieldLens"}},{"kind":"Field","name":{"kind":"Name","value":"deployAdc"}},{"kind":"Field","name":{"kind":"Name","value":"adjustAdc"}},{"kind":"Field","name":{"kind":"Name","value":"lgs"}}]}}]}}]} as unknown as DocumentNode<GetAltairInstrumentQuery, GetAltairInstrumentQueryVariables>;
export const UpdateAltairInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAltairInstrument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beamsplitter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startMagnitude"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seeing"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"windSpeed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"forceMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ndFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fieldLens"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deployAdc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjustAdc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lgs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAltairInstrument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"beamsplitter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beamsplitter"}}},{"kind":"Argument","name":{"kind":"Name","value":"startMagnitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startMagnitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"seeing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seeing"}}},{"kind":"Argument","name":{"kind":"Name","value":"windSpeed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"windSpeed"}}},{"kind":"Argument","name":{"kind":"Name","value":"forceMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"forceMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"ndFilter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ndFilter"}}},{"kind":"Argument","name":{"kind":"Name","value":"fieldLens"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fieldLens"}}},{"kind":"Argument","name":{"kind":"Name","value":"deployAdc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deployAdc"}}},{"kind":"Argument","name":{"kind":"Name","value":"adjustAdc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjustAdc"}}},{"kind":"Argument","name":{"kind":"Name","value":"lgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"beamsplitter"}},{"kind":"Field","name":{"kind":"Name","value":"startMagnitude"}},{"kind":"Field","name":{"kind":"Name","value":"seeing"}},{"kind":"Field","name":{"kind":"Name","value":"windSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"forceMode"}},{"kind":"Field","name":{"kind":"Name","value":"ndFilter"}},{"kind":"Field","name":{"kind":"Name","value":"fieldLens"}},{"kind":"Field","name":{"kind":"Name","value":"deployAdc"}},{"kind":"Field","name":{"kind":"Name","value":"adjustAdc"}},{"kind":"Field","name":{"kind":"Name","value":"lgs"}}]}}]}}]} as unknown as DocumentNode<UpdateAltairInstrumentMutation, UpdateAltairInstrumentMutationVariables>;
export const GetConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getConfiguration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"selectedTarget"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOiTarget"}},{"kind":"Field","name":{"kind":"Name","value":"selectedP1Target"}},{"kind":"Field","name":{"kind":"Name","value":"selectedP2Target"}},{"kind":"Field","name":{"kind":"Name","value":"oiGuidingType"}},{"kind":"Field","name":{"kind":"Name","value":"p1GuidingType"}},{"kind":"Field","name":{"kind":"Name","value":"p2GuidingType"}},{"kind":"Field","name":{"kind":"Name","value":"obsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"obsId"}},{"kind":"Field","name":{"kind":"Name","value":"obsInstrument"}},{"kind":"Field","name":{"kind":"Name","value":"obsSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"obsReference"}}]}}]}}]} as unknown as DocumentNode<GetConfigurationQuery, GetConfigurationQueryVariables>;
export const UpdateConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selectedTarget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selectedOiTarget"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selectedP1Target"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selectedP2Target"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oiGuidingType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GuidingType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"p1GuidingType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GuidingType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"p2GuidingType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GuidingType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsInstrument"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsSubtitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsReference"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"selectedTarget"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedTarget"}}},{"kind":"Argument","name":{"kind":"Name","value":"selectedOiTarget"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedOiTarget"}}},{"kind":"Argument","name":{"kind":"Name","value":"selectedP1Target"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedP1Target"}}},{"kind":"Argument","name":{"kind":"Name","value":"selectedP2Target"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedP2Target"}}},{"kind":"Argument","name":{"kind":"Name","value":"oiGuidingType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oiGuidingType"}}},{"kind":"Argument","name":{"kind":"Name","value":"p1GuidingType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"p1GuidingType"}}},{"kind":"Argument","name":{"kind":"Name","value":"p2GuidingType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"p2GuidingType"}}},{"kind":"Argument","name":{"kind":"Name","value":"obsTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"obsId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}}},{"kind":"Argument","name":{"kind":"Name","value":"obsInstrument"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsInstrument"}}},{"kind":"Argument","name":{"kind":"Name","value":"obsSubtitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsSubtitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"obsReference"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsReference"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"selectedTarget"}},{"kind":"Field","name":{"kind":"Name","value":"selectedOiTarget"}},{"kind":"Field","name":{"kind":"Name","value":"selectedP1Target"}},{"kind":"Field","name":{"kind":"Name","value":"selectedP2Target"}},{"kind":"Field","name":{"kind":"Name","value":"oiGuidingType"}},{"kind":"Field","name":{"kind":"Name","value":"p1GuidingType"}},{"kind":"Field","name":{"kind":"Name","value":"p2GuidingType"}},{"kind":"Field","name":{"kind":"Name","value":"obsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"obsId"}},{"kind":"Field","name":{"kind":"Name","value":"obsInstrument"}},{"kind":"Field","name":{"kind":"Name","value":"obsSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"obsReference"}}]}}]}}]} as unknown as DocumentNode<UpdateConfigurationMutation, UpdateConfigurationMutationVariables>;
export const GetEngineeringTargetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEngineeringTargets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"engineeringTargets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"instrument"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetEngineeringTargetsQuery, GetEngineeringTargetsQueryVariables>;
export const UpdateEngineeringTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateEngineeringTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coord1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coord2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"epoch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wavelength"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instrument"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEngineeringTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"coord1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coord1"}}},{"kind":"Argument","name":{"kind":"Name","value":"coord2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coord2"}}},{"kind":"Argument","name":{"kind":"Name","value":"epoch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"epoch"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"wavelength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wavelength"}}},{"kind":"Argument","name":{"kind":"Name","value":"instrument"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instrument"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"instrument"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateEngineeringTargetMutation, UpdateEngineeringTargetMutationVariables>;
export const GetGemsGuideLoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGemsGuideLoop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gemsGuideLoop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"aoEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"focus"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"tipTilt"}},{"kind":"Field","name":{"kind":"Name","value":"anisopl"}},{"kind":"Field","name":{"kind":"Name","value":"flexure"}}]}}]}}]} as unknown as DocumentNode<GetGemsGuideLoopQuery, GetGemsGuideLoopQueryVariables>;
export const UpdateGemsGuideLoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGemsGuideLoop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aoEnabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"focus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rotation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tipTilt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"anisopl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flexure"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGemsGuideLoop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"aoEnabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aoEnabled"}}},{"kind":"Argument","name":{"kind":"Name","value":"focus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"focus"}}},{"kind":"Argument","name":{"kind":"Name","value":"rotation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rotation"}}},{"kind":"Argument","name":{"kind":"Name","value":"tipTilt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tipTilt"}}},{"kind":"Argument","name":{"kind":"Name","value":"anisopl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"anisopl"}}},{"kind":"Argument","name":{"kind":"Name","value":"flexure"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flexure"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"aoEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"focus"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"tipTilt"}},{"kind":"Field","name":{"kind":"Name","value":"anisopl"}},{"kind":"Field","name":{"kind":"Name","value":"flexure"}}]}}]}}]} as unknown as DocumentNode<UpdateGemsGuideLoopMutation, UpdateGemsGuideLoopMutationVariables>;
export const GetGemsInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGemsInstrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gemsInstrument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"beamsplitter"}},{"kind":"Field","name":{"kind":"Name","value":"adc"}},{"kind":"Field","name":{"kind":"Name","value":"astrometricMode"}}]}}]}}]} as unknown as DocumentNode<GetGemsInstrumentQuery, GetGemsInstrumentQueryVariables>;
export const UpdateGemsInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGemsInstrument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"beamsplitter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"astrometricMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGemsInstrument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"beamsplitter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"beamsplitter"}}},{"kind":"Argument","name":{"kind":"Name","value":"adc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adc"}}},{"kind":"Argument","name":{"kind":"Name","value":"astrometricMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"astrometricMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"beamsplitter"}},{"kind":"Field","name":{"kind":"Name","value":"adc"}},{"kind":"Field","name":{"kind":"Name","value":"astrometricMode"}}]}}]}}]} as unknown as DocumentNode<UpdateGemsInstrumentMutation, UpdateGemsInstrumentMutationVariables>;
export const GuideAlarmsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"guideAlarms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideAlarms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"OIWFS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}},{"kind":"Field","name":{"kind":"Name","value":"PWFS1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}},{"kind":"Field","name":{"kind":"Name","value":"PWFS2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]}}]}}]} as unknown as DocumentNode<GuideAlarmsQuery, GuideAlarmsQueryVariables>;
export const UpdateGuideAlarmDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGuideAlarm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WfsType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGuideAlarm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}}},{"kind":"Argument","name":{"kind":"Name","value":"enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enabled"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]}}]} as unknown as DocumentNode<UpdateGuideAlarmMutation, UpdateGuideAlarmMutationVariables>;
export const GetGuideLoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGuideLoop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideLoop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"m2TipTiltEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m2TipTiltSource"}},{"kind":"Field","name":{"kind":"Name","value":"m2FocusEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m2FocusSource"}},{"kind":"Field","name":{"kind":"Name","value":"m2TipTiltFocusLink"}},{"kind":"Field","name":{"kind":"Name","value":"m2ComaEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m1CorrectionsEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m2ComaM1CorrectionsSource"}},{"kind":"Field","name":{"kind":"Name","value":"mountOffload"}},{"kind":"Field","name":{"kind":"Name","value":"daytimeMode"}},{"kind":"Field","name":{"kind":"Name","value":"probeTracking"}},{"kind":"Field","name":{"kind":"Name","value":"lightPath"}}]}}]}}]} as unknown as DocumentNode<GetGuideLoopQuery, GetGuideLoopQueryVariables>;
export const UpdateGuideLoopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateGuideLoop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2TipTiltEnable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2TipTiltSource"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2FocusEnable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2FocusSource"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2TipTiltFocusLink"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2ComaEnable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m1CorrectionsEnable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m2ComaM1CorrectionsSource"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mountOffload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daytimeMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"probeTracking"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lightPath"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGuideLoop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2TipTiltEnable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2TipTiltEnable"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2TipTiltSource"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2TipTiltSource"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2FocusEnable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2FocusEnable"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2FocusSource"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2FocusSource"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2TipTiltFocusLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2TipTiltFocusLink"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2ComaEnable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2ComaEnable"}}},{"kind":"Argument","name":{"kind":"Name","value":"m1CorrectionsEnable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m1CorrectionsEnable"}}},{"kind":"Argument","name":{"kind":"Name","value":"m2ComaM1CorrectionsSource"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m2ComaM1CorrectionsSource"}}},{"kind":"Argument","name":{"kind":"Name","value":"mountOffload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mountOffload"}}},{"kind":"Argument","name":{"kind":"Name","value":"daytimeMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daytimeMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"probeTracking"},"value":{"kind":"Variable","name":{"kind":"Name","value":"probeTracking"}}},{"kind":"Argument","name":{"kind":"Name","value":"lightPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lightPath"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"m2TipTiltEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m2TipTiltSource"}},{"kind":"Field","name":{"kind":"Name","value":"m2FocusEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m2FocusSource"}},{"kind":"Field","name":{"kind":"Name","value":"m2TipTiltFocusLink"}},{"kind":"Field","name":{"kind":"Name","value":"m2ComaEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m1CorrectionsEnable"}},{"kind":"Field","name":{"kind":"Name","value":"m2ComaM1CorrectionsSource"}},{"kind":"Field","name":{"kind":"Name","value":"mountOffload"}},{"kind":"Field","name":{"kind":"Name","value":"daytimeMode"}},{"kind":"Field","name":{"kind":"Name","value":"probeTracking"}},{"kind":"Field","name":{"kind":"Name","value":"lightPath"}}]}}]}}]} as unknown as DocumentNode<UpdateGuideLoopMutation, UpdateGuideLoopMutationVariables>;
export const GetDistinctInstrumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDistinctInstruments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distinctInstruments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetDistinctInstrumentsQuery, GetDistinctInstrumentsQueryVariables>;
export const GetDistinctPortsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDistinctPorts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distinctPorts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issPort"}}]}}]}}]} as unknown as DocumentNode<GetDistinctPortsQuery, GetDistinctPortsQueryVariables>;
export const GetInstrumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInstruments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issPort"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instruments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"issPort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issPort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iaa"}},{"kind":"Field","name":{"kind":"Name","value":"issPort"}},{"kind":"Field","name":{"kind":"Name","value":"focusOffset"}},{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"originX"}},{"kind":"Field","name":{"kind":"Name","value":"originY"}},{"kind":"Field","name":{"kind":"Name","value":"ao"}},{"kind":"Field","name":{"kind":"Name","value":"extraParams"}}]}}]}}]} as unknown as DocumentNode<GetInstrumentsQuery, GetInstrumentsQueryVariables>;
export const GetInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInstrument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issPort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WfsType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"issPort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issPort"}}},{"kind":"Argument","name":{"kind":"Name","value":"wfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iaa"}},{"kind":"Field","name":{"kind":"Name","value":"issPort"}},{"kind":"Field","name":{"kind":"Name","value":"focusOffset"}},{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"originX"}},{"kind":"Field","name":{"kind":"Name","value":"originY"}},{"kind":"Field","name":{"kind":"Name","value":"ao"}},{"kind":"Field","name":{"kind":"Name","value":"extraParams"}}]}}]}}]} as unknown as DocumentNode<GetInstrumentQuery, GetInstrumentQueryVariables>;
export const UpdateInstrumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateInstrument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"iaa"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issPort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"focusOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WfsType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"originX"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"originY"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ao"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"extraParams"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInstrument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"iaa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"iaa"}}},{"kind":"Argument","name":{"kind":"Name","value":"issPort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issPort"}}},{"kind":"Argument","name":{"kind":"Name","value":"focusOffset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"focusOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"wfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}}},{"kind":"Argument","name":{"kind":"Name","value":"originX"},"value":{"kind":"Variable","name":{"kind":"Name","value":"originX"}}},{"kind":"Argument","name":{"kind":"Name","value":"originY"},"value":{"kind":"Variable","name":{"kind":"Name","value":"originY"}}},{"kind":"Argument","name":{"kind":"Name","value":"ao"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ao"}}},{"kind":"Argument","name":{"kind":"Name","value":"extraParams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"extraParams"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iaa"}},{"kind":"Field","name":{"kind":"Name","value":"issPort"}},{"kind":"Field","name":{"kind":"Name","value":"focusOffset"}},{"kind":"Field","name":{"kind":"Name","value":"wfs"}},{"kind":"Field","name":{"kind":"Name","value":"originX"}},{"kind":"Field","name":{"kind":"Name","value":"originY"}},{"kind":"Field","name":{"kind":"Name","value":"ao"}},{"kind":"Field","name":{"kind":"Name","value":"extraParams"}}]}}]}}]} as unknown as DocumentNode<UpdateInstrumentMutation, UpdateInstrumentMutationVariables>;
export const GetMechanismDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMechanism"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mechanism"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"mcs"}},{"kind":"Field","name":{"kind":"Name","value":"mcsPark"}},{"kind":"Field","name":{"kind":"Name","value":"mcsUnwrap"}},{"kind":"Field","name":{"kind":"Name","value":"scs"}},{"kind":"Field","name":{"kind":"Name","value":"crcs"}},{"kind":"Field","name":{"kind":"Name","value":"crcsPark"}},{"kind":"Field","name":{"kind":"Name","value":"crcsUnwrap"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1Park"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1Unwrap"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2Park"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2Unwrap"}},{"kind":"Field","name":{"kind":"Name","value":"oiwfs"}},{"kind":"Field","name":{"kind":"Name","value":"oiwfsPark"}},{"kind":"Field","name":{"kind":"Name","value":"odgw"}},{"kind":"Field","name":{"kind":"Name","value":"odgwPark"}},{"kind":"Field","name":{"kind":"Name","value":"aowfs"}},{"kind":"Field","name":{"kind":"Name","value":"aowfsPark"}},{"kind":"Field","name":{"kind":"Name","value":"dome"}},{"kind":"Field","name":{"kind":"Name","value":"domePark"}},{"kind":"Field","name":{"kind":"Name","value":"domeMode"}},{"kind":"Field","name":{"kind":"Name","value":"shutters"}},{"kind":"Field","name":{"kind":"Name","value":"shuttersPark"}},{"kind":"Field","name":{"kind":"Name","value":"shutterMode"}},{"kind":"Field","name":{"kind":"Name","value":"shutterAperture"}},{"kind":"Field","name":{"kind":"Name","value":"wVGate"}},{"kind":"Field","name":{"kind":"Name","value":"wVGateClose"}},{"kind":"Field","name":{"kind":"Name","value":"wVGateValue"}},{"kind":"Field","name":{"kind":"Name","value":"eVGate"}},{"kind":"Field","name":{"kind":"Name","value":"eVGateClose"}},{"kind":"Field","name":{"kind":"Name","value":"eVGateValue"}},{"kind":"Field","name":{"kind":"Name","value":"agScienceFoldPark"}},{"kind":"Field","name":{"kind":"Name","value":"agAoFoldPark"}},{"kind":"Field","name":{"kind":"Name","value":"agAcPickoffPark"}},{"kind":"Field","name":{"kind":"Name","value":"agParkAll"}}]}}]}}]} as unknown as DocumentNode<GetMechanismQuery, GetMechanismQueryVariables>;
export const UpdateMechanismDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMechanism"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mcs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mcsPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mcsUnwrap"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crcs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crcsPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crcsUnwrap"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pwfs1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pwfs1Park"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pwfs1Unwrap"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pwfs2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pwfs2Park"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pwfs2Unwrap"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oiwfs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oiwfsPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"odgw"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"odgwPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aowfs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aowfsPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dome"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domePark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domeMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shutters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shuttersPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shutterMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shutterAperture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wVGate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wVGateClose"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wVGateValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eVGate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eVGateClose"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eVGateValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agScienceFoldPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agAoFoldPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agAcPickoffPark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agParkAll"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMechanism"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"mcs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mcs"}}},{"kind":"Argument","name":{"kind":"Name","value":"mcsPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mcsPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"mcsUnwrap"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mcsUnwrap"}}},{"kind":"Argument","name":{"kind":"Name","value":"scs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scs"}}},{"kind":"Argument","name":{"kind":"Name","value":"crcs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crcs"}}},{"kind":"Argument","name":{"kind":"Name","value":"crcsPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crcsPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"crcsUnwrap"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crcsUnwrap"}}},{"kind":"Argument","name":{"kind":"Name","value":"pwfs1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pwfs1"}}},{"kind":"Argument","name":{"kind":"Name","value":"pwfs1Park"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pwfs1Park"}}},{"kind":"Argument","name":{"kind":"Name","value":"pwfs1Unwrap"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pwfs1Unwrap"}}},{"kind":"Argument","name":{"kind":"Name","value":"pwfs2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pwfs2"}}},{"kind":"Argument","name":{"kind":"Name","value":"pwfs2Park"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pwfs2Park"}}},{"kind":"Argument","name":{"kind":"Name","value":"pwfs2Unwrap"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pwfs2Unwrap"}}},{"kind":"Argument","name":{"kind":"Name","value":"oiwfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oiwfs"}}},{"kind":"Argument","name":{"kind":"Name","value":"oiwfsPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oiwfsPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"odgw"},"value":{"kind":"Variable","name":{"kind":"Name","value":"odgw"}}},{"kind":"Argument","name":{"kind":"Name","value":"odgwPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"odgwPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"aowfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aowfs"}}},{"kind":"Argument","name":{"kind":"Name","value":"aowfsPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aowfsPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"dome"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dome"}}},{"kind":"Argument","name":{"kind":"Name","value":"domePark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domePark"}}},{"kind":"Argument","name":{"kind":"Name","value":"domeMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domeMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"shutters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shutters"}}},{"kind":"Argument","name":{"kind":"Name","value":"shuttersPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shuttersPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"shutterMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shutterMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"shutterAperture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shutterAperture"}}},{"kind":"Argument","name":{"kind":"Name","value":"wVGate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wVGate"}}},{"kind":"Argument","name":{"kind":"Name","value":"wVGateClose"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wVGateClose"}}},{"kind":"Argument","name":{"kind":"Name","value":"wVGateValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wVGateValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"eVGate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eVGate"}}},{"kind":"Argument","name":{"kind":"Name","value":"eVGateClose"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eVGateClose"}}},{"kind":"Argument","name":{"kind":"Name","value":"eVGateValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eVGateValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"agScienceFoldPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agScienceFoldPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"agAoFoldPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agAoFoldPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"agAcPickoffPark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agAcPickoffPark"}}},{"kind":"Argument","name":{"kind":"Name","value":"agParkAll"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agParkAll"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"mcs"}},{"kind":"Field","name":{"kind":"Name","value":"mcsPark"}},{"kind":"Field","name":{"kind":"Name","value":"mcsUnwrap"}},{"kind":"Field","name":{"kind":"Name","value":"scs"}},{"kind":"Field","name":{"kind":"Name","value":"crcs"}},{"kind":"Field","name":{"kind":"Name","value":"crcsPark"}},{"kind":"Field","name":{"kind":"Name","value":"crcsUnwrap"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1Park"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1Unwrap"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2Park"}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2Unwrap"}},{"kind":"Field","name":{"kind":"Name","value":"oiwfs"}},{"kind":"Field","name":{"kind":"Name","value":"oiwfsPark"}},{"kind":"Field","name":{"kind":"Name","value":"odgw"}},{"kind":"Field","name":{"kind":"Name","value":"odgwPark"}},{"kind":"Field","name":{"kind":"Name","value":"aowfs"}},{"kind":"Field","name":{"kind":"Name","value":"aowfsPark"}},{"kind":"Field","name":{"kind":"Name","value":"dome"}},{"kind":"Field","name":{"kind":"Name","value":"domePark"}},{"kind":"Field","name":{"kind":"Name","value":"domeMode"}},{"kind":"Field","name":{"kind":"Name","value":"shutters"}},{"kind":"Field","name":{"kind":"Name","value":"shuttersPark"}},{"kind":"Field","name":{"kind":"Name","value":"shutterMode"}},{"kind":"Field","name":{"kind":"Name","value":"shutterAperture"}},{"kind":"Field","name":{"kind":"Name","value":"wVGate"}},{"kind":"Field","name":{"kind":"Name","value":"wVGateClose"}},{"kind":"Field","name":{"kind":"Name","value":"wVGateValue"}},{"kind":"Field","name":{"kind":"Name","value":"eVGate"}},{"kind":"Field","name":{"kind":"Name","value":"eVGateClose"}},{"kind":"Field","name":{"kind":"Name","value":"eVGateValue"}},{"kind":"Field","name":{"kind":"Name","value":"agScienceFoldPark"}},{"kind":"Field","name":{"kind":"Name","value":"agAoFoldPark"}},{"kind":"Field","name":{"kind":"Name","value":"agAcPickoffPark"}},{"kind":"Field","name":{"kind":"Name","value":"agParkAll"}}]}}]}}]} as unknown as DocumentNode<UpdateMechanismMutation, UpdateMechanismMutationVariables>;
export const GetRotatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRotator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rotator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"angle"}},{"kind":"Field","name":{"kind":"Name","value":"tracking"}}]}}]}}]} as unknown as DocumentNode<GetRotatorQuery, GetRotatorQueryVariables>;
export const UpdateRotatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRotator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"angle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tracking"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TrackingType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRotator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"angle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"angle"}}},{"kind":"Argument","name":{"kind":"Name","value":"tracking"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tracking"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"angle"}},{"kind":"Field","name":{"kind":"Name","value":"tracking"}}]}}]}}]} as unknown as DocumentNode<UpdateRotatorMutation, UpdateRotatorMutationVariables>;
export const GetSlewFlagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSlewFlags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slewFlags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"zeroChopThrow"}},{"kind":"Field","name":{"kind":"Name","value":"zeroSourceOffset"}},{"kind":"Field","name":{"kind":"Name","value":"zeroSourceDiffTrack"}},{"kind":"Field","name":{"kind":"Name","value":"zeroMountOffset"}},{"kind":"Field","name":{"kind":"Name","value":"zeroMountDiffTrack"}},{"kind":"Field","name":{"kind":"Name","value":"shortcircuitTargetFilter"}},{"kind":"Field","name":{"kind":"Name","value":"shortcircuitMountFilter"}},{"kind":"Field","name":{"kind":"Name","value":"resetPointing"}},{"kind":"Field","name":{"kind":"Name","value":"stopGuide"}},{"kind":"Field","name":{"kind":"Name","value":"zeroGuideOffset"}},{"kind":"Field","name":{"kind":"Name","value":"zeroInstrumentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkPwfs1"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkPwfs2"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkOiwfs"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkGems"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkAowfs"}}]}}]}}]} as unknown as DocumentNode<GetSlewFlagsQuery, GetSlewFlagsQueryVariables>;
export const UpdateSlewFlagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSlewFlags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroChopThrow"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroSourceOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroSourceDiffTrack"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroMountOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroMountDiffTrack"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortcircuitTargetFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortcircuitMountFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resetPointing"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stopGuide"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroGuideOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zeroInstrumentOffset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"autoparkPwfs1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"autoparkPwfs2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"autoparkOiwfs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"autoparkGems"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"autoparkAowfs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSlewFlags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroChopThrow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroChopThrow"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroSourceOffset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroSourceOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroSourceDiffTrack"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroSourceDiffTrack"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroMountOffset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroMountOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroMountDiffTrack"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroMountDiffTrack"}}},{"kind":"Argument","name":{"kind":"Name","value":"shortcircuitTargetFilter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortcircuitTargetFilter"}}},{"kind":"Argument","name":{"kind":"Name","value":"shortcircuitMountFilter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortcircuitMountFilter"}}},{"kind":"Argument","name":{"kind":"Name","value":"resetPointing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resetPointing"}}},{"kind":"Argument","name":{"kind":"Name","value":"stopGuide"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stopGuide"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroGuideOffset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroGuideOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"zeroInstrumentOffset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zeroInstrumentOffset"}}},{"kind":"Argument","name":{"kind":"Name","value":"autoparkPwfs1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"autoparkPwfs1"}}},{"kind":"Argument","name":{"kind":"Name","value":"autoparkPwfs2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"autoparkPwfs2"}}},{"kind":"Argument","name":{"kind":"Name","value":"autoparkOiwfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"autoparkOiwfs"}}},{"kind":"Argument","name":{"kind":"Name","value":"autoparkGems"},"value":{"kind":"Variable","name":{"kind":"Name","value":"autoparkGems"}}},{"kind":"Argument","name":{"kind":"Name","value":"autoparkAowfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"autoparkAowfs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"zeroChopThrow"}},{"kind":"Field","name":{"kind":"Name","value":"zeroSourceOffset"}},{"kind":"Field","name":{"kind":"Name","value":"zeroSourceDiffTrack"}},{"kind":"Field","name":{"kind":"Name","value":"zeroMountOffset"}},{"kind":"Field","name":{"kind":"Name","value":"zeroMountDiffTrack"}},{"kind":"Field","name":{"kind":"Name","value":"shortcircuitTargetFilter"}},{"kind":"Field","name":{"kind":"Name","value":"shortcircuitMountFilter"}},{"kind":"Field","name":{"kind":"Name","value":"resetPointing"}},{"kind":"Field","name":{"kind":"Name","value":"stopGuide"}},{"kind":"Field","name":{"kind":"Name","value":"zeroGuideOffset"}},{"kind":"Field","name":{"kind":"Name","value":"zeroInstrumentOffset"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkPwfs1"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkPwfs2"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkOiwfs"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkGems"}},{"kind":"Field","name":{"kind":"Name","value":"autoparkAowfs"}}]}}]}}]} as unknown as DocumentNode<UpdateSlewFlagsMutation, UpdateSlewFlagsMutationVariables>;
export const GetTargetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTargets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"targets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetTargetsQuery, GetTargetsQueryVariables>;
export const UpdateTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coord1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coord2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"magnitude"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"band"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"epoch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wavelength"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"coord1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coord1"}}},{"kind":"Argument","name":{"kind":"Name","value":"coord2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coord2"}}},{"kind":"Argument","name":{"kind":"Name","value":"magnitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"magnitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"band"},"value":{"kind":"Variable","name":{"kind":"Name","value":"band"}}},{"kind":"Argument","name":{"kind":"Name","value":"epoch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"epoch"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"wavelength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wavelength"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateTargetMutation, UpdateTargetMutationVariables>;
export const CreateTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ra"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"az"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dec"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"el"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"magnitude"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"band"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"epoch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wavelength"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"ra"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ra"}}},{"kind":"Argument","name":{"kind":"Name","value":"az"},"value":{"kind":"Variable","name":{"kind":"Name","value":"az"}}},{"kind":"Argument","name":{"kind":"Name","value":"dec"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dec"}}},{"kind":"Argument","name":{"kind":"Name","value":"el"},"value":{"kind":"Variable","name":{"kind":"Name","value":"el"}}},{"kind":"Argument","name":{"kind":"Name","value":"magnitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"magnitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"band"},"value":{"kind":"Variable","name":{"kind":"Name","value":"band"}}},{"kind":"Argument","name":{"kind":"Name","value":"epoch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"epoch"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"wavelength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wavelength"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateTargetMutation, CreateTargetMutationVariables>;
export const RemoveAndCreateBaseTargetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAndCreateBaseTargets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targets"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAndCreateBaseTargets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targets"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<RemoveAndCreateBaseTargetsMutation, RemoveAndCreateBaseTargetsMutationVariables>;
export const RemoveAndCreateWfsTargetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAndCreateWfsTargets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targets"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TargetInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAndCreateWfsTargets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}}},{"kind":"Argument","name":{"kind":"Name","value":"targets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targets"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pk"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"hms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"az"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"el"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}},{"kind":"Field","name":{"kind":"Name","value":"dms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"wavelength"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<RemoveAndCreateWfsTargetsMutation, RemoveAndCreateWfsTargetsMutationVariables>;
export const VersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"version"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"databaseVersion"}}]}}]}}]} as unknown as DocumentNode<VersionQuery, VersionQueryVariables>;