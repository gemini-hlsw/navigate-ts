import type { Target } from '../../../prisma/gen/client.ts';
import type { MutationResolvers } from './../../gen/types.generated.ts';

export const removeAndCreateBaseTargets: NonNullable<MutationResolvers['removeAndCreateBaseTargets']> = async (
  _parent,
  args,
  { prisma },
) => {
  await prisma.target.deleteMany({
    where: {},
  });
  return prisma.target.createManyAndReturn({
    data: (args.targets ?? []) as Target[],
  });
};
