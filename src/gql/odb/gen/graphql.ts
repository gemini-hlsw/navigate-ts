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
  /** AtomId id formatted as `a-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}` */
  AtomId: { input: string; output: string; }
  /** AttachmentId id formatted as `a-[1-9a-f][0-9a-f]*` */
  AttachmentId: { input: string; output: string; }
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: { input: string|number; output: string|number; }
  /** Defines a unique ID for each Call for Proposals. */
  CallForProposalsId: { input: string; output: string; }
  ChronicleId: { input: string; output: string; }
  ConfigurationRequestId: { input: string; output: string; }
  /** Dataset filename in standard format. */
  DatasetFilename: { input: string; output: string; }
  /** DatasetId id formatted as `d-[1-9a-f][0-9a-f]*` */
  DatasetId: { input: string; output: string; }
  /**
   * Dataset reference, formatted according to the observation, suffixed with
   * the step and exposure indices. For example, G-2024B-1234-Q-0001-0002-0003 where
   * G-2024B-1234-Q-0001 is the observation reference label, 2 is the step index and
   * 3 is the exposure index.
   */
  DatasetReferenceLabel: { input: string; output: string; }
  /** Date in ISO-8601 representation in format YYYY-MM-DD (e.g., '2024-07-31'). */
  Date: { input: string; output: string; }
  /** Target declination coordinate in format '[+/-]DD:MM:SS.sss' */
  DmsString: { input: string; output: string; }
  /** Email address, matching ^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$ */
  EmailAddress: { input: string; output: string; }
  /** Reference observation epoch in format '[JB]YYYY.YYY' */
  EpochString: { input: string; output: string; }
  /** ExecutionEventId id formatted as `e-[1-9a-f][0-9a-f]*` */
  ExecutionEventId: { input: string; output: string; }
  /** Non-negative floating-point value. */
  Extinction: { input: number; output: number; }
  GroupId: { input: string; output: string; }
  /** Target right ascension coordinate in format 'HH:MM:SS.sss' */
  HmsString: { input: string; output: string; }
  /** An 'Int` in the range 0 to 100 */
  IntPercent: { input: number; output: number; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: number; output: number; }
  /** A String value that cannot be empty */
  NonEmptyString: { input: string; output: string; }
  /** A `BigDecimal` greater than or equal to 0 */
  NonNegBigDecimal: { input: number; output: number; }
  /** An `Int` in the range from 0 to 2147483647 */
  NonNegInt: { input: number; output: number; }
  /** An `Long` in the range from 0 to 9223372036854775807 */
  NonNegLong: { input: number; output: number; }
  /** A `Short` in the range from 0 to 32767 */
  NonNegShort: { input: number; output: number; }
  /** ObservationId id formatted as `o-[1-9a-f][0-9a-f]*` */
  ObservationId: { input: string; output: string; }
  /**
   * Observation reference, formatted according to the program type, suffixed with
   * observation index. For example, G-2024B-1234-Q-0001 where G-2024B-1234-Q is
   * the program reference label and the observation index is 1.
   */
  ObservationReferenceLabel: { input: string; output: string; }
  /** A `BigDecimal` greater than 0 */
  PosBigDecimal: { input: number; output: number; }
  /** An `Int` in the range from 1 to 2147483647 */
  PosInt: { input: number; output: number; }
  /** An `Long` in the range from 1 to 9223372036854775807 */
  PosLong: { input: number; output: number; }
  /** A `Short` in the range from 1 to 32767 */
  PosShort: { input: number; output: number; }
  /** ProgramId id formatted as `p-[1-9a-f][0-9a-f]*` */
  ProgramId: { input: number; output: number; }
  /** ProgramNoteId is formated as `n-[1-9a-f][0-9a-f]*` */
  ProgramNoteId: { input: any; output: any; }
  /**
   * Program reference, formatted according to the type.  For example, a Science
   * Program has format G-YYYY[AB]-NNNN+-[CDLFSV]. For example, G-2024B-1234-Q
   * where 2024B refers to the associated semester.
   */
  ProgramReferenceLabel: { input: string; output: string; }
  ProgramUserId: { input: string; output: string; }
  /**
   * Proposal reference for science programs, formatted as G-YYYY[AB]-NNNN+. For
   * example, G-2024B-1234 where 2024B refers to the associated semester.
   */
  ProposalReferenceLabel: { input: string; output: string; }
  /**
   * Semester string (from 2000A) in the format YYYY[AB].  An abbreviated format,
   * which assumes the millennium 2000, is also permitted.  For example, 24A is read
   * as 2024A.
   */
  Semester: { input: `${number}${number}${number}${number}${'A' | 'B'}`; output: `${number}${number}${number}${number}${'A' | 'B'}`; }
  SignalToNoise: { input: number; output: number; }
  /** StepId id formatted as `s-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}` */
  StepId: { input: string; output: string; }
  /** TargetId id formatted as `t-[1-9a-f][0-9a-f]*` */
  TargetId: { input: string; output: string; }
  /** Timestamp of time in ISO-8601 representation in format '2011-12-03T10:15:30Z' */
  Timestamp: { input: string; output: string; }
  TransactionId: { input: string; output: string; }
  UserId: { input: string; output: string; }
  UserInvitationId: { input: string; output: string; }
  UserInvitationKey: { input: string; output: string; }
  /** VisitId id formatted as `v-[1-9a-f][0-9a-f]*` */
  VisitId: { input: string; output: string; }
};

/** AtomEvent creation parameters. */
export type AddAtomEventInput = {
  atomId: Scalars['AtomId']['input'];
  atomStage: AtomStage;
};

/** The result of adding a atom event. */
export type AddAtomEventResult = {
  __typename?: 'AddAtomEventResult';
  /** The new atom event that was added. */
  event: AtomEvent;
};

export type AddConditionsEntryResult = {
  __typename?: 'AddConditionsEntryResult';
  conditionsEntry: ConditionsEntry;
};

/** DatasetEvent creation parameters. */
export type AddDatasetEventInput = {
  /** Dataset id */
  datasetId: Scalars['DatasetId']['input'];
  /** Dataset execution stage. */
  datasetStage: DatasetStage;
};

/** The result of adding a dataset event. */
export type AddDatasetEventResult = {
  __typename?: 'AddDatasetEventResult';
  /** The new dataset event that was added. */
  event: DatasetEvent;
};

export type AddProgramUserInput = {
  SET?: InputMaybe<ProgramUserPropertiesInput>;
  programId: Scalars['ProgramId']['input'];
  role: ProgramUserRole;
};

export type AddProgramUserResult = {
  __typename?: 'AddProgramUserResult';
  programUser: ProgramUser;
};

/** SequenceEvent creation parameters. */
export type AddSequenceEventInput = {
  command: SequenceCommand;
  visitId: Scalars['VisitId']['input'];
};

/** The result of adding a sequence event. */
export type AddSequenceEventResult = {
  __typename?: 'AddSequenceEventResult';
  /** The new sequence event that was added. */
  event: SequenceEvent;
};

/** SlewEvent creation parameters. */
export type AddSlewEventInput = {
  observationId: Scalars['ObservationId']['input'];
  slewStage: SlewStage;
};

/** The result of adding a slew event. */
export type AddSlewEventResult = {
  __typename?: 'AddSlewEventResult';
  /** The new slew event that was added. */
  event: SlewEvent;
};

/** StepEvent creation parameters. */
export type AddStepEventInput = {
  stepId: Scalars['StepId']['input'];
  stepStage: StepStage;
};

/** The result of adding a step event. */
export type AddStepEventResult = {
  __typename?: 'AddStepEventResult';
  /** The new step event that was added. */
  event: StepEvent;
};

/**
 * Input to the 'addTimeChargeCorrection' mutation. Identifies the visit
 * that will be corrected and describes the correction itself.
 */
export type AddTimeChargeCorrectionInput = {
  correction: TimeChargeCorrectionInput;
  visitId: Scalars['VisitId']['input'];
};

/**
 * The result of the 'addTimeChargeCorrection' mutation.  It contains the
 * visit's updated TimeChargeInvoice after applying the correction.
 */
export type AddTimeChargeCorrectionResult = {
  __typename?: 'AddTimeChargeCorrectionResult';
  timeChargeInvoice: TimeChargeInvoice;
};

export type AirMassRange = {
  __typename?: 'AirMassRange';
  /** Maximum AirMass (unitless) */
  max: Scalars['PosBigDecimal']['output'];
  /** Minimum AirMass (unitless) */
  min: Scalars['PosBigDecimal']['output'];
};

/** Air mass range creation and edit parameters */
export type AirMassRangeInput = {
  max?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  min?: InputMaybe<Scalars['PosBigDecimal']['input']>;
};

/** Time taken to update the configuration before a step is executed. */
export type AllConfigChangeEstimates = {
  __typename?: 'AllConfigChangeEstimates';
  /**
   * Complete collection of items that changed.  The selected estimate will be
   * one of the longest (there may be multiple estimates tied for the longest).
   */
  all: Array<ConfigChangeEstimate>;
  /**
   * Time required for the collection of estimates in `all`.  This should
   * be the max of the individual entries because the execution happens in
   * parallel.
   */
  estimate: TimeSpan;
  /**
   * Index of the selected config change estimate amongst all the estimates in
   * `all`.
   */
  index: Scalars['NonNegInt']['output'];
  /**
   * The selected ConfigChangeEstimate is a maximum of all the config change
   * estimates.  In other words, one that takes the longest.
   */
  selected: ConfigChangeEstimate;
};

/** The collection of detector estimates involved in an individual step. */
export type AllDetectorEstimates = {
  __typename?: 'AllDetectorEstimates';
  /**
   * Complete collection of detectors involved in a step.  The selected estimate
   * will be one of the longest (there may be multiple estimates tied for the
   * longest).
   */
  all: Array<DetectorEstimate>;
  /**
   * Time required for the collection of estimates in `all`.  This should
   * be the max of the individual entries because the execution happens in
   * parallel.
   */
  estimate: TimeSpan;
  /**
   * Index of the selected detector estimate amongst all the estimates in
   * `all`.
   */
  index: Scalars['NonNegInt']['output'];
  /**
   * The selected DetectorEstimate is a maximum of all the detector estimates.
   * In other words, one that takes the longest.
   */
  selected: DetectorEstimate;
};

/** An individual time allocation. */
export type Allocation = {
  __typename?: 'Allocation';
  category: TimeAccountingCategory;
  duration: TimeSpan;
  scienceBand: ScienceBand;
};

/** An individual time allocation input. */
export type AllocationInput = {
  category: TimeAccountingCategory;
  duration: TimeSpanInput;
  scienceBand: ScienceBand;
};

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

export type AsterismGroup = {
  __typename?: 'AsterismGroup';
  /** Commonly held value across the observations */
  asterism: Array<Target>;
  /** Observations associated with the common value */
  observations: ObservationSelectResult;
  program: Program;
};


export type AsterismGroupObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** The matching asterismGroup results, limited to a maximum of 1000 entries. */
export type AsterismGroupSelectResult = {
  __typename?: 'AsterismGroupSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching asterismGroups up to the return size limit of 1000 */
  matches: Array<AsterismGroup>;
};

/** Atom-level events.  The execution of a single atom will generate multiple events. */
export type AtomEvent = ExecutionEvent & {
  __typename?: 'AtomEvent';
  /** Atom associated with this event. */
  atom: AtomRecord;
  /** Atom execution stage. */
  atomStage: AtomStage;
  /** Event type. */
  eventType: ExecutionEventType;
  /** Event id */
  id: Scalars['ExecutionEventId']['output'];
  /** Observation whose execution produced this event. */
  observation: Observation;
  /** Time at which this event was received */
  received: Scalars['Timestamp']['output'];
  /** Visit associated with this event. */
  visit: Visit;
};

export type AtomExecutionState =
  /** An ongoing atom was abandoned. */
  | 'ABANDONED'
  /** An event with an 'END_ATOM' 'AtomStage' was received. */
  | 'COMPLETED'
  /** No events have been received since the atom was recorded. */
  | 'NOT_STARTED'
  /** Events have been received, but no 'EndAtom'. */
  | 'ONGOING';

/** An atom as recorded by Observe. */
export type AtomRecord = {
  __typename?: 'AtomRecord';
  /** Created by Observe at this time. */
  created: Scalars['Timestamp']['output'];
  /**
   * The execution state of this atom, according to events received (if any) from
   * Observe.
   */
  executionState: AtomExecutionState;
  /** Atom ID from the generated atom, if any, that produced this atom record. */
  generatedId?: Maybe<Scalars['AtomId']['output']>;
  /** Atom ID. */
  id: Scalars['AtomId']['output'];
  /** The instrument associated with this atom. */
  instrument: Instrument;
  /** Time interval during which this atom executed. */
  interval?: Maybe<TimestampInterval>;
  /** Sequence type. */
  sequenceType: SequenceType;
  /** Recorded steps associated with this atom. */
  steps: StepRecordSelectResult;
  /** Visit in which this atom was executed. */
  visit: Visit;
};


/** An atom as recorded by Observe. */
export type AtomRecordStepsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** AtomRecord query results, limited to a maximum of 1000 entries. */
export type AtomRecordSelectResult = {
  __typename?: 'AtomRecordSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching atom records up to the return size limit of 1000. */
  matches: Array<AtomRecord>;
};

/** Execution stage or phase of an individual atom */
export type AtomStage =
  | 'END_ATOM'
  | 'START_ATOM';

/** Attachment */
export type Attachment = {
  __typename?: 'Attachment';
  attachmentType: AttachmentType;
  checked: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['NonEmptyString']['output']>;
  fileName: Scalars['NonEmptyString']['output'];
  fileSize: Scalars['Long']['output'];
  id: Scalars['AttachmentId']['output'];
  program: Program;
  updatedAt: Scalars['Timestamp']['output'];
};

export type AttachmentPropertiesInput = {
  /** The checked status can be set, or ignored by skipping it altogether */
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description field may be unset by assigning a null value, or ignored by skipping it altogether */
  description?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Attachment Types */
export type AttachmentType =
  /** A target attachment for custom SEDs */
  | 'CUSTOM_SED'
  /** An observation attachment for finder charts */
  | 'FINDER'
  /** An observation attachment for MOS masks */
  | 'MOS_MASK'
  /** An observation attachment for pre-imaging */
  | 'PRE_IMAGING'
  /** A proposal attachment for the science case & design */
  | 'SCIENCE'
  /** A proposal attachment for team info, previous use, etc. */
  | 'TEAM';

/** Brightness bands */
export type Band =
  /** Band Ap */
  | 'AP'
  /** Band B */
  | 'B'
  /** Band Gaia */
  | 'GAIA'
  /** Band GaiaBP */
  | 'GAIA_BP'
  /** Band GaiaRP */
  | 'GAIA_RP'
  /** Band H */
  | 'H'
  /** Band I */
  | 'I'
  /** Band J */
  | 'J'
  /** Band K */
  | 'K'
  /** Band L */
  | 'L'
  /** Band M */
  | 'M'
  /** Band N */
  | 'N'
  /** Band Q */
  | 'Q'
  /** Band R */
  | 'R'
  /** Band SloanG */
  | 'SLOAN_G'
  /** Band SloanI */
  | 'SLOAN_I'
  /** Band SloanR */
  | 'SLOAN_R'
  /** Band SloanU */
  | 'SLOAN_U'
  /** Band SloanZ */
  | 'SLOAN_Z'
  /** Band U */
  | 'U'
  /** Band V */
  | 'V'
  /** Band Y */
  | 'Y';

export type BandBrightnessIntegrated = {
  __typename?: 'BandBrightnessIntegrated';
  /** Magnitude band */
  band: Band;
  /** Error, if any */
  error?: Maybe<Scalars['BigDecimal']['output']>;
  units: BrightnessIntegratedUnits;
  value: Scalars['BigDecimal']['output'];
};

/** Create or edit a band brightness value with integrated magnitude units.  When creating a new value, all fields except "error" are required. */
export type BandBrightnessIntegratedInput = {
  band: Band;
  /** Error values are optional */
  error?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** The units field is required when creating a new instance of BandBrightnessIntegrated, but optional when editing */
  units?: InputMaybe<BrightnessIntegratedUnits>;
  /** The value field is required when creating a new instance of BandBrightnessIntegrated, but optional when editing */
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type BandBrightnessSurface = {
  __typename?: 'BandBrightnessSurface';
  /** Magnitude band */
  band: Band;
  /** Error, if any */
  error?: Maybe<Scalars['BigDecimal']['output']>;
  units: BrightnessSurfaceUnits;
  value: Scalars['BigDecimal']['output'];
};

/** Create or edit a band brightness value with surface magnitude units.  When creating a new value, all fields except "error" are required. */
export type BandBrightnessSurfaceInput = {
  band: Band;
  /** Error values are optional */
  error?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** The units field is required when creating a new instance of BandBrightnessSurface, but optional when editing */
  units?: InputMaybe<BrightnessSurfaceUnits>;
  /** The value field is required when creating a new instance of BandBrightnessSurface, but optional when editing */
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
};

/** Band normalized common interface */
export type BandNormalized = {
  /** Un-normalized spectral energy distribution */
  sed?: Maybe<UnnormalizedSed>;
};

export type BandNormalizedIntegrated = BandNormalized & {
  __typename?: 'BandNormalizedIntegrated';
  brightnesses: Array<BandBrightnessIntegrated>;
  /** Un-normalized spectral energy distribution */
  sed?: Maybe<UnnormalizedSed>;
};

/** Create or edit a band normalized value with integrated magnitude units.  Specify at least "brightnesses" when creating a new BandNormalizedIntegrated. */
export type BandNormalizedIntegratedInput = {
  /** The brightnesses field is required when creating a new instance of BandNormalizedIntegrated, but optional when editing */
  brightnesses?: InputMaybe<Array<BandBrightnessIntegratedInput>>;
  /** The sed field is optional and nullable */
  sed?: InputMaybe<UnnormalizedSedInput>;
};

export type BandNormalizedSurface = BandNormalized & {
  __typename?: 'BandNormalizedSurface';
  brightnesses: Array<BandBrightnessSurface>;
  /** Un-normalized spectral energy distribution */
  sed?: Maybe<UnnormalizedSed>;
};

/** Create or edit a band normalized value with surface magnitude units.  Specify at least "brightnesses" when creating a new BandNormalizedSurface. */
export type BandNormalizedSurfaceInput = {
  /** The brightnesses field is required when creating a new instance of BandNormalizedSurface, but optional when editing */
  brightnesses?: InputMaybe<Array<BandBrightnessSurfaceInput>>;
  /** The sed field is optional and nullable */
  sed?: InputMaybe<UnnormalizedSedInput>;
};

/**
 * CategorizedTime grouped with a ScienceBand.  A program may contain multiple
 * observations in distinct bands.  Time accounting at the program level must
 * distinguish time spent in observations of each of these bands.
 */
export type BandedTime = {
  __typename?: 'BandedTime';
  /** ScienceBand associated with the time, if any. */
  band?: Maybe<ScienceBand>;
  /** Time distributed across the program and non-charged categories. */
  time: CategorizedTime;
};

/** Bias calibration step */
export type Bias = StepConfig & {
  __typename?: 'Bias';
  /** Step type */
  stepType: StepType;
};

/** Stopping point in a series of steps */
export type Breakpoint =
  /** Breakpoint Disabled */
  | 'DISABLED'
  /** Breakpoint Enabled */
  | 'ENABLED';

/** Brightness integrated units */
export type BrightnessIntegratedUnits =
  /** AB mag */
  | 'AB_MAGNITUDE'
  /** erg/s/cm²/Å */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_A'
  /** erg/s/cm²/Hz */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_HZ'
  /** Jy */
  | 'JANSKY'
  /** Vega mag */
  | 'VEGA_MAGNITUDE'
  /** W/m²/µm */
  | 'W_PER_M_SQUARED_PER_UM';

/** Brightness surface units */
export type BrightnessSurfaceUnits =
  /** AB mag/arcsec² */
  | 'AB_MAG_PER_ARCSEC_SQUARED'
  /** erg/s/cm²/Å/arcsec² */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_A_PER_ARCSEC_SQUARED'
  /** erg/s/cm²/Hz/arcsec² */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_HZ_PER_ARCSEC_SQUARED'
  /** Jy/arcsec² */
  | 'JY_PER_ARCSEC_SQUARED'
  /** Vega mag/arcsec² */
  | 'VEGA_MAG_PER_ARCSEC_SQUARED'
  /** W/m²/µm/arcsec² */
  | 'W_PER_M_SQUARED_PER_UM_PER_ARCSEC_SQUARED';

export type CalibrationProgramReference = ProgramReference & {
  __typename?: 'CalibrationProgramReference';
  instrument: Instrument;
  label: Scalars['ProgramReferenceLabel']['output'];
  semester: Scalars['Semester']['output'];
  semesterIndex: Scalars['PosInt']['output'];
  type: ProgramType;
};

/**
 * Calibration role
 * Observations/Programs/Targets can have a calibration role
 */
export type CalibrationRole =
  /** CalibrationRole Photometric */
  | 'PHOTOMETRIC'
  /** CalibrationRole SpectroPhotometric */
  | 'SPECTROPHOTOMETRIC'
  /** CalibrationRole Telluric */
  | 'TELLURIC'
  /** CalibrationRole Twilight */
  | 'TWILIGHT';

/** A single Call for Proposals definition. */
export type CallForProposals = {
  __typename?: 'CallForProposals';
  /**
   * The active period during which accepted observations for this call may be
   * observed.
   */
  active: DateInterval;
  /** Whether this Call allows PIs without a partner to participate. */
  allowsNonPartnerPi: Scalars['Boolean']['output'];
  /** Coordinate limits for targets that may be observed in this Call for Proposals. */
  coordinateLimits: SiteCoordinateLimits;
  /** Whether this Call is PRESENT or has been DELETED. */
  existence: Existence;
  /** The unique Call for Proposals id associated with this Call. */
  id: Scalars['CallForProposalsId']['output'];
  /**
   * When specified, the observations executed in this Call will only use these
   * instruments.  When not specified, all otherwise available instruments may be
   * used.
   */
  instruments: Array<Instrument>;
  /** The submission deadline for non-partner PIs, when allowed to participate. */
  nonPartnerDeadline?: Maybe<Scalars['Timestamp']['output']>;
  /** Partners that may participate in this Call. */
  partners: Array<CallForProposalsPartner>;
  /** Default proprietary period to use for propograms linked to this Call. */
  proprietaryMonths: Scalars['NonNegInt']['output'];
  /**
   * The semester associated with the Call.  Some types may have multiple Calls
   * per semester.
   */
  semester: Scalars['Semester']['output'];
  /**
   * The submission deadline to use for any partners without an explicit partner
   * deadline.
   */
  submissionDeadlineDefault?: Maybe<Scalars['Timestamp']['output']>;
  /** The title of this Call for Proposals. */
  title: Scalars['NonEmptyString']['output'];
  /** Describes which type of proposals are being accepted. */
  type: CallForProposalsType;
};

/** Groups a partner with its submission deadline. */
export type CallForProposalsPartner = {
  __typename?: 'CallForProposalsPartner';
  partner: Partner;
  /**
   * The submission deadline for this partner.  This will be the
   * 'submissionDeadlineOverride' if specified, but otherwise the
   * 'submissionDeadlineDefault' of the Call for Proposals itself.
   */
  submissionDeadline?: Maybe<Scalars['Timestamp']['output']>;
  /**
   * Sets the submission deadline for this partner, overriding the
   * 'submissionDeadlineDefault' for the Call for Proposals.
   */
  submissionDeadlineOverride?: Maybe<Scalars['Timestamp']['output']>;
};

export type CallForProposalsPartnerInput = {
  partner: Partner;
  /**
   * If this partner has an explicit submission deadline that overrides the
   * Call for Proposals 'defaultSubmissionDeadine' then it is specified here.
   * Otherwise, the partner deadline is the default deadline for the call.
   */
  submissionDeadlineOverride?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** The properties of a Call for Proposal in an input for creation and editing. */
export type CallForProposalsPropertiesInput = {
  /**
   * Active period end date (exclusive) for this call.  The date is considered to
   * be the local date at each observation site.  Observations may end the
   * morning of the indicated date at the site of the observation.
   *
   * The end date is required on create and must be after the `activeStart` date.
   * Not nullable.  Limited to dates between 1900 and 2100 (exclusive).
   */
  activeEnd?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Active period start date (inclusive) for this call.  The date is considered to
   * be the local date at each observation site.  Observations may begin the
   * evening of the indicated date at the site of the observation.
   *
   * The start date is required on create and must be before the `activeEnd` date.
   * Not nullable.  Limited to dates between 1900 and 2100 (exclusive).
   */
  activeStart?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Coordinate limits.  If not specified, they will default according to the
   * coordinates that are safely visible during the active period of the call.
   */
  coordinateLimits?: InputMaybe<SiteCoordinateLimitsInput>;
  /** DELETED or PRESENT.  On create defaults to PRESENT. */
  existence?: InputMaybe<Existence>;
  /**
   * When specified, the call is limited to the listed instruments.  When not
   * specified, all otherwise available instruments may be used.  When editing,
   * supply the entire list of instruments to set.  Nullable on edit.
   */
  instruments?: InputMaybe<Array<Instrument>>;
  /**
   * Partners that may participate in the call along with their respective
   * deadlines.  When editing, supply the entire list of all partners. Defaults to
   * all partners.
   */
  partners?: InputMaybe<Array<CallForProposalsPartnerInput>>;
  /**
   * The default proprietary period for proposals linked to this call.  If not
   * specified, the default period for the call type will be used.
   */
  proprietaryMonths?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Semester associated with the call. Required on create. */
  semester?: InputMaybe<Scalars['Semester']['input']>;
  /**
   * Specifies a submission deadline to use for any partners without an explicit
   * partner deadline.
   */
  submissionDeadlineDefault?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Type of the call. Required on create. */
  type?: InputMaybe<CallForProposalsType>;
};

export type CallForProposalsType =
  | 'DEMO_SCIENCE'
  | 'DIRECTORS_TIME'
  | 'FAST_TURNAROUND'
  | 'LARGE_PROGRAM'
  | 'POOR_WEATHER'
  | 'REGULAR_SEMESTER'
  | 'SYSTEM_VERIFICATION';

export type CallsForProposalsSelectResult = {
  __typename?: 'CallsForProposalsSelectResult';
  hasMore: Scalars['Boolean']['output'];
  matches: Array<CallForProposals>;
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

/** A time amount broken into charge class categories. */
export type CategorizedTime = {
  __typename?: 'CategorizedTime';
  /** Execution time that is not charged. */
  nonCharged: TimeSpan;
  /** Time charged to the program / PI. */
  program: TimeSpan;
  /** Total of program and uncharged times. */
  total: TimeSpan;
};

/**
 * A minimum to maximum categorized time estimate.  The actual execution time
 * should vary between the two extremes, depending upon which observations and
 * groups are ultimately completed.
 */
export type CategorizedTimeRange = {
  __typename?: 'CategorizedTimeRange';
  /** Maximum remaining time estimate. */
  maximum: CategorizedTime;
  /** Minimum remaining time estimate. */
  minimum: CategorizedTime;
};

/** Input used to change the role of a program user. */
export type ChangeProgramUserRoleInput = {
  /** New role they should assume. */
  newRole: ProgramUserRole;
  /** Program user to update. */
  programUserId: Scalars['ProgramUserId']['input'];
};

/** Result of the program user role update, which is the updated program user itself. */
export type ChangeProgramUserRoleResult = {
  __typename?: 'ChangeProgramUserRoleResult';
  programUser: ProgramUser;
};

/** Who is charged for time, if anyone. */
export type ChargeClass =
  /** Time that is not charged. */
  | 'NON_CHARGED'
  /** Time charged to the science program. */
  | 'PROGRAM';

export type ChronicleEntry = {
  id: Scalars['ChronicleId']['output'];
  timestamp: Scalars['Timestamp']['output'];
  transactionId: Scalars['TransactionId']['output'];
  user?: Maybe<User>;
};

/** Proposal properties for Regular Semester (Classical) CallForProposals. */
export type Classical = ProposalType & {
  __typename?: 'Classical';
  /**
   * Minimum percentage of observing time required to consider this proposal
   * successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /** Describes how time for the program will be apportioned across partners. */
  partnerSplits: Array<PartnerSplit>;
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
};

export type ClassicalInput = {
  /**
   * The minimum percentage of time required to consider this proposal a success.
   * If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The partnerSplits field specifies how time is apportioned over partners. This
   * will default to empty but if specified, the partner percents must sum to 100.
   * By submission time, it must be specified.
   */
  partnerSplits?: InputMaybe<Array<PartnerSplitInput>>;
};

export type CloneGroupInput = {
  SET?: InputMaybe<GroupPropertiesInput>;
  groupId: Scalars['GroupId']['input'];
};

export type CloneGroupResult = {
  __typename?: 'CloneGroupResult';
  newGroup: Group;
  originalGroup: Group;
};

/**
 * Describes an observation clone operation, making any edits in the `SET`
 * parameter.  The observation status in the cloned observation defaults to NEW.
 * Identify the observation to clone by specifying either its id or reference.  If
 * both are specified, they must refer to the same observation.  If neither is
 * specified, nothing will be cloned.
 */
export type CloneObservationInput = {
  SET?: InputMaybe<ObservationPropertiesInput>;
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  observationReference?: InputMaybe<Scalars['ObservationReferenceLabel']['input']>;
};

/** The result of cloning an observation, containing the original and new observations. */
export type CloneObservationResult = {
  __typename?: 'CloneObservationResult';
  /** The new cloned (but possibly modified) observation. */
  newObservation: Observation;
  /** The original unmodified observation which was cloned. */
  originalObservation: Observation;
};

/** Describes a target clone operation, making any edits in the `SET` parameter and replacing the target in the selected `REPLACE_IN` observations */
export type CloneTargetInput = {
  REPLACE_IN?: InputMaybe<Array<Scalars['ObservationId']['input']>>;
  SET?: InputMaybe<TargetPropertiesInput>;
  targetId: Scalars['TargetId']['input'];
};

/** The result of cloning a target, containing the original and new targets. */
export type CloneTargetResult = {
  __typename?: 'CloneTargetResult';
  /** The new cloned (but possibly modified) target */
  newTarget: Target;
  /** The original unmodified target which was cloned */
  originalTarget: Target;
};

/** Cloud extinction */
export type CloudExtinctionPreset =
  /** CloudExtinctionPreset OnePointFive */
  | 'ONE_POINT_FIVE'
  /** CloudExtinctionPreset OnePointZero */
  | 'ONE_POINT_ZERO'
  /** CloudExtinctionPreset PointFive */
  | 'POINT_FIVE'
  /** CloudExtinctionPreset PointOne */
  | 'POINT_ONE'
  /** CloudExtinctionPreset PointThree */
  | 'POINT_THREE'
  /** CloudExtinctionPreset ThreePointZero */
  | 'THREE_POINT_ZERO'
  /** CloudExtinctionPreset TwoPointZero */
  | 'TWO_POINT_ZERO';

export type CommissioningProgramReference = ProgramReference & {
  __typename?: 'CommissioningProgramReference';
  instrument: Instrument;
  label: Scalars['ProgramReferenceLabel']['output'];
  semester: Scalars['Semester']['output'];
  semesterIndex: Scalars['PosInt']['output'];
  type: ProgramType;
};

export type ConditionsEntry = {
  __typename?: 'ConditionsEntry';
  id: Scalars['ChronicleId']['output'];
  intuition?: Maybe<ConditionsIntuition>;
  measurement?: Maybe<ConditionsMeasurement>;
  timestamp: Scalars['Timestamp']['output'];
  transactionId: Scalars['TransactionId']['output'];
  user?: Maybe<User>;
};

export type ConditionsEntryInput = {
  intuition?: InputMaybe<ConditionsIntuitionInput>;
  measurement?: InputMaybe<ConditionsMeasurementInput>;
};

export type ConditionsExpectation = {
  __typename?: 'ConditionsExpectation';
  timeframe: TimeSpan;
  type: ConditionsExpectationType;
};

export type ConditionsExpectationInput = {
  timeframe: TimeSpanInput;
  type: ConditionsExpectationType;
};

export type ConditionsExpectationType =
  /** Clear Skies */
  | 'CLEAR_SKIES'
  /** Fog */
  | 'FOG'
  /** Thick Clouds */
  | 'THICK_CLOUDS'
  /** Thin Clouds */
  | 'THIN_CLOUDS';

export type ConditionsIntuition = {
  __typename?: 'ConditionsIntuition';
  expectation?: Maybe<ConditionsExpectation>;
  seeingTrend?: Maybe<SeeingTrend>;
};

export type ConditionsIntuitionInput = {
  expectation?: InputMaybe<ConditionsExpectationInput>;
  seeingTrend?: InputMaybe<SeeingTrend>;
};

export type ConditionsMeasurement = {
  __typename?: 'ConditionsMeasurement';
  azimuth?: Maybe<Angle>;
  elevation?: Maybe<Angle>;
  extinction?: Maybe<Scalars['Extinction']['output']>;
  seeing?: Maybe<Angle>;
  source: ConditionsMeasurementSource;
  wavelength?: Maybe<Wavelength>;
};

export type ConditionsMeasurementInput = {
  azimuth?: InputMaybe<AngleInput>;
  elevation?: InputMaybe<AngleInput>;
  extinction?: InputMaybe<Scalars['Extinction']['input']>;
  seeing?: InputMaybe<AngleInput>;
  source: ConditionsMeasurementSource;
  wavelength?: InputMaybe<WavelengthInput>;
};

export type ConditionsMeasurementSource =
  /** Observer */
  | 'OBSERVER';

/**
 * An individual configuration change before a step is executed.  Multiple
 * items may change simultaneously (e.g., the science fold may move while the
 * Gcal filter is updated).  ConfigChangeEstimate identifies a single item that will
 * be updated.
 */
export type ConfigChangeEstimate = {
  __typename?: 'ConfigChangeEstimate';
  /** A possibly longer description of what was updated. */
  description: Scalars['String']['output'];
  /** Estimated time required to effectuate the change. */
  estimate: TimeSpan;
  /** Name of the item that changed. */
  name: Scalars['String']['output'];
};

export type Configuration = {
  __typename?: 'Configuration';
  conditions: ConfigurationConditions;
  observingMode?: Maybe<ConfigurationObservingMode>;
  referenceCoordinates?: Maybe<Coordinates>;
};

export type ConfigurationConditions = {
  __typename?: 'ConfigurationConditions';
  cloudExtinction: CloudExtinctionPreset;
  imageQuality: ImageQualityPreset;
  skyBackground: SkyBackground;
  waterVapor: WaterVapor;
};

export type ConfigurationGmosNorthLongSlit = {
  __typename?: 'ConfigurationGmosNorthLongSlit';
  grating: GmosNorthGrating;
};

export type ConfigurationGmosSouthLongSlit = {
  __typename?: 'ConfigurationGmosSouthLongSlit';
  grating: GmosSouthGrating;
};

export type ConfigurationObservingMode = {
  __typename?: 'ConfigurationObservingMode';
  gmosNorthLongSlit?: Maybe<ConfigurationGmosNorthLongSlit>;
  gmosSouthLongSlit?: Maybe<ConfigurationGmosSouthLongSlit>;
  instrument: Instrument;
  mode: ObservingModeType;
};

export type ConfigurationRequest = {
  __typename?: 'ConfigurationRequest';
  applicableObservations: Array<Scalars['ObservationId']['output']>;
  configuration: Configuration;
  id: Scalars['ConfigurationRequestId']['output'];
  justification?: Maybe<Scalars['NonEmptyString']['output']>;
  program: Program;
  status: ConfigurationRequestStatus;
};

/** Event sent when a configuration request is created or updated */
export type ConfigurationRequestEdit = {
  __typename?: 'ConfigurationRequestEdit';
  /** Edited configuration request, can be null if the value was deleted */
  configurationRequest?: Maybe<ConfigurationRequest>;
  /** The id of the edited configuration request */
  configurationRequestId: Scalars['ConfigurationRequestId']['output'];
  /** Type of edit */
  editType: EditType;
};

export type ConfigurationRequestEditInput = {
  /** Program ID */
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
};

/** Configuration request properties. */
export type ConfigurationRequestProperties = {
  justification?: InputMaybe<Scalars['NonEmptyString']['input']>;
  status?: InputMaybe<ConfigurationRequestStatus>;
};

/** The matching configuration requests, limited to a maximum of 1000 entries. */
export type ConfigurationRequestSelectResult = {
  __typename?: 'ConfigurationRequestSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching configuration requests up to the return size limit of 1000 */
  matches: Array<ConfigurationRequest>;
};

export type ConfigurationRequestStatus =
  | 'APPROVED'
  | 'DENIED'
  | 'REQUESTED'
  | 'WITHDRAWN';

export type ConstraintSet = {
  __typename?: 'ConstraintSet';
  /** Cloud extinction */
  cloudExtinction: CloudExtinctionPreset;
  /** Either air mass range or elevation range */
  elevationRange: ElevationRange;
  /** Image quality */
  imageQuality: ImageQualityPreset;
  /** Sky background */
  skyBackground: SkyBackground;
  /** Water vapor */
  waterVapor: WaterVapor;
};

export type ConstraintSetGroup = {
  __typename?: 'ConstraintSetGroup';
  /** Commonly held value across the observations */
  constraintSet: ConstraintSet;
  /** Observations associated with the common value */
  observations: ObservationSelectResult;
  /** Link back to program. */
  program: Program;
};


export type ConstraintSetGroupObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** The matching constraintSetGroup results, limited to a maximum of 1000 entries. */
export type ConstraintSetGroupSelectResult = {
  __typename?: 'ConstraintSetGroupSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching constraintSetGroups up to the return size limit of 1000 */
  matches: Array<ConstraintSetGroup>;
};

/** Constraint set creation and editing parameters */
export type ConstraintSetInput = {
  /** The cloudExtinction field is required when creating a new instance of ConstraintSet, but optional when editing */
  cloudExtinction?: InputMaybe<CloudExtinctionPreset>;
  /** The elevationRange field is required when creating a new instance of ConstraintSet, but optional when editing */
  elevationRange?: InputMaybe<ElevationRangeInput>;
  /** The imageQuality field is required when creating a new instance of ConstraintSet, but optional when editing */
  imageQuality?: InputMaybe<ImageQualityPreset>;
  /** The skyBackground field is required when creating a new instance of ConstraintSet, but optional when editing */
  skyBackground?: InputMaybe<SkyBackground>;
  /** The waterVapor field is required when creating a new instance of ConstraintSet, but optional when editing */
  waterVapor?: InputMaybe<WaterVapor>;
};

/** Cool star temperature options */
export type CoolStarTemperature =
  /** 400 K */
  | 'T400_K'
  /** 600 K */
  | 'T600_K'
  /** 800 K */
  | 'T800_K'
  /** 900 K */
  | 'T900_K'
  /** 1000 K */
  | 'T1000_K'
  /** 1200 K */
  | 'T1200_K'
  /** 1400 K */
  | 'T1400_K'
  /** 1600 K */
  | 'T1600_K'
  /** 1800 K */
  | 'T1800_K'
  /** 2000 K */
  | 'T2000_K'
  /** 2200 K */
  | 'T2200_K'
  /** 2400 K */
  | 'T2400_K'
  /** 2600 K */
  | 'T2600_K'
  /** 2800 K */
  | 'T2800_K';

/** RA/Dec limits. */
export type CoordinateLimits = {
  __typename?: 'CoordinateLimits';
  /**
   * The end limit defines the end (inclusive) of a declination range in which
   * observations will be accepted.
   */
  decEnd: Declination;
  /**
   * The start limit defines the beginning (inclusive) of a declination range in
   * which observations will be accepted.
   */
  decStart: Declination;
  /**
   * The end limit defines the end (inclusive) of an RA range in which observations
   * will be accepted.
   */
  raEnd: RightAscension;
  /**
   * The start limit defines the beginning (inclusive) of an RA range in which
   * observations will be accepted.
   */
  raStart: RightAscension;
};

export type CoordinateLimitsInput = {
  /** Optional declination limit end declination. */
  decEnd?: InputMaybe<DeclinationInput>;
  /** Optional declination limit start declination. */
  decStart?: InputMaybe<DeclinationInput>;
  /** Optional RA limit end RA. */
  raEnd?: InputMaybe<RightAscensionInput>;
  /** Optional RA limit start RA. */
  raStart?: InputMaybe<RightAscensionInput>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  /** Declination */
  dec: Declination;
  /** Right Ascension */
  ra: RightAscension;
};

/** Absolute coordinates relative base epoch */
export type CoordinatesInput = {
  dec?: InputMaybe<DeclinationInput>;
  ra?: InputMaybe<RightAscensionInput>;
};

export type CreateCallForProposalsInput = {
  SET?: InputMaybe<CallForProposalsPropertiesInput>;
};

export type CreateCallForProposalsResult = {
  __typename?: 'CreateCallForProposalsResult';
  callForProposals: CallForProposals;
};

export type CreateConfigurationRequestInput = {
  SET?: InputMaybe<ConfigurationRequestProperties>;
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
};

/**
 * Group creation parameters.  One of programId, programReference or
 * proposalReference is required. (If two or more are provided, they must refer to
 * the same program.)
 */
export type CreateGroupInput = {
  SET?: InputMaybe<GroupPropertiesInput>;
  /** Group elements specified here, if any, will be moved into the created group in the specified order. */
  initialContents?: InputMaybe<Array<InputMaybe<GroupElementInput>>>;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};

/** The result of creating a new group. */
export type CreateGroupResult = {
  __typename?: 'CreateGroupResult';
  /** The newly created group. */
  group: Group;
};

/**
 * Observation creation parameters.  One of programId or programReference is
 * required.  If both are provided, they must refer to the same program.
 */
export type CreateObservationInput = {
  SET?: InputMaybe<ObservationPropertiesInput>;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};

/** The result of creating a new observation. */
export type CreateObservationResult = {
  __typename?: 'CreateObservationResult';
  /** The newly created observation. */
  observation: Observation;
};

/** Program creation parameters */
export type CreateProgramInput = {
  SET?: InputMaybe<ProgramPropertiesInput>;
};

export type CreateProgramNoteInput = {
  SET: ProgramNotePropertiesInput;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};

export type CreateProgramNoteResult = {
  __typename?: 'CreateProgramNoteResult';
  /** The newly create program note. */
  programNote: ProgramNote;
};

/** The result of creating a new program. */
export type CreateProgramResult = {
  __typename?: 'CreateProgramResult';
  /** The newly created program. */
  program: Program;
};

/** Input for creating a proposal. */
export type CreateProposalInput = {
  SET: ProposalPropertiesInput;
  programId: Scalars['ProgramId']['input'];
};

/** The result of creating new proposal */
export type CreateProposalResult = {
  __typename?: 'CreateProposalResult';
  /** The newly created proposal. */
  proposal: Proposal;
};

/**
 * Target creation parameters.  One of programId or programReference is required.
 * If both are provided, they must refer to the same program.
 */
export type CreateTargetInput = {
  SET: TargetPropertiesInput;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};

/** The result of creating a new target. */
export type CreateTargetResult = {
  __typename?: 'CreateTargetResult';
  /** The newly created target. */
  target: Target;
};

/**
 * Creates an invitation, if none exists for the indicated 'ProgramUser', and sets
 * it to 'PENDING' status. If there is an outstanding invitation, it must be
 * declined or revoked before a new one may be issued.
 */
export type CreateUserInvitationInput = {
  /** The associated program user. */
  programUserId: Scalars['ProgramUserId']['input'];
  /** The recipient to whom the invitation should be sent. */
  recipientEmail: Scalars['EmailAddress']['input'];
};

export type CreateUserInvitationResult = {
  __typename?: 'CreateUserInvitationResult';
  /** The created invitation. */
  invitation: UserInvitation;
  /** Give this key to the person you wish to invite. They can later redeem the invitation. */
  key: Scalars['UserInvitationKey']['output'];
};

/** Dark calibration step */
export type Dark = StepConfig & {
  __typename?: 'Dark';
  /** Step type */
  stepType: StepType;
};

export type Dataset = {
  __typename?: 'Dataset';
  /** Dataset comment, if any has been set. */
  comment?: Maybe<Scalars['NonEmptyString']['output']>;
  /** Events associated with the dataset. */
  events: ExecutionEventSelectResult;
  /** Dataset filename. */
  filename: Scalars['DatasetFilename']['output'];
  /** Dataset id. */
  id: Scalars['DatasetId']['output'];
  /** Exposure index within the step. */
  index: Scalars['PosInt']['output'];
  /** Dataset time interval, if the dataset collection has started. */
  interval?: Maybe<TimestampInterval>;
  /**
   * Has the dataset been written to disk?  Note, we assume the dataset has been
   * written when an `END_WRITE` event is received from Observe.
   */
  isWritten: Scalars['Boolean']['output'];
  /** Observation associated with this dataset. */
  observation: Observation;
  /** Dataset QA state, if any has been set. */
  qaState?: Maybe<DatasetQaState>;
  /** Dataset reference, assuming the observation has an observation reference. */
  reference?: Maybe<DatasetReference>;
  /** The corresponding step. */
  step: StepRecord;
  /** Visit associated with this dataset. */
  visit: Visit;
};


export type DatasetEventsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ExecutionEventId']['input']>;
};

export type DatasetEdit = {
  __typename?: 'DatasetEdit';
  /** The id of the edited object. */
  datasetId: Scalars['DatasetId']['output'];
  /** Type of edit. */
  editType: EditType;
  /** Edited dataset. */
  value?: Maybe<Dataset>;
};

/**
 * Specifies filtering options for dataset edit events from the `datasetEdit`
 * subscription.
 */
export type DatasetEditInput = {
  /** If set, only events for the associated dataset are sent. */
  datasetId?: InputMaybe<Scalars['DatasetId']['input']>;
  /**
   * If set, only events for datasets that are written to disk are sent.  (Note,
   * datasets are considered to be written when an `END_WRITE` event is received by
   * the database.)
   */
  isWritten?: InputMaybe<Scalars['Boolean']['input']>;
  /** If set, only events for datasets produced by the associated observation are sent. */
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  /** If set, only events for datasets produced by the associated program are sent. */
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
};

/** Time estimate for taking an individual dataset. */
export type DatasetEstimate = {
  __typename?: 'DatasetEstimate';
  /** Total estimate for the dataset, summing exposure, readout and write */
  estimate: TimeSpan;
  /** The exposure time itself */
  exposure: TimeSpan;
  /** Time required to readout the detector */
  readout: TimeSpan;
  /** Time required to write the data to the storage system */
  write: TimeSpan;
};

/**
 * Dataset-level events.  A single dataset will be associated with multiple events
 * as it makes its way through observe, readout and write stages.
 */
export type DatasetEvent = ExecutionEvent & {
  __typename?: 'DatasetEvent';
  /** Atom associated with this event. */
  atom: AtomRecord;
  /** The associated dataset. */
  dataset: Dataset;
  /** Dataset execution stage. */
  datasetStage: DatasetStage;
  /** Event type. */
  eventType: ExecutionEventType;
  /** Event id. */
  id: Scalars['ExecutionEventId']['output'];
  /** Observation whose execution produced this event. */
  observation: Observation;
  /** Time at which this event was received. */
  received: Scalars['Timestamp']['output'];
  /** The associated step. */
  step: StepRecord;
  /** Visit associated with this event. */
  visit: Visit;
};

/** Editable dataset properties */
export type DatasetPropertiesInput = {
  comment?: InputMaybe<Scalars['NonEmptyString']['input']>;
  qaState?: InputMaybe<DatasetQaState>;
};

/** Dataset QA State */
export type DatasetQaState =
  /** DatasetQaState Fail */
  | 'FAIL'
  /** DatasetQaState Pass */
  | 'PASS'
  /** DatasetQaState Usable */
  | 'USABLE';

/**
 * Dataset reference type, broken into its constituient parts and including
 * a formatted label.
 */
export type DatasetReference = {
  __typename?: 'DatasetReference';
  /** The exposure index relative to its step. */
  exposureIndex: Scalars['PosInt']['output'];
  /** Formatted dataset reference label. */
  label: Scalars['DatasetReferenceLabel']['output'];
  /** The observation reference. */
  observation: ObservationReference;
  /** The step index relative to its observation. */
  stepIndex: Scalars['PosInt']['output'];
};

/** The matching dataset results, limited to a maximum of 1000 entries. */
export type DatasetSelectResult = {
  __typename?: 'DatasetSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching datasets up to the return size limit of 1000 */
  matches: Array<Dataset>;
};

/** Execution stage or phase of an individual dataset. */
export type DatasetStage =
  | 'END_EXPOSE'
  | 'END_READOUT'
  | 'END_WRITE'
  | 'START_EXPOSE'
  | 'START_READOUT'
  | 'START_WRITE';

/**
 * Date interval marked by a start 'Date' (inclusive) and an end 'Date' (exclusive).
 * Dates are interpreted as local dates.
 */
export type DateInterval = {
  __typename?: 'DateInterval';
  /** End date, local to the observation site, of the interval (exclusive). */
  end: Scalars['Date']['output'];
  /** Start date, local to the observation site, of the interval (inclusive). */
  start: Scalars['Date']['output'];
};

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

/** Input for deleting a program user. */
export type DeleteProgramUserInput = {
  programUserId: Scalars['ProgramUserId']['input'];
};

/** The result of deleting a program user. */
export type DeleteProgramUserResult = {
  __typename?: 'DeleteProgramUserResult';
  /** `true` if a program user was deleted, `false` otherwise. */
  result: Scalars['Boolean']['output'];
};

/** Input for deleting a proposal. */
export type DeleteProposalInput = {
  programId: Scalars['ProgramId']['input'];
};

/** The result of deleting a proposal. */
export type DeleteProposalResult = {
  __typename?: 'DeleteProposalResult';
  /** `true` if a proposal was deleted, `false` otherwise. */
  result: Scalars['Boolean']['output'];
};

/** Proposal properties for Demo Science CallForProposals. */
export type DemoScience = ProposalType & {
  __typename?: 'DemoScience';
  /**
   * Minimum percentage of observing time required to consider this proposal
   * successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
  /**
   * Whether (and how) the observations in this proposal are available for Target
   * of Opportunity triggering.
   */
  toOActivation: ToOActivation;
};

export type DemoScienceInput = {
  /**
   * The minimum percentage of time required to consider this proposal a success.
   * If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The toOActivation field is optional. If not specified when creating a
   * proposal, it defaults to `NONE'.
   */
  toOActivation?: InputMaybe<ToOActivation>;
};

/**
 * Time estimate for a single detector.  Some instruments will employ multiple
 * detectors per step.
 */
export type DetectorEstimate = {
  __typename?: 'DetectorEstimate';
  /** Count of datasets to be produced by the detector */
  count: Scalars['NonNegInt']['output'];
  /** Time estimate for a single dataset produced by this detector */
  dataset: DatasetEstimate;
  /** Detector description */
  description: Scalars['String']['output'];
  /**
   * Total time estimate for the detector, which is the sum of the individual
   * dataset estimate multiplied by the count.
   */
  estimate: TimeSpan;
  /** Indicates which detector is estimated here */
  name: Scalars['String']['output'];
};

/** Proposal properties for Director's Time CallForProposals. */
export type DirectorsTime = ProposalType & {
  __typename?: 'DirectorsTime';
  /**
   * Minimum percentage of observing time required to consider this proposal
   * successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
  /**
   * Whether (and how) the observations in this proposal are available for Target
   * of Opportunity triggering.
   */
  toOActivation: ToOActivation;
};

export type DirectorsTimeInput = {
  /**
   * The minimum percentage of time required to consider this proposal a success.
   * If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The toOActivation field is optional. If not specified when creating a
   * proposal, it defaults to `NONE'.
   */
  toOActivation?: InputMaybe<ToOActivation>;
};

/** Add or delete targets in an asterism */
export type EditAsterismsPatchInput = {
  ADD?: InputMaybe<Array<Scalars['TargetId']['input']>>;
  DELETE?: InputMaybe<Array<Scalars['TargetId']['input']>>;
};

/** Type of edit that triggered an event */
export type EditType =
  /** EditType Created */
  | 'CREATED'
  /** EditType Deleted. Used for hard deletion of calibrations */
  | 'DELETED_CAL'
  /** EditType Updated */
  | 'UPDATED';

/** Educational Status Phd/Grad/Undergrad/Other */
export type EducationalStatus =
  /** Educational Status Grad Student */
  | 'GRAD_STUDENT'
  /** Educational Status Other */
  | 'OTHER'
  /** Educational Status PhD */
  | 'PHD'
  /** Educational Status Undergrad Student */
  | 'UNDERGRAD_STUDENT';

/** Either air mass range or elevation range */
export type ElevationRange = {
  __typename?: 'ElevationRange';
  /** AirMass range if elevation range is an Airmass range */
  airMass?: Maybe<AirMassRange>;
  /** Hour angle range if elevation range is an Hour angle range */
  hourAngle?: Maybe<HourAngleRange>;
};

/** Elevation range creation and edit parameters.  Choose one of airMass or hourAngle constraints. */
export type ElevationRangeInput = {
  airMass?: InputMaybe<AirMassRangeInput>;
  hourAngle?: InputMaybe<HourAngleRangeInput>;
};

export type Email = {
  __typename?: 'Email';
  /** Html format message */
  htmlMessage?: Maybe<Scalars['NonEmptyString']['output']>;
  /** Original time of the email sending attempt */
  originalTime: Scalars['Timestamp']['output'];
  /** Recipient email address */
  recipientEmail: Scalars['EmailAddress']['output'];
  /** Sender email address */
  senderEmail: Scalars['EmailAddress']['output'];
  /** The status of the email */
  status: EmailStatus;
  /** The time of the last status update */
  statusTime: Scalars['Timestamp']['output'];
  /** Email subject */
  subject: Scalars['NonEmptyString']['output'];
  /** Text format message */
  textMessage: Scalars['NonEmptyString']['output'];
};

export type EmailStatus =
  /** Mail provider has accepted the message */
  | 'ACCEPTED'
  /** The message has been accepted by the recipient email server */
  | 'DELIVERED'
  /** The message is not deliverable */
  | 'PERMANENT_FAILURE'
  /** Mail provider has queued the message */
  | 'QUEUED'
  /** Mail provider has rejected the message */
  | 'REJECTED'
  /** The message could not be delivered, but may be deliverable later */
  | 'TEMPORARY_FAILURE';

export type EmissionLineIntegrated = {
  __typename?: 'EmissionLineIntegrated';
  lineFlux: LineFluxIntegrated;
  /** km/s */
  lineWidth: Scalars['PosBigDecimal']['output'];
  wavelength: Wavelength;
};

/** Create or edit an emission line with integrated line flux units.  When creating a new value, all fields are required. */
export type EmissionLineIntegratedInput = {
  /** The lineFlux field is required when creating a new instance of EmissionLineIntegrated, but optional when editing */
  lineFlux?: InputMaybe<LineFluxIntegratedInput>;
  /** The lineWidth field is required when creating a new instance of EmissionLineIntegrated, but optional when editing */
  lineWidth?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  wavelength: WavelengthInput;
};

export type EmissionLineSurface = {
  __typename?: 'EmissionLineSurface';
  lineFlux: LineFluxSurface;
  /** km/s */
  lineWidth: Scalars['PosBigDecimal']['output'];
  wavelength: Wavelength;
};

/** Create or edit an emission line with surface line flux units.  When creating a new value, all fields are required. */
export type EmissionLineSurfaceInput = {
  /** The lineFlux field is required when creating a new instance of EmissionLineSurface, but optional when editing */
  lineFlux?: InputMaybe<LineFluxSurfaceInput>;
  /** The lineWidth field is required when creating a new instance of EmissionLineSurface, but optional when editing */
  lineWidth?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  wavelength: WavelengthInput;
};

export type EmissionLinesIntegrated = {
  __typename?: 'EmissionLinesIntegrated';
  fluxDensityContinuum: FluxDensityContinuumIntegrated;
  lines: Array<EmissionLineIntegrated>;
};

/** Create or edit emission lines with integrated line flux and flux density continuum units. Both "lines" and "fluxDensityContinuum" are required when creating a new EmissionLinesIntegrated. */
export type EmissionLinesIntegratedInput = {
  /** The fluxDensityContinuum field is required when creating a new instance of EmissionLinesIntegrated, but optional when editing */
  fluxDensityContinuum?: InputMaybe<FluxDensityContinuumIntegratedInput>;
  /** The lines field is required when creating a new instance of EmissionLinesIntegrated, but optional when editing */
  lines?: InputMaybe<Array<EmissionLineIntegratedInput>>;
};

export type EmissionLinesSurface = {
  __typename?: 'EmissionLinesSurface';
  fluxDensityContinuum: FluxDensityContinuumSurface;
  lines: Array<EmissionLineSurface>;
};

/** Create or edit emission lines with surface line flux and flux density continuum units. Both "lines" and "fluxDensityContinuum" are required when creating a new EmissionLinesSurface. */
export type EmissionLinesSurfaceInput = {
  /** The fluxDensityContinuum field is required when creating a new instance of EmissionLinesSurface, but optional when editing */
  fluxDensityContinuum?: InputMaybe<FluxDensityContinuumSurfaceInput>;
  /** The lines field is required when creating a new instance of EmissionLinesSurface, but optional when editing */
  lines?: InputMaybe<Array<EmissionLineSurfaceInput>>;
};

export type EngineeringProgramReference = ProgramReference & {
  __typename?: 'EngineeringProgramReference';
  instrument: Instrument;
  label: Scalars['ProgramReferenceLabel']['output'];
  semester: Scalars['Semester']['output'];
  semesterIndex: Scalars['PosInt']['output'];
  type: ProgramType;
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

export type ExampleProgramReference = ProgramReference & {
  __typename?: 'ExampleProgramReference';
  instrument: Instrument;
  label: Scalars['ProgramReferenceLabel']['output'];
  type: ProgramType;
};

export type Execution = {
  __typename?: 'Execution';
  /** Executed (or at least partially executed) atom records, across all visits. */
  atomRecords: AtomRecordSelectResult;
  /**
   * Full execution config, including acquisition and science sequences.  If a
   * sequence cannot be generated for this observation, `null` is returned along
   * with warning messages.
   */
  config?: Maybe<ExecutionConfig>;
  /** Datasets associated with the observation, across all visits. */
  datasets: DatasetSelectResult;
  /**
   * Calculations dependent on the sequence, such as planned time and offsets.
   * If a sequence cannot be generated for this observation, `null` is returned
   * along with warning messages.
   */
  digest?: Maybe<ExecutionDigest>;
  /** Events associated with the observation, across all visits. */
  events: ExecutionEventSelectResult;
  /** Determines the execution state as a whole of this observation. */
  executionState: ExecutionState;
  /** Time accounting calculation for this observation. */
  timeCharge: CategorizedTime;
  /** Visits associated with the observation. */
  visits: VisitSelectResult;
};


export type ExecutionAtomRecordsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['Timestamp']['input']>;
};


export type ExecutionConfigArgs = {
  futureLimit?: InputMaybe<Scalars['NonNegInt']['input']>;
};


export type ExecutionDatasetsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['DatasetId']['input']>;
};


export type ExecutionEventsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ExecutionEventId']['input']>;
};


export type ExecutionVisitsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['VisitId']['input']>;
};

