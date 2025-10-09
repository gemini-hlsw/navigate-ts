import type { Configuration, QueryResolvers } from './../../gen/types.generated.ts';

export const configuration: NonNullable<QueryResolvers['configuration']> = async (_parent, args, { prisma }) => {
  return prisma.configuration.findFirst({ where: args }) as Promise<Configuration | null>;
};
