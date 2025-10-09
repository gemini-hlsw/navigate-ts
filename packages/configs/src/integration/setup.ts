import assert from 'node:assert';
import { after, afterEach, before, beforeEach } from 'node:test';

import { PrismaPg } from '@prisma/adapter-pg';
import type { StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import type { Options } from 'execa';
import { execa } from 'execa';
import type { ExecutionResult } from 'graphql';

import type { PrismaClient as Prisma } from '../prisma/db.ts';
import { extendPrisma } from '../prisma/extend.ts';
import { PrismaClient } from '../prisma/gen/client.ts';
import { populateDb } from '../prisma/queries/main.ts';
import { makeYogaServer } from '../server.ts';

interface ServerFixture {
  /**
   * Execute a graphql operation and return the result.
   */
  executeGraphql: <
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
    TVariables extends Record<string, unknown>,
    TData extends Record<string, unknown> = Record<string, unknown>,
  >(options: {
    query: string;
    variables: TVariables;
  }) => Promise<ExecutionResult<TData>>;
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
    const databaseConnectionUri = container.getConnectionUri();
    const exec = execa<Options>({ env: { DATABASE_URL: databaseConnectionUri }, cancelSignal: signal });
    await exec`prisma migrate deploy`;
    const client = extendPrisma(
      new PrismaClient({ adapter: new PrismaPg({ connectionString: databaseConnectionUri }) }),
    );
    await populateDb(client);
    await client.$disconnect();

    // Save starting snapshot of the database
    await container.snapshot();
  });

  beforeEach(async () => {
    // Restore the database to a clean state before each test
    await container.restoreSnapshot();

    // Setup Prisma client with the test container connection
    const prisma = extendPrisma(
      new PrismaClient({ adapter: new PrismaPg({ connectionString: container.getConnectionUri() }) }),
    );

    const yoga = makeYogaServer({ prisma });

    const executeGraphql: ServerFixture['executeGraphql'] = async <TData extends Record<string, unknown>>({
      query,
      variables,
    }: {
      query: string;
      variables: Record<string, unknown>;
    }) => {
      const res = await yoga.fetch('http://yoga/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: variables ?? undefined,
        }),
      });

      assert.ok(res.ok, `Graphql request failed: ${res.status} ${res.statusText} - ${await res.text()}`);

      const body = (await res.json()) as ExecutionResult<TData>;

      assert.ifError(body.errors);

      return body;
    };

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
