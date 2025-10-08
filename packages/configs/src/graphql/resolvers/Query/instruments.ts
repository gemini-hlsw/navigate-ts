import type { InstrumentConfig, QueryResolvers } from './../../gen/types.generated.ts';

export const instruments: NonNullable<QueryResolvers['instruments']> = async (_parent, args, { prisma }) => {
  return prisma.instrument.findMany({
    where: args,
    orderBy: [{ isTemporary: 'desc' }, { createdAt: 'desc' }],
  }) as Promise<InstrumentConfig[]>;
};
