import type { QueryResolvers } from './../../gen/types.generated.ts';

export const targets: NonNullable<QueryResolvers['targets']> = async (_parent, args, { prisma }) => {
  return prisma.target.findMany({
    where: args,
    orderBy: { pk: 'desc' },
  });
};
