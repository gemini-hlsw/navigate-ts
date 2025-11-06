import type { QueryResolvers } from './../../gen/types.generated.js';

export const calParamsHistory: NonNullable<QueryResolvers['calParamsHistory']> = async (_parent, args, { prisma }) => {
  return prisma.calParams.findMany({
    where: args,
    select: {
      pk: true,
      comment: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
};
