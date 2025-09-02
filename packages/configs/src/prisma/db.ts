import { extendPrisma } from './extend.ts';
import { PrismaClient } from './gen/client.ts';

export const prisma = extendPrisma(new PrismaClient());

export type Prisma = typeof prisma;
