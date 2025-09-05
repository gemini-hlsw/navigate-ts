import type { Resolvers } from '../gen/index.ts';

export const MechanismResolver: Resolvers = {
  Query: {
    mechanism: (_parent, args, { prisma }) => {
      return prisma.mechanism.findFirst({ where: args });
    },
  },
  Mutation: {
    updateMechanism: (_parent, args, { prisma }) => {
      return prisma.mechanism.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
