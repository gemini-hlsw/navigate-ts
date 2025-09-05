import { INITIAL_WINDOW_CENTER } from '../../prisma/queries/init/windowCenter.ts';
import type { Resolvers } from '../gen/index.ts';

export const WindowCenterResolver: Resolvers = {
  Query: {
    windowCenter: async (_parent, args, { prisma }) => {
      const wc = await prisma.windowCenter.findFirst({ where: args });
      if (wc) return wc;

      const initial = INITIAL_WINDOW_CENTER.find((w) => w.site === args.site);
      if (!initial) {
        throw new Error(`No initial window center for site ${args.site}`);
      }
      return prisma.windowCenter.create({ data: initial });
    },
  },
  Mutation: {
    setWindowCenter: (_parent, args, { prisma }) => {
      return prisma.windowCenter.update({
        where: { site: args.site },
        data: args,
      });
    },
  },
};
