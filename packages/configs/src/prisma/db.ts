import { extendPrisma } from './extend.js';
import { PrismaClient } from './gen/client.js';

export const prisma = extendPrisma(new PrismaClient());

export type Prisma = typeof prisma;
