import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateAltairGuideLoop: NonNullable<MutationResolvers['updateAltairGuideLoop']> = (
  _parent,
  args,
  { prisma },
) => {
  return prisma.altairGuideLoop.update({
    where: { pk: args.pk },
    data: args,
  });
};
