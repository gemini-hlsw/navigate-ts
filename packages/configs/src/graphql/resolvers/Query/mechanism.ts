import type { QueryResolvers } from './../../gen/types.generated.ts';

export const mechanism: NonNullable<QueryResolvers['mechanism']> = async (_parent, args, { prisma }) => {
  return prisma.mechanism.findFirst({ where: args });
};
