import type { Resolvers } from '../gen/index.js';

export const GemsGuideLoopResolver: Resolvers = {
  Query: {
    gemsGuideLoop: (_parent, args, { prisma }) => {
      return prisma.gemsGuideLoop.findFirst({ where: args });
    },
  },
  Mutation: {
    updateGemsGuideLoop: (_parent, args, { prisma }) => {
      return prisma.gemsGuideLoop.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
