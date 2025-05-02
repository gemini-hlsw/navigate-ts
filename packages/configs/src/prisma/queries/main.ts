import { write } from './write.js';

export async function populateDb() {
  await write();
  // await getInfo()
}
