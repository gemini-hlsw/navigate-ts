import { prisma } from '../db.js';

async function getUser() {
  return await prisma.user.findFirst();
}

export async function read() {
  await getUser();
}
