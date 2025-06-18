import { ApolloServer } from '@apollo/server';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { DateTimeResolver, JSONResolver } from 'graphql-scalars';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { AltairGuideLoopResolver } from './graphql/resolvers/AltairGuideLoop.js';
import { AltairInstrumentResolver } from './graphql/resolvers/AltairInstrument.js';
import { ConfigurationResolver } from './graphql/resolvers/Configuration.js';
import { EngineeringTargetResolver } from './graphql/resolvers/EngineeringTarget.js';
import { GemsGuideLoopResolver } from './graphql/resolvers/GemsGuideLoop.js';
import { GemsInstrumentResolver } from './graphql/resolvers/GemsInstrument.js';
import { GuideAlarmResolver } from './graphql/resolvers/GuideAlarm.js';
import { GuideLoopResolver } from './graphql/resolvers/GuideLoop.js';
import { InstrumentResolver } from './graphql/resolvers/Instrument.js';
import { MechanismResolver } from './graphql/resolvers/Mechanism.js';
import { RotatorResolver } from './graphql/resolvers/Rotator.js';
import { SlewFlagsResolver } from './graphql/resolvers/SlewFlags.js';
import { TargetResolver } from './graphql/resolvers/Target.js';
import { UserResolver } from './graphql/resolvers/User.js';
import { VersionResolver } from './graphql/resolvers/Version.js';
import type { Prisma } from './prisma/db.js';

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
  Query: {
    ...AltairGuideLoopResolver.Query,
    ...AltairInstrumentResolver.Query,
    ...ConfigurationResolver.Query,
    ...EngineeringTargetResolver.Query,
    ...GemsGuideLoopResolver.Query,
    ...GemsInstrumentResolver.Query,
    ...GuideAlarmResolver.Query,
    ...GuideLoopResolver.Query,
    ...InstrumentResolver.Query,
    ...MechanismResolver.Query,
    ...RotatorResolver.Query,
    ...SlewFlagsResolver.Query,
    ...TargetResolver.Query,
    ...UserResolver.Query,
    ...VersionResolver.Query,
  },
  Mutation: {
    ...AltairGuideLoopResolver.Mutation,
    ...AltairInstrumentResolver.Mutation,
    ...ConfigurationResolver.Mutation,
    ...EngineeringTargetResolver.Mutation,
    ...GemsGuideLoopResolver.Mutation,
    ...GemsInstrumentResolver.Mutation,
    ...GuideAlarmResolver.Mutation,
    ...GuideLoopResolver.Mutation,
    ...InstrumentResolver.Mutation,
    ...MechanismResolver.Mutation,
    ...RotatorResolver.Mutation,
    ...SlewFlagsResolver.Mutation,
    ...TargetResolver.Mutation,
    ...UserResolver.Mutation,
    ...VersionResolver.Mutation,
  },
};

export interface ApolloContext {
  prisma: Prisma;
}

const schemaGlob = join(dirname(fileURLToPath(import.meta.resolve('navigate-schema'))), 'src/**/*.graphql');
const typeDefs = await loadSchema(schemaGlob, { loaders: [new GraphQLFileLoader()] });

// Create and start ApolloServer
export const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});