/** Execution configuration.  All but one of the instruments will be `null`. */
export type ExecutionConfig = {
  __typename?: 'ExecutionConfig';
  /**
   * GMOS North execution config.  This will be null unless the `instrument` is
   * `GMOS_NORTH`.
   */
  gmosNorth?: Maybe<GmosNorthExecutionConfig>;
  /**
   * GMOS South execution config.  This will be null unless the `instrument` is
   * `GMOS_SOUTH`.
   */
  gmosSouth?: Maybe<GmosSouthExecutionConfig>;
  /**
   * Instrument type.  This will indicate which of the instrument-specific fields
   * is defined.
   */
  instrument: Instrument;
};

/** Summarizes the execution setup time and sequences. */
export type ExecutionDigest = {
  __typename?: 'ExecutionDigest';
  /** Acquisition sequence summary. */
  acquisition?: Maybe<SequenceDigest>;
  /** Science sequence summary. */
  science?: Maybe<SequenceDigest>;
  /** Setup time calculations. */
  setup: SetupTime;
};

/** Execution event (sequence, step, or dataset events) */
export type ExecutionEvent = {
  /** Event type. */
  eventType: ExecutionEventType;
  /** Event id. */
  id: Scalars['ExecutionEventId']['output'];
  /** Observation whose execution produced this event. */
  observation: Observation;
  /** Time at which this event was received. */
  received: Scalars['Timestamp']['output'];
  /** Visit associated with the event. */
  visit: Visit;
};

export type ExecutionEventAdded = {
  __typename?: 'ExecutionEventAdded';
  value: ExecutionEvent;
};

export type ExecutionEventAddedInput = {
  eventType?: InputMaybe<WhereEqExecutionEventType>;
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  visitId?: InputMaybe<Scalars['VisitId']['input']>;
};

/** The matching ExecutionEvent results, limited to a maximum of 1000 entries. */
export type ExecutionEventSelectResult = {
  __typename?: 'ExecutionEventSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching ExecutionEvents up to the return size limit of 1000 */
  matches: Array<ExecutionEvent>;
};

/** Execution event types. */
export type ExecutionEventType =
  /** Atom-level event type. */
  | 'ATOM'
  /** Dataset-level event type. */
  | 'DATASET'
  /** Sequence-level event type. */
  | 'SEQUENCE'
  /** Slew event type. */
  | 'SLEW'
  /** Step-level event type. */
  | 'STEP';

export type ExecutionState =
  /** No more data is expected. */
  | 'COMPLETED'
  /** User marked the observation complete regardless of any remaining steps. */
  | 'DECLARED_COMPLETE'
  /**
   * The sequence or observation isn't sufficiently defined, or there is a problem
   * that must first be resolved.
   */
  | 'NOT_DEFINED'
  /** No execution visit has been recorded. */
  | 'NOT_STARTED'
  /**
   * At least one visit was made, but the sequence or observation is not yet
   * complete.
   */
  | 'ONGOING';

/** State of being: either Deleted or Present */
export type Existence =
  /** Existence Deleted */
  | 'DELETED'
  /** Existence Present */
  | 'PRESENT';

/** Exposure time mode, either signal to noise or fixed */
export type ExposureTimeMode = {
  __typename?: 'ExposureTimeMode';
  /** Signal to noise exposure time mode data, if applicable. */
  signalToNoise?: Maybe<SignalToNoiseExposureTimeMode>;
  /** Time and Count mode data, if applicable. */
  timeAndCount?: Maybe<TimeAndCountExposureTimeMode>;
};

