import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateGuideLoop: NonNullable<MutationResolvers['updateGuideLoop']> = (_parent, args, { prisma }) => {
  return prisma.guideLoop.update({
    where: { pk: args.pk },
    data: args,
  });
};
