import type { MutationResolvers } from './../../gen/types.generated.ts';

export const setWindowCenter: NonNullable<MutationResolvers['setWindowCenter']> = async (_parent, args, { prisma }) => {
  return prisma.windowCenter.update({
    where: { site: args.site },
    data: args,
  });
};
