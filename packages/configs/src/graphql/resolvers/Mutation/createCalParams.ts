import type { MutationResolvers } from '../../gen/types.generated.ts';

export const createCalParams: NonNullable<MutationResolvers['createCalParams']> = (_parent, args, { prisma }) => {
  return prisma.calParams.create({
    data: args.input,
  });
};
