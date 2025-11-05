import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateSlewFlags: NonNullable<MutationResolvers['updateSlewFlags']> = (_parent, args, { prisma }) => {
  return prisma.slewFlags.update({
    where: { pk: args.pk },
    data: args,
  });
};
