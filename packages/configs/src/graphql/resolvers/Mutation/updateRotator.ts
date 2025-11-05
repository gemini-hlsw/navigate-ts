import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateRotator: NonNullable<MutationResolvers['updateRotator']> = (_parent, args, { prisma }) => {
  return prisma.rotator.update({
    where: { pk: args.pk },
    data: args,
  });
};
