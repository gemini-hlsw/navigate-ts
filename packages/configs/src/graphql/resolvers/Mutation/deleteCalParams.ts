import type { MutationResolvers } from './../../gen/types.generated.js';

export const deleteCalParams: NonNullable<MutationResolvers['deleteCalParams']> = async (_parent, args, { prisma }) => {
  await prisma.calParams.delete({
    where: { pk: args.pk },
  });
};
