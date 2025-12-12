import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateTarget: NonNullable<MutationResolvers['updateTarget']> = (_parent, args, { prisma }) => {
  return prisma.target.update({
    where: { pk: args.pk },
    data: {
      ...args,
      sidereal: args.sidereal ? { update: { where: { targetPk: args.pk }, data: args.sidereal } } : undefined,
      nonsidereal: args.nonsidereal ? { update: { where: { targetPk: args.pk }, data: args.nonsidereal } } : undefined,
    },
    include: {
      sidereal: true,
      nonsidereal: true,
    },
  });
};
