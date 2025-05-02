import type { Target } from '../../../gen/prisma/index.js';
import type { Resolvers } from '../gen/index.js';

export const TargetResolver: Resolvers = {
  Query: {
    target: (_parent, args, { prisma }) => {
      return prisma.target.findFirst({
        where: args,
        orderBy: { pk: 'desc' },
      });
    },

    targets: (_parent, args, { prisma }) => {
      return prisma.target.findMany({
        where: args,
        orderBy: { pk: 'desc' },
      });
    },
  },

  Mutation: {
    createTarget: async (_parent, args, { prisma }) => {
      if (args.type === 'FIXED') {
        // Some logics depending on the input
        delete Object.assign(args, { coord1: args.ra }).ra;
        delete Object.assign(args, { coord2: args.dec }).dec;
      } else {
        delete Object.assign(args, { coord1: args.ra }).ra;
        delete Object.assign(args, { coord2: args.dec }).dec;
      }
      return prisma.target.create({
        data: args as typeof args & { coord1: number; coord2: number },
      });
    },

    updateTarget: async (_parent, args, { prisma }) => {
      return prisma.target.update({
        where: { pk: args.pk },
        data: args,
      });
    },

    removeAndCreateBaseTargets: async (_parent, args, { prisma }) => {
      await prisma.target.deleteMany({
        where: {},
      });
      return prisma.target.createManyAndReturn({
        data: (args.targets ?? []) as Target[],
      });
    },

    removeAndCreateWfsTargets: async (_parent, args, { prisma }) => {
      await prisma.target.deleteMany({
        where: {
          type: args.wfs,
        },
      });
      return prisma.target.createManyAndReturn({
        data: (args.targets ?? []) as Target[],
      });
    },
  },
};
