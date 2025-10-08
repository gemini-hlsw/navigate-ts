import { createServer } from 'node:http';

import { prisma } from './prisma/db.ts';
import { populateDb } from './prisma/queries/main.ts';
import { makeYogaServer } from './server.ts';

if (process.argv.includes('populate')) {
  // Populate DB
  try {
    await populateDb(prisma);
  } finally {
    await prisma.$disconnect();
  }
} else {
  const port = parseInt(process.env.SERVER_PORT! || process.env.PORT!) || 4000;
  const yoga = makeYogaServer({ prisma });
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const server = createServer(yoga);

  server.listen(port, () => {
    console.log(`🚀  Server ready at: http://localhost:${port}/`);
  });
}
