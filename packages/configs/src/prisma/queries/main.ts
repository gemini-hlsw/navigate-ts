import type { PrismaClient } from '../db.ts';
import { write } from './write.ts';

export async function populateDb(client: PrismaClient) {
  await write(client);
}
