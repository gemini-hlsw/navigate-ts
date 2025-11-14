import { PrismaPg } from '@prisma/adapter-pg';

import { extendPrisma } from './extend.ts';
import { PrismaClient as GenPrismaClient } from './gen/client.ts';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

export const prisma = extendPrisma(
  new GenPrismaClient({ adapter: new PrismaPg({ connectionString: connectionString }) }),
);

export type PrismaClient = typeof prisma;
