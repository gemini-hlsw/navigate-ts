import type { EngineeringTarget, QueryResolvers } from './../../gen/types.generated.ts';

export const engineeringTargets: NonNullable<QueryResolvers['engineeringTargets']> = (_parent, args, { prisma }) => {
  return prisma.engineeringTarget.findMany({
    where: args,
    orderBy: { pk: 'desc' },
  }) as Promise<EngineeringTarget[]>;
};
