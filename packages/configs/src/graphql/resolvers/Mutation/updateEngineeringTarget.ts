import type { EngineeringTarget, MutationResolvers } from './../../gen/types.generated.ts';

export const updateEngineeringTarget: NonNullable<MutationResolvers['updateEngineeringTarget']> = async (
  _parent,
  args,
  { prisma },
) => {
  return prisma.engineeringTarget.update({
    where: { pk: args.pk },
    data: args,
  }) as Promise<EngineeringTarget>;
};
