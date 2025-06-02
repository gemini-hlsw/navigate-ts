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
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: { input: string|number; output: string|number; }
  /** Target declination coordinate in format '[+/-]DD:MM:SS.sss' */
  DmsString: { input: string; output: string; }
  /** Reference observation epoch in format '[JB]YYYY.YYY' */
  EpochString: { input: string; output: string; }
  /** Target right ascension coordinate in format 'HH:MM:SS.sss' */
  HmsString: { input: string; output: string; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: number; output: number; }
  /** A String value that cannot be empty */
  NonEmptyString: { input: string; output: string; }
  /** ObservationId id formatted as `o-[1-9a-f][0-9a-f]*` */
  ObservationId: { input: string; output: string; }
  /** A `BigDecimal` greater than 0 */
  PosBigDecimal: { input: number; output: number; }
  /** An `Int` in the range from 1 to 2147483647 */
  PosInt: { input: number; output: number; }
  /** TargetId id formatted as `t-[1-9a-f][0-9a-f]*` */
  TargetId: { input: string; output: string; }
  /** Timestamp of time in ISO-8601 representation in format '2011-12-03T10:15:30Z' */
  Timestamp: { input: string; output: string; }
};

export type AcquisitionAdjustmentInput = {
  command?: AcquistionAdjustmentCommand;
  iaa?: InputMaybe<AngleInput>;
  ipa?: InputMaybe<AngleInput>;
  offset: OffsetInput;
};

export type AcquisitionAdjustmentState = {
  __typename?: 'AcquisitionAdjustmentState';
  command: AcquistionAdjustmentCommand;
  iaa?: Maybe<Angle>;
  ipa?: Maybe<Angle>;
  offset: Offset;
};

export type AcquistionAdjustmentCommand =
  /**  Request the user to confirm the adjustment  */
  | 'ASK_USER'
  /**  User cancels the adjustment  */
  | 'USER_CANCELS'
  /**  User confirms to apply the adjustment  */
  | 'USER_CONFIRMS';

export type AdjustTarget =
  | 'OIWFS'
  | 'PWFS1'
  | 'PWFS2'
  | 'SOURCE_A';

export type Angle = {
  __typename?: 'Angle';
  /** Angle in amin */
  arcminutes: Scalars['BigDecimal']['output'];
  /** Angle in asec */
  arcseconds: Scalars['BigDecimal']['output'];
  /** Angle in deg */
  degrees: Scalars['BigDecimal']['output'];
  /** Angle in DD:MM:SS */
  dms: Scalars['String']['output'];
  /** Angle in HH:MM:SS */
  hms: Scalars['String']['output'];
  /** Angle in hrs */
  hours: Scalars['BigDecimal']['output'];
  /** Angle in µas */
  microarcseconds: Scalars['Long']['output'];
  /** Angle in µs */
  microseconds: Scalars['BigDecimal']['output'];
  /** Angle in mas */
  milliarcseconds: Scalars['BigDecimal']['output'];
  /** Angle in ms */
  milliseconds: Scalars['BigDecimal']['output'];
  /** Angle in min */
  minutes: Scalars['BigDecimal']['output'];
  /** Angle in sec */
  seconds: Scalars['BigDecimal']['output'];
};

