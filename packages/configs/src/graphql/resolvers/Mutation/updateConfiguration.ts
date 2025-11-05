import type { Configuration, MutationResolvers } from './../../gen/types.generated.ts';

export const updateConfiguration: NonNullable<MutationResolvers['updateConfiguration']> = (
  _parent,
  args,
  { prisma },
) => {
  return prisma.configuration.update({
    where: { pk: args.pk },
    data: args,
  }) as Promise<Configuration>;
};
