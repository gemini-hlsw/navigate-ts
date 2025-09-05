import fs from 'node:fs';
import path from 'node:path';

import { defineConfig } from 'prisma/config';

if (fs.existsSync('./.env')) process.loadEnvFile('./.env');

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    path: path.join('prisma', 'migrations'),
    seed: 'pnpm preview populate',
  },
});
