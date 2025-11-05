import type { QueryResolvers } from './../../gen/types.generated.ts';

export const target: NonNullable<QueryResolvers['target']> = (_parent, args, { prisma }) => {
  return prisma.target.findFirst({
    where: args,
    orderBy: { pk: 'desc' },
  });
};