/** Exposure time mode input.  Specify fixed or signal to noise, but not both */
export type ExposureTimeModeInput = {
  /** The signalToNoise field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  signalToNoise?: InputMaybe<SignalToNoiseExposureTimeModeInput>;
  /** The timeAndCount field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  timeAndCount?: InputMaybe<TimeAndCountExposureTimeModeInput>;
};

/** Proposal properties for Fast Turnaround CallForProposals. */
export type FastTurnaround = ProposalType & {
  __typename?: 'FastTurnaround';
  /**
   * Minimum percentage of observing time required to consider this proposal
   * successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /**
   * Partner associated with this FT proposal.  This is optional until submission,
   * by which time it must be defined.
   */
  piAffiliation?: Maybe<Partner>;
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
  /**
   * Whether (and how) the observations in this proposal are available for Target
   * of Opportunity triggering.
   */
  toOActivation: ToOActivation;
};

export type FastTurnaroundInput = {
  /**
   * The minimum percentage of time required to consider this proposal a success.
   * If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * Partner associated with this FT proposal.  This is optional on creation but
   * must be specified upon submission.
   */
  piAffiliation?: InputMaybe<Partner>;
  /**
   * The toOActivation field is optional. If not specified when creating a
   * proposal, it defaults to `NONE'.
   */
  toOActivation?: InputMaybe<ToOActivation>;
};

export type FilterType =
  /** Broad-Band Filter */
  | 'BroadBand'
  /** Combination Filter */
  | 'Combination'
  /** Engineering Filter */
  | 'Engineering'
  /** Narrow-Band Filter */
  | 'NarrowBand'
  /** Spectroscopic Filter */
  | 'Spectroscopic';

/** Metadata for `enum FilterType` */
export type FilterTypeMeta = {
  __typename?: 'FilterTypeMeta';
  longName: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  tag: FilterType;
};

/** Flamingos2 Decker */
export type Flamingos2Decker =
  /** Flamingos2Decker Imaging */
  | 'IMAGING'
  /** Flamingos2Decker LongSlit */
  | 'LONG_SLIT'
  /** Flamingos2Decker MOS */
  | 'MOS';

/** Flamingos2 Disperser */
export type Flamingos2Disperser =
  /** Flamingos2Disperser R=1200 (H + K) grism */
  | 'R1200_HK'
  /** Flamingos2Disperser R=1200 (J + H) grism */
  | 'R1200_JH'
  /** Flamingos2Disperser R=3000 (J or H or K) grism */
  | 'R3000';

/** Flamingos2 Filter */
export type Flamingos2Filter =
  /** Flamingos2Filter H (1.65 um) */
  | 'H'
  /** Flamingos2Filter HK (spectroscopic) */
  | 'HK'
  /** Flamingos2Filter J (1.25 um) */
  | 'J'
  /** Flamingos2Filter JH (spectroscopic) */
  | 'JH'
  /** Flamingos2Filter J-low (1.15 um) */
  | 'J_LOW'
  /** Flamingos2Filter K-blue (2.06 um) */
  | 'K_BLUE'
  /** Flamingos2Filter K-long (2.20 um) */
  | 'K_LONG'
  /** Flamingos2Filter K-short (2.15 um) */
  | 'K_SHORT'
  /** Flamingos2Filter Y (1.02 um) */
  | 'Y';

/** Flamingos2 FPU */
export type Flamingos2Fpu =
  /** Flamingos2Fpu 1-Pixel Long Slit */
  | 'LONG_SLIT_1'
  /** Flamingos2Fpu 2-Pixel Long Slit */
  | 'LONG_SLIT_2'
  /** Flamingos2Fpu 1-Pixel Long Slit */
  | 'LONG_SLIT_3'
  /** Flamingos2Fpu 4-Pixel Long Slit */
  | 'LONG_SLIT_4'
  /** Flamingos2Fpu 6-Pixel Long Slit */
  | 'LONG_SLIT_6'
  /** Flamingos2Fpu 8-Pixel Long Slit */
  | 'LONG_SLIT_8'
  /** Flamingos2Fpu 2-Pixel Pinhole Grid */
  | 'PINHOLE'
  /** Flamingos2Fpu Sub-Pixel Pinhole Gr */
  | 'SUB_PIX_PINHOLE';

/** Flamingos2 South Long Slit mode */
export type Flamingos2LongSlit = {
  __typename?: 'Flamingos2LongSlit';
  /**
   * The decker field is either explicitly specified in explicitDecker or else taken
   * from defaultDecker
   */
  decker: Flamingos2Decker;
  /** Default decker, calculated based on the exposure time */
  defaultDecker: Flamingos2Decker;
  /** Default read mode, calculated based on the exposure time */
  defaultReadMode: Flamingos2ReadMode;
  /** Default readout mode, science */
  defaultReadoutMode: Flamingos2ReadoutMode;
  /**
   * Default reads, calculated from the selected read mode which in
   * turn is based on the exposure time
   */
  defaultReads: Flamingos2Reads;
  /** The disperser field must be specified.  It cannot be unset with a null value. */
  disperser: Flamingos2Disperser;
  /**
   * Optional explicitly specified F2 Decker. If set it overrides the
   * default.
   */
  explicitDecker?: Maybe<Flamingos2Decker>;
  /**
   * Optional explicitly specified F2 ReadMode. If set it overrides the
   * default.
   */
  explicitReadMode?: Maybe<Flamingos2ReadMode>;
  /**
   * Optional explicitly specified F2 Readout mode. If set it overrides the
   * default.
   */
  explicitReadoutMode?: Maybe<Flamingos2ReadoutMode>;
  /**
   * Optional explicitly specified F2 Reads. If set it overrides the
   * default.
   */
  explicitReads?: Maybe<Flamingos2Reads>;
  /** The filter field must be specified.  It cannot be unset with a null value. */
  filter: Flamingos2Filter;
  /** The fpu field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  fpu: Flamingos2Fpu;
  /**
   * The disperser as it was initially selected.  See the `disperser` field for the
   * disperser that will be used in the observation.
   */
  initialDisperser: Flamingos2Disperser;
  /**
   * The filter as it was initially selected (if any).  See the `filter` field
   * for the filter that will be used in the observation.
   */
  initialFilter: Flamingos2Filter;
  /**
   * The FPU as it was initially selected.  See the `fpu` field for the FPU that
   * will be used in the observation.
   */
  initialFpu: Flamingos2Fpu;
  /**
   * The read mode is either explicitly specified in explicitReadMode or else taken
   * from defaultReadMode
   */
  readMode: Flamingos2ReadMode;
  /**
   * The readoutMode field is either explicitly specified in explicitReadoutMode or else taken
   * from defaultReadoutMode
   */
  readoutMode: Flamingos2ReadoutMode;
  /**
   * F2 reads, either explicitly specified in explicitReads or else taken
   * from the defaultXReads
   */
  reads: Flamingos2Reads;
};

/** Edit or create Flamingos2 Long Slit advanced configuration */
export type Flamingos2LongSlitInput = {
  /** The disperser field must be specified.  It cannot be unset with a null value. */
  disperser?: InputMaybe<Flamingos2Disperser>;
  /** The decker field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitDecker?: InputMaybe<Flamingos2Decker>;
  /** The read mode field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitReadMode?: InputMaybe<Flamingos2ReadMode>;
  /** The readoutMode field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitReadoutMode?: InputMaybe<Flamingos2ReadoutMode>;
  /** The reads field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitReads?: InputMaybe<Flamingos2Reads>;
  /** The filter field may be unset by assigning a null value, or ignored by skipping it altogether */
  filter?: InputMaybe<Flamingos2Filter>;
  /** The fpu field must be specified.  It cannot be unset with a null value. */
  fpu?: InputMaybe<Flamingos2Fpu>;
};

/** Flamingos2 Read Mode */
export type Flamingos2ReadMode =
  /** Flamingos2ReadMode Bright */
  | 'BRIGHT'
  /** Flamingos2ReadMode Faint */
  | 'FAINT'
  /** Flamingos2ReadMode Medium */
  | 'MEDIUM';

/** Flamingos2 Readout Mode */
export type Flamingos2ReadoutMode =
  /** Flamingos2ReadoutMode Engineering */
  | 'ENGINEERING'
  /** Flamingos2ReadoutMode Science */
  | 'SCIENCE';

/** Flamingos2 Reads */
export type Flamingos2Reads =
  /** Flamingos2Reads Reads 1 */
  | 'READS_1'
  /** Flamingos2Reads Reads 3 */
  | 'READS_3'
  /** Flamingos2Reads Reads 4 */
  | 'READS_4'
  /** Flamingos2Reads Reads 5 */
  | 'READS_5'
  /** Flamingos2Reads Reads 6 */
  | 'READS_6'
  /** Flamingos2Reads Reads 7 */
  | 'READS_7'
  /** Flamingos2Reads Reads 8 */
  | 'READS_8'
  /** Flamingos2Reads Reads 9 */
  | 'READS_9'
  /** Flamingos2Reads Reads 10 */
  | 'READS_10'
  /** Flamingos2Reads Reads 11 */
  | 'READS_11'
  /** Flamingos2Reads Reads 12 */
  | 'READS_12'
  /** Flamingos2Reads Reads 13 */
  | 'READS_13'
  /** Flamingos2Reads Reads 14 */
  | 'READS_14'
  /** Flamingos2Reads Reads 15 */
  | 'READS_15'
  /** Flamingos2Reads Reads 16 */
  | 'READS_16';

/** Flamingos2 Window Cover */
export type Flamingos2WindowCover =
  /** Flamingos2WindowCover CLOSE */
  | 'CLOSE'
  /** Flamingos2WindowCover Open */
  | 'OPEN';

/** Flux density entry */
export type FluxDensity = {
  density: Scalars['PosBigDecimal']['input'];
  wavelength: WavelengthInput;
};

export type FluxDensityContinuumIntegrated = {
  __typename?: 'FluxDensityContinuumIntegrated';
  error?: Maybe<Scalars['PosBigDecimal']['output']>;
  units: FluxDensityContinuumIntegratedUnits;
  value: Scalars['PosBigDecimal']['output'];
};

/** A flux density continuum value with integrated units */
export type FluxDensityContinuumIntegratedInput = {
  error?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  units: FluxDensityContinuumIntegratedUnits;
  value: Scalars['PosBigDecimal']['input'];
};

/** Flux density continuum integrated units */
export type FluxDensityContinuumIntegratedUnits =
  /** erg/s/cm²/Å */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_A'
  /** W/m²/µm */
  | 'W_PER_M_SQUARED_PER_UM';

export type FluxDensityContinuumSurface = {
  __typename?: 'FluxDensityContinuumSurface';
  error?: Maybe<Scalars['PosBigDecimal']['output']>;
  units: FluxDensityContinuumSurfaceUnits;
  value: Scalars['PosBigDecimal']['output'];
};

/** A flux density continuum value with surface units */
export type FluxDensityContinuumSurfaceInput = {
  error?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  units: FluxDensityContinuumSurfaceUnits;
  value: Scalars['PosBigDecimal']['input'];
};

/** Flux density continuum surface units */
export type FluxDensityContinuumSurfaceUnits =
  /** erg/s/cm²/Å/arcsec² */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_A_PER_ARCSEC_SQUARED'
  /** W/m²/µm/arcsec² */
  | 'W_PER_M_SQUARED_PER_UM_PER_ARCSEC_SQUARED';

export type FluxDensityEntry = {
  __typename?: 'FluxDensityEntry';
  density: Scalars['PosBigDecimal']['output'];
  wavelength: Wavelength;
};

/** Focal plane Single/Multi/IFU */
export type FocalPlane =
  /** FocalPlane IFU */
  | 'IFU'
  /** FocalPlane MultipleSlit */
  | 'MULTIPLE_SLIT'
  /** FocalPlane SingleSlit */
  | 'SINGLE_SLIT';

/** Galaxy spectrum */
export type GalaxySpectrum =
  /** GalaxySpectrum Elliptical */
  | 'ELLIPTICAL'
  /** GalaxySpectrum Spiral */
  | 'SPIRAL';

/** Create or edit a gaussian source.  Specify both "fwhm" and "spectralDefinition" when creating a new Gaussian. */
export type GaussianInput = {
  /** The fwhm field is required when creating a new instance of Gaussian, but optional when editing */
  fwhm?: InputMaybe<AngleInput>;
  /** The spectralDefinition field is required when creating a new instance of Gaussian, but optional when editing */
  spectralDefinition?: InputMaybe<SpectralDefinitionIntegratedInput>;
};

/** Gaussian source, one of bandNormalized and emissionLines will be defined. */
export type GaussianSource = {
  __typename?: 'GaussianSource';
  /** Band normalized spectral definition */
  bandNormalized?: Maybe<BandNormalizedIntegrated>;
  /** Emission lines spectral definition */
  emissionLines?: Maybe<EmissionLinesIntegrated>;
  /** full width at half maximum */
  fwhm: Angle;
};

/** GCAL calibration step (flat / arc) */
export type Gcal = StepConfig & {
  __typename?: 'Gcal';
  /** GCAL arcs, one or more present if no continuum is used */
  arcs: Array<GcalArc>;
  /** GCAL continuum, present if no arcs are used */
  continuum?: Maybe<GcalContinuum>;
  /** GCAL diffuser */
  diffuser: GcalDiffuser;
  /** GCAL filter */
  filter: GcalFilter;
  /** GCAL shutter */
  shutter: GcalShutter;
  /** Step type */
  stepType: StepType;
};

/** GCAL arc */
export type GcalArc =
  /** GcalArc ArArc */
  | 'AR_ARC'
  /** GcalArc CuArArc */
  | 'CU_AR_ARC'
  /** GcalArc ThArArc */
  | 'TH_AR_ARC'
  /** GcalArc XeArc */
  | 'XE_ARC';

/** GCAL continuum */
export type GcalContinuum =
  /** GcalContinuum IrGreyBodyHigh */
  | 'IR_GREY_BODY_HIGH'
  /** GcalContinuum IrGreyBodyLow */
  | 'IR_GREY_BODY_LOW'
  /** GcalContinuum QuartzHalogen 5W */
  | 'QUARTZ_HALOGEN5'
  /** GcalContinuum QuartzHalogen 100W */
  | 'QUARTZ_HALOGEN100';

/** GCAL diffuser */
export type GcalDiffuser =
  /** GcalDiffuser Ir */
  | 'IR'
  /** GcalDiffuser Visible */
  | 'VISIBLE';

/** GCAL filter */
export type GcalFilter =
  /** GcalFilter Gmos */
  | 'GMOS'
  /** GcalFilter Hros */
  | 'HROS'
  /** GcalFilter Nd10 */
  | 'ND10'
  /** GcalFilter Nd16 */
  | 'ND16'
  /** GcalFilter Nd20 */
  | 'ND20'
  /** GcalFilter Nd30 */
  | 'ND30'
  /** GcalFilter Nd40 */
  | 'ND40'
  /** GcalFilter Nd45 */
  | 'ND45'
  /** GcalFilter Nd50 */
  | 'ND50'
  /** GcalFilter Nir */
  | 'NIR'
  /** GcalFilter None */
  | 'NONE';

/** GCAL shutter */
export type GcalShutter =
  /** GcalShutter Closed */
  | 'CLOSED'
  /** GcalShutter Open */
  | 'OPEN';

/** Gender Male/Female/Other/NotSpecified */
export type Gender =
  /** Gender Female */
  | 'FEMALE'
  /** Gender Male */
  | 'MALE'
  /** Gender Not Specified */
  | 'NOT_SPECIFIED'
  /** Gender Other */
  | 'OTHER';

/** GMOS amp count */
export type GmosAmpCount =
  /** GmosAmpCount Six */
  | 'SIX'
  /** GmosAmpCount Three */
  | 'THREE'
  /** GmosAmpCount Twelve */
  | 'TWELVE';

/** GMOS amp gain */
export type GmosAmpGain =
  /** GmosAmpGain High */
  | 'HIGH'
  /** GmosAmpGain Low */
  | 'LOW';

/** GMOS amp read mode */
export type GmosAmpReadMode =
  /** GmosAmpReadMode Fast */
  | 'FAST'
  /** GmosAmpReadMode Slow */
  | 'SLOW';

/** CCD Readout Configuration */
export type GmosCcdMode = {
  __typename?: 'GmosCcdMode';
  /** GMOS Amp Count */
  ampCount: GmosAmpCount;
  /** GMOS Amp Gain */
  ampGain: GmosAmpGain;
  /** GMOS Amp Read Mode */
  ampReadMode: GmosAmpReadMode;
  /** GMOS X-binning */
  xBin: GmosXBinning;
  /** GMOS Y-binning */
  yBin: GmosYBinning;
};

/** GMOS CCD readout input parameters */
export type GmosCcdModeInput = {
  /** Amp Count, defaults to 'TWELVE'. */
  ampCount?: InputMaybe<GmosAmpCount>;
  /** Amp Gain, defaults to 'LOW' */
  ampGain?: InputMaybe<GmosAmpGain>;
  /** Amp Read Mode, defaults to 'SLOW' */
  ampReadMode?: InputMaybe<GmosAmpReadMode>;
  /** X Binning, defaults to 'ONE'. */
  xBin?: InputMaybe<GmosXBinning>;
  /** Y Binning, defaults to 'ONE'. */
  yBin?: InputMaybe<GmosYBinning>;
};

/** GMOS Custom Mask */
export type GmosCustomMask = {
  __typename?: 'GmosCustomMask';
  /** Custom Mask Filename */
  filename: Scalars['String']['output'];
  /** Custom Slit Width */
  slitWidth: GmosCustomSlitWidth;
};

/** GMOS custom mask input parameters */
export type GmosCustomMaskInput = {
  /** Custom mask file name */
  filename: Scalars['String']['input'];
  /** Custom mask slit width */
  slitWidth: GmosCustomSlitWidth;
};

/** GMOS Custom Slit Width */
export type GmosCustomSlitWidth =
  /** GmosCustomSlitWidth CustomWidth_0_25 */
  | 'CUSTOM_WIDTH_0_25'
  /** GmosCustomSlitWidth CustomWidth_0_50 */
  | 'CUSTOM_WIDTH_0_50'
  /** GmosCustomSlitWidth CustomWidth_0_75 */
  | 'CUSTOM_WIDTH_0_75'
  /** GmosCustomSlitWidth CustomWidth_1_00 */
  | 'CUSTOM_WIDTH_1_00'
  /** GmosCustomSlitWidth CustomWidth_1_50 */
  | 'CUSTOM_WIDTH_1_50'
  /** GmosCustomSlitWidth CustomWidth_2_00 */
  | 'CUSTOM_WIDTH_2_00'
  /** GmosCustomSlitWidth CustomWidth_5_00 */
  | 'CUSTOM_WIDTH_5_00';

/** GMOS Detector Translation X Offset */
export type GmosDtax =
  /** GmosDtax Five */
  | 'FIVE'
  /** GmosDtax Four */
  | 'FOUR'
  /** GmosDtax MinusFive */
  | 'MINUS_FIVE'
  /** GmosDtax MinusFour */
  | 'MINUS_FOUR'
  /** GmosDtax MinusOne */
  | 'MINUS_ONE'
  /** GmosDtax MinusSix */
  | 'MINUS_SIX'
  /** GmosDtax MinusThree */
  | 'MINUS_THREE'
  /** GmosDtax MinusTwo */
  | 'MINUS_TWO'
  /** GmosDtax One */
  | 'ONE'
  /** GmosDtax Six */
  | 'SIX'
  /** GmosDtax Three */
  | 'THREE'
  /** GmosDtax Two */
  | 'TWO'
  /** GmosDtax Zero */
  | 'ZERO';

/** Electronic offsetting */
export type GmosEOffsetting =
  /** GmosEOffsetting Off */
  | 'OFF'
  /** GmosEOffsetting On */
  | 'ON';

/** GMOS grating order */
export type GmosGratingOrder =
  /** GmosGratingOrder One */
  | 'ONE'
  /** GmosGratingOrder Two */
  | 'TWO'
  /** GmosGratingOrder Zero */
  | 'ZERO';

export type GmosNodAndShuffle = {
  __typename?: 'GmosNodAndShuffle';
  /** Whether to use electronic offsetting */
  eOffset: GmosEOffsetting;
  /** Offset position A */
  posA: Offset;
  /** Offset position B */
  posB: Offset;
  /** Shuffle cycles */
  shuffleCycles: Scalars['Int']['output'];
  /** Shuffle offset */
  shuffleOffset: Scalars['Int']['output'];
};

/** Creation input parameters for GMOS nod and shuffle */
export type GmosNodAndShuffleInput = {
  /** Electronic offsetting */
  eOffset: GmosEOffsetting;
  /** Offset position A */
  posA: OffsetInput;
  /** Offset position B */
  posB: OffsetInput;
  /** Shuffle cycles */
  shuffleCycles: Scalars['PosInt']['input'];
  /** Shuffle offset */
  shuffleOffset: Scalars['PosInt']['input'];
};

/** GmosNorth atom, a collection of steps that should be executed in their entirety */
export type GmosNorthAtom = {
  __typename?: 'GmosNorthAtom';
  /** Optional description of the atom. */
  description?: Maybe<Scalars['String']['output']>;
  /** Atom id */
  id: Scalars['AtomId']['output'];
  /**
   * Observe class for this atom as a whole (combined observe class for each of
   * its steps).
   */
  observeClass: ObserveClass;
  /** Individual steps that comprise the atom */
  steps: Array<GmosNorthStep>;
};

/** GMOS North FPU */
export type GmosNorthBuiltinFpu =
  /** GmosNorthBuiltinFpu Ifu2Slits */
  | 'IFU2_SLITS'
  /** GmosNorthBuiltinFpu IfuBlue */
  | 'IFU_BLUE'
  /** GmosNorthBuiltinFpu IfuRed */
  | 'IFU_RED'
  /** GmosNorthBuiltinFpu LongSlit_0_25 */
  | 'LONG_SLIT_0_25'
  /** GmosNorthBuiltinFpu LongSlit_0_50 */
  | 'LONG_SLIT_0_50'
  /** GmosNorthBuiltinFpu LongSlit_0_75 */
  | 'LONG_SLIT_0_75'
  /** GmosNorthBuiltinFpu LongSlit_1_00 */
  | 'LONG_SLIT_1_00'
  /** GmosNorthBuiltinFpu LongSlit_1_50 */
  | 'LONG_SLIT_1_50'
  /** GmosNorthBuiltinFpu LongSlit_2_00 */
  | 'LONG_SLIT_2_00'
  /** GmosNorthBuiltinFpu LongSlit_5_00 */
  | 'LONG_SLIT_5_00'
  /** GmosNorthBuiltinFpu Ns0 */
  | 'NS0'
  /** GmosNorthBuiltinFpu Ns1 */
  | 'NS1'
  /** GmosNorthBuiltinFpu Ns2 */
  | 'NS2'
  /** GmosNorthBuiltinFpu Ns3 */
  | 'NS3'
  /** GmosNorthBuiltinFpu Ns4 */
  | 'NS4'
  /** GmosNorthBuiltinFpu Ns5 */
  | 'NS5';

/** GmosNorth Detector type */
export type GmosNorthDetector =
  | 'E2_V'
  | 'HAMAMATSU';

/** GMOS North dynamic step configuration */
export type GmosNorthDynamic = {
  __typename?: 'GmosNorthDynamic';
  /**
   * Central wavelength, which is taken from the grating (if defined) or else
   * from the filter (if defined).
   */
  centralWavelength?: Maybe<Wavelength>;
  /** GMOS detector x offset */
  dtax: GmosDtax;
  /** GMOS exposure time */
  exposure: TimeSpan;
  /** GMOS North filter */
  filter?: Maybe<GmosNorthFilter>;
  /** GMOS North FPU */
  fpu?: Maybe<GmosNorthFpu>;
  /** GMOS North grating */
  gratingConfig?: Maybe<GmosNorthGratingConfig>;
  /** GMOS CCD Readout */
  readout: GmosCcdMode;
  /** GMOS region of interest */
  roi: GmosRoi;
};

/** GMOS North instrument configuration input */
export type GmosNorthDynamicInput = {
  /** GMOS detector x offset */
  dtax: GmosDtax;
  /** Exposure time */
  exposure: TimeSpanInput;
  /** GMOS North filter */
  filter?: InputMaybe<GmosNorthFilter>;
  /** GMOS North FPU */
  fpu?: InputMaybe<GmosNorthFpuInput>;
  /** GMOS North grating */
  gratingConfig?: InputMaybe<GmosNorthGratingConfigInput>;
  /** GMOS CCD readout */
  readout: GmosCcdModeInput;
  /** GMOS region of interest */
  roi: GmosRoi;
};

/** GMOS North Execution Config */
export type GmosNorthExecutionConfig = {
  __typename?: 'GmosNorthExecutionConfig';
  /** GMOS North acquisition execution sequence */
  acquisition?: Maybe<GmosNorthExecutionSequence>;
  /** GMOS North science execution */
  science?: Maybe<GmosNorthExecutionSequence>;
  /** GMOS North static configuration */
  static: GmosNorthStatic;
};

/** Next atom to execute and potential future atoms. */
export type GmosNorthExecutionSequence = {
  __typename?: 'GmosNorthExecutionSequence';
  /**
   * Whether there are more anticipated atoms than those that appear in
   * 'possibleFuture'.
   */
  hasMore: Scalars['Boolean']['output'];
  /** Next atom to execute. */
  nextAtom: GmosNorthAtom;
  /** (Prefix of the) remaining atoms to execute, if any. */
  possibleFuture: Array<GmosNorthAtom>;
};

/** GMOS North Filter */
export type GmosNorthFilter =
  /** GmosNorthFilter CaT */
  | 'CA_T'
  /** GmosNorthFilter DS920 */
  | 'DS920'
  /** GmosNorthFilter GG455 */
  | 'GG455'
  /** GmosNorthFilter GPrime */
  | 'G_PRIME'
  /** GmosNorthFilter GPrime_GG455 */
  | 'G_PRIME_GG455'
  /** GmosNorthFilter GPrime_OG515 */
  | 'G_PRIME_OG515'
  /** GmosNorthFilter Ha */
  | 'HA'
  /** GmosNorthFilter HartmannA_RPrime */
  | 'HARTMANN_A_R_PRIME'
  /** GmosNorthFilter HartmannB_RPrime */
  | 'HARTMANN_B_R_PRIME'
  /** GmosNorthFilter HaC */
  | 'HA_C'
  /** GmosNorthFilter HeII */
  | 'HE_II'
  /** GmosNorthFilter HeIIC */
  | 'HE_IIC'
  /** GmosNorthFilter IPrime */
  | 'I_PRIME'
  /** GmosNorthFilter IPrime_CaT */
  | 'I_PRIME_CA_T'
  /** GmosNorthFilter OG515 */
  | 'OG515'
  /** GmosNorthFilter OIII */
  | 'OIII'
  /** GmosNorthFilter OIIIC */
  | 'OIIIC'
  /** GmosNorthFilter OVI */
  | 'OVI'
  /** GmosNorthFilter OVIC */
  | 'OVIC'
  /** GmosNorthFilter RG610 */
  | 'RG610'
  /** GmosNorthFilter RI */
  | 'RI'
  /** GmosNorthFilter RPrime */
  | 'R_PRIME'
  /** GmosNorthFilter RPrime_RG610 */
  | 'R_PRIME_RG610'
  /** GmosNorthFilter SII */
  | 'SII'
  /** GmosNorthFilter Y */
  | 'Y'
  /** GmosNorthFilter Z */
  | 'Z'
  /** GmosNorthFilter ZPrime */
  | 'Z_PRIME'
  /** GmosNorthFilter ZPrime_CaT */
  | 'Z_PRIME_CA_T';

/** GMOS North FPU option, either builtin or custom mask */
export type GmosNorthFpu = {
  __typename?: 'GmosNorthFpu';
  /** GMOS North builtin FPU, if in use */
  builtin?: Maybe<GmosNorthBuiltinFpu>;
  /** The custom mask, if in use */
  customMask?: Maybe<GmosCustomMask>;
};

/** GMOS North FPU input parameters (choose custom or builtin). */
export type GmosNorthFpuInput = {
  /** Builtin FPU option */
  builtin?: InputMaybe<GmosNorthBuiltinFpu>;
  /** Custom mask FPU option */
  customMask?: InputMaybe<GmosCustomMaskInput>;
};

/** GMOS North Grating */
export type GmosNorthGrating =
  /** GmosNorthGrating B480_G5309 */
  | 'B480_G5309'
  /** GmosNorthGrating B1200_G5301 */
  | 'B1200_G5301'
  /** GmosNorthGrating R150_G5308 */
  | 'R150_G5308'
  /** GmosNorthGrating R400_G5305 */
  | 'R400_G5305'
  /** GmosNorthGrating R600_G5304 */
  | 'R600_G5304'
  /** GmosNorthGrating R831_G5302 */
  | 'R831_G5302';

/** GMOS North Grating Configuration */
export type GmosNorthGratingConfig = {
  __typename?: 'GmosNorthGratingConfig';
  /** GMOS North Grating */
  grating: GmosNorthGrating;
  /** GMOS grating order */
  order: GmosGratingOrder;
  /** Grating wavelength */
  wavelength: Wavelength;
};

/** GMOS North grating input parameters */
export type GmosNorthGratingConfigInput = {
  /** GmosGmosNorth grating */
  grating: GmosNorthGrating;
  /** GMOS grating order */
  order: GmosGratingOrder;
  /** Grating wavelength */
  wavelength: WavelengthInput;
};

/** GMOS North Long Slit mode */
export type GmosNorthLongSlit = {
  __typename?: 'GmosNorthLongSlit';
  /**
   * GMOS amp read gain, either explicitly specified in explicitAmpGain or else
   * taken from the defaultAmpGain.
   */
  ampGain: GmosAmpGain;
  /**
   * GMOS amp read mode, either explicitly specified in explicitAmpReadMode or
   * else taken from the defaultAmpReadMode.
   */
  ampReadMode: GmosAmpReadMode;
  /**
   * The central wavelength, either explicitly specified in `explicitCentralWavelength`
   * or else taken from the `defaultCentralWavelength`.
   */
  centralWavelength: Wavelength;
  /** Default GMOS amp gain (LOW). */
  defaultAmpGain: GmosAmpGain;
  /** Default GmosAmpReadMode (SLOW). */
  defaultAmpReadMode: GmosAmpReadMode;
  /** Default GMOS ROI (FULL_FRAME). */
  defaultRoi: GmosRoi;
  /** Default spatial offsets. */
  defaultSpatialOffsets: Array<OffsetQ>;
  /** Default wavelength dithers, calculated based on the grating dispersion. */
  defaultWavelengthDithers: Array<WavelengthDither>;
  /**
   * Default GMOS X-Binning, calculated from the effective slit size which in
   * turn is based on the selected FPU, target source profile and image quality.
   */
  defaultXBin: GmosXBinning;
  /** Default GMOS Y-Binning (TWO). */
  defaultYBin: GmosYBinning;
  /** Optional explicitly specified GMOS amp gain.  If set it override the default. */
  explicitAmpGain?: Maybe<GmosAmpGain>;
  /**
   * Optional explicitly specified GMOS amp read mode. If set it overrides the
   * default.
   */
  explicitAmpReadMode?: Maybe<GmosAmpReadMode>;
  /** Optional explicitly specified GMOS ROI. If set it overrides the default. */
  explicitRoi?: Maybe<GmosRoi>;
  /**
   * Optional explicitly specified spatial q offsets. If set it overrides the
   * the default.
   */
  explicitSpatialOffsets?: Maybe<Array<OffsetQ>>;
  /**
   * Optional explicitly specified wavelength dithers.  If set it overrides the
   * default.
   */
  explicitWavelengthDithers?: Maybe<Array<WavelengthDither>>;
  /**
   * Optional explicitly specified GMOS X-Binning. If set it overrides the
   * default.
   */
  explicitXBin?: Maybe<GmosXBinning>;
  /**
   * Optional explicitly specified GMOS Y-Binning. If set it overrides the
   * default.
   */
  explicitYBin?: Maybe<GmosYBinning>;
  /** GMOS North Filter */
  filter?: Maybe<GmosNorthFilter>;
  /** GMOS North FPU */
  fpu: GmosNorthBuiltinFpu;
  /** GMOS North Grating */
  grating: GmosNorthGrating;
  /**
   * The central wavelength as initially selected.  See the `centralWavelength`
   * field for the wavelength that will be used in the observation.
   */
  initialCentralWavelength: Wavelength;
  /**
   * The filter as it was initially selected (if any).  See the `filter` field
   * for the filter that will be used in the observation.
   */
  initialFilter?: Maybe<GmosNorthFilter>;
  /**
   * The FPU as it was initially selected.  See the `fpu` field for the FPU that
   * will be used in the observation.
   */
  initialFpu: GmosNorthBuiltinFpu;
  /**
   * The grating as it was initially selected.  See the `grating` field for the
   * grating that will be used in the observation.
   */
  initialGrating: GmosNorthGrating;
  /**
   * GMOS ROI, either explicitly specified in explicitRoi or else taken from the
   * defaultRoi.
   */
  roi: GmosRoi;
  /**
   * Spacial q offsets, either explicitly specified in explicitSpatialOffsets
   * or else taken from defaultSpatialOffsets
   */
  spatialOffsets: Array<OffsetQ>;
  /**
   * Wavelength dithers required to fill in the chip gaps. This value is either
   * explicitly specified in explicitWavelengthDithers or else taken from
   * defaultWavelengthDithers
   */
  wavelengthDithers: Array<WavelengthDither>;
  /**
   * GMOS X-Binning, either explicitly specified in explicitXBin or else taken
   * from the defaultXBin.
   */
  xBin: GmosXBinning;
  /**
   * GMOS Y-Binning, either explicitly specified in explicitYBin or else taken
   * from the defaultYBin.
   */
  yBin: GmosYBinning;
};

/** Edit or create GMOS North Long Slit advanced configuration */
export type GmosNorthLongSlitInput = {
  /** The centralWavelength field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  centralWavelength?: InputMaybe<WavelengthInput>;
  /** The explicitAmpGain field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitAmpGain?: InputMaybe<GmosAmpGain>;
  /** The explicitAmpReadMode field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitAmpReadMode?: InputMaybe<GmosAmpReadMode>;
  /** The explicitRoi field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitRoi?: InputMaybe<GmosRoi>;
  /** The explicitSpatialOffsets field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitSpatialOffsets?: InputMaybe<Array<OffsetComponentInput>>;
  /** The explicitWavelengthDithers field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitWavelengthDithers?: InputMaybe<Array<WavelengthDitherInput>>;
  /** The explicitXBin field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitXBin?: InputMaybe<GmosXBinning>;
  /** The explicitYBin field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitYBin?: InputMaybe<GmosYBinning>;
  /** The filter field may be unset by assigning a null value, or ignored by skipping it altogether */
  filter?: InputMaybe<GmosNorthFilter>;
  /** The fpu field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  fpu?: InputMaybe<GmosNorthBuiltinFpu>;
  /** The grating field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  grating?: InputMaybe<GmosNorthGrating>;
};

/** GMOS North stage mode */
export type GmosNorthStageMode =
  /** GmosNorthStageMode FollowXy */
  | 'FOLLOW_XY'
  /** GmosNorthStageMode NoFollow */
  | 'NO_FOLLOW';

/** Unchanging (over the course of the sequence) configuration values */
export type GmosNorthStatic = {
  __typename?: 'GmosNorthStatic';
  /** Detector in use (always HAMAMATSU for recent and new observations) */
  detector: GmosNorthDetector;
  /** Is MOS Pre-Imaging Observation */
  mosPreImaging: MosPreImaging;
  /** Nod-and-shuffle configuration */
  nodAndShuffle?: Maybe<GmosNodAndShuffle>;
  /** Stage mode */
  stageMode: GmosNorthStageMode;
};

/** GMOS North static configuration input parameters */
export type GmosNorthStaticInput = {
  /** GMOS North Detector option (defaults to HAMAMATSU) */
  detector?: InputMaybe<GmosNorthDetector>;
  /** Whether this is a MOS pre-imaging observation (defaults to IS_NOT_MOS_PRE_IMAGING) */
  mosPreImaging?: InputMaybe<MosPreImaging>;
  /** GMOS Nod And Shuffle configuration */
  nodAndShuffle?: InputMaybe<GmosNodAndShuffleInput>;
  /** GMOS North Stage Mode (default to FOLLOW_XY) */
  stageMode?: InputMaybe<GmosNorthStageMode>;
};

/** GmosNorth step with potential breakpoint */
export type GmosNorthStep = {
  __typename?: 'GmosNorthStep';
  /** Whether to pause before the execution of this step */
  breakpoint: Breakpoint;
  /** Time estimate for this step's execution */
  estimate: StepEstimate;
  /** Step id */
  id: Scalars['StepId']['output'];
  /** Instrument configuration for this step */
  instrumentConfig: GmosNorthDynamic;
  /** Observe class for this step */
  observeClass: ObserveClass;
  /** The sequence step itself */
  stepConfig: StepConfig;
  /** The telescope configuration at this step. */
  telescopeConfig: TelescopeConfig;
};

/** GMOS Region Of Interest */
export type GmosRoi =
  /** GmosRoi Ccd2 */
  | 'CCD2'
  /** GmosRoi CentralSpectrum */
  | 'CENTRAL_SPECTRUM'
  /** GmosRoi CentralStamp */
  | 'CENTRAL_STAMP'
  /** GmosRoi Custom */
  | 'CUSTOM'
  /** GmosRoi FullFrame */
  | 'FULL_FRAME';

/** GmosSouth atom, a collection of steps that should be executed in their entirety */
export type GmosSouthAtom = {
  __typename?: 'GmosSouthAtom';
  /** Optional description of the atom. */
  description?: Maybe<Scalars['String']['output']>;
  /** Atom id */
  id: Scalars['AtomId']['output'];
  /**
   * Observe class for this atom as a whole (combined observe class for each of
   * its steps).
   */
  observeClass: ObserveClass;
  /** Individual steps that comprise the atom */
  steps: Array<GmosSouthStep>;
};

/** GMOS South FPU */
export type GmosSouthBuiltinFpu =
  /** GmosSouthBuiltinFpu Ifu2Slits */
  | 'IFU2_SLITS'
  /** GmosSouthBuiltinFpu IfuBlue */
  | 'IFU_BLUE'
  /** GmosSouthBuiltinFpu IfuNS2Slits */
  | 'IFU_NS2_SLITS'
  /** GmosSouthBuiltinFpu IfuNSBlue */
  | 'IFU_NS_BLUE'
  /** GmosSouthBuiltinFpu IfuNSRed */
  | 'IFU_NS_RED'
  /** GmosSouthBuiltinFpu IfuRed */
  | 'IFU_RED'
  /** GmosSouthBuiltinFpu LongSlit_0_25 */
  | 'LONG_SLIT_0_25'
  /** GmosSouthBuiltinFpu LongSlit_0_50 */
  | 'LONG_SLIT_0_50'
  /** GmosSouthBuiltinFpu LongSlit_0_75 */
  | 'LONG_SLIT_0_75'
  /** GmosSouthBuiltinFpu LongSlit_1_00 */
  | 'LONG_SLIT_1_00'
  /** GmosSouthBuiltinFpu LongSlit_1_50 */
  | 'LONG_SLIT_1_50'
  /** GmosSouthBuiltinFpu LongSlit_2_00 */
  | 'LONG_SLIT_2_00'
  /** GmosSouthBuiltinFpu LongSlit_5_00 */
  | 'LONG_SLIT_5_00'
  /** GmosSouthBuiltinFpu Ns1 */
  | 'NS1'
  /** GmosSouthBuiltinFpu Ns2 */
  | 'NS2'
  /** GmosSouthBuiltinFpu Ns3 */
  | 'NS3'
  /** GmosSouthBuiltinFpu Ns4 */
  | 'NS4'
  /** GmosSouthBuiltinFpu Ns5 */
  | 'NS5';

/** GmosSouth Detector type */
export type GmosSouthDetector =
  | 'E2_V'
  | 'HAMAMATSU';

/** GMOS South dynamic step configuration */
export type GmosSouthDynamic = {
  __typename?: 'GmosSouthDynamic';
  /**
   * Central wavelength, which is taken from the grating (if defined) or else
   * from the filter (if defined).
   */
  centralWavelength?: Maybe<Wavelength>;
  /** GMOS detector x offset */
  dtax: GmosDtax;
  /** GMOS exposure time */
  exposure: TimeSpan;
  /** GMOS South filter */
  filter?: Maybe<GmosSouthFilter>;
  /** GMOS South FPU */
  fpu?: Maybe<GmosSouthFpu>;
  /** GMOS South grating */
  gratingConfig?: Maybe<GmosSouthGratingConfig>;
  /** GMOS CCD Readout */
  readout: GmosCcdMode;
  /** GMOS region of interest */
  roi: GmosRoi;
};

/** GMOS South instrument configuration input */
export type GmosSouthDynamicInput = {
  /** GMOS detector x offset */
  dtax: GmosDtax;
  /** Exposure time */
  exposure: TimeSpanInput;
  /** GMOS South filter */
  filter?: InputMaybe<GmosSouthFilter>;
  /** GMOS South FPU */
  fpu?: InputMaybe<GmosSouthFpuInput>;
  /** GMOS South grating */
  gratingConfig?: InputMaybe<GmosSouthGratingConfigInput>;
  /** GMOS CCD readout */
  readout: GmosCcdModeInput;
  /** GMOS region of interest */
  roi: GmosRoi;
};

/** GMOS South Execution Config */
export type GmosSouthExecutionConfig = {
  __typename?: 'GmosSouthExecutionConfig';
  /** GMOS South acquisition execution sequence. */
  acquisition?: Maybe<GmosSouthExecutionSequence>;
  /** GMOS South science execution */
  science?: Maybe<GmosSouthExecutionSequence>;
  /** GMOS South static configuration */
  static: GmosSouthStatic;
};

/** Next atom to execute and potential future atoms. */
export type GmosSouthExecutionSequence = {
  __typename?: 'GmosSouthExecutionSequence';
  /**
   * Whether there are more anticipated atoms than those that appear in
   * 'possibleFuture'.
   */
  hasMore: Scalars['Boolean']['output'];
  /** Next atom to execute. */
  nextAtom: GmosSouthAtom;
  /** (Prefix of the) remaining atoms to execute, if any. */
  possibleFuture: Array<GmosSouthAtom>;
};

/** GMOS South Filter */
export type GmosSouthFilter =
  /** GmosSouthFilter CaT */
  | 'CA_T'
  /** GmosSouthFilter GG455 */
  | 'GG455'
  /** GmosSouthFilter GPrime */
  | 'G_PRIME'
  /** GmosSouthFilter GPrime_GG455 */
  | 'G_PRIME_GG455'
  /** GmosSouthFilter GPrime_OG515 */
  | 'G_PRIME_OG515'
  /** GmosSouthFilter Ha */
  | 'HA'
  /** GmosSouthFilter HartmannA_RPrime */
  | 'HARTMANN_A_R_PRIME'
  /** GmosSouthFilter HartmannB_RPrime */
  | 'HARTMANN_B_R_PRIME'
  /** GmosSouthFilter HaC */
  | 'HA_C'
  /** GmosSouthFilter HeII */
  | 'HE_II'
  /** GmosSouthFilter HeIIC */
  | 'HE_IIC'
  /** GmosSouthFilter IPrime */
  | 'I_PRIME'
  /** GmosSouthFilter IPrime_CaT */
  | 'I_PRIME_CA_T'
  /** GmosSouthFilter IPrime_RG780 */
  | 'I_PRIME_RG780'
  /** GmosSouthFilter OG515 */
  | 'OG515'
  /** GmosSouthFilter OIII */
  | 'OIII'
  /** GmosSouthFilter OIIIC */
  | 'OIIIC'
  /** GmosSouthFilter OVI */
  | 'OVI'
  /** GmosSouthFilter OVIC */
  | 'OVIC'
  /** GmosSouthFilter RG610 */
  | 'RG610'
  /** GmosSouthFilter RG780 */
  | 'RG780'
  /** GmosSouthFilter RPrime */
  | 'R_PRIME'
  /** GmosSouthFilter RPrime_RG610 */
  | 'R_PRIME_RG610'
  /** GmosSouthFilter SII */
  | 'SII'
  /** GmosSouthFilter UPrime */
  | 'U_PRIME'
  /** GmosSouthFilter Y */
  | 'Y'
  /** GmosSouthFilter Z */
  | 'Z'
  /** GmosSouthFilter ZPrime */
  | 'Z_PRIME'
  /** GmosSouthFilter ZPrime_CaT */
  | 'Z_PRIME_CA_T';

/** GMOS South FPU option, either builtin or custom mask */
export type GmosSouthFpu = {
  __typename?: 'GmosSouthFpu';
  /** GMOS South builtin FPU, if in use */
  builtin?: Maybe<GmosSouthBuiltinFpu>;
  /** The custom mask, if in use */
  customMask?: Maybe<GmosCustomMask>;
};

/** GMOS South FPU input parameters (choose custom or builtin). */
export type GmosSouthFpuInput = {
  /** Builtin FPU option */
  builtin?: InputMaybe<GmosSouthBuiltinFpu>;
  /** Custom mask FPU option */
  customMask?: InputMaybe<GmosCustomMaskInput>;
};

/** GMOS South Grating */
export type GmosSouthGrating =
  /** GmosSouthGrating B480_G5327 */
  | 'B480_G5327'
  /** GmosSouthGrating B600_G5323 */
  | 'B600_G5323'
  /** GmosSouthGrating B1200_G5321 */
  | 'B1200_G5321'
  /** GmosSouthGrating R150_G5326 */
  | 'R150_G5326'
  /** GmosSouthGrating R400_G5325 */
  | 'R400_G5325'
  /** GmosSouthGrating R600_G5324 */
  | 'R600_G5324'
  /** GmosSouthGrating R831_G5322 */
  | 'R831_G5322';

/** GMOS South Grating Configuration */
export type GmosSouthGratingConfig = {
  __typename?: 'GmosSouthGratingConfig';
  /** GMOS South Grating */
  grating: GmosSouthGrating;
  /** GMOS grating order */
  order: GmosGratingOrder;
  /** Grating wavelength */
  wavelength: Wavelength;
};

/** GMOS South grating input parameters */
export type GmosSouthGratingConfigInput = {
  /** GmosGmosSouth grating */
  grating: GmosSouthGrating;
  /** GMOS grating order */
  order: GmosGratingOrder;
  /** Grating wavelength */
  wavelength: WavelengthInput;
};

/** GMOS South Long Slit mode */
export type GmosSouthLongSlit = {
  __typename?: 'GmosSouthLongSlit';
  /**
   * GMOS amp read gain, either explicitly specified in explicitAmpGain or else
   * taken from the defaultAmpGain.
   */
  ampGain: GmosAmpGain;
  /**
   * GMOS amp read mode, either explicitly specified in explicitAmpReadMode or
   * else taken from the defaultAmpReadMode.
   */
  ampReadMode: GmosAmpReadMode;
  /**
   * The central wavelength, either explicitly specified in `explicitCentralWavelength`
   * or else taken from the `defaultCentralWavelength`.
   */
  centralWavelength: Wavelength;
  /** Default GMOS amp gain (LOW). */
  defaultAmpGain: GmosAmpGain;
  /** Default GmosAmpReadMode (SLOW). */
  defaultAmpReadMode: GmosAmpReadMode;
  /** Default GMOS ROI (FULL_FRAME). */
  defaultRoi: GmosRoi;
  /** Default spatial offsets. */
  defaultSpatialOffsets: Array<OffsetQ>;
  /** Default wavelength dithers, calculated based on the grating dispersion. */
  defaultWavelengthDithers: Array<WavelengthDither>;
  /**
   * Default GMOS X-Binning, calculated from the effective slit size which in
   * turn is based on the selected FPU, target source profile and image quality.
   */
  defaultXBin: GmosXBinning;
  /** Default GMOS Y-Binning (TWO). */
  defaultYBin: GmosYBinning;
  /** Optional explicitly specified GMOS amp gain.  If set it override the default. */
  explicitAmpGain?: Maybe<GmosAmpGain>;
  /**
   * Optional explicitly specified GMOS amp read mode. If set it overrides the
   * default.
   */
  explicitAmpReadMode?: Maybe<GmosAmpReadMode>;
  /** Optional explicitly specified GMOS ROI. If set it overrides the default. */
  explicitRoi?: Maybe<GmosRoi>;
  /**
   * Optional explicitly specified spatial q offsets. If set it overrides the
   * the default.
   */
  explicitSpatialOffsets?: Maybe<Array<OffsetQ>>;
  /**
   * Optional explicitly specified wavelength dithers.  If set it overrides the
   * default.
   */
  explicitWavelengthDithers?: Maybe<Array<WavelengthDither>>;
  /**
   * Optional explicitly specified GMOS X-Binning. If set it overrides the
   * default.
   */
  explicitXBin?: Maybe<GmosXBinning>;
  /**
   * Optional explicitly specified GMOS Y-Binning. If set it overrides the
   * default.
   */
  explicitYBin?: Maybe<GmosYBinning>;
  /** GMOS South Filter */
  filter?: Maybe<GmosSouthFilter>;
  /** GMOS South FPU */
  fpu: GmosSouthBuiltinFpu;
  /** GMOS South Grating */
  grating: GmosSouthGrating;
  /**
   * The central wavelength as initially selected.  See the `centralWavelength`
   * field for the wavelength that will be used in the observation.
   */
  initialCentralWavelength: Wavelength;
  /**
   * The filter as it was initially selected (if any).  See the `filter` field
   * for the filter that will be used in the observation.
   */
  initialFilter?: Maybe<GmosSouthFilter>;
  /**
   * The FPU as it was initially selected.  See the `fpu` field for the FPU that
   * will be used in the observation.
   */
  initialFpu: GmosSouthBuiltinFpu;
  /**
   * The grating as it was initially selected.  See the `grating` field for the
   * grating that will be used in the observation.
   */
  initialGrating: GmosSouthGrating;
  /**
   * GMOS ROI, either explicitly specified in explicitRoi or else taken from the
   * defaultRoi.
   */
  roi: GmosRoi;
  /**
   * Spacial q offsets, either explicitly specified in explicitSpatialOffsets
   * or else taken from defaultSpatialOffsets
   */
  spatialOffsets: Array<OffsetQ>;
  /**
   * Wavelength dithers required to fill in the chip gaps. This value is either
   * explicitly specified in explicitWavelengthDithers or else taken from
   * defaultWavelengthDithers
   */
  wavelengthDithers: Array<WavelengthDither>;
  /**
   * GMOS X-Binning, either explicitly specified in explicitXBin or else taken
   * from the defaultXBin.
   */
  xBin: GmosXBinning;
  /**
   * GMOS Y-Binning, either explicitly specified in explicitYBin or else taken
   * from the defaultYBin.
   */
  yBin: GmosYBinning;
};

/** Edit or create GMOS South Long Slit advanced configuration */
export type GmosSouthLongSlitInput = {
  /** The centralWavelength field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  centralWavelength?: InputMaybe<WavelengthInput>;
  /** The explicitAmpGain field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitAmpGain?: InputMaybe<GmosAmpGain>;
  /** The explicitAmpReadMode field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitAmpReadMode?: InputMaybe<GmosAmpReadMode>;
  /** The explicitRoi field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitRoi?: InputMaybe<GmosRoi>;
  /** The explicitSpatialOffsets field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitSpatialOffsets?: InputMaybe<Array<OffsetComponentInput>>;
  /** The explicitWavelengthDithers field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitWavelengthDithers?: InputMaybe<Array<WavelengthDitherInput>>;
  /** The explicitXBin field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitXBin?: InputMaybe<GmosXBinning>;
  /** The explicitYBin field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitYBin?: InputMaybe<GmosYBinning>;
  /** The filter field may be unset by assigning a null value, or ignored by skipping it altogether */
  filter?: InputMaybe<GmosSouthFilter>;
  /** The fpu field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  fpu?: InputMaybe<GmosSouthBuiltinFpu>;
  /** The grating field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  grating?: InputMaybe<GmosSouthGrating>;
};

/** GMOS South stage mode */
export type GmosSouthStageMode =
  /** GmosSouthStageMode FollowXyz */
  | 'FOLLOW_XYZ'
  /** GmosSouthStageMode FollowZ */
  | 'FOLLOW_Z'
  /** GmosSouthStageMode NoFollow */
  | 'NO_FOLLOW';

/** Unchanging (over the course of the sequence) configuration values */
export type GmosSouthStatic = {
  __typename?: 'GmosSouthStatic';
  /** Detector in use (always HAMAMATSU for recent and new observations) */
  detector: GmosSouthDetector;
  /** Is MOS Pre-Imaging Observation */
  mosPreImaging: MosPreImaging;
  /** Nod-and-shuffle configuration */
  nodAndShuffle?: Maybe<GmosNodAndShuffle>;
  /** Stage mode */
  stageMode: GmosSouthStageMode;
};

/** GMOS South static configuration input parameters */
export type GmosSouthStaticInput = {
  /** GMOS South Detector option (defaults to HAMAMATSU) */
  detector?: InputMaybe<GmosSouthDetector>;
  /** Whether this is a MOS pre-imaging observation (defaults to IS_NOT_MOS_PRE_IMAGING) */
  mosPreImaging?: InputMaybe<MosPreImaging>;
  /** GMOS Nod And Shuffle configuration */
  nodAndShuffle?: InputMaybe<GmosNodAndShuffleInput>;
  /** GMOS South Stage Mode (defaults to FOLLOW_XYZ) */
  stageMode?: InputMaybe<GmosSouthStageMode>;
};

/** GmosSouth step with potential breakpoint */
export type GmosSouthStep = {
  __typename?: 'GmosSouthStep';
  /** Whether to pause before the execution of this step */
  breakpoint: Breakpoint;
  /** Time estimate for this step's execution */
  estimate: StepEstimate;
  /** Step id */
  id: Scalars['StepId']['output'];
  /** Instrument configuration for this step */
  instrumentConfig: GmosSouthDynamic;
  /** Observe class for this step */
  observeClass: ObserveClass;
  /** The sequence step itself */
  stepConfig: StepConfig;
  /** The telescope configuration at this step. */
  telescopeConfig: TelescopeConfig;
};

/** GMOS X Binning */
export type GmosXBinning =
  /** GmosXBinning Four */
  | 'FOUR'
  /** GmosXBinning One */
  | 'ONE'
  /** GmosXBinning Two */
  | 'TWO';

/** GMOS Y Binning */
export type GmosYBinning =
  /** GmosYBinning Four */
  | 'FOUR'
  /** GmosYBinning One */
  | 'ONE'
  /** GmosYBinning Two */
  | 'TWO';

/** Gemini Observatory Archive properties for a particular program. */
export type GoaProperties = {
  __typename?: 'GoaProperties';
  /**
   * Whether the header (as well as the data itself) should remain private.  This
   * property is applicable to science programs and defaults to false.
   */
  privateHeader: Scalars['Boolean']['output'];
  /**
   * How many months to withhold public access to the data.  This property is
   * applicable to science programs, defaults to the proprietary period associated
   * with the Call for Proposals if any; 0 months otherwise.
   */
  proprietaryMonths: Scalars['NonNegInt']['output'];
  /**
   * Whether the PI wishes to be notified when new data are received. This property
   * is applicable to science programs and defaults to true.
   */
  shouldNotify: Scalars['Boolean']['output'];
};

/**
 * Gemini Observatory Archive properties creation and editing input for a
 * particular program.
 */
export type GoaPropertiesInput = {
  /**
   * Whether the header (as well as the data itself) should remain private.  This
   * property is applicable to science programs and defaults to false.
   */
  privateHeader?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * How many months to withhold public access to the data.  This property is
   * applicable to science programs, defaults to the proprietary period associated
   * with the Call for Proposals if any; 0 months otherwise.
   */
  proprietaryMonths?: InputMaybe<Scalars['NonNegInt']['input']>;
  /**
   * Whether the PI wishes to be notified when new data are received. This property
   * is applicable to science programs and defaults to true.
   */
  shouldNotify?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A group of observations and other groups. */
export type Group = {
  __typename?: 'Group';
  /** Optionally, a description. */
  description?: Maybe<Scalars['NonEmptyString']['output']>;
  /** Contained elements */
  elements: Array<GroupElement>;
  existence: Existence;
  id: Scalars['GroupId']['output'];
  maximumInterval?: Maybe<TimeSpan>;
  /** Is there a minimum required and/or maximum allowed timespan between observations? */
  minimumInterval?: Maybe<TimeSpan>;
  /** How many do we need to complete? If this is null then it means we have to complete them all */
  minimumRequired?: Maybe<Scalars['NonNegShort']['output']>;
  /** Optionally, a name */
  name?: Maybe<Scalars['NonEmptyString']['output']>;
  /** Do they need to be completed in order? */
  ordered: Scalars['Boolean']['output'];
  /** Id of this group's parent, or null if this group is at the top level. */
  parentId?: Maybe<Scalars['GroupId']['output']>;
  /** Position of this group in its parent group (or at the top level). */
  parentIndex: Scalars['NonNegShort']['output'];
  /** The program in which this group is found. */
  program: Program;
  system: Scalars['Boolean']['output'];
  /**
   * Prepared time by band ignoring `minimumRequired`, for observations that can be
   * calculated.  In order for an observation to have an estimate, it must be
   * fully defined such that a sequence can be generated for it.  All defined
   * observations in every band present in the group are included.
   */
  timeEstimateBanded: Array<BandedTime>;
  /**
   * Remaining execution time estimate range, assuming it can be calculated.  In
   * order for an observation to have an estimate, it must be fully defined such
   * that a sequence can be generated for it.  If a group has observations that
   * are required and which are not fully defined, the remaining time estimate
   * cannot be calculated.
   */
  timeEstimateRange?: Maybe<CategorizedTimeRange>;
};


/** A group of observations and other groups. */
export type GroupElementsArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};

/** Event sent when a group is created or updated */
export type GroupEdit = {
  __typename?: 'GroupEdit';
  /** Type of edit */
  editType: EditType;
  /** @deprecated id is no longer computed; a constant value is returned */
  id: Scalars['Long']['output'];
  /** Assocated program */
  program: Program;
  /** Edited group, or null if it's the top-level group. */
  value?: Maybe<Group>;
};

export type GroupEditInput = {
  /** Group ID, or Null to watch top-level group(s), or omit to watch all groups. */
  groupId?: InputMaybe<Scalars['GroupId']['input']>;
  /** Program ID */
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
};

/** Groups contain observations and other groups. Exactly one will be defined. */
export type GroupElement = {
  __typename?: 'GroupElement';
  existence: Existence;
  group?: Maybe<Group>;
  observation?: Maybe<Observation>;
  parentGroupId?: Maybe<Scalars['GroupId']['output']>;
  parentIndex: Scalars['NonNegShort']['output'];
};

/** A group element identifier. Exactly one of groupId and observationId must be provided. */
export type GroupElementInput = {
  groupId?: InputMaybe<Scalars['GroupId']['input']>;
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
};

export type GroupPropertiesInput = {
  /** Group description (optional). */
  description?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Existence. Defaults to 'present' on creation. Change this value to delete a group (must be empty). */
  existence?: InputMaybe<Existence>;
  /** If specified, elements will be separated by at most `maximumInterval`. */
  maximumInterval?: InputMaybe<TimeSpanInput>;
  /** If specified, elements will be separated by at least `minimumInterval`. */
  minimumInterval?: InputMaybe<TimeSpanInput>;
  /** Minimum number of elements to be observed. If unspecified then all elements will be observed. */
  minimumRequired?: InputMaybe<Scalars['NonNegShort']['input']>;
  /** Group name (optional). */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** If true, elements will be observed in order. Defaults to false if left unspecified. */
  ordered?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent group (optional). If specified then parent index must also be specified. */
  parentGroup?: InputMaybe<Scalars['GroupId']['input']>;
  /** Parent index. If unspecified then the element will appear first in the program or parent group (if specified). Cannot be set to null. */
  parentGroupIndex?: InputMaybe<Scalars['NonNegShort']['input']>;
};

/**
 * A period of time showing which position angles have guide stars available during the period.
 * The position angles are tested every 10 degrees.
 */
export type GuideAvailabilityPeriod = {
  __typename?: 'GuideAvailabilityPeriod';
  /** Then end time of the availability period. */
  end: Scalars['Timestamp']['output'];
  /** The position angles available during this period. */
  posAngles: Array<Angle>;
  /** The start time of the availability period. */
  start: Scalars['Timestamp']['output'];
};

/** The guide star(s) and related information */
export type GuideEnvironment = {
  __typename?: 'GuideEnvironment';
  /** A list of GuideProbeTargets, which essentially provides a mapping from guide probes to targets. */
  guideTargets: Array<GuideTarget>;
  /** The position angle */
  posAngle: Angle;
};

/** Enumeration for Guide Probes */
export type GuideProbe =
  | 'GMOS_OIWFS'
  | 'PWFS_1'
  | 'PWFS_2';

/** Whether guiding is enabled for a particular science step. */
export type GuideState =
  /** Guiding disabled. */
  | 'DISABLED'
  /** Guiding enabled. */
  | 'ENABLED';

/** Type that contains a guide probe and guide target information for use in the GuideEnvironment */
export type GuideTarget = {
  __typename?: 'GuideTarget';
  /** Target name. */
  name: Scalars['NonEmptyString']['output'];
  /** Nonsidereal tracking information, if this is a nonsidereal target */
  nonsidereal?: Maybe<Nonsidereal>;
  /** The guide probe */
  probe: GuideProbe;
  /** Sidereal tracking information, if this is a sidereal target */
  sidereal?: Maybe<Sidereal>;
  /** source profile */
  sourceProfile: SourceProfile;
};

/**
 * A `PartnerLink` employed when a user is explicitly associated with
 * no `Partner`.
 */
export type HasNonPartner = PartnerLink & {
  __typename?: 'HasNonPartner';
  /** Always `HAS_NON_PARTNER */
  linkType: PartnerLinkType;
};

/**
 * A `PartnerLink` employed when a user is associated with a specific
 * `Partner`.
 */
export type HasPartner = PartnerLink & {
  __typename?: 'HasPartner';
  /** Always `HAS_PARTNER` */
  linkType: PartnerLinkType;
  /** The associated partner. */
  partner: Partner;
};

/**
 * A `PartnerLink` employed when a user's `PartnerLink` has not
 * (yet) been made.
 */
export type HasUnspecifiedPartner = PartnerLink & {
  __typename?: 'HasUnspecifiedPartner';
  /** Always `HAS_UNSPECIFIED_PARTNER` */
  linkType: PartnerLinkType;
};

/** HII Region spectrum */
export type HiiRegionSpectrum =
  /** HiiRegionSpectrum OrionNebula */
  | 'ORION_NEBULA';

export type HourAngleRange = {
  __typename?: 'HourAngleRange';
  /** Maximum Hour Angle (hours) */
  maxHours: Scalars['BigDecimal']['output'];
  /** Minimum Hour Angle (hours) */
  minHours: Scalars['BigDecimal']['output'];
};

/** Hour angle range creation parameters */
export type HourAngleRangeInput = {
  maxHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  minHours?: InputMaybe<Scalars['BigDecimal']['input']>;
};

/**
 * The GraphQL specification requires that types and inputs have fields, even when
 * there is no useful data to include.  This enumeration provides a placeholder
 * value for an ignored field to satisfy the specification.
 */
export type Ignore =
  | 'IGNORE';

/** Image quality */
export type ImageQualityPreset =
  /** ImageQualityPreset OnePointFive */
  | 'ONE_POINT_FIVE'
  /** ImageQualityPreset OnePointZero */
  | 'ONE_POINT_ZERO'
  /** ImageQualityPreset PointEight */
  | 'POINT_EIGHT'
  /** ImageQualityPreset PointFour */
  | 'POINT_FOUR'
  /** ImageQualityPreset PointOne */
  | 'POINT_ONE'
  /** ImageQualityPreset PointSix */
  | 'POINT_SIX'
  /** ImageQualityPreset PointThree */
  | 'POINT_THREE'
  /** ImageQualityPreset PointTwo */
  | 'POINT_TWO'
  /** ImageQualityPreset TwoPointZero */
  | 'TWO_POINT_ZERO';

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
  /** Instrument Niri */
  | 'NIRI'
  /** Instrument Scorpio */
  | 'SCORPIO'
  /** Instrument Visitor */
  | 'VISITOR'
  /** Instrument Zorro */
  | 'ZORRO';

export type Itc = {
  __typename?: 'Itc';
  /** The ITC result for the acquisition part of the sequence */
  acquisition: ItcResultSet;
  /** The ITC result for the science part of the sequence */
  science: ItcResultSet;
};

/** A single ITC call result. */
export type ItcResult = {
  __typename?: 'ItcResult';
  exposureCount: Scalars['NonNegInt']['output'];
  exposureTime: TimeSpan;
  signalToNoiseAt?: Maybe<SignalToNoiseAt>;
  targetId: Scalars['TargetId']['output'];
};

/**
 * Contains the result of calling the ITC for a particular observation.  Since
 * the observation may contain multiple targets, there may be multiple results.
 * The "result" field contains the selected, representative, result for all
 * targets.  If there are multiple successful results, this will be the one that
 * prescribes the longest observation. If there is a mix of failures and
 * successes, the overall "result" will be a failure. The "all" field contains
 * results for all targets regardless.
 */
export type ItcResultSet = {
  __typename?: 'ItcResultSet';
  all?: Maybe<Array<ItcResult>>;
  index: Scalars['NonNegInt']['output'];
  selected: ItcResult;
};

/** Proposal properties for Large Program CallForProposals. */
export type LargeProgram = ProposalType & {
  __typename?: 'LargeProgram';
  /**
   * Minimum percentage of observing time (first semester) required to consider this
   * proposal successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /**
   * Minimum percentage of the total observing time (over all semesters) required
   * to consider this proposal successful.
   */
  minPercentTotalTime: Scalars['IntPercent']['output'];
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
  /**
   * Whether (and how) the observations in this proposal are available for Target
   * of Opportunity triggering.
   */
  toOActivation: ToOActivation;
  /** Total time requested (over multiple all semesters) for this proposal. */
  totalTime: TimeSpan;
};

export type LargeProgramInput = {
  /**
   * The minimum percentage of time required (first semester) to consider this
   * proposal a success. If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The minimum percentage of time required over the lifetime of the program to
   * consider this proposal a success.  If not set, 100% is assumed.
   */
  minPercentTotalTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The toOActivation field is optional. If not specified when creating a
   * proposal, it defaults to `NONE'.
   */
  toOActivation?: InputMaybe<ToOActivation>;
  /**
   * The total time requested over the lifetime of the program.  If not set, zero
   * hours are assumed.
   */
  totalTime?: InputMaybe<TimeSpanInput>;
};

export type LibraryProgramReference = ProgramReference & {
  __typename?: 'LibraryProgramReference';
  description: Scalars['NonEmptyString']['output'];
  instrument: Instrument;
  label: Scalars['ProgramReferenceLabel']['output'];
  type: ProgramType;
};

export type LineFluxIntegrated = {
  __typename?: 'LineFluxIntegrated';
  units: LineFluxIntegratedUnits;
  value: Scalars['PosBigDecimal']['output'];
};

/** A line flux value with integrated units */
export type LineFluxIntegratedInput = {
  units: LineFluxIntegratedUnits;
  value: Scalars['PosBigDecimal']['input'];
};

/** Line flux integrated units */
export type LineFluxIntegratedUnits =
  /** erg/s/cm² */
  | 'ERG_PER_S_PER_CM_SQUARED'
  /** W/m² */
  | 'W_PER_M_SQUARED';

export type LineFluxSurface = {
  __typename?: 'LineFluxSurface';
  units: LineFluxSurfaceUnits;
  value: Scalars['PosBigDecimal']['output'];
};

/** A line flux value with surface units */
export type LineFluxSurfaceInput = {
  units: LineFluxSurfaceUnits;
  value: Scalars['PosBigDecimal']['input'];
};

/** Line flux surface units */
export type LineFluxSurfaceUnits =
  /** erg/s/cm²/arcsec² */
  | 'ERG_PER_S_PER_CM_SQUARED_PER_ARCSEC_SQUARED'
  /** W/m²/arcsec² */
  | 'W_PER_M_SQUARED_PER_ARCSEC_SQUARED';

/**
 * Links a 'User' with a 'Program', filling in the 'user' field of the
 * corresponding 'ProgramUser'.
 */
export type LinkUserInput = {
  /** The program user that will reference the user. */
  programUserId: Scalars['ProgramUserId']['input'];
  /** The user to be linked. */
  userId: Scalars['UserId']['input'];
};

export type LinkUserResult = {
  __typename?: 'LinkUserResult';
  user: ProgramUser;
};

export type MonitoringProgramReference = ProgramReference & {
  __typename?: 'MonitoringProgramReference';
  instrument: Instrument;
  label: Scalars['ProgramReferenceLabel']['output'];
  semester: Scalars['Semester']['output'];
  semesterIndex: Scalars['PosInt']['output'];
  type: ProgramType;
};

/** MOS pre-imaging observation */
export type MosPreImaging =
  /** MosPreImaging IsMosPreImaging */
  | 'IS_MOS_PRE_IMAGING'
  /** MosPreImaging IsNotMosPreImaging */
  | 'IS_NOT_MOS_PRE_IMAGING';

export type Mutation = {
  __typename?: 'Mutation';
  /** Adds a new atom event. */
  addAtomEvent: AddAtomEventResult;
  /**
   * Logs  observing conditions to the Chronicle. This operation is permitted only for staff and
   * service users.
   */
  addConditionsEntry: AddConditionsEntryResult;
  /**
   * Adds a new dataset event associated with the given visit.  The
   * generation of a single dataset will produce multiple events as it
   * transitions through the observe, readout and write stages.
   */
  addDatasetEvent: AddDatasetEventResult;
  /**
   * Creates a 'ProgramUser' without a link to any existing 'User'.  No invitation
   * is sent as a result of this operation, but an invitation may be subsequently
   * sent and when accepted the 'User' field will become available and the 'User'
   * will gain appropriate access to the program.
   */
  addProgramUser: AddProgramUserResult;
  /**
   * Adds a sequence event associated with the given visit. Multiple events
   * will be produced during the execution of a sequence as it is started,
   * paused, continued, etc.
   */
  addSequenceEvent: AddSequenceEventResult;
  /** Adds a new slew event associated with the given visit. */
  addSlewEvent: AddSlewEventResult;
  /**
   * Adds a new step event associated with the given step. Multiple events
   * will be produced during the execution of a single step as it
   * transitions through configure and observe stages.
   */
  addStepEvent: AddStepEventResult;
  /**
   * Adds a new time accounting correction for a particular observation.  Note
   * that time accounting corrections are additive and cannot be adjusted or
   * deleted except via a future correction.  For example, to undo the impact
   * of an 'Add' operation, a new 'Subtract' operation of the same amount can
   * be introduced.
   */
  addTimeChargeCorrection: AddTimeChargeCorrectionResult;
  /** Update the role of a program user. */
  changeProgramUserRole: ChangeProgramUserRoleResult;
  /** Copy this group and its contents, recursively, as a sibling of itself. */
  cloneGroup: CloneGroupResult;
  cloneObservation: CloneObservationResult;
  /** Makes a copy of an existing target, setting it to unobserved and to PRESENT.  If `REPLACE_IN` observationIds are specified in the input, the clone will replace the existing target in those observations */
  cloneTarget: CloneTargetResult;
  /** Creates a Call for Proposals.  Requires staff access. */
  createCallForProposals: CreateCallForProposalsResult;
  /** Create a configuration request. */
  createConfigurationRequest: ConfigurationRequest;
  /** Creates a new observation according to provided parameters. */
  createGroup: CreateGroupResult;
  /** Creates a new observation according to provided parameters */
  createObservation: CreateObservationResult;
  /** Creates a new program according to provided properties */
  createProgram: CreateProgramResult;
  /** Creates a new program note according to provided parameters */
  createProgramNote: CreateProgramNoteResult;
  /** Creates a new proposal according to the provided properties */
  createProposal?: Maybe<CreateProposalResult>;
  /** Creates a new target according to the provided parameters.  Only one of sidereal or nonsidereal may be specified. */
  createTarget: CreateTargetResult;
  /** Create a user invitation. */
  createUserInvitation: CreateUserInvitationResult;
  /** Deletes a 'ProgramUser'. */
  deleteProgramUser: DeleteProgramUserResult;
  /** Deletes the given program's proposal, if any. */
  deleteProposal: DeleteProposalResult;
  /**
   * Ties a specific user to an existing ProgramUser, which must not already be
   * associated with any user.
   */
  linkUser: LinkUserResult;
  /** Record a new atom */
  recordAtom: RecordAtomResult;
  /** Records a new dataset.  This dataset may be subsequently referenced by dataset events. */
  recordDataset: RecordDatasetResult;
  /** Record a new GMOS North step */
  recordGmosNorthStep: RecordGmosNorthStepResult;
  /** Record a new GMOS North visit */
  recordGmosNorthVisit: RecordGmosNorthVisitResult;
  /** Record a new GMOS South step */
  recordGmosSouthStep: RecordGmosSouthStepResult;
  /** Record a new GMOS South visit */
  recordGmosSouthVisit: RecordGmosSouthVisitResult;
  /** Redeem a user invitation. */
  redeemUserInvitation: RedeemUserInvitationResult;
  /**
   * Resets the acquisition sequence to start from the initial step regardless of
   * which acquisition steps may have been executed.  Requires staff (or better)
   * access.
   */
  resetAcquisition: ResetAcquisitionResult;
  /** Revoke a user invitation. */
  revokeUserInvitation: RevokeUserInvitationResult;
  /** Set the allocations for a program. */
  setAllocations: SetAllocationsResult;
  /** Set the name of the guide target for an observation. */
  setGuideTargetName: SetGuideTargetNameResult;
  /**
   * Sets the workflow state for the specified observation. The transition must be valid
   * according to the current workflow. Returns the updated workflow.
   */
  setObservationWorkflowState?: Maybe<ObservationWorkflow>;
  /** Set the program reference. */
  setProgramReference: SetProgramReferenceResult;
  /** Set the proposal status. */
  setProposalStatus: SetProposalStatusResult;
  /** Unlink a user from a program. */
  unlinkUser: UnlinkUserResult;
  /**
   * Update asterisms, adding or deleting targets, in (potentially) multiple
   * observations at once.
   */
  updateAsterisms: UpdateAsterismsResult;
  updateAttachments: UpdateAttachmentsResult;
  /** Update existing calls for proposals. */
  updateCallsForProposals: UpdateCallsForProposalsResult;
  /** Update existing configuration requests. */
  updateConfigurationRequests: UpdateConfigurationRequestsResult;
  updateDatasets: UpdateDatasetsResult;
  updateGroups: UpdateGroupsResult;
  /** Updates existing observations */
  updateObservations: UpdateObservationsResult;
  /** Updates existing observations times (execution and duration) */
  updateObservationsTimes: UpdateObservationsResult;
  /** Updates existing program notes. */
  updateProgramNotes: UpdateProgramNotesResult;
  /** Updates existing program users. */
  updateProgramUsers: UpdateProgramUsersResult;
  /** Updates existing programs. */
  updatePrograms: UpdateProgramsResult;
  /** Updates an existing proposal. */
  updateProposal: UpdateProposalResult;
  /** Updates existing targets */
  updateTargets: UpdateTargetsResult;
};


export type MutationAddAtomEventArgs = {
  input: AddAtomEventInput;
};


export type MutationAddConditionsEntryArgs = {
  input?: InputMaybe<ConditionsEntryInput>;
};


export type MutationAddDatasetEventArgs = {
  input: AddDatasetEventInput;
};


export type MutationAddProgramUserArgs = {
  input: AddProgramUserInput;
};


export type MutationAddSequenceEventArgs = {
  input: AddSequenceEventInput;
};


export type MutationAddSlewEventArgs = {
  input: AddSlewEventInput;
};


export type MutationAddStepEventArgs = {
  input: AddStepEventInput;
};


export type MutationAddTimeChargeCorrectionArgs = {
  input: AddTimeChargeCorrectionInput;
};


export type MutationChangeProgramUserRoleArgs = {
  input: ChangeProgramUserRoleInput;
};


export type MutationCloneGroupArgs = {
  input: CloneGroupInput;
};


export type MutationCloneObservationArgs = {
  input: CloneObservationInput;
};


export type MutationCloneTargetArgs = {
  input: CloneTargetInput;
};


export type MutationCreateCallForProposalsArgs = {
  input: CreateCallForProposalsInput;
};


export type MutationCreateConfigurationRequestArgs = {
  input: CreateConfigurationRequestInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateObservationArgs = {
  input: CreateObservationInput;
};


export type MutationCreateProgramArgs = {
  input: CreateProgramInput;
};


export type MutationCreateProgramNoteArgs = {
  input: CreateProgramNoteInput;
};


export type MutationCreateProposalArgs = {
  input: CreateProposalInput;
};


export type MutationCreateTargetArgs = {
  input: CreateTargetInput;
};


export type MutationCreateUserInvitationArgs = {
  input: CreateUserInvitationInput;
};


export type MutationDeleteProgramUserArgs = {
  input: DeleteProgramUserInput;
};


export type MutationDeleteProposalArgs = {
  input: DeleteProposalInput;
};


export type MutationLinkUserArgs = {
  input: LinkUserInput;
};


export type MutationRecordAtomArgs = {
  input: RecordAtomInput;
};


export type MutationRecordDatasetArgs = {
  input: RecordDatasetInput;
};


export type MutationRecordGmosNorthStepArgs = {
  input: RecordGmosNorthStepInput;
};


export type MutationRecordGmosNorthVisitArgs = {
  input: RecordGmosNorthVisitInput;
};


export type MutationRecordGmosSouthStepArgs = {
  input: RecordGmosSouthStepInput;
};


export type MutationRecordGmosSouthVisitArgs = {
  input: RecordGmosSouthVisitInput;
};


export type MutationRedeemUserInvitationArgs = {
  input: RedeemUserInvitationInput;
};


export type MutationResetAcquisitionArgs = {
  input: ResetAcquisitionInput;
};


export type MutationRevokeUserInvitationArgs = {
  input: RevokeUserInvitationInput;
};


export type MutationSetAllocationsArgs = {
  input: SetAllocationsInput;
};


export type MutationSetGuideTargetNameArgs = {
  input: SetGuideTargetNameInput;
};


export type MutationSetObservationWorkflowStateArgs = {
  input: SetObservationWorkflowStateInput;
};


export type MutationSetProgramReferenceArgs = {
  input: SetProgramReferenceInput;
};


export type MutationSetProposalStatusArgs = {
  input: SetProposalStatusInput;
};


export type MutationUnlinkUserArgs = {
  input: UnlinkUserInput;
};


export type MutationUpdateAsterismsArgs = {
  input: UpdateAsterismsInput;
};


export type MutationUpdateAttachmentsArgs = {
  input: UpdateAttachmentsInput;
};


export type MutationUpdateCallsForProposalsArgs = {
  input: UpdateCallsForProposalsInput;
};


export type MutationUpdateConfigurationRequestsArgs = {
  input: UpdateConfigurationRequestsInput;
};


export type MutationUpdateDatasetsArgs = {
  input: UpdateDatasetsInput;
};


export type MutationUpdateGroupsArgs = {
  input: UpdateGroupsInput;
};


export type MutationUpdateObservationsArgs = {
  input: UpdateObservationsInput;
};


export type MutationUpdateObservationsTimesArgs = {
  input: UpdateObservationsTimesInput;
};


export type MutationUpdateProgramNotesArgs = {
  input: UpdateProgramNotesInput;
};


export type MutationUpdateProgramUsersArgs = {
  input: UpdateProgramUsersInput;
};


export type MutationUpdateProgramsArgs = {
  input: UpdateProgramsInput;
};


export type MutationUpdateProposalArgs = {
  input: UpdateProposalInput;
};


export type MutationUpdateTargetsArgs = {
  input: UpdateTargetsInput;
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

/** Observation operational/active status options */
export type ObsActiveStatus =
  /** ObsActiveStatus Active */
  | 'ACTIVE'
  /** ObsActiveStatus Inactive */
  | 'INACTIVE';

/** Observation status options */
export type ObsStatus =
  /** ObsStatus Approved */
  | 'APPROVED'
  /** ObsStatus ForReview */
  | 'FOR_REVIEW'
  /** ObsStatus Included */
  | 'INCLUDED'
  /** ObsStatus New */
  | 'NEW'
  /** ObsStatus Observed */
  | 'OBSERVED'
  /** ObsStatus Ongoing */
  | 'ONGOING'
  /** ObsStatus Proposed */
  | 'PROPOSED'
  /** ObsStatus Ready */
  | 'READY';

export type Observation = {
  __typename?: 'Observation';
  /** attachments */
  attachments: Array<Attachment>;
  /** The Calibration role of this observation */
  calibrationRole?: Maybe<CalibrationRole>;
  /** Parameters relevant to approved configurations. */
  configuration: Configuration;
  /** Program configuration requests applicable to this observation. */
  configurationRequests: Array<ConfigurationRequest>;
  /** The constraint set for the observation */
  constraintSet: ConstraintSet;
  /** Execution sequence and runtime artifacts */
  execution: Execution;
  /** DELETED or PRESENT */
  existence: Existence;
  /** Enclosing group, if any. */
  groupId?: Maybe<Scalars['GroupId']['output']>;
  /** Index in enclosing group or at the top level if ungrouped. If left unspecified on creation, observation will be added last in its enclosing group or at the top level. Cannot be set to null. */
  groupIndex: Scalars['NonNegShort']['output'];
  /** Observation ID */
  id: Scalars['ObservationId']['output'];
  /** Observation index, relative to other observations in the same program. */
  index: Scalars['PosInt']['output'];
  /** The instrument in use for this observation, if the observing mode is set. */
  instrument?: Maybe<Instrument>;
  /**
   * The ITC result for this observation, assuming it has associated target(s)
   * and a selected observing mode.
   */
  itc: Itc;
  /**
   * Used in conjunction with observationTime for time-dependentent calulations. If not
   * set, the remaining observation execution time will be used.
   */
  observationDuration?: Maybe<TimeSpan>;
  /**
   * Reference time used for execution and visualization and time-dependent calculations
   * (e.g., average parallactic angle and guide star selection)
   */
  observationTime?: Maybe<Scalars['Timestamp']['output']>;
  /** Notes for the observer */
  observerNotes?: Maybe<Scalars['NonEmptyString']['output']>;
  /** The science configuration */
  observingMode?: Maybe<ObservingMode>;
  /** Position angle constraint, if any. */
  posAngleConstraint: PosAngleConstraint;
  /** The program that contains this observation */
  program: Program;
  /**
   * Observation reference, if any (requires the existence of a reference for the
   * program itself).
   */
  reference?: Maybe<ObservationReference>;
  /**
   * Observations are associated with a science band once time has been allocated
   * to a program.
   */
  scienceBand?: Maybe<ScienceBand>;
  /** The top level science requirements */
  scienceRequirements: ScienceRequirements;
  /** User-supplied observation-identifying detail information */
  subtitle?: Maybe<Scalars['NonEmptyString']['output']>;
  /** The observation's target(s) */
  targetEnvironment: TargetEnvironment;
  /** Observation timing windows */
  timingWindows: Array<TimingWindow>;
  /** Observation title generated from id and targets */
  title: Scalars['NonEmptyString']['output'];
  workflow: ObservationWorkflow;
};

/** Event sent when a new object is created or updated */
export type ObservationEdit = {
  __typename?: 'ObservationEdit';
  /** Type of edit */
  editType: EditType;
  /** The observationId of the edited object */
  observationId: Scalars['ObservationId']['output'];
  /** Edited object, can be null if the value was deleted */
  value?: Maybe<Observation>;
};

export type ObservationEditInput = {
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
};

/** Observation properties */
export type ObservationPropertiesInput = {
  /** The attachments defaults to empty if not specified on creation, and may be edited by specifying a new whole array */
  attachments?: InputMaybe<Array<Scalars['AttachmentId']['input']>>;
  /** The constraintSet defaults to standard values if not specified on creation, and may be edited but not deleted */
  constraintSet?: InputMaybe<ConstraintSetInput>;
  /** Whether the observation is considered deleted (defaults to PRESENT) but may be edited */
  existence?: InputMaybe<Existence>;
  /** Enclosing group, if any. */
  groupId?: InputMaybe<Scalars['GroupId']['input']>;
  /** Index in enclosing group or at the top level if ungrouped. If left unspecified on creation, observation will be added last in its enclosing group or at the top level. Cannot be set to null. */
  groupIndex?: InputMaybe<Scalars['NonNegShort']['input']>;
  /** Set the notes for  thhe observer */
  observerNotes?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The observingMode describes the chosen observing mode and instrument, is optional and may be deleted */
  observingMode?: InputMaybe<ObservingModeInput>;
  /** Position angle constraint, if any. Set to null to remove all position angle constraints */
  posAngleConstraint?: InputMaybe<PosAngleConstraintInput>;
  /**
   * The science band to assign to this observation.  Set to `null` to remove the
   * science band.
   */
  scienceBand?: InputMaybe<ScienceBand>;
  /** The scienceRequirements defaults to spectroscopy if not specified on creation, and may be edited but not deleted */
  scienceRequirements?: InputMaybe<ScienceRequirementsInput>;
  /** Subtitle adds additional detail to the target-based observation title, and is both optional and nullable */
  subtitle?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The targetEnvironment defaults to empty if not specified on creation, and may be edited but not deleted */
  targetEnvironment?: InputMaybe<TargetEnvironmentInput>;
  /** The timingWindows defaults to empty if not specified on creation, and may be edited by specifying a new whole array */
  timingWindows?: InputMaybe<Array<TimingWindowInput>>;
};

/**
 * Observation reference type, broken into its constituient parts and including
 * a formatted label.
 */
export type ObservationReference = {
  __typename?: 'ObservationReference';
  /** The observation index relative to its program. */
  index: Scalars['PosInt']['output'];
  /** Formatted observation reference label. */
  label: Scalars['ObservationReferenceLabel']['output'];
  /** The program reference. */
  program: ProgramReference;
};

/** The matching observation results, limited to a maximum of 1000 entries. */
export type ObservationSelectResult = {
  __typename?: 'ObservationSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching observations up to the return size limit of 1000 */
  matches: Array<Observation>;
};

/** Observation times properties */
export type ObservationTimesInput = {
  /** Expected observation duration used in conjunction with observationTime. If not set, remaining observation time is used. */
  observationDuration?: InputMaybe<TimeSpanInput>;
  /** Expected execution time used for time-dependent calculations such as average parallactic angle and guide star selection. */
  observationTime?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** An observation validation problem */
export type ObservationValidation = {
  __typename?: 'ObservationValidation';
  /** The type of validation problem */
  code: ObservationValidationCode;
  /** Particular errors for this validation type */
  messages: Array<Scalars['String']['output']>;
};

/** Types of observation validations */
export type ObservationValidationCode =
  /** The observation does not meet the requirements of the Call for Proposals */
  | 'CFP_ERROR'
  /** The observation is not configured correctly and cannot be executed */
  | 'CONFIGURATION_ERROR'
  | 'CONFIG_REQUEST_DENIED'
  | 'CONFIG_REQUEST_NOT_REQUESTED'
  | 'CONFIG_REQUEST_PENDING'
  | 'CONFIG_REQUEST_UNAVAILABLE'
  /** The observation does not have valid ITC results. */
  | 'ITC_ERROR';

export type ObservationWorkflow = {
  __typename?: 'ObservationWorkflow';
  state: ObservationWorkflowState;
  validTransitions: Array<ObservationWorkflowState>;
  validationErrors: Array<ObservationValidation>;
};

export type ObservationWorkflowState =
  | 'COMPLETED'
  | 'DEFINED'
  | 'INACTIVE'
  | 'ONGOING'
  | 'READY'
  | 'UNAPPROVED'
  | 'UNDEFINED';

/**
 * Each step in a sequence is tagged with an observe class which identifies its
 * purpose and who is ultimately charged for the time for that observe.
 */
export type ObserveClass =
  /** Acquisition, charged to the program. */
  | 'ACQUISITION'
  /** Daytime calibration, charged to the observatory. */
  | 'DAY_CAL'
  /** Nighttime calibration, charged to the program. */
  | 'NIGHT_CAL'
  /** Science dataset, charged to the program. */
  | 'SCIENCE';

/** Base science mode */
export type ObservingMode = {
  __typename?: 'ObservingMode';
  /** Flamingos 2 Long Slit mode */
  flamingos2LongSlit?: Maybe<Flamingos2LongSlit>;
  /** GMOS North Long Slit mode */
  gmosNorthLongSlit?: Maybe<GmosNorthLongSlit>;
  /** GMOS South Long Slit mode */
  gmosSouthLongSlit?: Maybe<GmosSouthLongSlit>;
  /** Instrument */
  instrument: Instrument;
  /** Mode type */
  mode: ObservingModeType;
};

export type ObservingModeGroup = {
  __typename?: 'ObservingModeGroup';
  /** Observations associated with the common value */
  observations: ObservationSelectResult;
  /** Commonly held value across the observations */
  observingMode: ObservingMode;
  /** Link back to program. */
  program: Program;
};


export type ObservingModeGroupObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** The matching ObservingModeGroup results, limited to a maximum of 1000 entries. */
export type ObservingModeGroupSelectResult = {
  __typename?: 'ObservingModeGroupSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching ObservingModeGroups up to the return size limit of 1000 */
  matches: Array<ObservingModeGroup>;
};

/** Edit or create an observation's observing mode */
export type ObservingModeInput = {
  /** The flamingos2LongSlit field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  flamingos2LongSlit?: InputMaybe<Flamingos2LongSlitInput>;
  /** The gmosNorthLongSlit field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  gmosNorthLongSlit?: InputMaybe<GmosNorthLongSlitInput>;
  /** The gmosSouthLongSlit field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  gmosSouthLongSlit?: InputMaybe<GmosSouthLongSlitInput>;
};

/** ObservingMode */
export type ObservingModeType =
  /** ObservingModeType Flamingos2LongSlit */
  | 'FLAMINGOS_2LONG_SLIT'
  /** ObservingModeType GmosNorthLongSlit */
  | 'GMOS_NORTH_LONG_SLIT'
  /** ObservingModeType GmosSouthLongSlit */
  | 'GMOS_SOUTH_LONG_SLIT';

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

/** Gemini Partners */
export type Partner =
  /** Argentina */
  | 'AR'
  /** Brazil */
  | 'BR'
  /** Canada */
  | 'CA'
  /** Chile */
  | 'CL'
  /** Korea */
  | 'KR'
  /** University of Hawaii */
  | 'UH'
  /** United States */
  | 'US';

/** Represents the association of a user with a `Partner`, if any. */
export type PartnerLink = {
  /** Partner link discriminator. */
  linkType: PartnerLinkType;
};

/**
 * Describes the user / partner association.  Only one of `partner` or `linkType`
 * should be specified, but as long as they are consistent both may be supplied.
 */
export type PartnerLinkInput = {
  /**
   * Describes the state of the association between a user and a partner. The
   * link type is assumed to be `HAS_PARTNER` if the `partner` is specified.
   * Otherwise, if `partner` is `null`, the link type is required.
   */
  linkType?: InputMaybe<PartnerLinkType>;
  /**
   * If the user should be associated with a particular partner, it is specified
   * here.  Only set `partner` or `linkType`, but not both.
   */
  partner?: InputMaybe<Partner>;
};

/**
 * Partner link options (and `PartnerLink` discriminator). A user / partner
 * relationship is one of (a) the user is associated with a particular partner
 * (i.e., `HAS_PARTNER`), (b) the user is explicitly associated with no partner
 * (i.e., `HAS_NON_PARTNER`), or (c) the link is simply not set.
 */
export type PartnerLinkType =
  | 'HAS_NON_PARTNER'
  | 'HAS_PARTNER'
  | 'HAS_UNSPECIFIED_PARTNER';

/**
 * Partner splits detail how requested time for a Queue or Classical proposal
 * should be distributed amongst Gemini partners.
 */
export type PartnerSplit = {
  __typename?: 'PartnerSplit';
  partner: Partner;
  /** Percentage of requested time that should be associated with the partner. */
  percent: Scalars['IntPercent']['output'];
};

/**
 * Time request percentage that should be associated with a particular partner for
 * Queue and Classical proposals.
 */
export type PartnerSplitInput = {
  partner: Partner;
  /** Percentage of requested time that should be associated with the partner. */
  percent: Scalars['IntPercent']['input'];
};

/** Planet spectrum */
export type PlanetSpectrum =
  /** PlanetSpectrum Jupiter */
  | 'JUPITER'
  /** PlanetSpectrum Mars */
  | 'MARS'
  /** PlanetSpectrum Neptune */
  | 'NEPTUNE'
  /** PlanetSpectrum Saturn */
  | 'SATURN'
  /** PlanetSpectrum Uranus */
  | 'URANUS';

/** Planetary nebula spectrum */
export type PlanetaryNebulaSpectrum =
  /** PlanetaryNebulaSpectrum IC5117 */
  | 'IC5117'
  /** PlanetaryNebulaSpectrum NGC7009 */
  | 'NGC7009';

/** Proposal properties for Regular Semester (Poor Weather) CallForProposals. */
export type PoorWeather = ProposalType & {
  __typename?: 'PoorWeather';
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
};

/**
 * Input for a poor weather proposal.  There are no fields to further specify a
 * poor weather proposal but GraphQL requires at least one field.  Therefore this
 * input includes a single optional 'ignore' field which need not be set.
 */
export type PoorWeatherInput = {
  /**
   * This field is not intended to be used (and may be left unset), but is required
   * by the GraphQL specification.
   */
  ignore?: InputMaybe<Ignore>;
};

/** Constraints (if any) on the observation's position angle. */
export type PosAngleConstraint = {
  __typename?: 'PosAngleConstraint';
  /**
   * The fixed position angle.  This will be kept but ignored for UNBOUNDED and
   * AVERAGE_PARALLACTIC modes.
   */
  angle: Angle;
  /**
   * The position angle constraint mode in use.  The value will determine whether
   * the angle is respected or ignored.
   */
  mode: PosAngleConstraintMode;
};

/**
 * Create or edit position angle constraint.  If not specified, then the
 * position angle required to reach the best guide star option will be used.
 */
export type PosAngleConstraintInput = {
  /**
   * The fixed position angle that is used when the mode is FIXED, ALLOW_FLIP or
   * PARALLACTIC_OVERRIDE.  Set but ignored when UNBOUNDED or AVERAGE_PARALLACTIC.
   */
  angle?: InputMaybe<AngleInput>;
  /**
   * The constraint mode field determines whether the angle field is respected
   * or ignored.
   */
  mode?: InputMaybe<PosAngleConstraintMode>;
};

/** Position angle constraint type */
export type PosAngleConstraintMode =
  /** PosAngleConstraintMode AllowFlip */
  | 'ALLOW_FLIP'
  /** PosAngleConstraintMode AverageParallactic */
  | 'AVERAGE_PARALLACTIC'
  /** PosAngleConstraintMode Fixed */
  | 'FIXED'
  /** PosAngleConstraintMode ParallacticOverride */
  | 'PARALLACTIC_OVERRIDE'
  /** PosAngleConstraintMode Unbounded */
  | 'UNBOUNDED';

export type Program = {
  __typename?: 'Program';
  /**
   * Active period for this program.  Observations must be completed during this
   * time interval. By default, if there is an associated proposal tied to a
   * particular Call for Proposals (CfP), the active period will correspond to the
   * Cfp active period.
   */
  active: DateInterval;
  /** All group elements (observations and sub-groups) in the program. */
  allGroupElements: Array<GroupElement>;
  /** All partner time allocations. */
  allocations: Array<Allocation>;
  /** Attachments assocated with the program */
  attachments: Array<Attachment>;
  /** Calibration role of the program */
  calibrationRole?: Maybe<CalibrationRole>;
  /** All configuration requests associated with the program. */
  configurationRequests: ConfigurationRequestSelectResult;
  /** Program description / abstract. */
  description?: Maybe<Scalars['NonEmptyString']['output']>;
  /** DELETED or PRESENT */
  existence: Existence;
  /** Observatory archive properties related to this program. */
  goa: GoaProperties;
  /** Top-level group elements (observations and sub-groups) in the program. */
  groupElements: Array<GroupElement>;
  /** Program ID */
  id: Scalars['ProgramId']['output'];
  /** Program name / title. */
  name?: Maybe<Scalars['NonEmptyString']['output']>;
  /** Notes associated with the program, if any. */
  notes: Array<ProgramNote>;
  /** All observations associated with the program. */
  observations: ObservationSelectResult;
  /** Principal Investigator */
  pi?: Maybe<ProgramUser>;
  /** Program proposal */
  proposal?: Maybe<Proposal>;
  /** Proposal status of the program */
  proposalStatus: ProposalStatus;
  /** Program reference, if any. */
  reference?: Maybe<ProgramReference>;
  /** Program-wide time charge, summing all corrected observation time charges. */
  timeCharge: Array<BandedTime>;
  /**
   * Prepared time by band ignoring `minimumRequired` in groups, for observations
   * that can be calculated.  In order for an observation to have an estimate, it
   * must be fully defined such that a sequence can be generated for it.  All
   * defined observations in every band present in the program are included.
   */
  timeEstimateBanded: Array<BandedTime>;
  /**
   * Remaining execution time estimate range, assuming it can be calculated.  In
   * order for an observation to have an estimate, it must be fully defined such
   * that a sequence can be generated for it.  If a program has observations that
   * are required and which are not fully defined, the remaining time estimate
   * cannot be calculated.
   */
  timeEstimateRange?: Maybe<CategorizedTimeRange>;
  /** Program type */
  type: ProgramType;
  /** All user invitations associated with this program. */
  userInvitations: Array<UserInvitation>;
  /** Users assigned to this science program */
  users: Array<ProgramUser>;
};


export type ProgramAllGroupElementsArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};


export type ProgramConfigurationRequestsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
};


export type ProgramGroupElementsArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};


export type ProgramNotesArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};


export type ProgramObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** Event sent when a new object is created or updated */
export type ProgramEdit = {
  __typename?: 'ProgramEdit';
  /** Type of edit */
  editType: EditType;
  /** @deprecated id is no longer computed; a constant value is returned */
  id: Scalars['Long']['output'];
  /** Edited object */
  value: Program;
};

export type ProgramEditInput = {
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
};

/**
 * Program notes are arbitrary titled text messages associated with a particular
 * program.  Notes may be private, in which case they are only visible to staff.
 */
export type ProgramNote = {
  __typename?: 'ProgramNote';
  /** DELETED or PRESENT */
  existence: Existence;
  /** This note's unique id. */
  id: Scalars['ProgramNoteId']['output'];
  /** Whether the note is only available to Gemini staff. */
  isPrivate: Scalars['Boolean']['output'];
  /** The program with which this note is associated. */
  program: Program;
  /** The note text, if any. */
  text?: Maybe<Scalars['NonEmptyString']['output']>;
  /** The note title. */
  title: Scalars['NonEmptyString']['output'];
};

/** ProgramNote creation and edit properties. */
export type ProgramNotePropertiesInput = {
  /** Whether the program is considered deleted (defaults to PRESENT). */
  existence?: InputMaybe<Existence>;
  /**
   * Whether the note is only available to Gemini staff.  This property is
   * available only to Gemini staff and defaults to false.
   */
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  /** The note text, if any. */
  text?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** The note title.  Required on creation. */
  title?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ProgramNoteSelectResult = {
  __typename?: 'ProgramNoteSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching notes up to the return size limit of 1000. */
  matches: Array<ProgramNote>;
};

/** Program properties */
export type ProgramPropertiesInput = {
  /**
   * Active period end date (exclusive) for this program.  The date is considered
   * to be the local date at each observation site.  Observations may end the
   * morning of the indicated date at the site of the observation.
   *
   * This property is avaliable only to those with staff access or better. Not
   * nullable.  Limited to dates between 1900 and 2100 (exclusive).
   */
  activeEnd?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Active period start date (inclusive) for this program.  The date is considered
   * to be the local date at each observation site.  Observations may begin the
   * evening of the indicated date at the site of the observation.
   *
   * This property is avaliable only to those with staff access or better. Not
   * nullable.  Limited to dates between 1900 and 2100 (exclusive).
   */
  activeStart?: InputMaybe<Scalars['Date']['input']>;
  /** The program description / abstract, which is both optional and nullable. */
  description?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Whether the program is considered deleted (defaults to PRESENT) but may be edited */
  existence?: InputMaybe<Existence>;
  /**
   * Sets the GOA properties for this program.  If not specified on create,
   * default values are used.
   */
  goa?: InputMaybe<GoaPropertiesInput>;
  /** The program name / title, which is both optional and nullable. */
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/**
 * Defines the category of program references, where specific implementations exist
 * for calibration, engineering, etc.
 */
export type ProgramReference = {
  label: Scalars['ProgramReferenceLabel']['output'];
  type: ProgramType;
};

/** Inputs required when updating or switching to a calibration program. */
export type ProgramReferencePropertiesCalibrationInput = {
  instrument: Instrument;
  semester: Scalars['Semester']['input'];
};

/** Inputs required when updating or switching to a commissioning program. */
export type ProgramReferencePropertiesCommissioningInput = {
  instrument: Instrument;
  semester: Scalars['Semester']['input'];
};

/** Inputs required when updating or switching to an engineering program. */
export type ProgramReferencePropertiesEngineeringInput = {
  instrument: Instrument;
  semester: Scalars['Semester']['input'];
};

/** Inputs required when updating or switching to an example program. */
export type ProgramReferencePropertiesExampleInput = {
  instrument: Instrument;
};

/**
 * Properties for the chosen program reference type.  Supply the value for exactly
 * one of the inputs.
 */
export type ProgramReferencePropertiesInput = {
  calibration?: InputMaybe<ProgramReferencePropertiesCalibrationInput>;
  commissioning?: InputMaybe<ProgramReferencePropertiesCommissioningInput>;
  engineering?: InputMaybe<ProgramReferencePropertiesEngineeringInput>;
  example?: InputMaybe<ProgramReferencePropertiesExampleInput>;
  library?: InputMaybe<ProgramReferencePropertiesLibraryInput>;
  monitoring?: InputMaybe<ProgramReferencePropertiesMonitoringInput>;
  science?: InputMaybe<ProgramReferencePropertiesScienceInput>;
  system?: InputMaybe<ProgramReferencePropertiesSystemInput>;
};

/** Inputs required when updating or switching to a library program. */
export type ProgramReferencePropertiesLibraryInput = {
  description: Scalars['NonEmptyString']['input'];
  instrument: Instrument;
};

/** Inputs required when updating or switching to a monitoring program. */
export type ProgramReferencePropertiesMonitoringInput = {
  instrument: Instrument;
  semester: Scalars['Semester']['input'];
};

/** Inputs required when updating or switching to a science program. */
export type ProgramReferencePropertiesScienceInput = {
  scienceSubtype: ScienceSubtype;
  semester: Scalars['Semester']['input'];
};

/** Inputs required when updating or switching to a system program. */
export type ProgramReferencePropertiesSystemInput = {
  description: Scalars['NonEmptyString']['input'];
};

/** The matching program results, limited to a maximum of 1000 entries. */
export type ProgramSelectResult = {
  __typename?: 'ProgramSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching programs up to the return size limit of 1000 */
  matches: Array<Program>;
};

export type ProgramType =
  | 'CALIBRATION'
  | 'ENGINEERING'
  | 'EXAMPLE'
  | 'LIBRARY'
  | 'SCIENCE'
  | 'SYSTEM';

/** An assignment of a user to a program. */
export type ProgramUser = {
  __typename?: 'ProgramUser';
  /** User educational status. PHD/Undergrad/Grad/Other. */
  educationalStatus?: Maybe<EducationalStatus>;
  /**
   * Profile information reported when the corresponding ORCiD profile is not set
   * or is not public.
   */
  fallbackProfile: UserProfile;
  /** Users' reported gender. */
  gender?: Maybe<Gender>;
  /** Has access to data. */
  hasDataAccess: Scalars['Boolean']['output'];
  id: Scalars['ProgramUserId']['output'];
  /** User invitations, if any, associated with this program user. */
  invitations: Array<UserInvitation>;
  /** How the partner is associated with a partner. */
  partnerLink: PartnerLink;
  program?: Maybe<Program>;
  role: ProgramUserRole;
  /** Flag indicating whether the user's proposal is part of a thesis. */
  thesis?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

/** Editable properties that define a program / user connection. */
export type ProgramUserPropertiesInput = {
  /** The user's educational status. */
  educationalStatus?: InputMaybe<EducationalStatus>;
  /**
   * The fallback profile may used when the ORCiD user profile is not set or not
   * shared publicly.
   */
  fallbackProfile?: InputMaybe<UserProfileInput>;
  /** The user's reported gender. */
  gender?: InputMaybe<Gender>;
  /**
   * Whether the user has data access.  This property may be changed only by the
   * PI (or staff).  If a COI attempts to change the data access flag, the entire
   * update is ignored.
   */
  hasDataAccess?: InputMaybe<Scalars['Boolean']['input']>;
  /** The user's partner. */
  partnerLink?: InputMaybe<PartnerLinkInput>;
  /** Is a thesis included in the proposal. */
  thesis?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The role a user a plays when assigned to a program. */
export type ProgramUserRole =
  /** Co-Investigator */
  | 'COI'
  /** Co-Investigator (read-only access) */
  | 'COI_RO'
  /** External */
  | 'EXTERNAL'
  /** Primary Investigator */
  | 'PI'
  /** Staff/Partner Primary Support */
  | 'SUPPORT_PRIMARY'
  /** Staff/Partner Secondary Support */
  | 'SUPPORT_SECONDARY';

/** The matching program user results, limited to a maximum of 1000 entries. */
export type ProgramUserSelectResult = {
  __typename?: 'ProgramUserSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching program users up to the return size limit of 1000 */
  matches: Array<ProgramUser>;
};

/** The type of support role. */
export type ProgramUserSupportRoleType =
  /** Partner support */
  | 'PARTNER'
  /** Staff support */
  | 'STAFF';

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

export type Proposal = {
  __typename?: 'Proposal';
  /**
   * The corresponding CallForProposals definition itself, if the call id has been
   * set.
   */
  call?: Maybe<CallForProposals>;
  /** Proposal TAC category */
  category?: Maybe<TacCategory>;
  /**
   * The proposal reference, assuming the proposal has been submitted and
   * assigned a semester.
   */
  reference?: Maybe<ProposalReference>;
  /**
   * Properties of this proposal that are dependent upon the Call for Proposals
   * type.
   */
  type: ProposalType;
};

/** Program proposal */
export type ProposalPropertiesInput = {
  /**
   * Sets the associated Call for Proposals. This is optional upon creation, but
   * must be set for a successful submission.  Also, the Call for Proposals type
   * must agree with the proposal type (see 'type' below).  For example a Queue
   * proposal must be submitted to a Regular Semester Call and a Demo Science
   * proposal must be submitted to a Demo Science Call, etc.
   */
  callId?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** The category field may be unset by assigning a null value, or ignored by skipping it altogether */
  category?: InputMaybe<TacCategory>;
  /**
   * Specifies the properties that depend on the call type. If not set on creation,
   * a regular semester queue proposal is assumed.  The selected call properties
   * must match the call (see 'callId' above) or a submission attempt will fail
   * with an error. Call properties can be edited, but when switching the call
   * type itself, all properties required for that type must be included.
   */
  type?: InputMaybe<ProposalTypeInput>;
};

export type ProposalReference = {
  __typename?: 'ProposalReference';
  label: Scalars['ProposalReferenceLabel']['output'];
  semester: Scalars['Semester']['output'];
  semesterIndex: Scalars['PosInt']['output'];
};

export type ProposalStatus =
  /** Accepted */
  | 'ACCEPTED'
  /** Not Accepted */
  | 'NOT_ACCEPTED'
  /** Not Submitted */
  | 'NOT_SUBMITTED'
  /** Submitted */
  | 'SUBMITTED';

/** Metadata for `enum ProposalStatus` */
export type ProposalStatusMeta = {
  __typename?: 'ProposalStatusMeta';
  name: Scalars['String']['output'];
  tag: ProposalStatus;
};

/**
 * Proposal properties that depend on the particular call for proposals associated
 * with this proposal.
 */
export type ProposalType = {
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
};

/**
 * Properties associated with particular proposal types.  Exactly one of
 * these should be set upon creation or editing.
 */
export type ProposalTypeInput = {
  classical?: InputMaybe<ClassicalInput>;
  demoScience?: InputMaybe<DemoScienceInput>;
  directorsTime?: InputMaybe<DirectorsTimeInput>;
  fastTurnaround?: InputMaybe<FastTurnaroundInput>;
  largeProgram?: InputMaybe<LargeProgramInput>;
  poorWeather?: InputMaybe<PoorWeatherInput>;
  queue?: InputMaybe<QueueInput>;
  systemVerification?: InputMaybe<SystemVerificationInput>;
};

/** Quasar spectrum */
export type QuasarSpectrum =
  /** QuasarSpectrum QS0 */
  | 'QS0'
  /** QuasarSpectrum QS02 */
  | 'QS02';

export type Query = {
  __typename?: 'Query';
  /**
   * Observations grouped by commonly held science asterisms. Identify the program
   * by specifying only one of programId, programReference, or proposalReference.
   * If more than one is provided, all must match.  If none are set, nothing will
   * match.
   */
  asterismGroup: AsterismGroupSelectResult;
  /** Select a single Call for Proposals by id. */
  callForProposals?: Maybe<CallForProposals>;
  /** Select all Calls for Proposals. */
  callsForProposals: CallsForProposalsSelectResult;
  /** Selects the first `LIMIT` matching configuration requests based on the provided `WHERE` parameter, if any. */
  configurationRequests: ConfigurationRequestSelectResult;
  /**
   * Observations grouped by commonly held constraints. Identify the program by
   * specifying only one of programId, programReference, or proposalReference.  If
   * more than one is provided, all must match.  If none are set, nothing will
   * match.
   */
  constraintSetGroup: ConstraintSetGroupSelectResult;
  /**
   * Returns the dataset with the given id or reference, if any.  Identify the
   * dataset by specifying only one of datasetId or datasetReference. If more than
   * one is provided, all must match.  If neither are set, nothing will match.
   */
  dataset?: Maybe<Dataset>;
  /** Select all datasets associated with a step or observation */
  datasets: DatasetSelectResult;
  /** Selects the first `LIMIT` matching execution events based on the provided `WHERE` parameter, if any. */
  events: ExecutionEventSelectResult;
  /** Metadata for `enum FilterType` */
  filterTypeMeta: Array<FilterTypeMeta>;
  /**
   * Obtains a list of program references for which the user with ORCiD `orcidId`
   * has GOA data-download access privileges.  These will be those for which the
   * user is a ProgramUser of any role with the `hasDataAccess` flag set.
   *
   * This query is for use by staff and the GOA and will fail for other users.
   */
  goaDataDownloadAccess: Array<Scalars['ProgramReferenceLabel']['output']>;
  /** Returns the group indicated by the given groupId, if found. */
  group?: Maybe<Group>;
  /**
   * Returns the observation with the given id or reference, if any.  Identify the
   * observation by specifying only one of observationId or observationReference.
   * If more than one is provided, all must match.  If neither are set, nothing
   * will match.
   */
  observation?: Maybe<Observation>;
  /** Selects the first `LIMIT` matching observations based on the provided `WHERE` parameter, if any. */
  observations: ObservationSelectResult;
  /**
   * Selects observations via a normal predicate *and* an additional filter for allowed
   * workflow states. This query is intended for operations and is available only for
   * service users.
   */
  observationsByWorkflowState: Array<Observation>;
  /**
   * Observations grouped by commonly held observing modes. Identify the program by
   * specifying only one of programId, programReference, or proposalReference.  If
   * more than one is provided, all must match.  If none are set, nothing will
   * match.
   */
  observingModeGroup: ObservingModeGroupSelectResult;
  /**
   * Returns the program with the given id or reference, if any. Identify the
   * program by specifying only one of programId, programReference, or
   * proposalReference. If more than one is provided, all must match.  If none are
   * set, nothing will match.
   */
  program?: Maybe<Program>;
  /** Selects the program note with the given id, if any. */
  programNote?: Maybe<ProgramNote>;
  /**
   * Selects the first `LIMIT` matching program notes based on the provided `WHERE`
   * parameter, if any.
   */
  programNotes: ProgramNoteSelectResult;
  /**
   * Selects the first `LIMIT` matching program users based on the provided `WHERE`
   * parameter, if any.
   */
  programUsers: ProgramUserSelectResult;
  /** Selects the first `LIMIT` matching programs based on the provided `WHERE` parameter, if any. */
  programs: ProgramSelectResult;
  /** Metadata for `enum ProposalStatus */
  proposalStatusMeta: Array<ProposalStatusMeta>;
  /** Spectroscopy configuration options matching the WHERE parameter. */
  spectroscopyConfigOptions: Array<SpectroscopyConfigOption>;
  /** Retrieves the target with the given id, if it exists */
  target?: Maybe<Target>;
  /**
   * Observations grouped by commonly held targets. Identify the program by
   * specifying only one of programId, programReference, or proposalReference. If
   * more than one is provided, all must match.  If none are set, nothing will
   * match.
   */
  targetGroup: TargetGroupSelectResult;
  /** Selects the first `LIMIT` matching targets based on the provided `WHERE` parameter, if any. */
  targets: TargetSelectResult;
};


export type QueryAsterismGroupArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  WHERE?: InputMaybe<WhereObservation>;
  includeDeleted?: Scalars['Boolean']['input'];
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};


export type QueryCallForProposalsArgs = {
  callForProposalsId: Scalars['CallForProposalsId']['input'];
};


export type QueryCallsForProposalsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  WHERE?: InputMaybe<WhereCallForProposals>;
  includeDeleted?: Scalars['Boolean']['input'];
};


export type QueryConfigurationRequestsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  WHERE?: InputMaybe<WhereConfigurationRequest>;
};


export type QueryConstraintSetGroupArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  WHERE?: InputMaybe<WhereObservation>;
  includeDeleted?: Scalars['Boolean']['input'];
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};


export type QueryDatasetArgs = {
  datasetId?: InputMaybe<Scalars['DatasetId']['input']>;
  datasetReference?: InputMaybe<Scalars['DatasetReferenceLabel']['input']>;
};


export type QueryDatasetsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['DatasetId']['input']>;
  WHERE?: InputMaybe<WhereDataset>;
};


export type QueryEventsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  WHERE?: InputMaybe<WhereExecutionEvent>;
};


export type QueryGoaDataDownloadAccessArgs = {
  orcidId: Scalars['String']['input'];
};


export type QueryGroupArgs = {
  groupId: Scalars['GroupId']['input'];
};


export type QueryObservationArgs = {
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  observationReference?: InputMaybe<Scalars['ObservationReferenceLabel']['input']>;
};


export type QueryObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  WHERE?: InputMaybe<WhereObservation>;
  includeDeleted?: Scalars['Boolean']['input'];
};


export type QueryObservationsByWorkflowStateArgs = {
  WHERE?: InputMaybe<WhereObservation>;
  states?: InputMaybe<Array<ObservationWorkflowState>>;
};


export type QueryObservingModeGroupArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  WHERE?: InputMaybe<WhereObservation>;
  includeDeleted?: Scalars['Boolean']['input'];
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};


