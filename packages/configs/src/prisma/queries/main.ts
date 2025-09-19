import type { Prisma } from '../db.ts';
import { prisma } from '../db.ts';
import { write } from './write.ts';

export async function populateDb(client: Prisma = prisma) {
  await write(client);
  // await getInfo()
}
