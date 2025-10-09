import { GraphQLError } from 'graphql';

import { INITIAL_WINDOW_CENTER } from '../../../prisma/queries/init/windowCenter.ts';
import type { QueryResolvers } from './../../gen/types.generated.ts';

export const windowCenter: NonNullable<QueryResolvers['windowCenter']> = async (_parent, args, { prisma }) => {
  const wc = await prisma.windowCenter.findFirst({ where: args });
  if (wc) return wc;

  const initial = INITIAL_WINDOW_CENTER.find((w) => w.site === args.site);
  if (!initial) {
    throw new GraphQLError(`No initial window center for site ${args.site}`);
  }
  return prisma.windowCenter.create({ data: initial });
};
