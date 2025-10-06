import type { PrismaClient } from '../db.ts';
import { prisma } from '../db.ts';
import { write } from './write.ts';

export async function populateDb(client: PrismaClient = prisma) {
  await write(client);
  // await getInfo()
}
