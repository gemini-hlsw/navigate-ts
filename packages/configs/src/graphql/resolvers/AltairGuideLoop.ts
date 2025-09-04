import type { Resolvers } from '../gen/index.ts';

export const AltairGuideLoopResolver: Resolvers = {
  Query: {
    altairGuideLoop: (_parent, args, { prisma }) => {
      return prisma.altairGuideLoop.findFirst({ where: args });
    },
  },
  Mutation: {
    updateAltairGuideLoop: (_parent, args, { prisma }) => {
      return prisma.altairGuideLoop.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
