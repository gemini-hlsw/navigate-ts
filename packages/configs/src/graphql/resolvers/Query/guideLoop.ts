import type { QueryResolvers } from './../../gen/types.generated.ts';

export const guideLoop: NonNullable<QueryResolvers['guideLoop']> = async (_parent, args, { prisma }) => {
  return prisma.guideLoop.findFirst({ where: args });
};
