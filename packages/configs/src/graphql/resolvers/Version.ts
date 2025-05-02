import pkgJson from '../../../package.json' with { type: 'json' };
import type { Resolvers } from '../gen/index.js';

export const VersionResolver: Resolvers = {
  Query: {
    version: async (_parent, _args, { prisma }) => {
      return {
        version: pkgJson.version,
        databaseVersion: (await prisma.$queryRaw<[{ version: string }]>`SELECT version()`)[0].version,
      };
    },
  },
};
