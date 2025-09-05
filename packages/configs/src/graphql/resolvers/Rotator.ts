import type { Resolvers } from '../gen/index.ts';

export const RotatorResolver: Resolvers = {
  Query: {
    rotator: (_parent, args, { prisma }) => {
      return prisma.rotator.findFirst({ where: args });
    },
  },
  Mutation: {
    updateRotator: (_parent, args, { prisma }) => {
      return prisma.rotator.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
