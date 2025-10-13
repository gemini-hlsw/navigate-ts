import type { PrismaClient } from '../db.ts';
import { write } from './write.ts';

export async function populateDb(client: PrismaClient, log = console.log) {
  await write(client, log);
}
