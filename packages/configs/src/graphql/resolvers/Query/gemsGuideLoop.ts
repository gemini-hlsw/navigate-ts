import type { QueryResolvers } from './../../gen/types.generated.ts';

export const gemsGuideLoop: NonNullable<QueryResolvers['gemsGuideLoop']> = async (_parent, args, { prisma }) => {
  return prisma.gemsGuideLoop.findFirst({ where: args });
};
