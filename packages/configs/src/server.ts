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
import type { Prisma } from './prisma/db.ts';

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  ...ScalarResolvers,
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
    ...WindowCenterResolver.Query,
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
    ...WindowCenterResolver.Mutation,
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
