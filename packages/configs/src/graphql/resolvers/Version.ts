import pkgJson from '../../../package.json' with { type: 'json' };
import type { Resolvers } from '../gen/index.ts';

export const VersionResolver: Resolvers = {
  Query: {
    version: async (_parent, _args, { prisma }) => {
      return {
        serverVersion: pkgJson.version,
        databaseVersion: (await prisma.$queryRaw<[{ version: string }]>`SELECT version()`)[0].version,
      };
    },
  },
};
