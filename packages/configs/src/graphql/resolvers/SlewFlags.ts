import type { Resolvers } from '../gen/index.ts';

export const SlewFlagsResolver: Resolvers = {
  Query: {
    slewFlags: (_parent, args, { prisma }) => {
      return prisma.slewFlags.findFirst({ where: args });
    },
  },
  Mutation: {
    updateSlewFlags: (_parent, args, { prisma }) => {
      return prisma.slewFlags.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
