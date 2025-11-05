import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateGemsInstrument: NonNullable<MutationResolvers['updateGemsInstrument']> = (
  _parent,
  args,
  { prisma },
) => {
  return prisma.gemsInstrument.update({
    where: { pk: args.pk },
    data: args,
  });
};