export type QueryProgramArgs = {
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};


export type QueryProgramNoteArgs = {
  programNoteId: Scalars['ProgramNoteId']['input'];
};


export type QueryProgramNotesArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  WHERE?: InputMaybe<WhereProgramNote>;
  includeDeleted?: Scalars['Boolean']['input'];
};


export type QueryProgramUsersArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['UserId']['input']>;
  WHERE?: InputMaybe<WhereProgramUser>;
  includeDeleted?: Scalars['Boolean']['input'];
};


export type QueryProgramsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ProgramId']['input']>;
  WHERE?: InputMaybe<WhereProgram>;
  includeDeleted?: Scalars['Boolean']['input'];
};


export type QuerySpectroscopyConfigOptionsArgs = {
  WHERE?: InputMaybe<WhereSpectroscopyConfigOption>;
};


export type QueryTargetArgs = {
  targetId: Scalars['TargetId']['input'];
};


export type QueryTargetGroupArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  WHERE?: InputMaybe<WhereObservation>;
  includeDeleted?: Scalars['Boolean']['input'];
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};


export type QueryTargetsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['TargetId']['input']>;
  WHERE?: InputMaybe<WhereTarget>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** Proposal properties for Regular Semester (Queue) CallForProposals. */
export type Queue = ProposalType & {
  __typename?: 'Queue';
  /**
   * Minimum percentage of observing time required to consider this proposal
   * successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /** Describes how time for the program will be apportioned across partners. */
  partnerSplits: Array<PartnerSplit>;
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
  /**
   * Whether (and how) the observations in this proposal are available for Target
   * of Opportunity triggering.
   */
  toOActivation: ToOActivation;
};

