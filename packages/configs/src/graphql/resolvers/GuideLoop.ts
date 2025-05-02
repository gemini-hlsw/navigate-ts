import type { Resolvers } from '../gen/index.js';

export const GuideLoopResolver: Resolvers = {
  Query: {
    guideLoop: (_parent, args, { prisma }) => {
      return prisma.guideLoop.findFirst({ where: args });
    },
  },
  Mutation: {
    updateGuideLoop: (_parent, args, { prisma }) => {
      return prisma.guideLoop.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
