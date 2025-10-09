import type { Configuration, MutationResolvers } from './../../gen/types.generated.ts';

export const createConfiguration: NonNullable<MutationResolvers['createConfiguration']> = (
  _parent,
  args,
  { prisma },
) => {
  return prisma.configuration.create({ data: args }) as Promise<Configuration>;
};
