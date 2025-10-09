import type { QueryResolvers } from './../../gen/types.generated.ts';

export const rotator: NonNullable<QueryResolvers['rotator']> = async (_parent, args, { prisma }) => {
  return prisma.rotator.findFirst({ where: args });
};
