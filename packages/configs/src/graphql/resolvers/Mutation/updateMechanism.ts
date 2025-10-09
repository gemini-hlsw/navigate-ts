import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateMechanism: NonNullable<MutationResolvers['updateMechanism']> = async (_parent, args, { prisma }) => {
  return prisma.mechanism.update({
    where: { pk: args.pk },
    data: args,
  });
};
