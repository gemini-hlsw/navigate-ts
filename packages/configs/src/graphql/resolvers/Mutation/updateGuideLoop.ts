import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateGuideLoop: NonNullable<MutationResolvers['updateGuideLoop']> = async (_parent, args, { prisma }) => {
  return prisma.guideLoop.update({
    where: { pk: args.pk },
    data: args,
  });
};
