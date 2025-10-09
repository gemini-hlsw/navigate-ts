import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateAltairInstrument: NonNullable<MutationResolvers['updateAltairInstrument']> = async (
  _parent,
  args,
  { prisma },
) => {
  return prisma.altairInstrument.update({
    where: { pk: args.pk },
    data: args,
  });
};