export type QueueInput = {
  /**
   * The minimum percentage of time required to consider this proposal a success.
   * If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The partnerSplits field specifies how time is apportioned over partners. This
   * will default to empty but if specified, the partner percents must sum to 100.
   * By submission time, it must be specified.
   */
  partnerSplits?: InputMaybe<Array<PartnerSplitInput>>;
  /**
   * The toOActivation field is optional. If not specified when creating a
   * proposal, it defaults to `NONE'.
   */
  toOActivation?: InputMaybe<ToOActivation>;
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

/**
 * Input parameters for creating a new atom record.
 * (stepCount is deprecated and will be ignored)
 */
export type RecordAtomInput = {
  generatedId?: InputMaybe<Scalars['AtomId']['input']>;
  instrument: Instrument;
  sequenceType: SequenceType;
  stepCount?: InputMaybe<Scalars['NonNegShort']['input']>;
  visitId: Scalars['VisitId']['input'];
};

/** The result of recording an atom. */
export type RecordAtomResult = {
  __typename?: 'RecordAtomResult';
  /** The newly added atom record itself. */
  atomRecord: AtomRecord;
};

/** Dataset creation parameters. */
export type RecordDatasetInput = {
  /** Dataset comment. */
  comment?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Dataset filename. */
  filename: Scalars['DatasetFilename']['input'];
  /** Dataset QA State. */
  qaState?: InputMaybe<DatasetQaState>;
  /** Corresponding Step id. */
  stepId: Scalars['StepId']['input'];
};

/** The result of recording a new dataset. */
export type RecordDatasetResult = {
  __typename?: 'RecordDatasetResult';
  /** The new dataset that was added. */
  dataset: Dataset;
};

/** Input parameters for creating a new GmosNorth StepRecord */
export type RecordGmosNorthStepInput = {
  atomId: Scalars['AtomId']['input'];
  generatedId?: InputMaybe<Scalars['StepId']['input']>;
  gmosNorth: GmosNorthDynamicInput;
  observeClass: ObserveClass;
  stepConfig: StepConfigInput;
  telescopeConfig?: InputMaybe<TelescopeConfigInput>;
};

/** The result of recording a GmosNorth step. */
export type RecordGmosNorthStepResult = {
  __typename?: 'RecordGmosNorthStepResult';
  /** The newly added step record itself. */
  stepRecord: StepRecord;
};

/** Input parameters for creating a new GmosNorthVisit */
export type RecordGmosNorthVisitInput = {
  gmosNorth: GmosNorthStaticInput;
  observationId: Scalars['ObservationId']['input'];
};

/** The result of recording a GmosNorth visit. */
export type RecordGmosNorthVisitResult = {
  __typename?: 'RecordGmosNorthVisitResult';
  /** The newly added visit record itself. */
  visit: Visit;
};

/** Input parameters for creating a new GmosSouth StepRecord */
export type RecordGmosSouthStepInput = {
  atomId: Scalars['AtomId']['input'];
  generatedId?: InputMaybe<Scalars['StepId']['input']>;
  gmosSouth: GmosSouthDynamicInput;
  observeClass: ObserveClass;
  stepConfig: StepConfigInput;
  telescopeConfig?: InputMaybe<TelescopeConfigInput>;
};

/** The result of recording a GmosSouth step. */
export type RecordGmosSouthStepResult = {
  __typename?: 'RecordGmosSouthStepResult';
  /** The newly added step record itself. */
  stepRecord: StepRecord;
};

/** Input parameters for creating a new GmosSouthVisit */
export type RecordGmosSouthVisitInput = {
  gmosSouth: GmosSouthStaticInput;
  observationId: Scalars['ObservationId']['input'];
};

/** The result of recording a GmosSouth visit. */
export type RecordGmosSouthVisitResult = {
  __typename?: 'RecordGmosSouthVisitResult';
  /** The newly added visit record itself. */
  visit: Visit;
};

export type RedeemUserInvitationInput = {
  /** Pass false here to decline the invitation. */
  accept?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['UserInvitationKey']['input'];
};

export type RedeemUserInvitationResult = {
  __typename?: 'RedeemUserInvitationResult';
  /** The redeemed invitation. */
  invitation: UserInvitation;
};

/**
 * Input parameters for resetting the acquisition sequence so that it executes
 * from the initial step, regardless of which steps may have previously been
 * executed.  Select one of `observationId` or `observationReference`.
 */
export type ResetAcquisitionInput = {
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  observationReference?: InputMaybe<Scalars['ObservationReferenceLabel']['input']>;
};

/** The result of resetting the acquisition sequence. */
export type ResetAcquisitionResult = {
  __typename?: 'ResetAcquisitionResult';
  /** The observation whose acquisition was reset. */
  observation: Observation;
};

export type RevokeUserInvitationInput = {
  id: Scalars['UserInvitationId']['input'];
};

export type RevokeUserInvitationResult = {
  __typename?: 'RevokeUserInvitationResult';
  /** The revoked invitation. */
  invitation: UserInvitation;
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

/** Science step */
export type Science = StepConfig & {
  __typename?: 'Science';
  /** Step type is always SCIENCE. */
  stepType: StepType;
};

/** Science observation priorities. */
export type ScienceBand =
  | 'BAND1'
  | 'BAND2'
  | 'BAND3'
  | 'BAND4';

/** Mode Spectroscopy/Imaging */
export type ScienceMode =
  /** ScienceMode Imaging */
  | 'IMAGING'
  /** ScienceMode Spectroscopy */
  | 'SPECTROSCOPY';

export type ScienceProgramReference = ProgramReference & {
  __typename?: 'ScienceProgramReference';
  label: Scalars['ProgramReferenceLabel']['output'];
  scienceSubtype: ScienceSubtype;
  semester: Scalars['Semester']['output'];
  semesterIndex: Scalars['PosInt']['output'];
  type: ProgramType;
};

export type ScienceRequirements = {
  __typename?: 'ScienceRequirements';
  /** Science mode */
  mode: ScienceMode;
  /** Spectroscopy requirements */
  spectroscopy: SpectroscopyScienceRequirements;
};

export type ScienceRequirementsGroup = {
  __typename?: 'ScienceRequirementsGroup';
  /** IDs of observations that use the same constraints */
  observationIds: Array<Scalars['ObservationId']['output']>;
  /** Observations associated with the common value */
  observations: ObservationSelectResult;
  /** Commonly held value across the observations */
  scienceRequirements: ScienceRequirements;
};


export type ScienceRequirementsGroupObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** The matching scienceRequirementsGroup results, limited to a maximum of 1000 entries. */
export type ScienceRequirementsGroupSelectResult = {
  __typename?: 'ScienceRequirementsGroupSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching scienceRequirementsGroups up to the return size limit of 1000 */
  matches: Array<ScienceRequirementsGroup>;
};

/** Edit science requirements */
export type ScienceRequirementsInput = {
  /** The mode field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  mode?: InputMaybe<ScienceMode>;
  /** The spectroscopy field must be either specified or skipped altogether.  It cannot be unset with a null value. */
  spectroscopy?: InputMaybe<SpectroscopyScienceRequirementsInput>;
};

/**
 * Science program types, for science programs only (i.e., not calibration,
 * engineering, library, etc.).
 */
export type ScienceSubtype =
  | 'CLASSICAL'
  | 'DEMO_SCIENCE'
  | 'DIRECTORS_TIME'
  | 'FAST_TURNAROUND'
  | 'LARGE_PROGRAM'
  | 'POOR_WEATHER'
  | 'QUEUE'
  | 'SYSTEM_VERIFICATION';

export type SeeingTrend =
  /** Getting Better */
  | 'GETTING_BETTER'
  /** Getting Worse */
  | 'GETTING_WORSE'
  /** Staying the Same */
  | 'STAYING_THE_SAME'
  /** Variable */
  | 'VARIABLE';

/** Sequence-level command */
export type SequenceCommand =
  /** SequenceCommand ABORT */
  | 'ABORT'
  /** SequenceCommand CONTINUE */
  | 'CONTINUE'
  /** SequenceCommand PAUSE */
  | 'PAUSE'
  /** SequenceCommand START */
  | 'START'
  /** SequenceCommand STOP */
  | 'STOP';

export type SequenceDigest = {
  __typename?: 'SequenceDigest';
  /**
   * Total count of anticipated atoms, including the 'nextAtom', 'possibleFuture'
   * and any remaining atoms not included in 'possibleFuture'.
   */
  atomCount: Scalars['NonNegInt']['output'];
  /**
   * Execution state for the sequence. Note, acquisition sequences are never
   * 'COMPLETED'.  The execution state for the observation as a whole is that of
   * the science sequence.
   */
  executionState: ExecutionState;
  /** ObserveClass of the whole sequence. */
  observeClass: ObserveClass;
  /** Unique offsets that occur in the sequence. */
  offsets: Array<Offset>;
  /** Time estimate for the whole sequence. */
  timeEstimate: CategorizedTime;
};

/** Sequence-level events.  As commands are issued to execute a sequence, corresponding events are generated. */
export type SequenceEvent = ExecutionEvent & {
  __typename?: 'SequenceEvent';
  /** Sequence event data. */
  command: SequenceCommand;
  /** Event type. */
  eventType: ExecutionEventType;
  /** Event id. */
  id: Scalars['ExecutionEventId']['output'];
  /** Observation whose execution produced this event. */
  observation: Observation;
  /** Time at which this event was received. */
  received: Scalars['Timestamp']['output'];
  /** Visit associated with this event. */
  visit: Visit;
};

/** Type of sequence, acquisition or science */
export type SequenceType =
  /** SequenceType ACQUISITION */
  | 'ACQUISITION'
  /** SequenceType SCIENCE */
  | 'SCIENCE';

/**
 * Describes the program allocations.  Each partner and band combination should
 * appear at most once in the 'allocations' array.
 */
export type SetAllocationsInput = {
  allocations: Array<AllocationInput>;
  programId: Scalars['ProgramId']['input'];
};

export type SetAllocationsResult = {
  __typename?: 'SetAllocationsResult';
  allocations: Array<Allocation>;
};

/**
 * Input parameters for setting the guide star name for an observation.
 * Identify the observation to clone by specifying either its id or reference.  If
 * both are specified, they must refer to the same observation.  If neither is
 * specified, an error will be returned.
 */
export type SetGuideTargetNameInput = {
  observationId?: InputMaybe<Scalars['ObservationId']['input']>;
  observationReference?: InputMaybe<Scalars['ObservationReferenceLabel']['input']>;
  /**
   * The name of the guide star. This must satisfy the regular expression "^Gaia DR3 (-?\d+)$" where the
   * numeric part is the Gaia source_id. Omit or set to null to delete.
   */
  targetName?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** The result of setting the guide target name for an observation. */
export type SetGuideTargetNameResult = {
  __typename?: 'SetGuideTargetNameResult';
  observation?: Maybe<Observation>;
};

export type SetObservationWorkflowStateInput = {
  observationId: Scalars['ObservationId']['input'];
  state: ObservationWorkflowState;
};

/**
 * Input for setting the program reference.  Identify the program to update with one
 * of `programId`, `proposalReference` or `programReference`.  If more than one of
 * these is specified, all must match.  Use `SET` to specify the new program
 * reference properties.
 */
export type SetProgramReferenceInput = {
  SET: ProgramReferencePropertiesInput;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};

export type SetProgramReferenceResult = {
  __typename?: 'SetProgramReferenceResult';
  /** The resulting program reference, if any. */
  reference?: Maybe<ProgramReference>;
};

/**
 * Input for setting the proposal status.  Identify the program to update with one
 * of `programId`, `proposalReference` or `programReference`.  If more than one of
 * these is specified, all must match.
 */
export type SetProposalStatusInput = {
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
  status: ProposalStatus;
};

/** The result of setting the proposal status. */
export type SetProposalStatusResult = {
  __typename?: 'SetProposalStatusResult';
  /**
   * The program on which the proposal status was set. Returning the program allows checking
   * the proposal reference, program reference and other values that can be affected by changing
   * the proposal status.
   */
  program: Program;
};

export type SetupTime = {
  __typename?: 'SetupTime';
  /** Full setup time estimate, including slew, configuration and target acquisition */
  full: TimeSpan;
  /** A reduced setup time contemplating reacquiring a previously acquired target */
  reacquisition: TimeSpan;
};

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

/** Calculated signal to noise at a specific wavelength */
export type SignalToNoiseAt = {
  __typename?: 'SignalToNoiseAt';
  /** Single exposure signal to noise */
  single: Scalars['SignalToNoise']['output'];
  /** Total exposure signal to noise */
  total: Scalars['SignalToNoise']['output'];
  /** Wavelength sn was calculated at */
  wavelength: Wavelength;
};

/** Signal to noise exposure time mode */
export type SignalToNoiseExposureTimeMode = {
  __typename?: 'SignalToNoiseExposureTimeMode';
  /** Signal/Noise wavelength */
  at: Wavelength;
  /** Signal/Noise value */
  value: Scalars['SignalToNoise']['output'];
};

/** Signal-to-noise mode parameters */
export type SignalToNoiseExposureTimeModeInput = {
  /** Corresponding wavelength. */
  at: WavelengthInput;
  /** s/n value */
  value: Scalars['SignalToNoise']['input'];
};

/** Telescope Sites */
export type Site =
  /** Gemini North */
  | 'GN'
  /** Gemini South */
  | 'GS';

/** Coordinate limits per site. */
export type SiteCoordinateLimits = {
  __typename?: 'SiteCoordinateLimits';
  /** Gemini North coordinate limits. */
  north: CoordinateLimits;
  /** Gemini South coordinate limits. */
  south: CoordinateLimits;
};

/** Coordinate limits input per site. */
export type SiteCoordinateLimitsInput = {
  north?: InputMaybe<CoordinateLimitsInput>;
  south?: InputMaybe<CoordinateLimitsInput>;
};

/** Sky background */
export type SkyBackground =
  /** SkyBackground Bright */
  | 'BRIGHT'
  /** SkyBackground Dark */
  | 'DARK'
  /** SkyBackground Darkest */
  | 'DARKEST'
  /** SkyBackground Gray */
  | 'GRAY';

/** Slew events. */
export type SlewEvent = ExecutionEvent & {
  __typename?: 'SlewEvent';
  /** Event type. */
  eventType: ExecutionEventType;
  /** Event id. */
  id: Scalars['ExecutionEventId']['output'];
  /** Observation whose execution produced this event. */
  observation: Observation;
  /** Time at which this event was received. */
  received: Scalars['Timestamp']['output'];
  /** Slew event data. */
  slewStage: SlewStage;
  /** Visit associated with this event. */
  visit: Visit;
};

/** Slew stage */
export type SlewStage =
  | 'END_SLEW'
  | 'START_SLEW';

/** SmartGcal step configuration. */
export type SmartGcal = StepConfig & {
  __typename?: 'SmartGcal';
  smartGcalType: SmartGcalType;
  /** Step type is always SMART_GCAL. */
  stepType: StepType;
};

/** Which kind of smart gcal configuration is requested in a smart gcal step. */
export type SmartGcalType =
  | 'ARC'
  | 'DAY_BASELINE'
  | 'FLAT'
  | 'NIGHT_BASELINE';

/** Source profile, exactly one of the fields will be defined */
export type SourceProfile = {
  __typename?: 'SourceProfile';
  /** gaussian source, integrated units */
  gaussian?: Maybe<GaussianSource>;
  /** point source, integrated units */
  point?: Maybe<SpectralDefinitionIntegrated>;
  /** uniform source, surface units */
  uniform?: Maybe<SpectralDefinitionSurface>;
};

/** Create or edit a source profile.  Exactly one of "point", "uniform" or "gaussian" is required. */
export type SourceProfileInput = {
  gaussian?: InputMaybe<GaussianInput>;
  point?: InputMaybe<SpectralDefinitionIntegratedInput>;
  uniform?: InputMaybe<SpectralDefinitionSurfaceInput>;
};

/** Spectral definition integrated.  Exactly one of the fields will be defined. */
export type SpectralDefinitionIntegrated = {
  __typename?: 'SpectralDefinitionIntegrated';
  /** Band normalized spectral definition */
  bandNormalized?: Maybe<BandNormalizedIntegrated>;
  /** Emission lines spectral definition */
  emissionLines?: Maybe<EmissionLinesIntegrated>;
};

/** Spectral definition input with integrated units.  Specify exactly one of "bandNormalized" or "emissionLines" */
export type SpectralDefinitionIntegratedInput = {
  bandNormalized?: InputMaybe<BandNormalizedIntegratedInput>;
  emissionLines?: InputMaybe<EmissionLinesIntegratedInput>;
};

/** Spectral definition surface.  Exactly one of the fields will be defined. */
export type SpectralDefinitionSurface = {
  __typename?: 'SpectralDefinitionSurface';
  /** Band normalized spectral definition */
  bandNormalized?: Maybe<BandNormalizedSurface>;
  /** Emission lines spectral definition */
  emissionLines?: Maybe<EmissionLinesSurface>;
};

/** Spectral definition input with surface units.  Specify exactly one of "bandNormalized" or "emissionLines" */
export type SpectralDefinitionSurfaceInput = {
  bandNormalized?: InputMaybe<BandNormalizedSurfaceInput>;
  emissionLines?: InputMaybe<EmissionLinesSurfaceInput>;
};

/** Spectroscopy capabilities Nod&Shuffle/Polarimetry/Corongraphy */
export type SpectroscopyCapabilities =
  /** SpectroscopyCapabilities Coronagraphy */
  | 'CORONAGRAPHY'
  /** SpectroscopyCapabilities NodAndShuffle */
  | 'NOD_AND_SHUFFLE'
  /** SpectroscopyCapabilities Polarimetry */
  | 'POLARIMETRY';

/** Describes an instrument configuration option for spectroscopy. */
export type SpectroscopyConfigOption = {
  __typename?: 'SpectroscopyConfigOption';
  adaptiveOptics: Scalars['Boolean']['output'];
  /** A special capability (if any) that the configuration may have. */
  capability?: Maybe<SpectroscopyCapabilities>;
  disperserLabel: Scalars['NonEmptyString']['output'];
  filterLabel?: Maybe<Scalars['NonEmptyString']['output']>;
  /**
   * For Flamingos2 options, the Flamingos 2configuration.  Null for other
   * instruments.
   */
  flamingos2?: Maybe<SpectroscopyConfigOptionFlamingos2>;
  focalPlane: FocalPlane;
  fpuLabel: Scalars['NonEmptyString']['output'];
  /**
   * For GMOS North options, the GMOS North configuration.  Null for other
   * instruments.
   */
  gmosNorth?: Maybe<SpectroscopyConfigOptionGmosNorth>;
  /**
   * For GMOS South options, the GMOS South configuration.  Null for other
   * instruments.
   */
  gmosSouth?: Maybe<SpectroscopyConfigOptionGmosSouth>;
  instrument: Instrument;
  name: Scalars['NonEmptyString']['output'];
  resolution: Scalars['PosInt']['output'];
  site: Site;
  slitLength: Angle;
  slitWidth: Angle;
  wavelengthCoverage: Wavelength;
  wavelengthMax: Wavelength;
  wavelengthMin: Wavelength;
  wavelengthOptimal: Wavelength;
};

export type SpectroscopyConfigOptionFlamingos2 = {
  __typename?: 'SpectroscopyConfigOptionFlamingos2';
  disperser: Flamingos2Disperser;
  filter: Flamingos2Filter;
  fpu: Flamingos2Fpu;
};

export type SpectroscopyConfigOptionGmosNorth = {
  __typename?: 'SpectroscopyConfigOptionGmosNorth';
  filter?: Maybe<GmosNorthFilter>;
  fpu: GmosNorthBuiltinFpu;
  grating: GmosNorthGrating;
};

export type SpectroscopyConfigOptionGmosSouth = {
  __typename?: 'SpectroscopyConfigOptionGmosSouth';
  filter?: Maybe<GmosSouthFilter>;
  fpu: GmosSouthBuiltinFpu;
  grating: GmosSouthGrating;
};

export type SpectroscopyScienceRequirements = {
  __typename?: 'SpectroscopyScienceRequirements';
  /** Spectroscopy Capabilities */
  capability?: Maybe<SpectroscopyCapabilities>;
  /** Requested exposure time mode. */
  exposureTimeMode?: Maybe<ExposureTimeMode>;
  /** Focal plane choice */
  focalPlane?: Maybe<FocalPlane>;
  /** Focal plane angle */
  focalPlaneAngle?: Maybe<Angle>;
  /** Requested resolution */
  resolution?: Maybe<Scalars['PosInt']['output']>;
  /** Requested central wavelength */
  wavelength?: Maybe<Wavelength>;
  /** Wavelength range */
  wavelengthCoverage?: Maybe<Wavelength>;
};

/** Edit or create spectroscopy science requirements */
export type SpectroscopyScienceRequirementsInput = {
  /** The capabilities field may be unset by assigning a null value, or ignored by skipping it altogether */
  capability?: InputMaybe<SpectroscopyCapabilities>;
  /**
   * ExposureTimeMode, which may be unset by assigning a null value, or ignored by
   * skipping it altogether.
   */
  exposureTimeMode?: InputMaybe<ExposureTimeModeInput>;
  /** The focalPlane field may be unset by assigning a null value, or ignored by skipping it altogether */
  focalPlane?: InputMaybe<FocalPlane>;
  /** The focalPlaneAngle field may be unset by assigning a null value, or ignored by skipping it altogether */
  focalPlaneAngle?: InputMaybe<AngleInput>;
  /** The resolution field may be unset by assigning a null value, or ignored by skipping it altogether */
  resolution?: InputMaybe<Scalars['PosInt']['input']>;
  /** The wavelength field may be unset by assigning a null value, or ignored by skipping it altogether */
  wavelength?: InputMaybe<WavelengthInput>;
  /** The wavelengthCoverage field may be unset by assigning a null value, or ignored by skipping it altogether */
  wavelengthCoverage?: InputMaybe<WavelengthInput>;
};

/** Stellar library spectrum */
export type StellarLibrarySpectrum =
  /** StellarLibrarySpectrum A0_I */
  | 'A0_I'
  /** StellarLibrarySpectrum A0_III */
  | 'A0_III'
  /** StellarLibrarySpectrum A0_III_CALSPEC */
  | 'A0_III_CALSPEC'
  /** StellarLibrarySpectrum A0_V */
  | 'A0_V'
  /** StellarLibrarySpectrum A0_V_CALSPEC */
  | 'A0_V_CALSPEC'
  /** StellarLibrarySpectrum A1_V_CALSPEC */
  | 'A1_V_CALSPEC'
  /** StellarLibrarySpectrum A2_V_CALSPEC */
  | 'A2_V_CALSPEC'
  /** StellarLibrarySpectrum A3_V_CALSPEC */
  | 'A3_V_CALSPEC'
  /** StellarLibrarySpectrum A4_V_CALSPEC */
  | 'A4_V_CALSPEC'
  /** StellarLibrarySpectrum A5_III */
  | 'A5_III'
  /** StellarLibrarySpectrum A5_V */
  | 'A5_V'
  /** StellarLibrarySpectrum A5_V_CALSPEC */
  | 'A5_V_CALSPEC'
  /** StellarLibrarySpectrum A6_V_CALSPEC */
  | 'A6_V_CALSPEC'
  /** StellarLibrarySpectrum A8_III_CALSPEC */
  | 'A8_III_CALSPEC'
  /** StellarLibrarySpectrum B0_5_V_CALSPEC */
  | 'B0_5_V_CALSPEC'
  /** StellarLibrarySpectrum B0_V */
  | 'B0_V'
  /** StellarLibrarySpectrum B3_V_CALSPEC */
  | 'B3_V_CALSPEC'
  /** StellarLibrarySpectrum B5_7_V */
  | 'B5_7_V'
  /** StellarLibrarySpectrum B5_I */
  | 'B5_I'
  /** StellarLibrarySpectrum B5_III */
  | 'B5_III'
  /** StellarLibrarySpectrum B9_III_CALSPEC */
  | 'B9_III_CALSPEC'
  /** StellarLibrarySpectrum DA08_CALSPEC */
  | 'DA08_CALSPEC'
  /** StellarLibrarySpectrum DA09_CALSPEC */
  | 'DA09_CALSPEC'
  /** StellarLibrarySpectrum DA12_CALSPEC */
  | 'DA12_CALSPEC'
  /** StellarLibrarySpectrum DA15_CALSPEC */
  | 'DA15_CALSPEC'
  /** StellarLibrarySpectrum DA18_CALSPEC */
  | 'DA18_CALSPEC'
  /** StellarLibrarySpectrum DA24_CALSPEC */
  | 'DA24_CALSPEC'
  /** StellarLibrarySpectrum DA28_CALSPEC */
  | 'DA28_CALSPEC'
  /** StellarLibrarySpectrum DA30_CALSPEC */
  | 'DA30_CALSPEC'
  /** StellarLibrarySpectrum DA31_CALSPEC */
  | 'DA31_CALSPEC'
  /** StellarLibrarySpectrum DA33_CALSPEC */
  | 'DA33_CALSPEC'
  /** StellarLibrarySpectrum DA36_CALSPEC */
  | 'DA36_CALSPEC'
  /** StellarLibrarySpectrum DA38_CALSPEC */
  | 'DA38_CALSPEC'
  /** StellarLibrarySpectrum DA48_CALSPEC */
  | 'DA48_CALSPEC'
  /** StellarLibrarySpectrum DA57_CALSPEC */
  | 'DA57_CALSPEC'
  /** StellarLibrarySpectrum DBQ40_CALSPEC */
  | 'DBQ40_CALSPEC'
  /** StellarLibrarySpectrum DBQA50_CALSPEC */
  | 'DBQA50_CALSPEC'
  /** StellarLibrarySpectrum DO20_CALSPEC */
  | 'DO20_CALSPEC'
  /** StellarLibrarySpectrum F0_I */
  | 'F0_I'
  /** StellarLibrarySpectrum F0_III */
  | 'F0_III'
  /** StellarLibrarySpectrum F0_III_PICKLES_IRTF */
  | 'F0_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum F0_II_PICKLES_IRTF */
  | 'F0_II_PICKLES_IRTF'
  /** StellarLibrarySpectrum F0_IV_PICKLES_IRTF */
  | 'F0_IV_PICKLES_IRTF'
  /** StellarLibrarySpectrum F0_I_PICKLES_IRTF */
  | 'F0_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum F0_V */
  | 'F0_V'
  /** StellarLibrarySpectrum F0_V_PICKLES_IRTF */
  | 'F0_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum F2_III_PICKLES_IRTF */
  | 'F2_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum F2_II_PICKLES_IRTF */
  | 'F2_II_PICKLES_IRTF'
  /** StellarLibrarySpectrum F2_V_PICKLES_IRTF */
  | 'F2_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum F4_V_CALSPEC */
  | 'F4_V_CALSPEC'
  /** StellarLibrarySpectrum F5_I */
  | 'F5_I'
  /** StellarLibrarySpectrum F5_III */
  | 'F5_III'
  /** StellarLibrarySpectrum F5_III_PICKLES_IRTF */
  | 'F5_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum F5_I_PICKLES_IRTF */
  | 'F5_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum F5_V */
  | 'F5_V'
  /** StellarLibrarySpectrum F5_V_PICKLES_IRTF */
  | 'F5_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum F5_V_W */
  | 'F5_V_W'
  /** StellarLibrarySpectrum F6_V_R */
  | 'F6_V_R'
  /** StellarLibrarySpectrum F7_V_CALSPEC */
  | 'F7_V_CALSPEC'
  /** StellarLibrarySpectrum F8_IV_CALSPEC */
  | 'F8_IV_CALSPEC'
  /** StellarLibrarySpectrum F8_I_PICKLES_IRTF */
  | 'F8_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum F8_V_PICKLES_IRTF */
  | 'F8_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum G0_I */
  | 'G0_I'
  /** StellarLibrarySpectrum G0_III */
  | 'G0_III'
  /** StellarLibrarySpectrum G0_I_PICKLES_IRTF */
  | 'G0_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum G0_V */
  | 'G0_V'
  /** StellarLibrarySpectrum G0_V_CALSPEC */
  | 'G0_V_CALSPEC'
  /** StellarLibrarySpectrum G0_V_R */
  | 'G0_V_R'
  /** StellarLibrarySpectrum G0_V_W */
  | 'G0_V_W'
  /** StellarLibrarySpectrum G1_V_CALSPEC */
  | 'G1_V_CALSPEC'
  /** StellarLibrarySpectrum G2_IV_PICKLES_IRTF */
  | 'G2_IV_PICKLES_IRTF'
  /** StellarLibrarySpectrum G2_I_PICKLES_IRTF */
  | 'G2_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum G2_V */
  | 'G2_V'
  /** StellarLibrarySpectrum G2_V_CALSPEC */
  | 'G2_V_CALSPEC'
  /** StellarLibrarySpectrum G3_V_CALSPEC */
  | 'G3_V_CALSPEC'
  /** StellarLibrarySpectrum G5_I */
  | 'G5_I'
  /** StellarLibrarySpectrum G5_III */
  | 'G5_III'
  /** StellarLibrarySpectrum G5_III_PICKLES_IRTF */
  | 'G5_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum G5_III_R */
  | 'G5_III_R'
  /** StellarLibrarySpectrum G5_III_W */
  | 'G5_III_W'
  /** StellarLibrarySpectrum G5_I_PICKLES_IRTF */
  | 'G5_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum G5_V */
  | 'G5_V'
  /** StellarLibrarySpectrum G5_V_CALSPEC */
  | 'G5_V_CALSPEC'
  /** StellarLibrarySpectrum G5_V_R */
  | 'G5_V_R'
  /** StellarLibrarySpectrum G5_V_W */
  | 'G5_V_W'
  /** StellarLibrarySpectrum G7_III_CALSPEC */
  | 'G7_III_CALSPEC'
  /** StellarLibrarySpectrum G8_III_PICKLES_IRTF */
  | 'G8_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum G8_I_PICKLES_IRTF */
  | 'G8_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum G8_V_PICKLES_IRTF */
  | 'G8_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum K0_1_II */
  | 'K0_1_II'
  /** StellarLibrarySpectrum K0_5_III_CALSPEC */
  | 'K0_5_III_CALSPEC'
  /** StellarLibrarySpectrum K0_III */
  | 'K0_III'
  /** StellarLibrarySpectrum K0_III_PICKLES_IRTF */
  | 'K0_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum K0_III_R */
  | 'K0_III_R'
  /** StellarLibrarySpectrum K0_III_W */
  | 'K0_III_W'
  /** StellarLibrarySpectrum K0_IV_PICKLES_IRTF */
  | 'K0_IV_PICKLES_IRTF'
  /** StellarLibrarySpectrum K0_V */
  | 'K0_V'
  /** StellarLibrarySpectrum K0_V_PICKLES_IRTF */
  | 'K0_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum K0_V_R */
  | 'K0_V_R'
  /** StellarLibrarySpectrum K1_5_III_CALSPEC */
  | 'K1_5_III_CALSPEC'
  /** StellarLibrarySpectrum K2_III_PICKLES_IRTF */
  | 'K2_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum K2_I_PICKLES_IRTF */
  | 'K2_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum K2_V_PICKLES_IRTF */
  | 'K2_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum K3_III_PICKLES_IRTF */
  | 'K3_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum K3_II_PICKLES_IRTF */
  | 'K3_II_PICKLES_IRTF'
  /** StellarLibrarySpectrum K3_V_PICKLES_IRTF */
  | 'K3_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum K4_I */
  | 'K4_I'
  /** StellarLibrarySpectrum K4_III */
  | 'K4_III'
  /** StellarLibrarySpectrum K4_III_PICKLES_IRTF */
  | 'K4_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum K4_III_R */
  | 'K4_III_R'
  /** StellarLibrarySpectrum K4_III_W */
  | 'K4_III_W'
  /** StellarLibrarySpectrum K4_I_PICKLES_IRTF */
  | 'K4_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum K4_V */
  | 'K4_V'
  /** StellarLibrarySpectrum K5_III_PICKLES_IRTF */
  | 'K5_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum K5_V_PICKLES_IRTF */
  | 'K5_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M0_III */
  | 'M0_III'
  /** StellarLibrarySpectrum M0_III_PICKLES_IRTF */
  | 'M0_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M0_V */
  | 'M0_V'
  /** StellarLibrarySpectrum M0_V_PICKLES_IRTF */
  | 'M0_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M1_III_PICKLES_IRTF */
  | 'M1_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M1_V_PICKLES_IRTF */
  | 'M1_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M2_III_PICKLES_IRTF */
  | 'M2_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M2_I_PICKLES_IRTF */
  | 'M2_I_PICKLES_IRTF'
  /** StellarLibrarySpectrum M2_V_PICKLES_IRTF */
  | 'M2_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M3_III */
  | 'M3_III'
  /** StellarLibrarySpectrum M3_III_PICKLES_IRTF */
  | 'M3_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M3_V */
  | 'M3_V'
  /** StellarLibrarySpectrum M3_V_PICKLES_IRTF */
  | 'M3_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M4_III_PICKLES_IRTF */
  | 'M4_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M4_V_PICKLES_IRTF */
  | 'M4_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M5_V_PICKLES_IRTF */
  | 'M5_V_PICKLES_IRTF'
  /** StellarLibrarySpectrum M6_III */
  | 'M6_III'
  /** StellarLibrarySpectrum M6_III_PICKLES_IRTF */
  | 'M6_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M6_V */
  | 'M6_V'
  /** StellarLibrarySpectrum M7_III_PICKLES_IRTF */
  | 'M7_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M8_III_PICKLES_IRTF */
  | 'M8_III_PICKLES_IRTF'
  /** StellarLibrarySpectrum M9_III */
  | 'M9_III'
  /** StellarLibrarySpectrum O5_V */
  | 'O5_V'
  /** StellarLibrarySpectrum O8_III */
  | 'O8_III'
  /** StellarLibrarySpectrum O9_5_V_CALSPEC */
  | 'O9_5_V_CALSPEC'
  /** StellarLibrarySpectrum O9_V_CALSPEC */
  | 'O9_V_CALSPEC'
  /** StellarLibrarySpectrum SD_B_CALSPEC */
  | 'SD_B_CALSPEC'
  /** StellarLibrarySpectrum SD_F8_CALSPEC */
  | 'SD_F8_CALSPEC'
  /** StellarLibrarySpectrum SD_O_CALSPEC */
  | 'SD_O_CALSPEC'
  /** StellarLibrarySpectrum T0400_K */
  | 'T0400_K'
  /** StellarLibrarySpectrum T0600_K */
  | 'T0600_K'
  /** StellarLibrarySpectrum T0800_K */
  | 'T0800_K'
  /** StellarLibrarySpectrum T0900_K */
  | 'T0900_K'
  /** StellarLibrarySpectrum T1000_K */
  | 'T1000_K'
  /** StellarLibrarySpectrum T1200_K */
  | 'T1200_K'
  /** StellarLibrarySpectrum T1400_K */
  | 'T1400_K'
  /** StellarLibrarySpectrum T1600_K */
  | 'T1600_K'
  /** StellarLibrarySpectrum T1800_K */
  | 'T1800_K'
  /** StellarLibrarySpectrum T2000_K */
  | 'T2000_K'
  /** StellarLibrarySpectrum T2200_K */
  | 'T2200_K'
  /** StellarLibrarySpectrum T2400_K */
  | 'T2400_K'
  /** StellarLibrarySpectrum T2600_K */
  | 'T2600_K'
  /** StellarLibrarySpectrum T2800_K */
  | 'T2800_K';

/** Step (bias, dark, gcal, science, etc.) */
export type StepConfig = {
  /** Step type */
  stepType: StepType;
};

/**
 * GCAL configuration creation input.  Specify either one or more arcs or else
 * one continuum.
 */
export type StepConfigGcalInput = {
  arcs?: InputMaybe<Array<GcalArc>>;
  continuum?: InputMaybe<GcalContinuum>;
  diffuser: GcalDiffuser;
  filter: GcalFilter;
  shutter: GcalShutter;
};

/** Step configuration.  Choose exactly one step type. */
export type StepConfigInput = {
  /** Bias step creation option */
  bias?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dark step creation option */
  dark?: InputMaybe<Scalars['Boolean']['input']>;
  /** GCAL step creation option */
  gcal?: InputMaybe<StepConfigGcalInput>;
  /** Science step creation option */
  science?: InputMaybe<Scalars['Boolean']['input']>;
  /** Smart gcal creation option */
  smartGcal?: InputMaybe<StepConfigSmartGcalInput>;
};

/** SmartGcal step creation input */
export type StepConfigSmartGcalInput = {
  /** Smart Gcal type */
  smartGcalType: SmartGcalType;
};

/**
 * Time estimate for an individual step, including configuration changes and
 * dataset production.
 */
export type StepEstimate = {
  __typename?: 'StepEstimate';
  /**
   * Configuration changes required before the step is executed.  This will
   * obviously depend not only on the step configuration but also the previous
   * step configuration.
   */
  configChange?: Maybe<AllConfigChangeEstimates>;
  /** Time for producing the datasets for this step. */
  detector?: Maybe<AllDetectorEstimates>;
  /** Total time estimate for the step. */
  total: TimeSpan;
};

/** Step-level events.  The execution of a single step will generate multiple events. */
export type StepEvent = ExecutionEvent & {
  __typename?: 'StepEvent';
  /** Atom associated with this event. */
  atom: AtomRecord;
  /** Event type. */
  eventType: ExecutionEventType;
  /** Event id */
  id: Scalars['ExecutionEventId']['output'];
  /** Observation whose execution produced this event. */
  observation: Observation;
  /** Time at which this event was received */
  received: Scalars['Timestamp']['output'];
  /** Step associated with this event. */
  step: StepRecord;
  /** Step execution stage. */
  stepStage: StepStage;
  /** Visit associated with this event. */
  visit: Visit;
};

/** Execution state of a recorded step. */
export type StepExecutionState =
  /** An ongoing step was abandoned. */
  | 'ABANDONED'
  /** An event with an 'ABORT' 'StepStage' was received. */
  | 'ABORTED'
  /** An event with an 'END_STEP' 'StepStage' was received. */
  | 'COMPLETED'
  /** No events have been received since the step was recorded. */
  | 'NOT_STARTED'
  /** Events have been received, but no terminal `Abort`, `EndStep` or `Stop` events. */
  | 'ONGOING'
  /** An event with a 'STOP' 'StepStage' was received. */
  | 'STOPPED';

/**
 * A step as recorded by Observe.  There will be one instrument configuration per
 * instrument, all but one of which will be null.
 */
export type StepRecord = {
  __typename?: 'StepRecord';
  /** The atom in which the step was executed. */
  atom: AtomRecord;
  /** The step was created by Observe at this time. */
  created: Scalars['Timestamp']['output'];
  /** Datasets associated with this step. */
  datasets: DatasetSelectResult;
  /** Original time estimate for executing this step. */
  estimate: TimeSpan;
  /** Execution events associated with this step. */
  events: ExecutionEventSelectResult;
  /**
   * The execution state of this step, according to events received (if any) from
   * Observe.
   */
  executionState: StepExecutionState;
  /** Step ID of the generated step, if any, that produced this step record. */
  generatedId?: Maybe<Scalars['StepId']['output']>;
  /**
   * GMOS North instrument configuration for this step, if any.  This will be null
   * unless the `instrument` discriminator is "GMOS_NORTH".
   */
  gmosNorth?: Maybe<GmosNorthDynamic>;
  /**
   * GMOS South instrument configuration for this step, if any.  This will be null
   * unless the `instrument` discriminator is "GMOS_SOUTH".
   */
  gmosSouth?: Maybe<GmosSouthDynamic>;
  /** Step ID. */
  id: Scalars['StepId']['output'];
  /** Step Index, relative to other step records in the observation. */
  index: Scalars['PosInt']['output'];
  /**
   * Instrument associated with the step. This will indicate which of the
   * instrument-specific dynamic fields (e.g., `gmosNorth: GmosNorthDynamic`) is
   * defined.
   */
  instrument: Instrument;
  /**
   * Time interval during which this step executed.  This measures the range of
   * time from the first event to the last, whether or not the step ever
   * actually completed.  A 'null' result means there are no events associated
   * with this step.
   */
  interval?: Maybe<TimestampInterval>;
  /** The observe class of this step. */
  observeClass: ObserveClass;
  /**
   * QA state based on a combination of dataset QA states.  The worst QA state is
   * taken as the overall step QA state.  For example, one FAIL dataset will
   * result in the step having a FAIL QA state.  Unset QA states are ignored, but
   * if none are set the result will be null.
   */
  qaState?: Maybe<DatasetQaState>;
  /**
   * The step configuration, apart from instrument details found in the
   * instrument-specific 'StepRecord' implementation.
   */
  stepConfig: StepConfig;
  /** The telescope configuration for this step. */
  telescopeConfig: TelescopeConfig;
};


/**
 * A step as recorded by Observe.  There will be one instrument configuration per
 * instrument, all but one of which will be null.
 */
export type StepRecordDatasetsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['DatasetId']['input']>;
};


/**
 * A step as recorded by Observe.  There will be one instrument configuration per
 * instrument, all but one of which will be null.
 */
export type StepRecordEventsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ExecutionEventId']['input']>;
};

/** StepRecord query results, limited to a maximum of 1000 entries. */
export type StepRecordSelectResult = {
  __typename?: 'StepRecordSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching step records up to the return size limit of 1000. */
  matches: Array<StepRecord>;
};

/** Execution stage or phase of an individual step */
export type StepStage =
  | 'ABORT'
  | 'CONTINUE'
  | 'END_CONFIGURE'
  | 'END_OBSERVE'
  | 'END_STEP'
  | 'PAUSE'
  | 'START_CONFIGURE'
  | 'START_OBSERVE'
  | 'START_STEP'
  | 'STOP';

/** Step type */
export type StepType =
  /** StepType Bias */
  | 'BIAS'
  /** StepType Dark */
  | 'DARK'
  /** StepType Gcal */
  | 'GCAL'
  /** StepType Science */
  | 'SCIENCE'
  /** StepType SmartGcal */
  | 'SMART_GCAL';

export type Subscription = {
  __typename?: 'Subscription';
  configurationRequestEdit: ConfigurationRequestEdit;
  /**
   * Subscribes to an event that is generated whenever a dataset is created or
   * updated.  The input allows the caller to filter on program, observation or
   * individual dataset (so that all events received correspond to that program,
   * observation or dataset).  It also permits limiting events to only those for
   * which a dataset file has been written.
   */
  datasetEdit: DatasetEdit;
  executionEventAdded: ExecutionEventAdded;
  /**
   * Subscribes to an event that is generated whenever a group is
   * created or updated.  If a group id is provided, the event is only
   * generated for edits to that particular group.  If a program id is
   * provided then the event must correspond to a group referenced by
   * that program.
   */
  groupEdit: GroupEdit;
  /**
   * Subscribes to an event that is generated whenever a(n) observation is
   * created or updated.  If a(n) observation id is provided, the event is only
   * generated for edits to that particular observation.  If a program id is
   * provided then the event must correspond to a(n) observation referenced by
   * that program.
   */
  observationEdit: ObservationEdit;
  /**
   * Subscribes to an event that is generated whenever a program is created
   * or edited. A particular program id may be provided to limit events to
   * that program.
   */
  programEdit: ProgramEdit;
  /**
   * Subscribes to an event that is generated whenever a(n) target is
   * created or updated.  If a(n) target id is provided, the event is only
   * generated for edits to that particular target.  If a program id is
   * provided then the event must correspond to a(n) target referenced by
   * that program.
   */
  targetEdit: TargetEdit;
};


export type SubscriptionConfigurationRequestEditArgs = {
  input?: InputMaybe<ConfigurationRequestEditInput>;
};


export type SubscriptionDatasetEditArgs = {
  input?: InputMaybe<DatasetEditInput>;
};


export type SubscriptionExecutionEventAddedArgs = {
  input?: InputMaybe<ExecutionEventAddedInput>;
};


export type SubscriptionGroupEditArgs = {
  input?: InputMaybe<GroupEditInput>;
};


export type SubscriptionObservationEditArgs = {
  input?: InputMaybe<ObservationEditInput>;
};


export type SubscriptionProgramEditArgs = {
  input?: InputMaybe<ProgramEditInput>;
};


export type SubscriptionTargetEditArgs = {
  input?: InputMaybe<TargetEditInput>;
};

export type SystemProgramReference = ProgramReference & {
  __typename?: 'SystemProgramReference';
  label: Scalars['ProgramReferenceLabel']['output'];
  type: ProgramType;
};

/** Proposal properties for System Verification CallForProposals. */
export type SystemVerification = ProposalType & {
  __typename?: 'SystemVerification';
  /**
   * Minimum percentage of observing time required to consider this proposal
   * successful.
   */
  minPercentTime: Scalars['IntPercent']['output'];
  /** The science type of this Call for Proposals. */
  scienceSubtype: ScienceSubtype;
  /**
   * Whether (and how) the observations in this proposal are available for Target
   * of Opportunity triggering.
   */
  toOActivation: ToOActivation;
};

export type SystemVerificationInput = {
  /**
   * The minimum percentage of time required to consider this proposal a success.
   * If not set, 100% is assumed.
   */
  minPercentTime?: InputMaybe<Scalars['IntPercent']['input']>;
  /**
   * The toOActivation field is optional. If not specified when creating a
   * proposal, it defaults to `NONE'.
   */
  toOActivation?: InputMaybe<ToOActivation>;
};

/** TAC Category */
export type TacCategory =
  /** TacCategory ActiveGalaxies */
  | 'ACTIVE_GALAXIES'
  /** TacCategory ClustersOfGalaxies */
  | 'CLUSTERS_OF_GALAXIES'
  /** TacCategory Cosmology */
  | 'COSMOLOGY'
  /** TacCategory ExoplanetAtmospheresActivity */
  | 'EXOPLANET_ATMOSPHERES_ACTIVITY'
  /** TacCategory ExoplanetHostStar */
  | 'EXOPLANET_HOST_STAR'
  /** TacCategory ExoplanetOther */
  | 'EXOPLANET_OTHER'
  /** TacCategory ExoplanetRadialVelocities */
  | 'EXOPLANET_RADIAL_VELOCITIES'
  /** TacCategory ExoplanetTransits */
  | 'EXOPLANET_TRANSITS'
  /** TacCategory ExtragalacticOther */
  | 'EXTRAGALACTIC_OTHER'
  /** TacCategory GalacticOther */
  | 'GALACTIC_OTHER'
  /** TacCategory GaseousAstrophysics */
  | 'GASEOUS_ASTROPHYSICS'
  /** TacCategory HighZUniverse */
  | 'HIGH_Z_UNIVERSE'
  /** TacCategory LowZUniverse */
  | 'LOW_Z_UNIVERSE'
  /** TacCategory PlanetaryAtmospheres */
  | 'PLANETARY_ATMOSPHERES'
  /** TacCategory PlanetarySurfaces */
  | 'PLANETARY_SURFACES'
  /** TacCategory SmallBodies */
  | 'SMALL_BODIES'
  /** TacCategory SolarSystemOther */
  | 'SOLAR_SYSTEM_OTHER'
  /** TacCategory StarFormation */
  | 'STAR_FORMATION'
  /** TacCategory StellarAstrophysics */
  | 'STELLAR_ASTROPHYSICS'
  /** TacCategory StellarPopulations */
  | 'STELLAR_POPULATIONS'
  /** TacCategory StellarRemnants */
  | 'STELLAR_REMNANTS';

/** Target description */
export type Target = {
  __typename?: 'Target';
  /** calibration role */
  calibrationRole?: Maybe<CalibrationRole>;
  /** DELETED or PRESENT */
  existence: Existence;
  /** Target ID */
  id: Scalars['TargetId']['output'];
  /** Target name. */
  name: Scalars['NonEmptyString']['output'];
  /** Nonsidereal tracking information, if this is a nonsidereal target */
  nonsidereal?: Maybe<Nonsidereal>;
  /** Program that contains this target */
  program: Program;
  /** Sidereal tracking information, if this is a sidereal target */
  sidereal?: Maybe<Sidereal>;
  /** source profile */
  sourceProfile: SourceProfile;
};


/** Target description */
export type TargetProgramArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};

/** Event sent when a new object is created or updated */
export type TargetEdit = {
  __typename?: 'TargetEdit';
  /** Type of edit */
  editType: EditType;
  targetId: Scalars['TargetId']['output'];
  /** Edited object */
  value?: Maybe<Target>;
};

export type TargetEditInput = {
  /** Program ID */
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Target ID */
  targetId?: InputMaybe<Scalars['TargetId']['input']>;
};

export type TargetEnvironment = {
  __typename?: 'TargetEnvironment';
  /** All the observation's science targets, if any */
  asterism: Array<Target>;
  /** Explicit (if defined) or computed base position at the specified time, if known. */
  basePosition?: Maybe<Coordinates>;
  /** When set, overrides the default base position of the target group */
  explicitBase?: Maybe<Coordinates>;
  /** First, perhaps only, science target in the asterism */
  firstScienceTarget?: Maybe<Target>;
  /**
   * Availability of guide stars during a specified time range.
   * There can be multiple `GuideAvailabilityPeriod`s returned if availability changes over the time
   * range. In this case, the `end` of one period will be the same as the `start` of the next period.
   */
  guideAvailability: Array<GuideAvailabilityPeriod>;
  /**
   * The guide target(s) and related information.
   * If a guide target has been set via `guideTargetName`, that target will be
   * returned. If it not found or not usable, an error will be returned.
   * If no guide target has been set, or it has been invalidated by observation/target
   * changes, Gaia will be searched for the best guide target available.
   */
  guideEnvironment: GuideEnvironment;
  /** The guide star(s) and related information */
  guideEnvironments: Array<GuideEnvironment>;
  /**
   * The name of the guide target, if any, set by `setGuideTargetName`.
   * If the name is no longer valid or a sequence cannot be generated, null will
   * be returned.
   */
  guideTargetName?: Maybe<Scalars['NonEmptyString']['output']>;
};


export type TargetEnvironmentAsterismArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};


export type TargetEnvironmentBasePositionArgs = {
  observationTime: Scalars['Timestamp']['input'];
};


export type TargetEnvironmentFirstScienceTargetArgs = {
  includeDeleted?: Scalars['Boolean']['input'];
};


export type TargetEnvironmentGuideAvailabilityArgs = {
  end: Scalars['Timestamp']['input'];
  start: Scalars['Timestamp']['input'];
};


export type TargetEnvironmentGuideEnvironmentsArgs = {
  observationTime: Scalars['Timestamp']['input'];
};

export type TargetEnvironmentGroup = {
  __typename?: 'TargetEnvironmentGroup';
  /** IDs of observations that use the same constraints */
  observationIds: Array<Scalars['ObservationId']['output']>;
  /** Observations associated with the common value */
  observations: ObservationSelectResult;
  /** Commonly held value across the observations */
  targetEnvironment: TargetEnvironment;
};


export type TargetEnvironmentGroupObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** The matching targetEnvironmentGroup results, limited to a maximum of 1000 entries. */
export type TargetEnvironmentGroupSelectResult = {
  __typename?: 'TargetEnvironmentGroupSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching targetEnvironmentGroups up to the return size limit of 1000 */
  matches: Array<TargetEnvironmentGroup>;
};

/** Target environment editing and creation parameters */
export type TargetEnvironmentInput = {
  asterism?: InputMaybe<Array<Scalars['TargetId']['input']>>;
  /** The explicitBase field may be unset by assigning a null value, or ignored by skipping it altogether */
  explicitBase?: InputMaybe<CoordinatesInput>;
};

export type TargetGroup = {
  __typename?: 'TargetGroup';
  /** Observations associated with the common value */
  observations: ObservationSelectResult;
  /** Link back to program. */
  program: Program;
  /** Commonly held value across the observations */
  target: Target;
};


export type TargetGroupObservationsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ObservationId']['input']>;
  includeDeleted?: Scalars['Boolean']['input'];
};

/** The matching targetGroup results, limited to a maximum of 1000 entries. */
export type TargetGroupSelectResult = {
  __typename?: 'TargetGroupSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching targetGroups up to the return size limit of 1000 */
  matches: Array<TargetGroup>;
};

