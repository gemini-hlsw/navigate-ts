import { write } from './write.ts';

export async function populateDb() {
  await write();
  // await getInfo()
}
