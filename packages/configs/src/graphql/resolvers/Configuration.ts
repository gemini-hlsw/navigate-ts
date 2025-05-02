import type { Resolvers } from '../gen/index.js';

export const ConfigurationResolver: Resolvers = {
  Query: {
    configuration: (_parent, args, { prisma }) => {
      return prisma.configuration.findFirst({ where: args });
    },
  },
  Mutation: {
    createConfiguration: (_parent, args, { prisma }) => {
      return prisma.configuration.create({ data: args });
    },

    updateConfiguration: (_parent, args, { prisma }) => {
      return prisma.configuration.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
