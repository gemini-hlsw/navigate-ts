import type { MutationResolvers } from './../../gen/types.generated.ts';

export const updateGuideAlarm: NonNullable<MutationResolvers['updateGuideAlarm']> = async (
  _parent,
  args,
  { prisma },
) => {
  return prisma.guideAlarm.update({
    where: { wfs: args.wfs },
    data: args,
  });
};