/** Target properties */
export type TargetPropertiesInput = {
  existence?: InputMaybe<Existence>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  nonsidereal?: InputMaybe<NonsiderealInput>;
  sidereal?: InputMaybe<SiderealInput>;
  sourceProfile?: InputMaybe<SourceProfileInput>;
};

/** The matching target results, limited to a maximum of 1000 entries. */
export type TargetSelectResult = {
  __typename?: 'TargetSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching targets up to the return size limit of 1000 */
  matches: Array<Target>;
};

export type TelescopeConfig = {
  __typename?: 'TelescopeConfig';
  /** Guide State (whether guiding is enabled for this step) */
  guiding: GuideState;
  /** Offset */
  offset: Offset;
};

/** Science step creation input */
export type TelescopeConfigInput = {
  /** Whether guiding is enabled for this step (defaults to 'ENABLED'). */
  guiding?: InputMaybe<GuideState>;
  /** Offset position, which defaults to (0, 0) arcsec. */
  offset?: InputMaybe<OffsetInput>;
};

/**
 * Time Accounting Categories.  Each successful proposal is given one or more
 * time allocations and each allocation has a time accounting category.
 */
export type TimeAccountingCategory =
  /** Argentina */
  | 'AR'
  /** Brazil */
  | 'BR'
  /** Canada */
  | 'CA'
  /** CFHT Exchange */
  | 'CFHT'
  /** Chile */
  | 'CL'
  /** Director's Time */
  | 'DD'
  /** Demo Science */
  | 'DS'
  /** Guaranteed Time */
  | 'GT'
  /** Subaru */
  | 'JP'
  /** Keck Exchange */
  | 'KECK'
  /** Republic of Korea */
  | 'KR'
  /** Large Program */
  | 'LP'
  /** Limited-term Participant */
  | 'LTP'
  /** System Verification */
  | 'SV'
  /** University of Hawaii */
  | 'UH'
  /** United States */
  | 'US';

/** Time and Count exposure time mode. */
export type TimeAndCountExposureTimeMode = {
  __typename?: 'TimeAndCountExposureTimeMode';
  /** S/N at Wavelength. */
  at: Wavelength;
  /** Exposure count. */
  count: Scalars['NonNegInt']['output'];
  /** Exposure time. */
  time: TimeSpan;
};

/** Time And Count exposure time mode parameters */
export type TimeAndCountExposureTimeModeInput = {
  /** S/N at wavelength. */
  at: WavelengthInput;
  /** Exposure count. */
  count: Scalars['NonNegInt']['input'];
  /** Exposure time, which must be greater than zero. */
  time: TimeSpanInput;
};

/**
 * A manual correction to time accounting calculations.  Note that the
 * application of a correction is bounded by a zero time span and the
 * maximum time span.
 */
export type TimeChargeCorrection = {
  __typename?: 'TimeChargeCorrection';
  /** The amount of time to add or subtract (respecting the min and max time span). */
  amount: TimeSpan;
  /** The charge class to be corrected. */
  chargeClass: ChargeClass;
  /** Optional justification for the correction. */
  comment?: Maybe<Scalars['NonEmptyString']['output']>;
  /** When the correction was made. */
  created: Scalars['Timestamp']['output'];
  /** The operation (add or subtract) to perform. */
  op: TimeChargeCorrectionOp;
  /** The user responsible for the change. */
  user?: Maybe<User>;
};

/** Describes a manual correction to time accounting calculations. */
export type TimeChargeCorrectionInput = {
  /** The amount of time to add or subtract (respecting the min and max time span). */
  amount: TimeSpanInput;
  /** The charge class to be corrected. */
  chargeClass: ChargeClass;
  /** Optional justification for the correction. */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** The operation (add or subtract) to perform. */
  op: TimeChargeCorrectionOp;
};

/** Time accounting correction operations. */
export type TimeChargeCorrectionOp =
  | 'ADD'
  | 'SUBTRACT';

/**
 * A time charge discount that is applied when part of the observation is executed
 * outside of nautical twilight boundaries.  The portion that occurs during day
 * time is not charged.
 */
export type TimeChargeDaylightDiscount = TimeChargeDiscount & {
  __typename?: 'TimeChargeDaylightDiscount';
  /** Time amount to discount from the program. */
  amount: TimeSpan;
  /** Additional detail. */
  comment: Scalars['String']['output'];
  /** The interval during which this discount applies. */
  interval: TimestampInterval;
  /**
   * Time amount to discount from the program.
   * @deprecated renamed to 'amount'
   */
  program: TimeSpan;
  /** The site where the observation was executed. */
  site: Site;
};

/**
 * Describes a time charge discount, broken out by charge class.  For each class,
 * the associated time is subtracted and then added to uncharged.
 */
export type TimeChargeDiscount = {
  /** Time amount to discount from the program. */
  amount: TimeSpan;
  /** Additional detail. */
  comment: Scalars['String']['output'];
  /** The interval during which this discount applies. */
  interval: TimestampInterval;
  /**
   * Time amount to discount from the program.
   * @deprecated renamed to 'amount'
   */
  program: TimeSpan;
};

/**
 * Detailed time accounting information for a visit, showing the raw execution
 * time along with any automatically applied discounts (e.g., for bad weather)
 * and manual adjustments made by staff.
 */
export type TimeChargeInvoice = {
  __typename?: 'TimeChargeInvoice';
  /** Any manual corrections to the execution time. */
  corrections: Array<TimeChargeCorrection>;
  /** Automatic discounts for weather loss, fault reports, and non-passing datasets. */
  discounts: Array<TimeChargeDiscount>;
  /** Raw execution time. */
  executionTime: CategorizedTime;
  /**
   * Final time charge once discounts and corrections have been applied to the
   * initial 'executionTime'.
   */
  finalCharge: CategorizedTime;
};

/**
 * A time charge discount that is applied when no data is collected during the
 * entirety of the visit.
 */
export type TimeChargeNoDataDiscount = TimeChargeDiscount & {
  __typename?: 'TimeChargeNoDataDiscount';
  /** Time amount to discount from the program. */
  amount: TimeSpan;
  /** Additional detail. */
  comment: Scalars['String']['output'];
  /** The interval during which this discount applies. */
  interval: TimestampInterval;
  /**
   * Time amount to discount from the program.
   * @deprecated renamed to 'amount'
   */
  program: TimeSpan;
};

/**
 * A time charge discount that is applied when part of the observation is executed
 * after an overlapping chargeable observation is started.  For example, when
 * writing out datasets while slewing to a new target.
 */
export type TimeChargeOverlapDiscount = TimeChargeDiscount & {
  __typename?: 'TimeChargeOverlapDiscount';
  /** Time amount to discount from the program. */
  amount: TimeSpan;
  /** Additional detail. */
  comment: Scalars['String']['output'];
  /** The interval during which this discount applies. */
  interval: TimestampInterval;
  /** The overlapping observation. */
  observation: Observation;
  /**
   * Time amount to discount from the program.
   * @deprecated renamed to 'amount'
   */
  program: TimeSpan;
};

export type TimeChargeQaDiscount = TimeChargeDiscount & {
  __typename?: 'TimeChargeQaDiscount';
  /** Time amount to discount from the program. */
  amount: TimeSpan;
  /** Additional detail. */
  comment: Scalars['String']['output'];
  /** Datasets associated with the discount. */
  datasets: Array<Dataset>;
  /** The interval during which this discount applies. */
  interval: TimestampInterval;
  /**
   * Time amount to discount from the program.
   * @deprecated renamed to 'amount'
   */
  program: TimeSpan;
};

