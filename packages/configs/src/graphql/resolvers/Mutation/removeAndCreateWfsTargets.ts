import type { Target } from '../../../prisma/gen/client.ts';
import type { MutationResolvers } from './../../gen/types.generated.ts';

export const removeAndCreateWfsTargets: NonNullable<MutationResolvers['removeAndCreateWfsTargets']> = async (
  _parent,
  args,
  { prisma },
) => {
  await prisma.target.deleteMany({
    where: {
      type: args.wfs,
    },
  });
  return prisma.target.createManyAndReturn({
    data: (args.targets ?? []) as Target[],
  });
};
