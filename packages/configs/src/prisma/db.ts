import { PrismaPg } from '@prisma/adapter-pg';

import { extendPrisma } from './extend.ts';
import { PrismaClient as GenPrismaClient } from './gen/client.ts';

export const prisma = extendPrisma(
  new GenPrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }),
  }),
);

export type PrismaClient = typeof prisma;
