import type { Resolvers } from '../gen/index.ts';

export const GemsInstrumentResolver: Resolvers = {
  Query: {
    gemsInstrument: (_parent, args, { prisma }) => {
      return prisma.gemsInstrument.findFirst({ where: args });
    },
  },
  Mutation: {
    updateGemsInstrument: (_parent, args, { prisma }) => {
      return prisma.gemsInstrument.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
