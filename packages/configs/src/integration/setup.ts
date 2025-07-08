import assert from 'node:assert';
import { after, before } from 'node:test';

import type { GraphQLRequest } from '@apollo/server';
import type { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import type { Options } from 'execa';
import { execa } from 'execa';
import type { FormattedExecutionResult } from 'graphql';

import { PrismaClient } from '../../gen/prisma/index.js';
import type { Prisma } from '../prisma/db.js';
import { extendPrisma } from '../prisma/extend.js';
import type { ApolloContext } from '../server.js';
import { server } from '../server.js';

export interface ServerFixture {
  /**
   * Execute a graphql operation and return the result.
   */
  executeGraphql: <T extends Record<string, unknown>>(options: GraphQLRequest<T>) => Promise<FormattedExecutionResult>;
  container: StartedPostgreSqlContainer;
  prisma: Prisma;
}

/**
 * Initialize a fixture for the tests. This will create a postgres container, migrate and seed the database, and setup the prisma client.
 * Also provides a helper function to execute a single graphql operation.
 *
 * Fixture is created in a before hook and torn down in an after hook.
 */
export function initializeServerFixture() {
  // Mutable fixture object that holds the database connection and other useful objects
  const fixture: ServerFixture = {} as ServerFixture;

  // Register setup to create the fixture
  before(async ({ signal }) => {
    // Create a postgres container for the tests
    const container = await new PostgreSqlContainer('postgres:alpine').start();
    const databaseUrl = container.getConnectionUri();

    // Setup Prisma client with the test container connection
    const prisma = extendPrisma(new PrismaClient({ datasourceUrl: databaseUrl }));
    // Migrate and seed the database
    const exec = execa<Options>({ env: { DATABASE_URL: databaseUrl }, cancelSignal: signal });
    await exec`prisma migrate dev`;
    await exec`prisma db seed`;

    const contextValue: ApolloContext = { prisma };

    async function executeGraphql(options: GraphQLRequest) {
      const response = await server.executeOperation(options, { contextValue });

      assert.strictEqual(response.body.kind, 'single');
      assert.ifError(response.body.singleResult.errors);

      return response.body.singleResult;
    }

    fixture.executeGraphql = executeGraphql;
    fixture.container = container;
    fixture.prisma = prisma;
  });

  // Register teardown
  after(async () => {
    await fixture.prisma.$disconnect();
    await fixture.container.stop({ timeout: 10000 });
  });

  return fixture;
}