/** Equivalent time amount in several unit options (e.g., 120 seconds or 2 minutes) */
export type TimeSpan = {
  __typename?: 'TimeSpan';
  /** TimeSpan in hours */
  hours: Scalars['BigDecimal']['output'];
  /** TimeSpan as an ISO-8601 string */
  iso: Scalars['String']['output'];
  /** TimeSpan in µs */
  microseconds: Scalars['Long']['output'];
  /** TimeSpan in ms */
  milliseconds: Scalars['BigDecimal']['output'];
  /** TimeSpan in minutes */
  minutes: Scalars['BigDecimal']['output'];
  /** TimeSpan in seconds */
  seconds: Scalars['BigDecimal']['output'];
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

/**
 * Time interval marked by a start 'Timestamp' (inclusive) and an end 'Timestamp'
 * (exclusive).
 */
export type TimestampInterval = {
  __typename?: 'TimestampInterval';
  /** Duration of the interval. */
  duration: TimeSpan;
  /** End time of the interval (exclusive). */
  end: Scalars['Timestamp']['output'];
  /** Start time of the interval (inclusive). */
  start: Scalars['Timestamp']['output'];
};

export type TimingWindow = {
  __typename?: 'TimingWindow';
  /** Window end. If absent, the window will never end. */
  end?: Maybe<TimingWindowEnd>;
  /** Whether this is an INCLUDE or EXCLUDE window. */
  inclusion: TimingWindowInclusion;
  /** Window start time, in UTC. */
  startUtc: Scalars['Timestamp']['output'];
};

/** Timing window end. */
export type TimingWindowEnd = TimingWindowEndAfter | TimingWindowEndAt;

/** Timing window end after a period of time. */
export type TimingWindowEndAfter = {
  __typename?: 'TimingWindowEndAfter';
  /** Window duration. */
  after: TimeSpan;
  /** Window repetetion. If absent, will not repeat. */
  repeat?: Maybe<TimingWindowRepeat>;
};

/** Timing window end at a specified date and time. */
export type TimingWindowEndAt = {
  __typename?: 'TimingWindowEndAt';
  /** Window end date and time, in UTC. */
  atUtc: Scalars['Timestamp']['output'];
};

/** Timing window end parameters. */
export type TimingWindowEndInput = {
  /** Window end after a period of time. If specified, atUtc must be omitted. */
  after?: InputMaybe<TimeSpanInput>;
  /** Window end date and time, in UTC. If specified, after and repeat must be omitted. */
  atUtc?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Repetition parameters. Only allowed if after is specified. If ommitted, window will not repeat. */
  repeat?: InputMaybe<TimingWindowRepeatInput>;
};

/** Timing window inclusion options. Exclusions always take precedence over inclusions. */
export type TimingWindowInclusion =
  /** Exclusion Timing Window */
  | 'EXCLUDE'
  /** Inclusion Timing Window */
  | 'INCLUDE';

/** Timing window creation parameters. */
export type TimingWindowInput = {
  /** Window end parameters. If omitted, the window will never end. */
  end?: InputMaybe<TimingWindowEndInput>;
  /** Whether this is an INCLUDE or EXCLUDE window. */
  inclusion: TimingWindowInclusion;
  /** Window start time, in UTC. */
  startUtc: Scalars['Timestamp']['input'];
};

/** Timing window repetition */
export type TimingWindowRepeat = {
  __typename?: 'TimingWindowRepeat';
  /** Repeat period, counting from the start of the window. */
  period: TimeSpan;
  /** Repetition times. If absent, will repeat forever. */
  times?: Maybe<Scalars['PosInt']['output']>;
};

/** Timing window repetition parameters. */
export type TimingWindowRepeatInput = {
  /** Repeat period, counting from the start of the window. */
  period: TimeSpanInput;
  /** Repetition times. If omitted, will repeat forever. */
  times?: InputMaybe<Scalars['PosInt']['input']>;
};

/** ToO Activation */
export type ToOActivation =
  /** ToOActivation None */
  | 'NONE'
  /** ToOActivation Rapid */
  | 'RAPID'
  /** ToOActivation Standard */
  | 'STANDARD';

export type UnlinkUserInput = {
  /** The program user to unlink the user from. */
  programUserId: Scalars['ProgramUserId']['input'];
};

export type UnlinkUserResult = {
  __typename?: 'UnlinkUserResult';
  /** Returns true if the user was unlinked, false if no such link existed. */
  result: Scalars['Boolean']['output'];
};

/** Un-normalized spectral energy distribution.  Exactly one of the definitions will be non-null. */
export type UnnormalizedSed = {
  __typename?: 'UnnormalizedSed';
  blackBodyTempK?: Maybe<Scalars['PosInt']['output']>;
  coolStar?: Maybe<CoolStarTemperature>;
  fluxDensities?: Maybe<Array<FluxDensityEntry>>;
  fluxDensitiesAttachment?: Maybe<Scalars['AttachmentId']['output']>;
  galaxy?: Maybe<GalaxySpectrum>;
  hiiRegion?: Maybe<HiiRegionSpectrum>;
  planet?: Maybe<PlanetSpectrum>;
  planetaryNebula?: Maybe<PlanetaryNebulaSpectrum>;
  powerLaw?: Maybe<Scalars['BigDecimal']['output']>;
  quasar?: Maybe<QuasarSpectrum>;
  stellarLibrary?: Maybe<StellarLibrarySpectrum>;
};

/** Un-normalized SED input parameters.  Define one value only. */
export type UnnormalizedSedInput = {
  blackBodyTempK?: InputMaybe<Scalars['PosInt']['input']>;
  coolStar?: InputMaybe<CoolStarTemperature>;
  fluxDensities?: InputMaybe<Array<FluxDensity>>;
  fluxDensitiesAttachment?: InputMaybe<Scalars['AttachmentId']['input']>;
  galaxy?: InputMaybe<GalaxySpectrum>;
  hiiRegion?: InputMaybe<HiiRegionSpectrum>;
  planet?: InputMaybe<PlanetSpectrum>;
  planetaryNebula?: InputMaybe<PlanetaryNebulaSpectrum>;
  powerLaw?: InputMaybe<Scalars['BigDecimal']['input']>;
  quasar?: InputMaybe<QuasarSpectrum>;
  stellarLibrary?: InputMaybe<StellarLibrarySpectrum>;
};

/**
 * Input for bulk updating multiple observations.  Select observations
 * with the 'WHERE' input and specify the changes in 'SET'.  All the selected
 * observations must be in the same program.
 */
export type UpdateAsterismsInput = {
  /**
   * Caps the number of results returned to the given value (if additional
   * observations match the WHERE clause they will be updated but not returned).
   */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the values to modify. */
  SET: EditAsterismsPatchInput;
  /**
   * Filters the observations to be updated according to those that match the
   * given constraints.  All must correspond to the same program.
   */
  WHERE?: InputMaybe<WhereObservation>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The result of updating the selected observations, up to `LIMIT` or the maximum
 * of (1000).  If `hasMore` is true, additional observations were modified and not
 * included here.
 */
export type UpdateAsterismsResult = {
  __typename?: 'UpdateAsterismsResult';
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** The edited observations, up to the specified LIMIT or the default maximum of 1000. */
  observations: Array<Observation>;
};

/** Attachment selection and update description.  Use `SET` to specify the changes, `WHERE` to select the attachments to update, and `LIMIT` to control the size of the return value. */
export type UpdateAttachmentsInput = {
  /** Caps the number of results returned to the given value (if additional attachments match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the attachment values to modify. */
  SET: AttachmentPropertiesInput;
  /** Filters the attachments to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereAttachment>;
};

/** The result of updating the selected attachments, up to `LIMIT` or the maximum of (1000).  If `hasMore` is true, additional attachments were modified and not included here. */
export type UpdateAttachmentsResult = {
  __typename?: 'UpdateAttachmentsResult';
  /** The edited attachments, up to the specified LIMIT or the default maximum of 1000. */
  attachments: Array<Attachment>;
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
};

/**
 * Call for proposals selection and update description.  Use `SET` to specify the
 * changes, `WHERE` to select the calls to update, and `LIMIT` to control the
 * size of the return value.
 */
export type UpdateCallsForProposalsInput = {
  /**
   * Caps the number of results returned to the given value (if additional calls
   * match the WHERE clause they will be updated but not returned).
   */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the call for proposals properties to modify. */
  SET: CallForProposalsPropertiesInput;
  /**
   * Filters the calls to be updated according to those that match the given
   * constraints.
   */
  WHERE?: InputMaybe<WhereCallForProposals>;
  /** Set to `true` to include deleted calls. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The result of updating the selected calls for proposals, up to `LIMIT` or the
 * maximum of 1000.  If `hasMore` is true, additional calls were modified and not
 * included here.
 */
export type UpdateCallsForProposalsResult = {
  __typename?: 'UpdateCallsForProposalsResult';
  /**
   * The edited observations, up to the specified LIMIT or the default maximum of
   * 1000.
   */
  callsForProposals: Array<CallForProposals>;
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
};

/** ConfigurationRequest selection and update description.  Use `SET` to specify the changes, `WHERE` to select the requests to update, and `LIMIT` to control the size of the return value. */
export type UpdateConfigurationRequestsInput = {
  /** Caps the number of results returned to the given value (if additional observations match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the observation values to modify. */
  SET: ConfigurationRequestProperties;
  /** Filters the observations to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereConfigurationRequest>;
};

/** The result of updating the selected observations, up to `LIMIT` or the maximum of (1000).  If `hasMore` is true, additional observations were modified and not included here. */
export type UpdateConfigurationRequestsResult = {
  __typename?: 'UpdateConfigurationRequestsResult';
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** The edited observations, up to the specified LIMIT or the default maximum of 1000. */
  requests: Array<ConfigurationRequest>;
};

/** Dataset selection and update description. Use `SET` to specify the changes, `WHERE` to select the datasets to update, and `LIMIT` to control the size of the return value. */
export type UpdateDatasetsInput = {
  /** Caps the number of results returned to the given value (if additional datasets match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the dataset values to modify. */
  SET: DatasetPropertiesInput;
  /** Filters the datasets to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereDataset>;
};

/** The result of updating the selected datasets, up to `LIMIT` or the maximum of (1000).  If `hasMore` is true, additional datasets were modified and not included here. */
export type UpdateDatasetsResult = {
  __typename?: 'UpdateDatasetsResult';
  /** The edited datasets, up to the specified LIMIT or the default maximum of 1000. */
  datasets: Array<Dataset>;
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
};

/** Dataset selection and update description. Use `SET` to specify the changes, `WHERE` to select the groups to update, and `LIMIT` to control the size of the return value. */
export type UpdateGroupsInput = {
  /** Caps the number of results returned to the given value (if additional datasets match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the dataset values to modify. */
  SET: GroupPropertiesInput;
  /** Filters the datasets to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereGroup>;
};

export type UpdateGroupsResult = {
  __typename?: 'UpdateGroupsResult';
  /** The edited groups, up to the specified LIMIT or the default maximum of 1000. */
  groups: Array<Group>;
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
};

/** Observation selection and update description.  Use `SET` to specify the changes, `WHERE` to select the observations to update, and `LIMIT` to control the size of the return value. */
export type UpdateObservationsInput = {
  /** Caps the number of results returned to the given value (if additional observations match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the observation values to modify. */
  SET: ObservationPropertiesInput;
  /** Filters the observations to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereObservation>;
  /** Set to `true` to include deleted observations. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The result of updating the selected observations, up to `LIMIT` or the maximum of (1000).  If `hasMore` is true, additional observations were modified and not included here. */
export type UpdateObservationsResult = {
  __typename?: 'UpdateObservationsResult';
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** The edited observations, up to the specified LIMIT or the default maximum of 1000. */
  observations: Array<Observation>;
};

/** Observation selection and times update description.  Use `SET` to specify the changes, `WHERE` to select the observations to update, and `LIMIT` to control the size of the return value. */
export type UpdateObservationsTimesInput = {
  /** Caps the number of results returned to the given value (if additional observations match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the observation time values to modify. */
  SET: ObservationTimesInput;
  /** Filters the observations to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereObservation>;
  /** Set to `true` to include deleted observations. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Program note selection and update description.  Use `SET" to specify the changes,
 * `WHERE` to select the programs to update, and `LIMIT` to control the size of the
 * return value.
 */
export type UpdateProgramNotesInput = {
  /**
   * Caps the number of results returned to the given value (if additional notes
   * match the WHERE clause they will be updated but not returned).
   */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the program note values to modify. */
  SET: ProgramNotePropertiesInput;
  /**
   * Filters the program notes to be updated according to those that match the
   * given constraints.
   */
  WHERE?: InputMaybe<WhereProgramNote>;
  /** Set to `true` to include deleted notes. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The result of updating the selected notes, up to `LIMIT` or the maximum of
 * (1000).  If `hasMore` is true, additional notes were modified and not included
 * here.
 */
export type UpdateProgramNotesResult = {
  __typename?: 'UpdateProgramNotesResult';
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** The edited notes, up to the specified LIMIT or the default maximum of 1000. */
  programNotes: Array<ProgramNote>;
};

/**
 * Parameters for the 'updateProgramUsers' mutation.  Use 'SET' to specify the
 * changes, 'WHERE' to select the program users to update, and 'LIMIT' to control
 * the size of the return value.
 */
export type UpdateProgramUsersInput = {
  /**
   * Caps the number of results returned to the given value (if additional program
   * users match the 'WHERE' clause they will be updated not returned).
   */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Defines the program user properties to modify. */
  SET: ProgramUserPropertiesInput;
  /** Filters the program users according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereProgramUser>;
};

/**
 * The result of calling 'updateProgramUsers', up to 'LIMIT' or the maximum of
 * 1000.  If 'hasMore' is true, additional program users were modified but not
 * included in the result.
 */
export type UpdateProgramUsersResult = {
  __typename?: 'UpdateProgramUsersResult';
  /** Whether there were additional updated program users that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /**
   * The first program users that were updated (up to the LIMIT specified in the
   * mutation).
   */
  programUsers: Array<ProgramUser>;
};

/** Program selection and update description.  Use `SET` to specify the changes, `WHERE` to select the programs to update, and `LIMIT` to control the size of the return value. */
export type UpdateProgramsInput = {
  /** Caps the number of results returned to the given value (if additional programs match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the program values to modify. */
  SET: ProgramPropertiesInput;
  /** Filters the programs to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereProgram>;
  /** Set to `true` to include deleted programs. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The result of updating the selected programs, up to `LIMIT` or the maximum of (1000).  If `hasMore` is true, additional programs were modified and not included here. */
export type UpdateProgramsResult = {
  __typename?: 'UpdateProgramsResult';
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** The edited programs, up to the specified LIMIT or the default maximum of 1000. */
  programs: Array<Program>;
};

/**
 * Input for updating a proposal.  Identify the program to update with one
 * of `programId`, `proposalReference` or `programReference`.  If more than one of
 * these is specified, all must match.  Use `SET` to specify the new program
 * reference properties.
 */
export type UpdateProposalInput = {
  SET: ProposalPropertiesInput;
  programId?: InputMaybe<Scalars['ProgramId']['input']>;
  programReference?: InputMaybe<Scalars['ProgramReferenceLabel']['input']>;
  proposalReference?: InputMaybe<Scalars['ProposalReferenceLabel']['input']>;
};

/** The result of updating a proposal */
export type UpdateProposalResult = {
  __typename?: 'UpdateProposalResult';
  /** The updated proposal. */
  proposal: Proposal;
};

/** Target selection and update description. Use `SET` to specify the changes, `WHERE` to select the targets to update, and `LIMIT` to control the size of the return value. */
export type UpdateTargetsInput = {
  /** Caps the number of results returned to the given value (if additional targets match the WHERE clause they will be updated but not returned). */
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  /** Describes the target values to modify. */
  SET: TargetPropertiesInput;
  /** Filters the targets to be updated according to those that match the given constraints. */
  WHERE?: InputMaybe<WhereTarget>;
  /** Set to `true` to include deleted targets */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The result of updating the selected targets, up to `LIMIT` or the maximum of (1000).  If `hasMore` is true, additional targets were modified and not included here. */
export type UpdateTargetsResult = {
  __typename?: 'UpdateTargetsResult';
  /** `true` when there were additional edits that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** The edited targets, up to the specified LIMIT or the default maximum of 1000. */
  targets: Array<Target>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['UserId']['output'];
  orcidId?: Maybe<Scalars['String']['output']>;
  profile: UserProfile;
  serviceName?: Maybe<Scalars['String']['output']>;
  type: UserType;
};

/** Invitation */
export type UserInvitation = {
  __typename?: 'UserInvitation';
  /** The email sent for the invitation. */
  email?: Maybe<Email>;
  /** Id */
  id: Scalars['UserInvitationId']['output'];
  /** User who issued the invitation. */
  issuer: User;
  /** The ProgramUser associated with the invitation. */
  programUser: ProgramUser;
  /** Recipient email address. */
  recipientEmail: Scalars['EmailAddress']['output'];
  /** Invitation status. */
  status: UserInvitationStatus;
};

export type UserInvitationStatus =
  /** This invitation was declined. */
  | 'DECLINED'
  /** This invitation has not been used. */
  | 'PENDING'
  /** This invitation was redeemed. */
  | 'REDEEMED'
  /** This invitation was revoked, and can no longer be redeemed. */
  | 'REVOKED';

export type UserProfile = {
  __typename?: 'UserProfile';
  creditName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
};

export type UserProfileInput = {
  creditName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
};

export type UserType =
  | 'GUEST'
  | 'SERVICE'
  | 'STANDARD';

/**
 * A visit is recorded whenever any part of an observation is attempted.  There
 * is a specific static configuration for each instrument, only one of which is
 * defined.  The same static configuration holds for the entire visit.
 */
export type Visit = {
  __typename?: 'Visit';
  /** Executed (or at least partially executed) atom records for this visit. */
  atomRecords: AtomRecordSelectResult;
  /** Created by Observe at time. */
  created: Scalars['Timestamp']['output'];
  /** Datasets associated with this visit. */
  datasets: DatasetSelectResult;
  /** Execution events associated with this visit. */
  events: ExecutionEventSelectResult;
  /**
   * GmosNorth static instrument configuration, for GMOS North visits.  See the
   * `instrument` discriminator.  This will be null unless the instrument is
   * `GMOS_NORTH`.
   */
  gmosNorth?: Maybe<GmosNorthStatic>;
  /**
   * GmosSouth static instrument configuration, for GMOS South visits.  See the
   * `instrument` discriminator.  This will be null unless the instrument is
   * `GMOS_SOUTH`.
   */
  gmosSouth?: Maybe<GmosSouthStatic>;
  /** Visit id. */
  id: Scalars['VisitId']['output'];
  /**
   * Instrument in use for this visit.  This serves as a discriminator between the
   * various specific static instrument configuration types (e.g.,
   * `gmosNorth: GmosNorthStatic`.)
   */
  instrument: Instrument;
  /** Time interval during which this visit executed. */
  interval?: Maybe<TimestampInterval>;
  /** Observation associated with this visit. */
  observation: Observation;
  /** Site of the visit. */
  site: Site;
  /** Time accounting details for this visit. */
  timeChargeInvoice: TimeChargeInvoice;
};


/**
 * A visit is recorded whenever any part of an observation is attempted.  There
 * is a specific static configuration for each instrument, only one of which is
 * defined.  The same static configuration holds for the entire visit.
 */
export type VisitAtomRecordsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['Timestamp']['input']>;
};


/**
 * A visit is recorded whenever any part of an observation is attempted.  There
 * is a specific static configuration for each instrument, only one of which is
 * defined.  The same static configuration holds for the entire visit.
 */
export type VisitDatasetsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['DatasetId']['input']>;
};


/**
 * A visit is recorded whenever any part of an observation is attempted.  There
 * is a specific static configuration for each instrument, only one of which is
 * defined.  The same static configuration holds for the entire visit.
 */
export type VisitEventsArgs = {
  LIMIT?: InputMaybe<Scalars['NonNegInt']['input']>;
  OFFSET?: InputMaybe<Scalars['ExecutionEventId']['input']>;
};

/** Matching visit results, limited to a maximum of 1000 entries. */
export type VisitSelectResult = {
  __typename?: 'VisitSelectResult';
  /** `true` when there were additional matches that were not returned. */
  hasMore: Scalars['Boolean']['output'];
  /** Matching visits up to the return size limit of 1000. */
  matches: Array<Visit>;
};

/** Water vapor */
export type WaterVapor =
  /** WaterVapor Dry */
  | 'DRY'
  /** WaterVapor Median */
  | 'MEDIAN'
  /** WaterVapor VeryDry */
  | 'VERY_DRY'
  /** WaterVapor Wet */
  | 'WET';

export type Wavelength = {
  __typename?: 'Wavelength';
  /** Wavelength in Å */
  angstroms: Scalars['PosBigDecimal']['output'];
  /** Wavelength in µm */
  micrometers: Scalars['PosBigDecimal']['output'];
  /** Wavelength in nm */
  nanometers: Scalars['PosBigDecimal']['output'];
  /** Wavelength in pm */
  picometers: Scalars['PosInt']['output'];
};

/**
 * A WavelengthDither is expressed in the same units as Wavelength but
 * constrained to positive values.  It expresses an "offset" to a given
 * Wavelength.
 */
export type WavelengthDither = {
  __typename?: 'WavelengthDither';
  /** Wavelength dither in Å */
  angstroms: Scalars['BigDecimal']['output'];
  /** Wavelength dither in µm */
  micrometers: Scalars['BigDecimal']['output'];
  /** Wavelength dither in nm */
  nanometers: Scalars['BigDecimal']['output'];
  /** Wavelength dither in pm */
  picometers: Scalars['Int']['output'];
};

/** WavelengthDither, choose one of the available units */
export type WavelengthDitherInput = {
  angstroms?: InputMaybe<Scalars['BigDecimal']['input']>;
  micrometers?: InputMaybe<Scalars['BigDecimal']['input']>;
  nanometers?: InputMaybe<Scalars['BigDecimal']['input']>;
  picometers?: InputMaybe<Scalars['Int']['input']>;
};

/** Wavelength, choose one of the available units */
export type WavelengthInput = {
  angstroms?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  micrometers?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  nanometers?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  picometers?: InputMaybe<Scalars['PosInt']['input']>;
};

export type WhereAngle = {
  AND?: InputMaybe<Array<WhereAngle>>;
  NOT?: InputMaybe<WhereAngle>;
  OR?: InputMaybe<Array<WhereAngle>>;
  arcminutes?: InputMaybe<WhereOrderBigDecimal>;
  arcseconds?: InputMaybe<WhereOrderBigDecimal>;
  degrees?: InputMaybe<WhereOrderBigDecimal>;
  hours?: InputMaybe<WhereOrderBigDecimal>;
  microarcseconds?: InputMaybe<WhereOrderLong>;
  microseconds?: InputMaybe<WhereOrderBigDecimal>;
  milliarcseconds?: InputMaybe<WhereOrderBigDecimal>;
  milliseconds?: InputMaybe<WhereOrderBigDecimal>;
  minutes?: InputMaybe<WhereOrderBigDecimal>;
  seconds?: InputMaybe<WhereOrderBigDecimal>;
};

/** Attachment filter options. All specified items must match. */
export type WhereAttachment = {
  /** A list of nested attachment filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereAttachment>>;
  /** A nested attachment filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereAttachment>;
  /** A list of nested attachment filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereAttachment>>;
  /** Matches the attachment type */
  attachmentType?: InputMaybe<WhereAttachmentType>;
  /** Matches whether the attachment has been checked or not */
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches the description. */
  description?: InputMaybe<WhereOptionString>;
  /** Matches the attachment file name. */
  fileName?: InputMaybe<WhereString>;
  /** Matches the attachment ID. */
  id?: InputMaybe<WhereOrderAttachmentId>;
  /** Matches the program containing the attachment. */
  program?: InputMaybe<WhereProgram>;
};

/**
 * Filters on equality of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'EQ: FINDER'
 */
export type WhereAttachmentType = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<AttachmentType>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<AttachmentType>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<AttachmentType>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<AttachmentType>>;
};

export type WhereBoolean = {
  /** Matches if the boolean is the provided value. */
  EQ?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhereCallForProposals = {
  /**
   * A list of nested call for proposals filters that all must match in order for
   * the AND group as a whole to match.
   */
  AND?: InputMaybe<Array<WhereCallForProposals>>;
  /**
   * A nested call for proposals filter that must not match in order for the NOT
   * itself to match.
   */
  NOT?: InputMaybe<WhereCallForProposals>;
  /**
   * A list of nested call for proposals filters where any one match causes the
   * entire OR group as a whole to match.
   */
  OR?: InputMaybe<Array<WhereCallForProposals>>;
  /** Matches the active period end. */
  activeEnd?: InputMaybe<WhereOrderDate>;
  /** Matches the active period start. */
  activeStart?: InputMaybe<WhereOrderDate>;
  /** Matches whether non-partner PIs may participate. */
  allowsNonPartnerPi?: InputMaybe<WhereBoolean>;
  /** Matches the call for propsals id. */
  id?: InputMaybe<WhereOrderCallForProposalsId>;
  /** Matches whether the call is still open for some partner. */
  isOpen?: InputMaybe<WhereBoolean>;
  /** Matches the call for proposals semester. */
  semester?: InputMaybe<WhereOrderSemester>;
  /** Matches the call for proposals type. */
  type?: InputMaybe<WhereEqCallForProposalsType>;
};

/** Configuration request filter options.  All specified items must match. */
export type WhereConfigurationRequest = {
  /** A list of nested filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereConfigurationRequest>>;
  /** A nested filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereConfigurationRequest>;
  /** A list of nested filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereConfigurationRequest>>;
  /** Matches the configuration request id. */
  id?: InputMaybe<WhereOrderConfigurationRequestId>;
  /** Matches the associated program. */
  program?: InputMaybe<WhereProgram>;
  /** Matches the configuration request status. */
  status?: InputMaybe<WhereOrderConfigurationRequestStatus>;
};

/** Dataset filter options.  All specified items must match. */
export type WhereDataset = {
  /** A list of nested dataset filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereDataset>>;
  /** A nested dataset filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereDataset>;
  /** A list of nested dataset filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereDataset>>;
  /** Matches the dataset comment. */
  comment?: InputMaybe<WhereOptionString>;
  /** Matches the dataset file name. */
  filename?: InputMaybe<WhereString>;
  /** Matches indicated dataset(s). */
  id?: InputMaybe<WhereOrderDatasetId>;
  /** Matches the particular dataset index within the step. */
  index?: InputMaybe<WhereOrderPosInt>;
  /**
   * If `true`, matches when the dataset has been written (or not). In particular, a dataset
   * is considered written when a corresponding `END_WRITE` dataset event has been
   * recieved.
   */
  isWritten?: InputMaybe<WhereBoolean>;
  /** Matches all datasets associated with the observation. */
  observation?: InputMaybe<WhereObservation>;
  /** Matches the dataset QA state. */
  qaState?: InputMaybe<WhereOptionEqQaState>;
  /** Matches the dataset reference, if any. */
  reference?: InputMaybe<WhereDatasetReference>;
  /** Matches all datasets associated with the step. */
  stepId?: InputMaybe<WhereEqStepId>;
};

export type WhereDatasetReference = {
  /** Matches if the dataset reference is not defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches the exposure index. */
  exposureIndex?: InputMaybe<WhereOrderPosInt>;
  /** Matches the dataset reference label. */
  label?: InputMaybe<WhereString>;
  /** Matches the observation reference. */
  observation?: InputMaybe<WhereObservationReference>;
  /** Matches the step index. */
  stepIndex?: InputMaybe<WhereOrderPosInt>;
};

/**
 * Filters on equality (or not) of the call for proposals type.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereEqCallForProposalsType = {
  /** Matches if the call for proposals type is exactly the supplied value. */
  EQ?: InputMaybe<CallForProposalsType>;
  /** Matches if the call for proposals type is any of the supplied options. */
  IN?: InputMaybe<Array<CallForProposalsType>>;
  /** Matches if the call for proposals type is not the supplied value. */
  NEQ?: InputMaybe<CallForProposalsType>;
  /** Matches if the call for proposals type is none of the supplied values. */
  NIN?: InputMaybe<Array<CallForProposalsType>>;
};

export type WhereEqExecutionEventType = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<ExecutionEventType>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<ExecutionEventType>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<ExecutionEventType>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<ExecutionEventType>>;
};

export type WhereEqFocalPlane = {
  /** Matches if the focal plane option is exactly the supplied value. */
  EQ?: InputMaybe<FocalPlane>;
  /** Matches if the focal plane option is any of the supplied values. */
  IN?: InputMaybe<Array<FocalPlane>>;
  /** Matches if the focal plane option is not the supplied value. */
  NEQ?: InputMaybe<FocalPlane>;
  /** Matches if the focal plane option is none of the supplied values. */
  NIN?: InputMaybe<Array<FocalPlane>>;
};

/**
 * Filters on equality (or not) of the instrument and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "GMOS_SOUTH"' will match when the property value is "GMOS_SOUTH".
 * Defining, `EQ`, `NEQ` etc. implies `IS_NULL` is `false`.
 */
export type WhereEqInstrument = {
  /** Matches if the instrument is exactly the supplied value. */
  EQ?: InputMaybe<Instrument>;
  /** Matches if the instrument is any of the supplied options. */
  IN?: InputMaybe<Array<Instrument>>;
  /** Matches if the instrument is not the supplied value. */
  NEQ?: InputMaybe<Instrument>;
  /** Matches if the instrument is none of the supplied values. */
  NIN?: InputMaybe<Array<Instrument>>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".
 */
export type WhereEqPartner = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Partner>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Partner>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Partner>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Partner>>;
};

/**
 * Filters on equality (or not) of the partner link type. All supplied criteria
 * must match, but usually only one is selected.
 */
export type WhereEqPartnerLinkType = {
  /** Matches if the partner link type is exactly the supplied value. */
  EQ?: InputMaybe<PartnerLinkType>;
  /** Matches if the partner link type is any of the supplied options. */
  IN?: InputMaybe<Array<PartnerLinkType>>;
  /** Matches if the partner link type is not the supplied value. */
  NEQ?: InputMaybe<PartnerLinkType>;
  /** Matches if the partner link type is none of the supplied values. */
  NIN?: InputMaybe<Array<PartnerLinkType>>;
};

/**
 * Filters on equality (or not) of the program type and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "CALIBRATION"' will match when the type is "CALIBRATION".
 */
export type WhereEqProgramType = {
  /** Matches if the program type is exactly the supplied value. */
  EQ?: InputMaybe<ProgramType>;
  /** Matches if the program type is any of the supplied options. */
  IN?: InputMaybe<Array<ProgramType>>;
  /** Matches if the program type is not the supplied value. */
  NEQ?: InputMaybe<ProgramType>;
  /** Matches if the program type is none of the supplied values. */
  NIN?: InputMaybe<Array<ProgramType>>;
};

/**
 * Filters on equality (or not) of the program user role type and the supplied
 * criteria. All supplied criteria must match, but usually only one is selected.
 */
export type WhereEqProgramUserRole = {
  /** Matches if the role is exactly the supplied value. */
  EQ?: InputMaybe<ProgramUserRole>;
  /** Matches if the role is any of the supplied options. */
  IN?: InputMaybe<Array<ProgramUserRole>>;
  /** Matches if the role is not the supplied value. */
  NEQ?: InputMaybe<ProgramUserRole>;
  /** Matches if the role is none of the supplied values. */
  NIN?: InputMaybe<Array<ProgramUserRole>>;
};

/**
 * Filters on equality of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'EQ: "SUBMITTED'
 */
export type WhereEqProposalStatus = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<ProposalStatus>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<ProposalStatus>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<ProposalStatus>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<ProposalStatus>>;
};

/**
 * Filters on equality (or not) of the science subtype and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "QUEUE"' will match when the property value is "QUEUE".
 * Defining, `EQ`, `NEQ` etc. implies `IS_NULL` is `false`.
 */
export type WhereEqScienceSubtype = {
  /** Matches if the subtype is exactly the supplied value. */
  EQ?: InputMaybe<ScienceSubtype>;
  /** Matches if the subtype is any of the supplied options. */
  IN?: InputMaybe<Array<ScienceSubtype>>;
  /** Matches if the subtype is not the supplied value. */
  NEQ?: InputMaybe<ScienceSubtype>;
  /** Matches if the subtype is none of the supplied values. */
  NIN?: InputMaybe<Array<ScienceSubtype>>;
};

/**
 * Filters on equality (or not) of the site property. All supplied criteria must
 * match, but usually only one is selected.
 */
export type WhereEqSite = {
  /** Matches if the site is exactly the supplied value. */
  EQ?: InputMaybe<Site>;
  /** Matches if the site is any of the supplied options. */
  IN?: InputMaybe<Array<Site>>;
  /** Matches if the site is not the supplied value. */
  NEQ?: InputMaybe<Site>;
  /** Matches if the site is none of the supplied values. */
  NIN?: InputMaybe<Array<Site>>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".
 */
export type WhereEqStepId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['StepId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['StepId']['input']>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['StepId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['StepId']['input']>>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".
 */
export type WhereEqToOActivation = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<ToOActivation>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<ToOActivation>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<ToOActivation>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<ToOActivation>>;
};

/**
 * Filters on equality (or not) of the user type value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.
 */
export type WhereEqUserType = {
  /** Matches if the user type is exactly the supplied value. */
  EQ?: InputMaybe<UserType>;
  /** Matches if the user type is any of the supplied options. */
  IN?: InputMaybe<Array<UserType>>;
  /** Matches if the user type is not the supplied value. */
  NEQ?: InputMaybe<UserType>;
  /** Matches if the user type is none of the supplied values. */
  NIN?: InputMaybe<Array<UserType>>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".
 */
export type WhereEqVisitId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['VisitId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['VisitId']['input']>>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['VisitId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['VisitId']['input']>>;
};

/** ExecutionEvent filter options. */
export type WhereExecutionEvent = {
  /**
   * A list of nested execution event filters that all must match in order for the
   * AND group as a whole to match.
   */
  AND?: InputMaybe<Array<WhereExecutionEvent>>;
  /**
   * A nested execution event filter that must not match in order for the NOT
   * itself to match.
   */
  NOT?: InputMaybe<WhereExecutionEvent>;
  /**
   * A list of nested execution event filters where any one match causes the
   * entire OR group as a whole to match.
   */
  OR?: InputMaybe<Array<WhereExecutionEvent>>;
  /** Matches on the dataset id, for dataset events. */
  datasetId?: InputMaybe<WhereOrderDatasetId>;
  /** Matches on the dataset stage, for dataset events. */
  datasetStage?: InputMaybe<WhereOrderDatasetStage>;
  /** Matches on execution event type */
  eventType?: InputMaybe<WhereEqExecutionEventType>;
  /** Matches on the execution event id */
  id?: InputMaybe<WhereOrderExecutionEventId>;
  /** Matches on observation */
  observation?: InputMaybe<WhereObservation>;
  /** Matches on event reception time */
  received?: InputMaybe<WhereOrderTimestamp>;
  /** Matches the sequence command type, for sequence events. */
  sequenceCommand?: InputMaybe<WhereOrderSequenceCommand>;
  /** Matches the slew stage, for slew events. */
  slewStage?: InputMaybe<WhereOrderSlewStage>;
  /** Matches on the step id, for step and dataset events. */
  stepId?: InputMaybe<WhereEqStepId>;
  /** Matches on the step stage, for step events. */
  stepStage?: InputMaybe<WhereOrderStepStage>;
  /** Matches on the visit id */
  visitId?: InputMaybe<WhereEqVisitId>;
};

export type WhereGroup = {
  /** A list of nested group filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereGroup>>;
  /** A nested group filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereGroup>;
  /** A list of nested group filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereGroup>>;
  description?: InputMaybe<WhereOptionString>;
  id?: InputMaybe<WhereOrderGroupId>;
  name?: InputMaybe<WhereOptionString>;
};

/** Observation filter options.  All specified items must match. */
export type WhereObservation = {
  /** A list of nested observation filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereObservation>>;
  /** A nested observation filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereObservation>;
  /** A list of nested observation filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereObservation>>;
  /** Matches the observation id. */
  id?: InputMaybe<WhereOrderObservationId>;
  /** Matches on the instrument in use, if any. */
  instrument?: InputMaybe<WhereOptionEqInstrument>;
  /** Matches the associated program. */
  program?: InputMaybe<WhereProgram>;
  /** Matches the observation reference, if any. */
  reference?: InputMaybe<WhereObservationReference>;
  /** Matches the observation science band. */
  scienceBand?: InputMaybe<WhereOptionOrderScienceBand>;
  /** Matches on the site associated with the observation's instrument, if any. */
  site?: InputMaybe<WhereOptionEqSite>;
  /** Matches the subtitle of the observation. */
  subtitle?: InputMaybe<WhereOptionString>;
};

export type WhereObservationReference = {
  /** Matches if the observation reference is not defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches the observation index. */
  index?: InputMaybe<WhereOrderPosInt>;
  /** Matches the observation reference label. */
  label?: InputMaybe<WhereString>;
  /** Matches the program reference. */
  program?: InputMaybe<WhereProgramReference>;
};

export type WhereOptionBoolean = {
  /** Matches if the boolean is the provided value. */
  EQ?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the value is not defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".  Defining, `EQ`,
 * `NEQ` etc. implies `IS_NULL` is `false`.
 */
export type WhereOptionEqCalibrationRole = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<CalibrationRole>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<CalibrationRole>>;
  /**
   * When `true`, matches if the calibration role is not defined. When `false`
   * matches if the calibration role is defined.
   */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<CalibrationRole>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<CalibrationRole>>;
};

/**
 * Filters on equality (or not) of the user educational status and the supplied
 * criteria. All supplied criteria must match, but usually only one is selected.
 */
export type WhereOptionEqEducationalStatus = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<EducationalStatus>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<EducationalStatus>>;
  /** When `true`, matches if the QaState is not defined. When `false` matches if the QaState is defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<EducationalStatus>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<EducationalStatus>>;
};

/**
 * Filters on equality (or not) of the user reported geender and the supplied
 * criteria. All supplied criteria must match, but usually only one is selected.
 */
export type WhereOptionEqGender = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Gender>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Gender>>;
  /** When `true`, matches if the QaState is not defined. When `false` matches if the QaState is defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Gender>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Gender>>;
};

/**
 * Filters on equality (or not) of the instrument. All supplied criteria must
 * match, but usually only one is selected.
 */
export type WhereOptionEqInstrument = {
  /** Matches if the instrument is exactly the supplied value. */
  EQ?: InputMaybe<Instrument>;
  /** Matches if the instrument is any of the supplied options. */
  IN?: InputMaybe<Array<Instrument>>;
  /**
   * When `true`, matches if the instrument is not defined. When `false` matches if
   * the instrument is defined.
   */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the instrument is not the supplied value. */
  NEQ?: InputMaybe<Instrument>;
  /** Matches if the instrument is none of the supplied values. */
  NIN?: InputMaybe<Array<Instrument>>;
};

/**
 * Filters on equality (or not) of the (optional) partner. All supplied criteria
 * must match, but usually only one is selected.
 */
export type WhereOptionEqPartner = {
  /** Matches if the partrner is exactly the supplied value. */
  EQ?: InputMaybe<Partner>;
  /** Matches if the partner is any of the supplied options. */
  IN?: InputMaybe<Array<Partner>>;
  /**
   * When `true`, matches if the partner is not defined. When `false` matches if
   * the partner is defined.
   */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the partner is not the supplied value. */
  NEQ?: InputMaybe<Partner>;
  /** Matches if the partner is none of the supplied values. */
  NIN?: InputMaybe<Array<Partner>>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".  Defining, `EQ`,
 * `NEQ` etc. implies `IS_NULL` is `false`.
 */
export type WhereOptionEqQaState = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<DatasetQaState>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<DatasetQaState>>;
  /** When `true`, matches if the QaState is not defined. When `false` matches if the QaState is defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<DatasetQaState>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<DatasetQaState>>;
};

/**
 * Filters on equality of an optional site property.  All supplied criteria must
 * match, but usually only one is selected.
 */
export type WhereOptionEqSite = {
  /** Matches if the site is exactly the supplied value. */
  EQ?: InputMaybe<Site>;
  /** Matches if the site is any of the supplied options. */
  IN?: InputMaybe<Array<Site>>;
  /**
   * When `true`, matches if the site is not defined. When `false` matches if the
   * site role is defined.
   */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the site is not the supplied value. */
  NEQ?: InputMaybe<Site>;
  /** Matches if the site is none of the supplied values. */
  NIN?: InputMaybe<Array<Site>>;
};

/**
 * Filters on equality (or not) of the SpectroscopyCapabilities property. All
 * supplied criteria must match, but usually only one is selected.
 */
export type WhereOptionEqSpectroscopyCapabilities = {
  /** Matches if the spectroscopy capability is the supplied value. */
  EQ?: InputMaybe<SpectroscopyCapabilities>;
  /** Matches if the spectroscopy capability is any one of the supplied values. */
  IN?: InputMaybe<Array<SpectroscopyCapabilities>>;
  /** When `true`, matches if the spectroscopy capability value is not defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Matches if the spectroscopy capability is anything other than the supplied
   * value.
   */
  NEQ?: InputMaybe<SpectroscopyCapabilities>;
  /** Matches if the spectroscopy capability is not any one of the supplied values. */
  NIN?: InputMaybe<Array<SpectroscopyCapabilities>>;
};

/**
 * Filters on equality (or not) of the property value and the supplied criteria.
 * All supplied criteria must match, but usually only one is selected.  E.g.
 * 'EQ = "Foo"' will match when the property value is "FOO".  Defining, `EQ`,
 * `NEQ` etc. implies `IS_NULL` is `false`.
 */
export type WhereOptionEqTacCategory = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<TacCategory>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<TacCategory>>;
  /** When `true`, matches if the TacCategory is not defined. When `false` matches if the TacCategory is defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<TacCategory>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<TacCategory>>;
};

/**
 * Filters on equality or order comparisons of science bands.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOptionOrderScienceBand = {
  /** Matches if the science band is exactly the supplied value. */
  EQ?: InputMaybe<ScienceBand>;
  /** Matches if the science band is ordered after (>) the supplied value. */
  GT?: InputMaybe<ScienceBand>;
  /** Matches if the science band is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<ScienceBand>;
  /** Matches if the science band is any of the supplied options. */
  IN?: InputMaybe<Array<ScienceBand>>;
  /**
   * When `true`, matches if the science band is not defined. When `false` matches
   * if the science band is defined.
   */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the science band is ordered before (<) the supplied value. */
  LT?: InputMaybe<ScienceBand>;
  /** Matches if the science band is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<ScienceBand>;
  /** Matches if the science band is not the supplied value. */
  NEQ?: InputMaybe<ScienceBand>;
  /** Matches if the science band is none of the supplied values. */
  NIN?: InputMaybe<Array<ScienceBand>>;
};

/** String matching options. */
export type WhereOptionString = {
  EQ?: InputMaybe<Scalars['NonEmptyString']['input']>;
  IN?: InputMaybe<Array<Scalars['NonEmptyString']['input']>>;
  /** When `true` the string must not be defined.  When `false` the string must be defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Performs string matching with wildcard patterns.  The entire string must be matched.  Use % to match a sequence of any characters and _ to match any single character. */
  LIKE?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Set to `true` (the default) for case sensitive matches, `false` to ignore case. */
  MATCH_CASE?: InputMaybe<Scalars['Boolean']['input']>;
  NEQ?: InputMaybe<Scalars['NonEmptyString']['input']>;
  NIN?: InputMaybe<Array<Scalars['NonEmptyString']['input']>>;
  /** Performs string matching with wildcard patterns.  The entire string must not match.  Use % to match a sequence of any characters and _ to match any single character. */
  NLIKE?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderAttachmentId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['AttachmentId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['AttachmentId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['AttachmentId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['AttachmentId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['AttachmentId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['AttachmentId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['AttachmentId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['AttachmentId']['input']>>;
};

/**
 * Filters on equality or order comparisons of BigDecimal properties.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderBigDecimal = {
  /** Matches if the BigDecimal is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Matches if the BigDecimal is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Matches if the BigDecimal is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Matches if the BigDecimal is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Matches if the BigDecimal is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Matches if the BigDecimal is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Matches if the BigDecimal is not the supplied value. */
  NEQ?: InputMaybe<Scalars['BigDecimal']['input']>;
  /** Matches if the BigDecimal is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

/**
 * Filters on equality or order comparisons of call for proposals ids.  All
 * supplied criteria must match, but usually only one is selected.
 */
export type WhereOrderCallForProposalsId = {
  /** Matches if the id is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** Matches if the id is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** Matches if the id is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** Matches if the id is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['CallForProposalsId']['input']>>;
  /** Matches if the id is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** Matches if the id is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** Matches if the id is not the supplied value. */
  NEQ?: InputMaybe<Scalars['CallForProposalsId']['input']>;
  /** Matches if the id is none of the supplied options. */
  NIN?: InputMaybe<Array<Scalars['CallForProposalsId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderConfigurationRequestId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['ConfigurationRequestId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['ConfigurationRequestId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['ConfigurationRequestId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderConfigurationRequestStatus = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<ConfigurationRequestStatus>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<ConfigurationRequestStatus>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<ConfigurationRequestStatus>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<ConfigurationRequestStatus>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<ConfigurationRequestStatus>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<ConfigurationRequestStatus>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<ConfigurationRequestStatus>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<ConfigurationRequestStatus>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderDatasetId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['DatasetId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['DatasetId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['DatasetId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['DatasetId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['DatasetId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['DatasetId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['DatasetId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['DatasetId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderDatasetStage = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<DatasetStage>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<DatasetStage>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<DatasetStage>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<DatasetStage>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<DatasetStage>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<DatasetStage>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<DatasetStage>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<DatasetStage>>;
};

/**
 * Filters on equality or order comparisons of the Date property.  All supplied
 * criteria must match, but usually only one is selected.  Dates are specified
 * in ISO 8601 format (e.g., YYYY-MM-DD).
 */
export type WhereOrderDate = {
  /** Matches if the date is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['Date']['input']>;
  /** Matches if the date is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['Date']['input']>;
  /** Matches if the date is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['Date']['input']>;
  /** Matches if the date value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  /** Matches if the date is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['Date']['input']>;
  /** Matches if the date is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['Date']['input']>;
  /** Matches if the date is not the supplied value. */
  NEQ?: InputMaybe<Scalars['Date']['input']>;
  /** Matches if the date value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderExecutionEventId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['ExecutionEventId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['ExecutionEventId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['ExecutionEventId']['input']>>;
};

export type WhereOrderGroupId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['GroupId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['GroupId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['GroupId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['GroupId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['GroupId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['GroupId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['GroupId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['GroupId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the integer property.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderInt = {
  /** Matches if the integer is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['Int']['input']>;
  /** Matches if the integer is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['Int']['input']>;
  /** Matches if the integer is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['Int']['input']>;
  /** Matches if the integer is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Matches if the integer is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['Int']['input']>;
  /** Matches if the integer is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['Int']['input']>;
  /** Matches if the integer is not the supplied value. */
  NEQ?: InputMaybe<Scalars['Int']['input']>;
  /** Matches if the integer is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/**
 * Filters on equality or order comparisons of long property.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderLong = {
  /** Matches if the Long is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['Long']['input']>;
  /** Matches if the Long is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['Long']['input']>;
  /** Matches if the Long is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['Long']['input']>;
  /** Matches if the Long is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['Long']['input']>>;
  /** Matches if the Long is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['Long']['input']>;
  /** Matches if the Long is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['Long']['input']>;
  /** Matches if the Long is not the supplied value. */
  NEQ?: InputMaybe<Scalars['Long']['input']>;
  /** Matches if the Long is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['Long']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderObservationId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['ObservationId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['ObservationId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['ObservationId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['ObservationId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['ObservationId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['ObservationId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['ObservationId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['ObservationId']['input']>>;
};

/**
 * Filters on equality or order comparisons of PosBigDecimal properties.  All
 * supplied criteria must match, but usually only one is selected.
 */
export type WhereOrderPosBigDecimal = {
  /** Matches if the PosBigDecimal is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  /** Matches if the PosBigDecimal is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  /** Matches if the PosBigDecimal is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  /** Matches if the PosBigDecimal is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['PosBigDecimal']['input']>>;
  /** Matches if the PosBigDecimal is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  /** Matches if the PosBigDecimal is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  /** Matches if the PosBigDecimal is not the supplied value. */
  NEQ?: InputMaybe<Scalars['PosBigDecimal']['input']>;
  /** Matches if the PosBigDecimal is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['PosBigDecimal']['input']>>;
};

/**
 * Filters on equality or order comparisons of the PosInt property.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderPosInt = {
  /** Matches if the PosInt is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['PosInt']['input']>;
  /** Matches if the PosInt is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['PosInt']['input']>;
  /** Matches if the PosInt is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['PosInt']['input']>;
  /** Matches if the PosInt is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['PosInt']['input']>>;
  /** Matches if the PosInt is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['PosInt']['input']>;
  /** Matches if the PosInt is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['PosInt']['input']>;
  /** Matches if the PosInt is not the supplied value. */
  NEQ?: InputMaybe<Scalars['PosInt']['input']>;
  /** Matches if the PosInt is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['PosInt']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderProgramId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['ProgramId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['ProgramId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['ProgramId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the program note Id. All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderProgramNoteId = {
  /** Matches if the program note id is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  /** Matches if the program note id is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  /** Matches if the program note id is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  /** Matches if the program note id is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['ProgramNoteId']['input']>>;
  /** Matches if the program note is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  /** Matches if the program note id is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  /** Matches if the program note id is not the supplied value. */
  NEQ?: InputMaybe<Scalars['ProgramNoteId']['input']>;
  /** Matches if the program note id is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['ProgramNoteId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the program user id.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderProgramUserId = {
  /** Matches if the program user id is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['ProgramUserId']['input']>;
  /** Matches if the program user id is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['ProgramUserId']['input']>;
  /**
   * Matches if the program user id is ordered after or equal (>=) the supplied
   * value.
   */
  GTE?: InputMaybe<Scalars['ProgramUserId']['input']>;
  /** Matches if the program user id is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['ProgramUserId']['input']>>;
  /** Matches if the program user id is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['ProgramUserId']['input']>;
  /**
   * Matches if the program user id is ordered before or equal (<=) the supplied
   * value.
   */
  LTE?: InputMaybe<Scalars['ProgramUserId']['input']>;
  /** Matches if the program user id is not the supplied value. */
  NEQ?: InputMaybe<Scalars['ProgramUserId']['input']>;
  /** Matches if the program user id is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['ProgramUserId']['input']>>;
};

/**
 * Filters on equality or order comparisons of Semester.  All supplied
 * criteria must match, but usually only one is selected.  E.g.,
 * 'GT = "2024A"' will match when the value is "2024B" or later.
 */
export type WhereOrderSemester = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['Semester']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['Semester']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['Semester']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['Semester']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['Semester']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['Semester']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['Semester']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['Semester']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderSequenceCommand = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<SequenceCommand>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<SequenceCommand>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<SequenceCommand>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<SequenceCommand>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<SequenceCommand>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<SequenceCommand>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<SequenceCommand>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<SequenceCommand>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderSequenceType = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<SequenceType>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<SequenceType>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<SequenceType>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<SequenceType>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<SequenceType>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<SequenceType>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<SequenceType>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<SequenceType>>;
};

/**
 * Filters on equality or order comparisons of the SlewStage.  All supplied
 * criteria must match, but usually only one is selected.
 */
export type WhereOrderSlewStage = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<SlewStage>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<SlewStage>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<SlewStage>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<SlewStage>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<SlewStage>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<SlewStage>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<SlewStage>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<SlewStage>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderStepStage = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<StepStage>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<StepStage>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<StepStage>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<StepStage>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<StepStage>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<StepStage>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<StepStage>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<StepStage>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderTargetId = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['TargetId']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['TargetId']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['TargetId']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['TargetId']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['TargetId']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['TargetId']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['TargetId']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['TargetId']['input']>>;
};

/**
 * Filters on equality or order comparisons of the property.  All supplied
 * criteria must match, but usually only one is selected.  E.g., 'GT = 2'
 * for an integer property will match when the value is 3 or more.
 */
export type WhereOrderTimestamp = {
  /** Matches if the property is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Matches if the property is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Matches if the property is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Matches if the property value is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  /** Matches if the property is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Matches if the property is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Matches if the property is not the supplied value. */
  NEQ?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Matches if the property value is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type WhereOrderUserId = {
  /** Matches if the user id is exactly the supplied value. */
  EQ?: InputMaybe<Scalars['UserId']['input']>;
  /** Matches if the user id is ordered after (>) the supplied value. */
  GT?: InputMaybe<Scalars['UserId']['input']>;
  /** Matches if the user id is ordered after or equal (>=) the supplied value. */
  GTE?: InputMaybe<Scalars['UserId']['input']>;
  /** Matches if the user id is any of the supplied options. */
  IN?: InputMaybe<Array<Scalars['UserId']['input']>>;
  /** Matches if the user id is ordered before (<) the supplied value. */
  LT?: InputMaybe<Scalars['UserId']['input']>;
  /** Matches if the user id is ordered before or equal (<=) the supplied value. */
  LTE?: InputMaybe<Scalars['UserId']['input']>;
  /** Matches if the user id is not the supplied value. */
  NEQ?: InputMaybe<Scalars['UserId']['input']>;
  /** Matches if the user id is none of the supplied values. */
  NIN?: InputMaybe<Array<Scalars['UserId']['input']>>;
};

/** Partner link filter options.  All specified items much match. */
export type WherePartnerLink = {
  /** Matches on equality of the link type. */
  linkType?: InputMaybe<WhereEqPartnerLinkType>;
  /**
   * Matches on the partner itself, if applicable.  Only `HAS_PARTNER` link types
   * will have a partner.  For other link types it will be `null`.
   */
  partner?: InputMaybe<WhereOptionEqPartner>;
};

/** Program filter options.  All specified items must match. */
export type WhereProgram = {
  /** A list of nested program filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereProgram>>;
  /** A nested program filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereProgram>;
  /** A list of nested program filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereProgram>>;
  /** Matches the active period end. */
  activeEnd?: InputMaybe<WhereOrderDate>;
  /** Matches the active period start. */
  activeStart?: InputMaybe<WhereOrderDate>;
  /** Matches the calibration role. */
  calibrationRole?: InputMaybe<WhereOptionEqCalibrationRole>;
  /** Matches the program ID. */
  id?: InputMaybe<WhereOrderProgramId>;
  /** Matches the program name. */
  name?: InputMaybe<WhereOptionString>;
  /** Matches the PI. */
  pi?: InputMaybe<WhereProgramUser>;
  /** Matches the proposal. */
  proposal?: InputMaybe<WhereProposal>;
  /** Matches the proposalStatus. */
  proposalStatus?: InputMaybe<WhereEqProposalStatus>;
  /** Matches the program reference (if any). */
  reference?: InputMaybe<WhereProgramReference>;
  /** Mathces the program type. */
  type?: InputMaybe<WhereEqProgramType>;
};

/** Program note filter options.  All specified items must match. */
export type WhereProgramNote = {
  /**
   * A list of nested program note filters that all must match in order for the
   * AND group as a whole to match.
   */
  AND?: InputMaybe<Array<WhereProgramNote>>;
  /**
   * A nested program note filter that must not match in order for the NOT itself
   * to match.
   */
  NOT?: InputMaybe<WhereProgramNote>;
  /**
   * A list of nested program note filters where any one match causes the entire
   * OR group as a whole to match.
   */
  OR?: InputMaybe<Array<WhereProgramNote>>;
  /** Matches the program note ID. */
  id?: InputMaybe<WhereOrderProgramNoteId>;
  /** Matches the private status. */
  isPrivate?: InputMaybe<WhereBoolean>;
  /** Matches the program. */
  program?: InputMaybe<WhereProgram>;
  /** Mathces the program note text. */
  text?: InputMaybe<WhereOptionString>;
  /** Matches the program note title. */
  title?: InputMaybe<WhereString>;
};

export type WhereProgramReference = {
  /** Matches if the program reference is not defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches the (library) description in the program reference, if any. */
  description?: InputMaybe<WhereString>;
  /** Matches the instrument in the program reference, if any. */
  instrument?: InputMaybe<WhereEqInstrument>;
  /** Matches the program reference label. */
  label?: InputMaybe<WhereString>;
  /** Matches the science subtype in the program reference, if any. */
  scienceSubtype?: InputMaybe<WhereEqScienceSubtype>;
  /** Matches the semester in the proposal reference, if any. */
  semester?: InputMaybe<WhereOrderSemester>;
  /** Matches the index in the program reference, if any. */
  semesterIndex?: InputMaybe<WhereOrderPosInt>;
};

/** Program user options.  All specified items must match. */
export type WhereProgramUser = {
  /** A list of nested program user filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereProgramUser>>;
  /** A nested program user filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereProgramUser>;
  /** A list of nested program user filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereProgramUser>>;
  /** Matches the educational status. */
  educationalStatus?: InputMaybe<WhereOptionEqEducationalStatus>;
  /** Matches the fallback profile. */
  fallbackProfile?: InputMaybe<WhereUserProfile>;
  /** Matches the gender status. */
  gender?: InputMaybe<WhereOptionEqGender>;
  /** Matches the data access flag. */
  hasDataAccess?: InputMaybe<WhereBoolean>;
  /** Matches the program user id. */
  id?: InputMaybe<WhereOrderProgramUserId>;
  /** Matches the partner. */
  partnerLink?: InputMaybe<WherePartnerLink>;
  /** Matches the program. */
  program?: InputMaybe<WhereProgram>;
  /** Matches the role. */
  role?: InputMaybe<WhereEqProgramUserRole>;
  /** Matches the thesis flag. */
  thesis?: InputMaybe<WhereOptionBoolean>;
  /** Matches the user. */
  user?: InputMaybe<WhereUser>;
};

/** Proposal filter options.  All specified items must match. */
export type WhereProposal = {
  /** A list of nested proposal filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereProposal>>;
  /** When `true`, matches if the proposal is not defined. When `false` matches if the proposal is defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** A nested proposal filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereProposal>;
  /** A list of nested proposal filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereProposal>>;
  /** Matches on the proposal reference (if any). */
  reference?: InputMaybe<WhereProposalReference>;
  /** Matches the proposal title. */
  title?: InputMaybe<WhereOptionString>;
};

/** Proposal partner entry filter options. The set of partners is scanned for a matching partner and percentage entry. */
export type WhereProposalPartnerEntry = {
  /** A list of nested partner entry filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereProposalPartnerEntry>>;
  /** A nested partner entry filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereProposalPartnerEntry>;
  /** A list of nested partner entry filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereProposalPartnerEntry>>;
  /** Matches on partner equality */
  partner?: InputMaybe<WhereEqPartner>;
  /** Matches on partner percentage */
  percent?: InputMaybe<WhereOrderInt>;
};

/** Proposal partners matching.  Use `MATCH` for detailed matching options, `EQ` to just match against a partners list, and/or `isJoint` for checking joint vs individual proposals */
export type WhereProposalPartners = {
  /** A simple exact match for the supplied partners. Use `MATCH` instead for more advanced options. */
  EQ?: InputMaybe<Array<Partner>>;
  /** Detailed partner matching.  Use EQ instead of a simple exact match. */
  MATCH?: InputMaybe<WhereProposalPartnerEntry>;
  /** Matching based on whether the proposal is a joint (i.e., multi-partner) proposal. */
  isJoint?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhereProposalReference = {
  /** Matches if the proposal reference is not defined. */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches the proposal reference label. */
  label?: InputMaybe<WhereString>;
  /** Matches the semester in the proposal reference. */
  semester?: InputMaybe<WhereOrderSemester>;
  /** Matches the index in the proposal reference. */
  semesterIndex?: InputMaybe<WhereOrderPosInt>;
};

/**
 * Spectroscopy instrument configuration option matcher.  Configure with the
 * properties of interest and pass it to the 'spectroscopyConfigOptions' query
 * to find the corresponding configuration options.
 */
export type WhereSpectroscopyConfigOption = {
  AND?: InputMaybe<Array<WhereSpectroscopyConfigOption>>;
  NOT?: InputMaybe<WhereSpectroscopyConfigOption>;
  OR?: InputMaybe<Array<WhereSpectroscopyConfigOption>>;
  adaptiveOptics?: InputMaybe<WhereBoolean>;
  capability?: InputMaybe<WhereOptionEqSpectroscopyCapabilities>;
  focalPlane?: InputMaybe<WhereEqFocalPlane>;
  instrument?: InputMaybe<WhereEqInstrument>;
  /**
   * Matches configuration options that support the provided wavelength. In other
   * words, those for which the given wavelength falls between the min and max
   * limits of the configuration.
   */
  rangeIncludes?: InputMaybe<WavelengthInput>;
  resolution?: InputMaybe<WhereOrderPosInt>;
  site?: InputMaybe<WhereEqSite>;
  slitLength?: InputMaybe<WhereAngle>;
  slitWidth?: InputMaybe<WhereAngle>;
  wavelengthCoverage?: InputMaybe<WhereWavelength>;
  wavelengthOptimal?: InputMaybe<WhereWavelength>;
};

/** String matching options. */
export type WhereString = {
  EQ?: InputMaybe<Scalars['NonEmptyString']['input']>;
  IN?: InputMaybe<Array<Scalars['NonEmptyString']['input']>>;
  /**
   * Performs string matching with wildcard patterns.  The entire string must be
   * matched.  Use % to match a sequence of any characters and _ to match any
   * single character.
   */
  LIKE?: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** Set to `true` (the default) for case sensitive matches, `false` to ignore case. */
  MATCH_CASE?: InputMaybe<Scalars['Boolean']['input']>;
  NEQ?: InputMaybe<Scalars['NonEmptyString']['input']>;
  NIN?: InputMaybe<Array<Scalars['NonEmptyString']['input']>>;
  /**
   * Performs string matching with wildcard patterns.  The entire string must not
   * match.  Use % to match a sequence of any characters and _ to match any single
   * character.
   */
  NLIKE?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

/** Target filter options.  All specified items must match. */
export type WhereTarget = {
  /** A list of nested target filters that all must match in order for the AND group as a whole to match. */
  AND?: InputMaybe<Array<WhereTarget>>;
  /** A nested target filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereTarget>;
  /** A list of nested target filters where any one match causes the entire OR group as a whole to match. */
  OR?: InputMaybe<Array<WhereTarget>>;
  /** Matches the calibration role. */
  calibrationRole?: InputMaybe<WhereOptionEqCalibrationRole>;
  /** Matches the target id. */
  id?: InputMaybe<WhereOrderTargetId>;
  /** Matches the target name. */
  name?: InputMaybe<WhereString>;
  /** Matches the associated program. */
  program?: InputMaybe<WhereProgram>;
};

/** User filter options.  All specified items must match. */
export type WhereUser = {
  /**
   * A list of nested user filters that all must match in order for the AND group
   * as a whole to match.
   */
  AND?: InputMaybe<Array<WhereUser>>;
  /**
   * When `true`, matches if the user is not defined. When `false` matches if the
   * user is defined.
   */
  IS_NULL?: InputMaybe<Scalars['Boolean']['input']>;
  /** A nested user filter that must not match in order for the NOT itself to match. */
  NOT?: InputMaybe<WhereUser>;
  /**
   * A list of nested user filters that all must match in order for the OR group
   * as a whole to match.
   */
  OR?: InputMaybe<Array<WhereUser>>;
  /** Matches the user Id. */
  id?: InputMaybe<WhereOrderUserId>;
  orcidId?: InputMaybe<WhereOptionString>;
  profile?: InputMaybe<WhereUserProfile>;
  /** Matches the user type. */
  type?: InputMaybe<WhereEqUserType>;
};

export type WhereUserProfile = {
  creditName?: InputMaybe<WhereOptionString>;
  email?: InputMaybe<WhereOptionString>;
  familyName?: InputMaybe<WhereOptionString>;
  givenName?: InputMaybe<WhereOptionString>;
};

export type WhereWavelength = {
  AND?: InputMaybe<Array<WhereWavelength>>;
  NOT?: InputMaybe<WhereWavelength>;
  OR?: InputMaybe<Array<WhereWavelength>>;
  angstroms?: InputMaybe<WhereOrderPosBigDecimal>;
  micrometers?: InputMaybe<WhereOrderPosBigDecimal>;
  nanometers?: InputMaybe<WhereOrderPosBigDecimal>;
  picometers?: InputMaybe<WhereOrderPosInt>;
};

export type GetObservationsByStateQueryVariables = Exact<{
  states: Array<ObservationWorkflowState> | ObservationWorkflowState;
  site: Site;
  date: Scalars['Date']['input'];
}>;


export type GetObservationsByStateQuery = { __typename?: 'Query', observationsByWorkflowState: Array<{ __typename?: 'Observation', id: string, existence: Existence, title: string, subtitle?: string | null, instrument?: Instrument | null, reference?: { __typename?: 'ObservationReference', label: string } | null, program: { __typename?: 'Program', id: number, existence: Existence, name?: string | null, pi?: { __typename?: 'ProgramUser', user?: { __typename?: 'User', profile: { __typename?: 'UserProfile', givenName?: string | null, familyName?: string | null } } | null } | null }, targetEnvironment: { __typename?: 'TargetEnvironment', firstScienceTarget?: { __typename?: 'Target', id: string, existence: Existence, name: string, sidereal?: { __typename?: 'Sidereal', epoch: string, ra: { __typename?: 'RightAscension', hms: string, degrees: string|number }, dec: { __typename?: 'Declination', dms: string, degrees: string|number } } | null, sourceProfile: { __typename?: 'SourceProfile', point?: { __typename?: 'SpectralDefinitionIntegrated', bandNormalized?: { __typename?: 'BandNormalizedIntegrated', brightnesses: Array<{ __typename?: 'BandBrightnessIntegrated', band: Band, value: string|number }> } | null } | null } } | null } }> };

export type GetGuideEnvironmentQueryVariables = Exact<{
  obsId: Scalars['ObservationId']['input'];
}>;


export type GetGuideEnvironmentQuery = { __typename?: 'Query', observation?: { __typename?: 'Observation', targetEnvironment: { __typename?: 'TargetEnvironment', guideEnvironment: { __typename?: 'GuideEnvironment', posAngle: { __typename?: 'Angle', hms: string, degrees: string|number }, guideTargets: Array<{ __typename?: 'GuideTarget', probe: GuideProbe, name: string, sidereal?: { __typename?: 'Sidereal', epoch: string, ra: { __typename?: 'RightAscension', hms: string, degrees: string|number }, dec: { __typename?: 'Declination', dms: string, degrees: string|number } } | null, sourceProfile: { __typename?: 'SourceProfile', point?: { __typename?: 'SpectralDefinitionIntegrated', bandNormalized?: { __typename?: 'BandNormalizedIntegrated', brightnesses: Array<{ __typename?: 'BandBrightnessIntegrated', band: Band, value: string|number }> } | null } | null } }> } } } | null };

export type GetCentralWavelengthQueryVariables = Exact<{
  obsId: Scalars['ObservationId']['input'];
}>;


export type GetCentralWavelengthQuery = { __typename?: 'Query', observation?: { __typename?: 'Observation', execution: { __typename?: 'Execution', config?: { __typename?: 'ExecutionConfig', gmosNorth?: { __typename?: 'GmosNorthExecutionConfig', acquisition?: { __typename?: 'GmosNorthExecutionSequence', nextAtom: { __typename?: 'GmosNorthAtom', steps: Array<{ __typename?: 'GmosNorthStep', instrumentConfig: { __typename?: 'GmosNorthDynamic', centralWavelength?: { __typename?: 'Wavelength', nanometers: number } | null } }> } } | null } | null, gmosSouth?: { __typename?: 'GmosSouthExecutionConfig', acquisition?: { __typename?: 'GmosSouthExecutionSequence', nextAtom: { __typename?: 'GmosSouthAtom', steps: Array<{ __typename?: 'GmosSouthStep', instrumentConfig: { __typename?: 'GmosSouthDynamic', centralWavelength?: { __typename?: 'Wavelength', nanometers: number } | null } }> } } | null } | null } | null } } | null };


export const GetObservationsByStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getObservationsByState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"states"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObservationWorkflowState"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Site"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observationsByWorkflowState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"states"},"value":{"kind":"Variable","name":{"kind":"Name","value":"states"}}},{"kind":"Argument","name":{"kind":"Name","value":"WHERE"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"site"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"EQ"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"AND"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"activeStart"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"LTE"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"activeEnd"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GTE"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}}]}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reference"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"IS_NULL"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"existence"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"instrument"}},{"kind":"Field","name":{"kind":"Name","value":"reference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"existence"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetEnvironment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstScienceTarget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"existence"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sidereal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hms"}},{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dms"}},{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sourceProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"point"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bandNormalized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brightnesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetObservationsByStateQuery, GetObservationsByStateQueryVariables>;
export const GetGuideEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGuideEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObservationId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"observationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"targetEnvironment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guideEnvironment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posAngle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hms"}},{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}},{"kind":"Field","name":{"kind":"Name","value":"guideTargets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sidereal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"ra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hms"}},{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dec"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dms"}},{"kind":"Field","name":{"kind":"Name","value":"degrees"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sourceProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"point"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bandNormalized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brightnesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"band"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGuideEnvironmentQuery, GetGuideEnvironmentQueryVariables>;
export const GetCentralWavelengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCentralWavelength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObservationId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"observation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"observationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"execution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gmosNorth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acquisition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextAtom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrumentConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"centralWavelength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nanometers"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gmosSouth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acquisition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextAtom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instrumentConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"centralWavelength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nanometers"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCentralWavelengthQuery, GetCentralWavelengthQueryVariables>;