import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateRotator: NonNullable<MutationResolvers['updateRotator']> = async (_parent, args, { prisma }) => {
  return prisma.rotator.update({
    where: { pk: args.pk },
    data: args,
  });
};
