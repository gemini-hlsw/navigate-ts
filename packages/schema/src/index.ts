import type { GraphQLScalarType } from 'graphql';
import { DateTimeResolver, DateTimeTypeDefinition, JSONDefinition, JSONResolver } from 'graphql-scalars';

import { AltairGuideLoopTypeDefs } from './AltairGuideLoop.js';
import { AltairInstrumentTypeDefs } from './AltairInstrument.js';
import { ConfigurationTypeDefs } from './Configuration.js';
import { EngineeringTargetTypeDefs } from './EngineeringTarget.js';
import { GemsGuideLoopTypeDefs } from './GemsGuideLoop.js';
import { GemsInstrumentTypeDefs } from './GemsInstrument.js';
import { GuideAlarmTypeDefs } from './GuideAlarm.js';
import { GuideLoopTypeDefs } from './GuideLoop.js';
import { InstrumentTypeDefs } from './Instrument.js';
import { MechanismTypeDefs } from './Mechanism.js';
import { RotatorTypeDefs } from './Rotator.js';
import { SlewFlagsTypeDefs } from './SlewFlags.js';
import { TargetTypeDefs } from './Target.js';
import { UserTypeDefs } from './User.js';
import { VersionTypeDefs } from './Version.js';

export const typeDefs = [
  DateTimeTypeDefinition,
  JSONDefinition,
  AltairGuideLoopTypeDefs,
  AltairInstrumentTypeDefs,
  ConfigurationTypeDefs,
  EngineeringTargetTypeDefs,
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

export const resolvers: Record<string, GraphQLScalarType> = {
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
} as const;
