import type { EngineeringTarget, Resolvers } from '../gen/index.js';

export const EngineeringTargetResolver: Resolvers = {
  Query: {
    engineeringTarget: (_parent, args, { prisma }) => {
      return prisma.engineeringTarget.findFirst({
        where: args,
      }) as Promise<EngineeringTarget | null>;
    },

    engineeringTargets: (_parent, args, { prisma }) => {
      return prisma.engineeringTarget.findMany({
        where: args,
        orderBy: { pk: 'desc' },
      }) as Promise<EngineeringTarget[]>;
    },
  },

  Mutation: {
    createEngineeringTarget: async (_parent, args, { prisma }) => {
      if (args.type === 'FIXED') {
        // Some logics depending on the input
        delete Object.assign(args, { coord1: args.ra }).ra;
        delete Object.assign(args, { coord2: args.dec }).dec;
      } else {
        delete Object.assign(args, { coord1: args.ra }).ra;
        delete Object.assign(args, { coord2: args.dec }).dec;
      }
      return prisma.engineeringTarget.create({
        data: args as typeof args & { coord1: number; coord2: number },
      }) as Promise<EngineeringTarget>;
    },

    updateEngineeringTarget: async (_parent, args, { prisma }) => {
      return prisma.engineeringTarget.update({
        where: { pk: args.pk },
        data: args,
      }) as Promise<EngineeringTarget>;
    },
  },
};
