import { PrismaClient } from '../../gen/prisma/index.js';
import { extendPrisma } from './extend.js';

export const prisma = extendPrisma(new PrismaClient());

export type Prisma = typeof prisma;
