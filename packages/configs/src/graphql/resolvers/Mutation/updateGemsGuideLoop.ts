import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateGemsGuideLoop: NonNullable<MutationResolvers['updateGemsGuideLoop']> = (
  _parent,
  args,
  { prisma },
) => {
  return prisma.gemsGuideLoop.update({
    where: { pk: args.pk },
    data: args,
  });
};
