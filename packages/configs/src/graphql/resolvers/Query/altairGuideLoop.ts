import type { QueryResolvers } from './../../gen/types.generated.ts';

export const altairGuideLoop: NonNullable<QueryResolvers['altairGuideLoop']> = (_parent, args, { prisma }) => {
  return prisma.altairGuideLoop.findFirst({ where: args });
};
