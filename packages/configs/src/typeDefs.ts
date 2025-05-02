import { DateTimeTypeDefinition, JSONDefinition } from 'graphql-scalars';

import { AltairGuideLoopTypeDefs } from './graphql/types/AltairGuideLoop.js';
import { AltairInstrumentTypeDefs } from './graphql/types/AltairInstrument.js';
import { ConfigurationTypeDefs } from './graphql/types/Configuration.js';
import { GemsGuideLoopTypeDefs } from './graphql/types/GemsGuideLoop.js';
import { GemsInstrumentTypeDefs } from './graphql/types/GemsInstrument.js';
import { GuideAlarmTypeDefs } from './graphql/types/GuideAlarm.js';
import { GuideLoopTypeDefs } from './graphql/types/GuideLoop.js';
import { InstrumentTypeDefs } from './graphql/types/Instrument.js';
import { MechanismTypeDefs } from './graphql/types/Mechanism.js';
import { RotatorTypeDefs } from './graphql/types/Rotator.js';
import { SlewFlagsTypeDefs } from './graphql/types/SlewFlags.js';
import { TargetTypeDefs } from './graphql/types/Target.js';
import { UserTypeDefs } from './graphql/types/User.js';
import { VersionTypeDefs } from './graphql/types/Version.js';

export const typeDefs = [
  DateTimeTypeDefinition,
  JSONDefinition,
  AltairGuideLoopTypeDefs,
  AltairInstrumentTypeDefs,
  ConfigurationTypeDefs,
  GemsGuideLoopTypeDefs,
  GemsInstrumentTypeDefs,
  GuideAlarmTypeDefs,
  GuideLoopTypeDefs,
  InstrumentTypeDefs,
  MechanismTypeDefs,
  RotatorTypeDefs,
  SlewFlagsTypeDefs,
  TargetTypeDefs,
  UserTypeDefs,
  VersionTypeDefs,
];
