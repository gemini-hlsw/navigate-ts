import { prisma } from '../db.ts';

async function getUser() {
  return await prisma.user.findFirst();
}

export async function read() {
  await getUser();
}
