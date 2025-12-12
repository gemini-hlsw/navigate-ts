import type { QueryResolvers } from './../../gen/types.generated.ts';

export const targets: NonNullable<QueryResolvers['targets']> = (_parent, args, { prisma }) => {
  return prisma.target.findMany({
    where: args,
    orderBy: { createdAt: 'desc' },
    include: {
      sidereal: true,
      nonsidereal: true,
    },
  });
};
