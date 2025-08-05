import type { Target } from '../../prisma/gen/client.js';
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
