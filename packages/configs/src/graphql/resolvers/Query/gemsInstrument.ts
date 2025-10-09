import type { QueryResolvers } from './../../gen/types.generated.ts';

export const gemsInstrument: NonNullable<QueryResolvers['gemsInstrument']> = async (_parent, args, { prisma }) => {
  return prisma.gemsInstrument.findFirst({ where: args });
};
