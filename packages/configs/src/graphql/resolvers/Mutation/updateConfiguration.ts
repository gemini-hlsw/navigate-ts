import type { Configuration, MutationResolvers } from './../../gen/types.generated.ts';

export const updateConfiguration: NonNullable<MutationResolvers['updateConfiguration']> = async (
  _parent,
  args,
  { prisma },
) => {
  return prisma.configuration.update({
    where: { pk: args.pk },
    data: args,
  }) as Promise<Configuration>;
};
