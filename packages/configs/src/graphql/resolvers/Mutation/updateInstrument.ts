import type { InstrumentConfig, MutationResolvers } from './../../gen/types.generated.ts';

export const updateInstrument: NonNullable<MutationResolvers['updateInstrument']> = (_parent, args, { prisma }) => {
  return prisma.instrument.update({
    where: { pk: args.pk },
    data: args,
  }) as Promise<InstrumentConfig>;
};
