import { startStandaloneServer } from '@apollo/server/standalone';

import { prisma } from './prisma/db.ts';
import { populateDb } from './prisma/queries/main.ts';
import type { ApolloContext } from './server.ts';
import { server } from './server.ts';

if (process.argv.includes('populate')) {
  // Populate DB
  try {
    await populateDb(prisma);
  } finally {
    await prisma.$disconnect();
  }
} else {
  const port = parseInt(process.env.SERVER_PORT! || process.env.PORT!) || 4000;
  const { url } = await startStandaloneServer<ApolloContext>(server, {
    listen: { port },
    context: () => Promise.resolve({ prisma }),
  });
  console.log(`🚀  Server ready at: ${url}`);
}
