import { ApolloServer } from '@apollo/server';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { AltairGuideLoopResolver } from './graphql/resolvers/AltairGuideLoop.ts';
import { AltairInstrumentResolver } from './graphql/resolvers/AltairInstrument.ts';
import { ConfigurationResolver } from './graphql/resolvers/Configuration.ts';
import { EngineeringTargetResolver } from './graphql/resolvers/EngineeringTarget.ts';
import { GemsGuideLoopResolver } from './graphql/resolvers/GemsGuideLoop.ts';
import { GemsInstrumentResolver } from './graphql/resolvers/GemsInstrument.ts';
import { GuideAlarmResolver } from './graphql/resolvers/GuideAlarm.ts';
import { GuideLoopResolver } from './graphql/resolvers/GuideLoop.ts';
import { InstrumentResolver } from './graphql/resolvers/Instrument.ts';
import { MechanismResolver } from './graphql/resolvers/Mechanism.ts';
import { RotatorResolver } from './graphql/resolvers/Rotator.ts';
import { ScalarResolvers } from './graphql/resolvers/Scalars.ts';
import { SlewFlagsResolver } from './graphql/resolvers/SlewFlags.ts';
import { TargetResolver } from './graphql/resolvers/Target.ts';
import { UserResolver } from './graphql/resolvers/User.ts';
import { VersionResolver } from './graphql/resolvers/Version.ts';
import { WindowCenterResolver } from './graphql/resolvers/WindowCenter.ts';
import type { PrismaClient } from './prisma/db.ts';

// Resolvers define how to fetch the types defined in your schema.
const resolvers = [
  ScalarResolvers,
  AltairGuideLoopResolver,
  AltairInstrumentResolver,
  ConfigurationResolver,
  EngineeringTargetResolver,
  GemsGuideLoopResolver,
  GemsInstrumentResolver,
  GuideAlarmResolver,
  GuideLoopResolver,
  InstrumentResolver,
  MechanismResolver,
  RotatorResolver,
  SlewFlagsResolver,
  TargetResolver,
  UserResolver,
  VersionResolver,
  WindowCenterResolver,
];

export interface ApolloContext {
  prisma: PrismaClient;
}

const schemaGlob = join(dirname(fileURLToPath(import.meta.resolve('navigate-schema'))), 'src/**/*.graphql');
const typeDefs = await loadSchema(schemaGlob, { loaders: [new GraphQLFileLoader()] });

export const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});
