import type { MutationResolvers } from './../../gen/types.generated.ts';

export const resetInstruments: NonNullable<MutationResolvers['resetInstruments']> = async (
  _parent,
  args,
  { prisma },
) => {
  await prisma.instrument.deleteMany({ where: { ...args, isTemporary: true } });
};