/** Create an angle from a signed value.  Choose exactly one of the available units. */
export type AngleInput = {
  arcminutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  arcseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
  degrees?: InputMaybe<Scalars['BigDecimal']['input']>;
  dms?: InputMaybe<Scalars['String']['input']>;
  hms?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<Scalars['BigDecimal']['input']>;
  microarcseconds?: InputMaybe<Scalars['Long']['input']>;
  microseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
  milliarcseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
  milliseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
  minutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  seconds?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type AzElTargetInput = {
  azimuth: AngleInput;
  elevation: AngleInput;
};

export type CatalogInfo = {
  __typename?: 'CatalogInfo';
  /** Catalog id string */
  id: Scalars['String']['output'];
  /** Catalog name option */
  name: CatalogName;
  /** Catalog description of object morphology */
  objectType?: Maybe<Scalars['String']['output']>;
};

/** Catalog id consisting of catalog name, string identifier and an optional object type */
export type CatalogInfoInput = {
  /** The id field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  id?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The name field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  name?: InputMaybe<CatalogName>;
  /** The objectType field may be unset by assigning a null value, or ignored by skipping it altogether */
  objectType?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Catalog name values */
export type CatalogName =
  /** CatalogName Gaia */
  | 'GAIA'
  /** CatalogName Import */
  | 'IMPORT'
  /** CatalogName Simbad */
  | 'SIMBAD';

export type Declination = {
  __typename?: 'Declination';
  /** Declination in signed degrees */
  degrees: Scalars['BigDecimal']['output'];
  /** Declination in DD:MM:SS.SS format */
  dms: Scalars['DmsString']['output'];
  /** Declination in signed µas */
  microarcseconds: Scalars['Long']['output'];
};

/** Declination, choose one of the available units */
export type DeclinationInput = {
  degrees?: InputMaybe<Scalars['BigDecimal']['input']>;
  dms?: InputMaybe<Scalars['DmsString']['input']>;
  microarcseconds?: InputMaybe<Scalars['Long']['input']>;
};

export type Distance = {
  __typename?: 'Distance';
  micrometers: Scalars['Long']['output'];
  millimeters: Scalars['BigDecimal']['output'];
};

export type DistanceInput = {
  micrometers?: InputMaybe<Scalars['Long']['input']>;
  millimeters?: InputMaybe<Scalars['BigDecimal']['input']>;
};

/** Ephemeris key type options */
export type EphemerisKeyType =
  /** EphemerisKeyType AsteroidNew */
  | 'ASTEROID_NEW'
  /** EphemerisKeyType AsteroidOld */
  | 'ASTEROID_OLD'
  /** EphemerisKeyType Comet */
  | 'COMET'
  /** EphemerisKeyType MajorBody */
  | 'MAJOR_BODY'
  /** EphemerisKeyType UserSupplied */
  | 'USER_SUPPLIED';

export type EquatorialOffsetInput = {
  deltaDec: AngleInput;
  deltaRA: AngleInput;
};

export type FocalPlaneOffset = {
  __typename?: 'FocalPlaneOffset';
  deltaX: Angle;
  deltaY: Angle;
};

export type FocalPlaneOffsetInput = {
  deltaX: AngleInput;
  deltaY: AngleInput;
};

export type FollowStatus =
  | 'FOLLOWING'
  | 'NOT_FOLLOWING';

export type GuideConfigurationInput = {
  /** Flag for day time tests. It sets all gains to 0 */
  daytimeMode: Scalars['Boolean']['input'];
  /** M1 correction source. If it is not defined it means no M1 correction */
  m1Input?: InputMaybe<M1CorrectionSource>;
  /** M2 coma correction enabled. Only valid if m2Inputs and m1Input are defined */
  m2Coma?: InputMaybe<Scalars['Boolean']['input']>;
  /** M2 Tip-Tilt correction sources. An empty array means no corrections */
  m2Inputs?: InputMaybe<Array<TipTiltSource>>;
  /** Tip-tilt offload to the mount enabled */
  mountOffload: Scalars['Boolean']['input'];
  /** Probe names to be used for guiding */
  probeGuide?: InputMaybe<ProbeGuideInput>;
};

export type GuideConfigurationState = {
  __typename?: 'GuideConfigurationState';
  /** Is the AC/HRWFS integrating? */
  acIntegrating: Scalars['Boolean']['output'];
  /** M1 correction source. If it is not defined it means no M1 correction */
  m1Input?: Maybe<M1CorrectionSource>;
  /** M2 coma correction enabled. Only valid if m2Inputs and m1Input are defined */
  m2Coma?: Maybe<Scalars['Boolean']['output']>;
  /** M2 Tip-Tilt correction sources. An empty array means no corrections */
  m2Inputs?: Maybe<Array<TipTiltSource>>;
  /** Tip-tilt offload to the mount enabled */
  mountOffload: Scalars['Boolean']['output'];
  /** Is OIWFS integrating? */
  oiIntegrating: Scalars['Boolean']['output'];
  /** Is PWFS1 integrating? */
  p1Integrating: Scalars['Boolean']['output'];
  /** Is PWFS2 integrating? */
  p2Integrating: Scalars['Boolean']['output'];
};

/** Enumeration for Guide Probes */
export type GuideProbe =
  | 'GMOS_OIWFS'
  | 'PWFS_1'
  | 'PWFS_2';

export type GuideQuality = {
  __typename?: 'GuideQuality';
  centroidDetected: Scalars['Boolean']['output'];
  flux: Scalars['Int']['output'];
};

export type GuideTargetPropertiesInput = {
  name: Scalars['NonEmptyString']['input'];
  nonsidereal?: InputMaybe<NonsiderealInput>;
  sidereal?: InputMaybe<SiderealInput>;
};

export type GuiderConfig = {
  target: GuideTargetPropertiesInput;
  tracking: ProbeTrackingInput;
};

export type GuidersQualityValues = {
  __typename?: 'GuidersQualityValues';
  oiwfs: GuideQuality;
  pwfs1: GuideQuality;
  pwfs2: GuideQuality;
};

export type HandsetAdjustmentInput = {
  /**  Right Ascension/Declination coordinate system  */
  equatorialAdjustment?: InputMaybe<EquatorialOffsetInput>;
  /**  Telescope focal plane coordinate system (X, Y) */
  focalPlaneAdjustment?: InputMaybe<FocalPlaneOffsetInput>;
  /**  Azimuth/Elevation coordinate system  */
  horizontalAdjustment?: InputMaybe<HorizontalOffsetInput>;
  /**  Instrument coordinate system (P, Q)  */
  instrumentAdjustment?: InputMaybe<OffsetInput>;
};

export type HorizontalOffsetInput = {
  azimuth: AngleInput;
  elevation: AngleInput;
};

/** Instrument */
export type Instrument =
  /** Instrument AcqCam */
  | 'ACQ_CAM'
  /** Instrument Alopeke */
  | 'ALOPEKE'
  /** Instrument Flamingos2 */
  | 'FLAMINGOS2'
  /** Instrument Ghost */
  | 'GHOST'
  /** Instrument GmosNorth */
  | 'GMOS_NORTH'
  /** Instrument GmosSouth */
  | 'GMOS_SOUTH'
  /** Instrument Gnirs */
  | 'GNIRS'
  /** Instrument Gpi */
  | 'GPI'
  /** Instrument Gsaoi */
  | 'GSAOI'
  /** Instrument Igrins2 */
  | 'IGRINS2'
  /** Instrument Niri */
  | 'NIRI'
  /** Instrument Scorpio */
  | 'SCORPIO'
  /** Instrument Visitor */
  | 'VISITOR'
  /** Instrument Zorro */
  | 'ZORRO';

export type InstrumentSpecificsInput = {
  agName: Scalars['String']['input'];
  focusOffset: DistanceInput;
  iaa: AngleInput;
  origin: PointOriginInput;
};

export type LightSink =
  | 'AC'
  | 'F2'
  | 'GHOST'
  | 'GMOS'
  | 'GMOS_IFU'
  | 'GNIRS'
  | 'GPI'
  | 'GSAOI'
  | 'HR'
  | 'IGRINS2'
  | 'NIRI_F6'
  | 'NIRI_F14'
  | 'NIRI_F32'
  | 'VISITOR';

export type LightSource =
  | 'AO'
  | 'GCAL'
  | 'SKY';

export type LogLevel =
  | 'DEBUG'
  | 'ERROR'
  | 'INFO'
  | 'TRACE'
  | 'WARN';

export type LogMessage = {
  __typename?: 'LogMessage';
  level: LogLevel;
  message: Scalars['String']['output'];
  thread: Scalars['String']['output'];
  timestamp: Scalars['Timestamp']['output'];
};

export type M1CorrectionSource =
  | 'OIWFS';

export type MechSystemState = {
  __typename?: 'MechSystemState';
  follow: FollowStatus;
  parked: ParkStatus;
};

export type Mutation = {
  __typename?: 'Mutation';
  absorbOriginAdjustment: OperationOutcome;
  absorbPointingAdjustment: OperationOutcome;
  absorbTargetAdjustment: OperationOutcome;
  acObserve: OperationOutcome;
  acStopObserve: OperationOutcome;
  acquisitionAdjustment: OperationOutcome;
  adjustOrigin: OperationOutcome;
  adjustPointing: OperationOutcome;
  adjustTarget: OperationOutcome;
  guideDisable: OperationOutcome;
  guideEnable: OperationOutcome;
  instrumentSpecifics: OperationOutcome;
  lightpathConfig: OperationOutcome;
  m1LoadAoFigure: OperationOutcome;
  m1LoadNonAoFigure: OperationOutcome;
  m1OpenLoopOff: OperationOutcome;
  m1OpenLoopOn: OperationOutcome;
  m1Park: OperationOutcome;
  m1Unpark: OperationOutcome;
  m1ZeroFigure: OperationOutcome;
  mountFollow: OperationOutcome;
  mountPark: OperationOutcome;
  oiwfsFollow: OperationOutcome;
  oiwfsObserve: OperationOutcome;
  oiwfsPark: OperationOutcome;
  oiwfsProbeTracking: OperationOutcome;
  oiwfsStopObserve: OperationOutcome;
  oiwfsTarget: OperationOutcome;
  resetOriginAdjustment: OperationOutcome;
  resetPointingAdjustment: OperationOutcome;
  resetTargetAdjustment: OperationOutcome;
  restoreTarget: OperationOutcome;
  rotatorConfig: OperationOutcome;
  rotatorFollow: OperationOutcome;
  rotatorPark: OperationOutcome;
  scsFollow: OperationOutcome;
  slew: OperationOutcome;
  swapTarget: OperationOutcome;
  tcsConfig: OperationOutcome;
  wfsSky: OperationOutcome;
};


export type MutationAbsorbTargetAdjustmentArgs = {
  target: AdjustTarget;
};


export type MutationAcObserveArgs = {
  period: TimeSpanInput;
};


export type MutationAcquisitionAdjustmentArgs = {
  adjustment: AcquisitionAdjustmentInput;
};


export type MutationAdjustOriginArgs = {
  offset: HandsetAdjustmentInput;
  openLoops: Scalars['Boolean']['input'];
};


export type MutationAdjustPointingArgs = {
  offset: HandsetAdjustmentInput;
  openLoops: Scalars['Boolean']['input'];
};


export type MutationAdjustTargetArgs = {
  offset: HandsetAdjustmentInput;
  openLoops: Scalars['Boolean']['input'];
  target: AdjustTarget;
};


export type MutationGuideEnableArgs = {
  config: GuideConfigurationInput;
};


export type MutationInstrumentSpecificsArgs = {
  instrumentSpecificsParams: InstrumentSpecificsInput;
};


export type MutationLightpathConfigArgs = {
  from?: InputMaybe<LightSource>;
  to?: InputMaybe<LightSink>;
};


export type MutationMountFollowArgs = {
  enable: Scalars['Boolean']['input'];
};


export type MutationOiwfsFollowArgs = {
  enable: Scalars['Boolean']['input'];
};


export type MutationOiwfsObserveArgs = {
  period: TimeSpanInput;
};


export type MutationOiwfsProbeTrackingArgs = {
  config: ProbeTrackingInput;
};


export type MutationOiwfsTargetArgs = {
  target: TargetPropertiesInput;
};


export type MutationResetTargetAdjustmentArgs = {
  target: AdjustTarget;
};


export type MutationRestoreTargetArgs = {
  config: TcsConfigInput;
};


export type MutationRotatorConfigArgs = {
  config: RotatorTrackingInput;
};


export type MutationRotatorFollowArgs = {
  enable: Scalars['Boolean']['input'];
};


export type MutationScsFollowArgs = {
  enable: Scalars['Boolean']['input'];
};


export type MutationSlewArgs = {
  config: TcsConfigInput;
  obsId?: InputMaybe<Scalars['ObservationId']['input']>;
  slewOptions: SlewOptionsInput;
};


export type MutationSwapTargetArgs = {
  swapConfig: SwapConfigInput;
};


export type MutationTcsConfigArgs = {
  config: TcsConfigInput;
};


export type MutationWfsSkyArgs = {
  period: TimeSpanInput;
  wfs: GuideProbe;
};

export type NavigateState = {
  __typename?: 'NavigateState';
  onSwappedTarget: Scalars['Boolean']['output'];
};

export type Nonsidereal = {
  __typename?: 'Nonsidereal';
  /** Human readable designation that discriminates among ephemeris keys of the same type. */
  des: Scalars['String']['output'];
  /** Synthesis of `keyType` and `des` */
  key: Scalars['String']['output'];
  /** Nonsidereal target lookup type. */
  keyType: EphemerisKeyType;
};

/** Nonsidereal target parameters.  Supply `keyType` and `des` or `key` */
export type NonsiderealInput = {
  /** The des field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  des?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The key field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  key?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The keyType field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  keyType?: InputMaybe<EphemerisKeyType>;
};

export type Offset = {
  __typename?: 'Offset';
  /** Offset in p */
  p: OffsetP;
  /** Offset in q */
  q: OffsetQ;
};

/** Offset component (p or q) input parameters. Choose one angle units definition. */
export type OffsetComponentInput = {
  /** Angle in arcsec */
  arcseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Angle in µas */
  microarcseconds?: InputMaybe<Scalars['Long']['input']>;
  /** Angle in mas */
  milliarcseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
};

/** Offset input.  Define offset in p and q. */
export type OffsetInput = {
  /** Offset in p */
  p: OffsetComponentInput;
  /** Offset in q */
  q: OffsetComponentInput;
};

export type OffsetP = {
  __typename?: 'OffsetP';
  /** p offset in arcsec */
  arcseconds: Scalars['BigDecimal']['output'];
  /** p offset in µas */
  microarcseconds: Scalars['Long']['output'];
  /** p offset in mas */
  milliarcseconds: Scalars['BigDecimal']['output'];
};

export type OffsetQ = {
  __typename?: 'OffsetQ';
  /** q offset in arcsec */
  arcseconds: Scalars['BigDecimal']['output'];
  /** q offset in µas */
  microarcseconds: Scalars['Long']['output'];
  /** q offset in mas */
  milliarcseconds: Scalars['BigDecimal']['output'];
};

export type OperationOutcome = {
  __typename?: 'OperationOutcome';
  msg?: Maybe<Scalars['String']['output']>;
  result: OperationResult;
};

export type OperationResult =
  | 'FAILURE'
  | 'SUCCESS';

export type Parallax = {
  __typename?: 'Parallax';
  /** Parallax in microarcseconds */
  microarcseconds: Scalars['Long']['output'];
  /** Parallax in milliarcseconds */
  milliarcseconds: Scalars['BigDecimal']['output'];
};

/** Parallax, choose one of the available units */
export type ParallaxInput = {
  microarcseconds?: InputMaybe<Scalars['Long']['input']>;
  milliarcseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type ParkStatus =
  | 'NOT_PARKED'
  | 'PARKED';

export type PointOrigin = {
  __typename?: 'PointOrigin';
  x: Distance;
  y: Distance;
};

export type PointOriginInput = {
  x: DistanceInput;
  y: DistanceInput;
};

export type ProbeGuideInput = {
  from?: InputMaybe<GuideProbe>;
  to?: InputMaybe<GuideProbe>;
};

export type ProbeTrackingInput = {
  nodAchopA: Scalars['Boolean']['input'];
  nodAchopB: Scalars['Boolean']['input'];
  nodBchopA: Scalars['Boolean']['input'];
  nodBchopB: Scalars['Boolean']['input'];
};

export type ProperMotion = {
  __typename?: 'ProperMotion';
  /** Proper motion in declination */
  dec: ProperMotionDeclination;
  /** Proper motion in RA */
  ra: ProperMotionRa;
};

/** Proper motion component, choose one of the available units */
export type ProperMotionComponentInput = {
  microarcsecondsPerYear?: InputMaybe<Scalars['Long']['input']>;
  milliarcsecondsPerYear?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type ProperMotionDeclination = {
  __typename?: 'ProperMotionDeclination';
  /** Proper motion in properMotion μas/year */
  microarcsecondsPerYear: Scalars['Long']['output'];
  /** Proper motion in properMotion mas/year */
  milliarcsecondsPerYear: Scalars['BigDecimal']['output'];
};

/** Proper motion, choose one of the available units */
export type ProperMotionInput = {
  dec: ProperMotionComponentInput;
  ra: ProperMotionComponentInput;
};

export type ProperMotionRa = {
  __typename?: 'ProperMotionRA';
  /** Proper motion in properMotion μas/year */
  microarcsecondsPerYear: Scalars['Long']['output'];
  /** Proper motion in properMotion mas/year */
  milliarcsecondsPerYear: Scalars['BigDecimal']['output'];
};

export type Query = {
  __typename?: 'Query';
  guideState: GuideConfigurationState;
  instrumentPort?: Maybe<Scalars['Int']['output']>;
  navigateState: NavigateState;
  originAdjustmentOffset: FocalPlaneOffset;
  pointingAdjustmentOffset: FocalPlaneOffset;
  serverVersion?: Maybe<Scalars['String']['output']>;
  targetAdjustmentOffsets: TargetOffsets;
  telescopeState: TelescopeState;
};


export type QueryInstrumentPortArgs = {
  instrument: Instrument;
};

export type RadialVelocity = {
  __typename?: 'RadialVelocity';
  /** Radial velocity in cm/s */
  centimetersPerSecond: Scalars['Long']['output'];
  /** Radial velocity in km/s */
  kilometersPerSecond: Scalars['BigDecimal']['output'];
  /** Radial velocity in m/s */
  metersPerSecond: Scalars['BigDecimal']['output'];
};

/** Radial velocity, choose one of the available units */
export type RadialVelocityInput = {
  centimetersPerSecond?: InputMaybe<Scalars['Long']['input']>;
  kilometersPerSecond?: InputMaybe<Scalars['BigDecimal']['input']>;
  metersPerSecond?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type RightAscension = {
  __typename?: 'RightAscension';
  /** Right Ascension (RA) in degrees */
  degrees: Scalars['BigDecimal']['output'];
  /** Right Ascension (RA) in HH:MM:SS.SSS format */
  hms: Scalars['HmsString']['output'];
  /** Right Ascension (RA) in hours */
  hours: Scalars['BigDecimal']['output'];
  /** Right Ascension (RA) in µas */
  microarcseconds: Scalars['Long']['output'];
  /** Right Ascension (RA) in µs */
  microseconds: Scalars['Long']['output'];
};

/** Right Ascension, choose one of the available units */
export type RightAscensionInput = {
  degrees?: InputMaybe<Scalars['BigDecimal']['input']>;
  hms?: InputMaybe<Scalars['HmsString']['input']>;
  hours?: InputMaybe<Scalars['BigDecimal']['input']>;
  microarcseconds?: InputMaybe<Scalars['Long']['input']>;
  microseconds?: InputMaybe<Scalars['Long']['input']>;
};

export type RotatorTrackingInput = {
  ipa: AngleInput;
  mode: RotatorTrackingMode;
};

export type RotatorTrackingMode =
  | 'FIXED'
  | 'TRACKING';

export type Sidereal = {
  __typename?: 'Sidereal';
  /** Catalog info, if any, describing from where the information in this target was obtained */
  catalogInfo?: Maybe<CatalogInfo>;
  /** Declination at epoch */
  dec: Declination;
  /** Epoch, time of base observation */
  epoch: Scalars['EpochString']['output'];
  /** Parallax */
  parallax?: Maybe<Parallax>;
  /** Proper motion per year in right ascension and declination */
  properMotion?: Maybe<ProperMotion>;
  /** Right ascension at epoch */
  ra: RightAscension;
  /** Radial velocity */
  radialVelocity?: Maybe<RadialVelocity>;
};

/** Sidereal target edit parameters */
export type SiderealInput = {
  /** The catalogInfo field may be unset by assigning a null value, or ignored by skipping it altogether */
  catalogInfo?: InputMaybe<CatalogInfoInput>;
  /** The dec field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  dec?: InputMaybe<DeclinationInput>;
  /** The epoch field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  epoch?: InputMaybe<Scalars['EpochString']['input']>;
  /** The parallax field may be unset by assigning a null value, or ignored by skipping it altogether */
  parallax?: InputMaybe<ParallaxInput>;
  /** The properMotion field may be unset by assigning a null value, or ignored by skipping it altogether */
  properMotion?: InputMaybe<ProperMotionInput>;
  /** The ra field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  ra?: InputMaybe<RightAscensionInput>;
  /** The radialVelocity field may be unset by assigning a null value, or ignored by skipping it altogether */
  radialVelocity?: InputMaybe<RadialVelocityInput>;
};

/** Slew Options input */
export type SlewOptionsInput = {
  autoparkAowfs: Scalars['Boolean']['input'];
  autoparkGems: Scalars['Boolean']['input'];
  autoparkOiwfs: Scalars['Boolean']['input'];
  autoparkPwfs1: Scalars['Boolean']['input'];
  autoparkPwfs2: Scalars['Boolean']['input'];
  resetPointing: Scalars['Boolean']['input'];
  shortcircuitMountFilter: Scalars['Boolean']['input'];
  shortcircuitTargetFilter: Scalars['Boolean']['input'];
  stopGuide: Scalars['Boolean']['input'];
  zeroChopThrow: Scalars['Boolean']['input'];
  zeroGuideOffset: Scalars['Boolean']['input'];
  zeroInstrumentOffset: Scalars['Boolean']['input'];
  zeroMountDiffTrack: Scalars['Boolean']['input'];
  zeroMountOffset: Scalars['Boolean']['input'];
  zeroSourceDiffTrack: Scalars['Boolean']['input'];
  zeroSourceOffset: Scalars['Boolean']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  acquisitionAdjustmentState: AcquisitionAdjustmentState;
  guideState: GuideConfigurationState;
  guidersQualityValues: GuidersQualityValues;
  logMessage: LogMessage;
  navigateState: NavigateState;
  originAdjustmentOffset: FocalPlaneOffset;
  pointingAdjustmentOffset: FocalPlaneOffset;
  targetAdjustmentOffsets: TargetOffsets;
  telescopeState: TelescopeState;
};

export type SwapConfigInput = {
  acParams: InstrumentSpecificsInput;
  guideTarget: TargetPropertiesInput;
  rotator: RotatorTrackingInput;
};

export type Target = {
  __typename?: 'Target';
  /** Target ID */
  id: Scalars['TargetId']['output'];
  /** Target name. */
  name: Scalars['NonEmptyString']['output'];
  /** Nonsidereal tracking information, if this is a nonsidereal target */
  nonsidereal?: Maybe<Nonsidereal>;
  /** Sidereal tracking information, if this is a sidereal target */
  sidereal?: Maybe<Sidereal>;
};

export type TargetOffsets = {
  __typename?: 'TargetOffsets';
  oiwfs?: Maybe<FocalPlaneOffset>;
  pwfs1?: Maybe<FocalPlaneOffset>;
  pwfs2?: Maybe<FocalPlaneOffset>;
  sourceA?: Maybe<FocalPlaneOffset>;
};

/** Target properties input */
export type TargetPropertiesInput = {
  azel?: InputMaybe<AzElTargetInput>;
  id: Scalars['TargetId']['input'];
  name: Scalars['NonEmptyString']['input'];
  nonsidereal?: InputMaybe<NonsiderealInput>;
  sidereal?: InputMaybe<SiderealInput>;
  wavelength?: InputMaybe<WavelengthInput>;
};

export type TcsConfigInput = {
  instParams: InstrumentSpecificsInput;
  instrument: Instrument;
  oiwfs?: InputMaybe<GuiderConfig>;
  rotator: RotatorTrackingInput;
  sourceATarget: TargetPropertiesInput;
};

export type TelescopeState = {
  __typename?: 'TelescopeState';
  crcs: MechSystemState;
  mount: MechSystemState;
  oiwfs: MechSystemState;
  pwfs1: MechSystemState;
  pwfs2: MechSystemState;
  scs: MechSystemState;
};

/** Equivalent time amount in several unit options (exactly one must be specified) */
export type TimeSpanInput = {
  /** TimeSpan in hours */
  hours?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** TimeSpan as an ISO-8601 string */
  iso?: InputMaybe<Scalars['String']['input']>;
  /** TimeSpan in µs */
  microseconds?: InputMaybe<Scalars['Long']['input']>;
  /** TimeSpan in ms */
  milliseconds?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** TimeSpan in minutes */
  minutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** TimeSpan in seconds */
  seconds?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type TipTiltSource =
  | 'OIWFS';

/** Wavelength, choose one of the available units */
export type WavelengthInput = {
  angstroms?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  micrometers?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  nanometers?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  picometers?: InputMaybe<Scalars['PosInt']['input']>;
};

export type AcquisitionAdjustmentStateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AcquisitionAdjustmentStateSubscription = { __typename?: 'Subscription', acquisitionAdjustmentState: { __typename?: 'AcquisitionAdjustmentState', command: AcquistionAdjustmentCommand, offset: { __typename?: 'Offset', p: { __typename?: 'OffsetP', arcseconds: string|number }, q: { __typename?: 'OffsetQ', arcseconds: string|number } }, ipa?: { __typename?: 'Angle', degrees: string|number } | null, iaa?: { __typename?: 'Angle', degrees: string|number } | null } };

export type AcquisitionAdjustmentMutationVariables = Exact<{
  input: AcquisitionAdjustmentInput;
}>;


export type AcquisitionAdjustmentMutation = { __typename?: 'Mutation', acquisitionAdjustment: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type AcObserveMutationVariables = Exact<{
  period: TimeSpanInput;
}>;


export type AcObserveMutation = { __typename?: 'Mutation', acObserve: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type AcStopObserveMutationVariables = Exact<{ [key: string]: never; }>;


export type AcStopObserveMutation = { __typename?: 'Mutation', acStopObserve: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type RunSlewMutationVariables = Exact<{
  slewOptions: SlewOptionsInput;
  config: TcsConfigInput;
  obsId?: InputMaybe<Scalars['ObservationId']['input']>;
}>;


export type RunSlewMutation = { __typename?: 'Mutation', slew: { __typename?: 'OperationOutcome', result: OperationResult } };

export type GuidersQualityValuesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GuidersQualityValuesSubscription = { __typename?: 'Subscription', guidersQualityValues: { __typename?: 'GuidersQualityValues', pwfs1: { __typename?: 'GuideQuality', flux: number, centroidDetected: boolean }, pwfs2: { __typename?: 'GuideQuality', flux: number, centroidDetected: boolean }, oiwfs: { __typename?: 'GuideQuality', flux: number, centroidDetected: boolean } } };

export type GuideStateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GuideStateSubscription = { __typename?: 'Subscription', guideState: { __typename?: 'GuideConfigurationState', m2Inputs?: Array<TipTiltSource> | null, m2Coma?: boolean | null, m1Input?: M1CorrectionSource | null, mountOffload: boolean, p1Integrating: boolean, p2Integrating: boolean, oiIntegrating: boolean, acIntegrating: boolean } };

export type GetGuideStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGuideStateQuery = { __typename?: 'Query', guideState: { __typename?: 'GuideConfigurationState', m2Inputs?: Array<TipTiltSource> | null, m2Coma?: boolean | null, m1Input?: M1CorrectionSource | null, mountOffload: boolean, p1Integrating: boolean, p2Integrating: boolean, oiIntegrating: boolean, acIntegrating: boolean } };

export type GuideEnableMutationVariables = Exact<{
  config: GuideConfigurationInput;
}>;


export type GuideEnableMutation = { __typename?: 'Mutation', guideEnable: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type GuideDisableMutationVariables = Exact<{ [key: string]: never; }>;


export type GuideDisableMutation = { __typename?: 'Mutation', guideDisable: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type LightpathConfigMutationVariables = Exact<{
  from: LightSource;
  to: LightSink;
}>;


export type LightpathConfigMutation = { __typename?: 'Mutation', lightpathConfig: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type LogMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LogMessageSubscription = { __typename?: 'Subscription', logMessage: { __typename?: 'LogMessage', timestamp: string, level: LogLevel, thread: string, message: string } };

export type GetNavigateStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavigateStateQuery = { __typename?: 'Query', navigateState: { __typename?: 'NavigateState', onSwappedTarget: boolean } };

export type NavigateStatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NavigateStatesSubscription = { __typename?: 'Subscription', navigateState: { __typename?: 'NavigateState', onSwappedTarget: boolean } };

export type SwapTargetMutationVariables = Exact<{
  swapConfig: SwapConfigInput;
}>;


export type SwapTargetMutation = { __typename?: 'Mutation', swapTarget: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type RestoreTargetMutationVariables = Exact<{
  config: TcsConfigInput;
}>;


export type RestoreTargetMutation = { __typename?: 'Mutation', restoreTarget: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type GetTelescopeStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTelescopeStateQuery = { __typename?: 'Query', telescopeState: { __typename?: 'TelescopeState', mount: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, scs: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, crcs: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, pwfs1: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, pwfs2: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, oiwfs: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus } } };

export type TelescopeStatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TelescopeStatesSubscription = { __typename?: 'Subscription', telescopeState: { __typename?: 'TelescopeState', mount: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, scs: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, crcs: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, pwfs1: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, pwfs2: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus }, oiwfs: { __typename?: 'MechSystemState', parked: ParkStatus, follow: FollowStatus } } };

export type VersionQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionQuery = { __typename?: 'Query', serverVersion?: string | null };

export type OiwfsObserveMutationVariables = Exact<{
  period: TimeSpanInput;
}>;


export type OiwfsObserveMutation = { __typename?: 'Mutation', oiwfsObserve: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type OiwfsStopObserveMutationVariables = Exact<{ [key: string]: never; }>;


export type OiwfsStopObserveMutation = { __typename?: 'Mutation', oiwfsStopObserve: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type WfsSkyMutationVariables = Exact<{
  period: TimeSpanInput;
  wfs: GuideProbe;
}>;


export type WfsSkyMutation = { __typename?: 'Mutation', wfsSky: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type ChangeMountStateMutationVariables = Exact<{
  enable: Scalars['Boolean']['input'];
}>;


export type ChangeMountStateMutation = { __typename?: 'Mutation', mountFollow: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type ChangeRotatorStateMutationVariables = Exact<{
  enable: Scalars['Boolean']['input'];
}>;


export type ChangeRotatorStateMutation = { __typename?: 'Mutation', rotatorFollow: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type ChangeScsStateMutationVariables = Exact<{
  enable: Scalars['Boolean']['input'];
}>;


export type ChangeScsStateMutation = { __typename?: 'Mutation', scsFollow: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type ChangeOiwfsStateMutationVariables = Exact<{
  enable: Scalars['Boolean']['input'];
}>;


export type ChangeOiwfsStateMutation = { __typename?: 'Mutation', oiwfsFollow: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type MountParkMutationVariables = Exact<{ [key: string]: never; }>;


export type MountParkMutation = { __typename?: 'Mutation', mountPark: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type RotatorParkMutationVariables = Exact<{ [key: string]: never; }>;


export type RotatorParkMutation = { __typename?: 'Mutation', rotatorPark: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };

export type OiwfsParkMutationVariables = Exact<{ [key: string]: never; }>;


export type OiwfsParkMutation = { __typename?: 'Mutation', oiwfsPark: { __typename?: 'OperationOutcome', result: OperationResult, msg?: string | null } };


export const AcquisitionAdjustmentStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"acquisitionAdjustmentState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acquisitionAdjustmentState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"p"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arcseconds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"q"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arcseconds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ipa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iaa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}},{"kind":"Field","name":{"kind":"Name","value":"command"}}]}}]}}]} as unknown as DocumentNode<AcquisitionAdjustmentStateSubscription, AcquisitionAdjustmentStateSubscriptionVariables>;
export const AcquisitionAdjustmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acquisitionAdjustment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AcquisitionAdjustmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acquisitionAdjustment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adjustment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<AcquisitionAdjustmentMutation, AcquisitionAdjustmentMutationVariables>;
export const AcObserveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acObserve"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TimeSpanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acObserve"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<AcObserveMutation, AcObserveMutationVariables>;
export const AcStopObserveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acStopObserve"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acStopObserve"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<AcStopObserveMutation, AcStopObserveMutationVariables>;
export const RunSlewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"runSlew"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slewOptions"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SlewOptionsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"config"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TcsConfigInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slew"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slewOptions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slewOptions"}}},{"kind":"Argument","name":{"kind":"Name","value":"config"},"value":{"kind":"Variable","name":{"kind":"Name","value":"config"}}},{"kind":"Argument","name":{"kind":"Name","value":"obsId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<RunSlewMutation, RunSlewMutationVariables>;
export const GuidersQualityValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"guidersQualityValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guidersQualityValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pwfs1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flux"}},{"kind":"Field","name":{"kind":"Name","value":"centroidDetected"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flux"}},{"kind":"Field","name":{"kind":"Name","value":"centroidDetected"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oiwfs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flux"}},{"kind":"Field","name":{"kind":"Name","value":"centroidDetected"}}]}}]}}]}}]} as unknown as DocumentNode<GuidersQualityValuesSubscription, GuidersQualityValuesSubscriptionVariables>;
export const GuideStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"guideState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m2Inputs"}},{"kind":"Field","name":{"kind":"Name","value":"m2Coma"}},{"kind":"Field","name":{"kind":"Name","value":"m1Input"}},{"kind":"Field","name":{"kind":"Name","value":"mountOffload"}},{"kind":"Field","name":{"kind":"Name","value":"p1Integrating"}},{"kind":"Field","name":{"kind":"Name","value":"p2Integrating"}},{"kind":"Field","name":{"kind":"Name","value":"oiIntegrating"}},{"kind":"Field","name":{"kind":"Name","value":"acIntegrating"}}]}}]}}]} as unknown as DocumentNode<GuideStateSubscription, GuideStateSubscriptionVariables>;
export const GetGuideStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGuideState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"m2Inputs"}},{"kind":"Field","name":{"kind":"Name","value":"m2Coma"}},{"kind":"Field","name":{"kind":"Name","value":"m1Input"}},{"kind":"Field","name":{"kind":"Name","value":"mountOffload"}},{"kind":"Field","name":{"kind":"Name","value":"p1Integrating"}},{"kind":"Field","name":{"kind":"Name","value":"p2Integrating"}},{"kind":"Field","name":{"kind":"Name","value":"oiIntegrating"}},{"kind":"Field","name":{"kind":"Name","value":"acIntegrating"}}]}}]}}]} as unknown as DocumentNode<GetGuideStateQuery, GetGuideStateQueryVariables>;
export const GuideEnableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"guideEnable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"config"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuideConfigurationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideEnable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"config"},"value":{"kind":"Variable","name":{"kind":"Name","value":"config"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<GuideEnableMutation, GuideEnableMutationVariables>;
export const GuideDisableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"guideDisable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideDisable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<GuideDisableMutation, GuideDisableMutationVariables>;
export const LightpathConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"lightpathConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LightSource"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LightSink"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lightpathConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<LightpathConfigMutation, LightpathConfigMutationVariables>;
export const LogMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"logMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"thread"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogMessageSubscription, LogMessageSubscriptionVariables>;
export const GetNavigateStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNavigateState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigateState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onSwappedTarget"}}]}}]}}]} as unknown as DocumentNode<GetNavigateStateQuery, GetNavigateStateQueryVariables>;
export const NavigateStatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"navigateStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigateState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onSwappedTarget"}}]}}]}}]} as unknown as DocumentNode<NavigateStatesSubscription, NavigateStatesSubscriptionVariables>;
export const SwapTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"swapTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"swapConfig"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SwapConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"swapTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"swapConfig"},"value":{"kind":"Variable","name":{"kind":"Name","value":"swapConfig"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<SwapTargetMutation, SwapTargetMutationVariables>;
export const RestoreTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"restoreTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"config"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TcsConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restoreTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"config"},"value":{"kind":"Variable","name":{"kind":"Name","value":"config"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<RestoreTargetMutation, RestoreTargetMutationVariables>;
export const GetTelescopeStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTelescopeState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"telescopeState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"crcs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oiwfs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}}]}}]}}]} as unknown as DocumentNode<GetTelescopeStateQuery, GetTelescopeStateQueryVariables>;
export const TelescopeStatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"telescopeStates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"telescopeState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"crcs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pwfs1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pwfs2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"oiwfs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parked"}},{"kind":"Field","name":{"kind":"Name","value":"follow"}}]}}]}}]}}]} as unknown as DocumentNode<TelescopeStatesSubscription, TelescopeStatesSubscriptionVariables>;
export const VersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"version"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverVersion"}}]}}]} as unknown as DocumentNode<VersionQuery, VersionQueryVariables>;
export const OiwfsObserveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"oiwfsObserve"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TimeSpanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oiwfsObserve"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<OiwfsObserveMutation, OiwfsObserveMutationVariables>;
export const OiwfsStopObserveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"oiwfsStopObserve"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oiwfsStopObserve"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<OiwfsStopObserveMutation, OiwfsStopObserveMutationVariables>;
export const WfsSkyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"wfsSky"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TimeSpanInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GuideProbe"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wfsSky"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}},{"kind":"Argument","name":{"kind":"Name","value":"wfs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wfs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<WfsSkyMutation, WfsSkyMutationVariables>;
export const ChangeMountStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeMountState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mountFollow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<ChangeMountStateMutation, ChangeMountStateMutationVariables>;
export const ChangeRotatorStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeRotatorState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rotatorFollow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<ChangeRotatorStateMutation, ChangeRotatorStateMutationVariables>;
export const ChangeScsStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeScsState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scsFollow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<ChangeScsStateMutation, ChangeScsStateMutationVariables>;
export const ChangeOiwfsStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeOiwfsState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oiwfsFollow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<ChangeOiwfsStateMutation, ChangeOiwfsStateMutationVariables>;
export const MountParkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mountPark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mountPark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<MountParkMutation, MountParkMutationVariables>;
export const RotatorParkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rotatorPark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rotatorPark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<RotatorParkMutation, RotatorParkMutationVariables>;
export const OiwfsParkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"oiwfsPark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oiwfsPark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"msg"}}]}}]}}]} as unknown as DocumentNode<OiwfsParkMutation, OiwfsParkMutationVariables>;