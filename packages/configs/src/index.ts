import { startStandaloneServer } from '@apollo/server/standalone';

import { prisma } from './prisma/db.js';
import { populateDb } from './prisma/queries/main.js';
import type { ApolloContext } from './server.js';
import { server } from './server.js';

if (process.argv.includes('populate')) {
  // Populate DB
  await populateDb();
} else {
  const { url } = await startStandaloneServer<ApolloContext>(server, {
    listen: { port: parseInt(process.env.SERVER_PORT!) || 4000 },
    context: () => Promise.resolve({ prisma }),
  });
  console.log(`🚀  Server ready at: ${url}`);
}
