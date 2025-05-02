import type { Resolvers } from '../gen/index.js';

export const AltairInstrumentResolver: Resolvers = {
  Query: {
    altairInstrument: (_parent, args, { prisma }) => {
      return prisma.altairInstrument.findFirst({ where: args });
    },
  },
  Mutation: {
    updateAltairInstrument: (_parent, args, { prisma }) => {
      return prisma.altairInstrument.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
