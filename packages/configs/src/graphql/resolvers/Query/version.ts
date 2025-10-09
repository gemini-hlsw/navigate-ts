import pkgJson from '../../../../package.json' with { type: 'json' };
import type { QueryResolvers } from './../../gen/types.generated.ts';

export const version: NonNullable<QueryResolvers['version']> = async (_parent, _arg, { prisma }) => {
  return {
    serverVersion: pkgJson.version,
    databaseVersion: (await prisma.$queryRaw<[{ version: string }]>`SELECT version()`)[0].version,
  };
};
