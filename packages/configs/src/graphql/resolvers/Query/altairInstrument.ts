import type { QueryResolvers } from './../../gen/types.generated.ts';

export const altairInstrument: NonNullable<QueryResolvers['altairInstrument']> = async (_parent, args, { prisma }) => {
  return prisma.altairInstrument.findFirst({ where: args });
};
