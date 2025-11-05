import type { EngineeringTarget, QueryResolvers } from './../../gen/types.generated.ts';

export const engineeringTarget: NonNullable<QueryResolvers['engineeringTarget']> = (_parent, args, { prisma }) => {
  return prisma.engineeringTarget.findFirst({
    where: args,
  }) as Promise<EngineeringTarget | null>;
};
