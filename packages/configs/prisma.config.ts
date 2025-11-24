import fs from 'node:fs';
import path from 'node:path';

import { defineConfig } from 'prisma/config';

if (fs.existsSync('./.env')) process.loadEnvFile('./.env');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

export default defineConfig({
  datasource: { url: connectionString },
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    path: path.join('prisma', 'migrations'),
    seed: 'pnpm preview populate',
  },
});
