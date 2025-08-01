import assert from 'node:assert';
import { after, afterEach, before, beforeEach } from 'node:test';

import type { GraphQLRequest } from '@apollo/server';
import type { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import type { Options } from 'execa';
import { execa } from 'execa';
import type { FormattedExecutionResult } from 'graphql';

import type { Prisma } from '../prisma/db.js';
import { extendPrisma } from '../prisma/extend.js';
import { PrismaClient } from '../prisma/gen/client.js';
import type { ApolloContext } from '../server.js';
import { server } from '../server.js';

export interface ServerFixture {
  /**
   * Execute a graphql operation and return the result.
   */
  executeGraphql: <T extends Record<string, unknown>>(options: GraphQLRequest<T>) => Promise<FormattedExecutionResult>;
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

  let container: StartedPostgreSqlContainer;

  // Register setup to create the fixture
  before(async ({ signal }) => {
    // Create a postgres container for the tests
    container = await new PostgreSqlContainer('postgres:alpine').start();

    // Migrate and seed the database
    const exec = execa<Options>({ env: { DATABASE_URL: container.getConnectionUri() }, cancelSignal: signal });
    await exec`prisma migrate deploy`;
    await exec`prisma db seed`;

    // Save starting snapshot of the database
    await container.snapshot();
  });

  beforeEach(async () => {
    // Restore the database to a clean state before each test
    await container.restoreSnapshot();

    // Setup Prisma client with the test container connection
    const prisma = extendPrisma(new PrismaClient({ datasourceUrl: container.getConnectionUri() }));

    const contextValue: ApolloContext = { prisma };

    async function executeGraphql(options: GraphQLRequest) {
      const response = await server.executeOperation(options, { contextValue });

      assert.strictEqual(response.body.kind, 'single');
      assert.ifError(response.body.singleResult.errors);

      return response.body.singleResult;
    }

    fixture.executeGraphql = executeGraphql;
    fixture.prisma = prisma;
  });

  afterEach(async () => {
    await fixture.prisma?.$disconnect();
  });

  // Register teardown
  after(async () => {
    await container.stop({ timeout: 10_000 });
  });

  return fixture;
}
