import type { InstrumentConfig, MutationResolvers } from './../../gen/types.generated.ts';

export const createInstrument: NonNullable<MutationResolvers['createInstrument']> = async (
  _parent,
  args,
  { prisma },
) => {
  return prisma.instrument.create({ data: { extraParams: {}, ...args } }) as Promise<InstrumentConfig>;
};
