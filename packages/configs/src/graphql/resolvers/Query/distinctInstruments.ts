import type { Instrument, QueryResolvers } from './../../gen/types.generated.ts';

export const distinctInstruments: NonNullable<QueryResolvers['distinctInstruments']> = async (
  _parent,
  _args,
  { prisma },
) => {
  const results = await prisma.instrument.findMany({
    distinct: ['name'],
    select: { name: true },
    orderBy: { name: 'asc' },
  });
  return results.map((r) => r.name as Instrument);
};
