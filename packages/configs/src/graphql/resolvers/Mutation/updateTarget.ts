import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateTarget: NonNullable<MutationResolvers['updateTarget']> = async (_parent, args, { prisma }) => {
  return prisma.target.update({
    where: { pk: args.pk },
    data: args,
  });
};
