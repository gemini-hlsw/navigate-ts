import type {
  AltairGuideLoop as AltairGuideLoopType,
  AltairInstrument as AltairInstrumentType,
  Configuration as ConfigurationType,
  GemsGuideLoop as GemsGuideLoopType,
  GemsInstrument as GemsInstrumentType,
  GuideLoop as GuideLoopType,
  GuidingType,
  InstrumentConfig as InstrumentType,
  Mechanism as MechanismType,
  Rotator as RotatorType,
  Site as SiteType,
  SlewFlags as SlewFlagsType,
  StatusType,
  Target as TargetType,
  TargetInput,
  TargetType as TypeOfTarget,
  User as UserType,
} from '@gql/configs/gen/graphql';
import type {
  BrightnessItemFragment,
  ObservationItemFragment,
  Scalars as OdbScalars,
  SourceProfileItemFragment,
  TargetItemFragment,
} from '@gql/odb/gen/graphql';
import type { RotatorTrackingMode as TrackingType } from '@gql/server/gen/graphql';

export type ThemeType = 'light' | 'dark';

export type OdbObservationType = ObservationItemFragment;

export type OdbTargetType = TargetItemFragment;

export type OdbSourceProfileType = SourceProfileItemFragment;

export type OdbBandBrightnessType = BrightnessItemFragment;

export type {
  AltairGuideLoopType,
  AltairInstrumentType,
  ConfigurationType,
  GemsGuideLoopType,
  GemsInstrumentType,
  GuideLoopType,
  GuidingType,
  InstrumentType,
  MechanismType,
  OdbObservationType,
  RotatorType,
  SiteType,
  SlewFlagsType,
  StatusType,
  TargetInput,
  TargetType,
  TrackingType,
  TypeOfTarget,
  UserType,
};

export type PanelType = 'telescope' | 'wavefront-sensors' | 'guider';

export interface TargetEditType {
  isVisible: boolean;
  target: TargetType | null;
  targetIndex: number | undefined;
}

export type Semester = OdbScalars['Semester']['input'];
