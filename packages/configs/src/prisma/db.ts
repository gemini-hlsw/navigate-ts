import { extendPrisma } from './extend.ts';
import { PrismaClient as GenPrismaClient } from './gen/client.ts';

export const prisma = extendPrisma(new GenPrismaClient());

export type PrismaClient = typeof prisma;
