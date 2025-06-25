import type { Configuration, Resolvers } from '../gen/index.js';

export const ConfigurationResolver: Resolvers = {
  Query: {
    configuration: (_parent, args, { prisma }) => {
      return prisma.configuration.findFirst({ where: args }) as Promise<Configuration | null>;
    },
  },
  Mutation: {
    createConfiguration: (_parent, args, { prisma }) => {
      return prisma.configuration.create({ data: args }) as Promise<Configuration>;
    },

    updateConfiguration: (_parent, args, { prisma }) => {
      return prisma.configuration.update({
        where: { pk: args.pk },
        data: args,
      }) as Promise<Configuration>;
    },
  },
};
