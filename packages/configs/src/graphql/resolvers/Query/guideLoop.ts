import type { QueryResolvers } from './../../gen/types.generated.ts';

export const guideLoop: NonNullable<QueryResolvers['guideLoop']> = (_parent, args, { prisma }) => {
  return prisma.guideLoop.findFirst({ where: args });
};
