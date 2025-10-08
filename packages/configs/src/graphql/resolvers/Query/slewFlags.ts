import type { QueryResolvers } from './../../gen/types.generated.ts';

export const slewFlags: NonNullable<QueryResolvers['slewFlags']> = async (_parent, args, { prisma }) => {
  return prisma.slewFlags.findFirst({ where: args });
};
