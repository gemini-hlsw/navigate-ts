#!/usr/bin/env node

// @ts-check
import assert from 'node:assert';
import { setTimeout } from 'node:timers/promises';

const query = `#graphql
  query Version {
    version {
      version
      databaseVersion
    }
  }
`;
const url = `http://localhost:${process.env.SERVER_PORT ?? 4000}/graphql`;

/**
 * Executes a GraphQL query against the server. Retries on failure, up to a maximum number of retries.
 */
async function executeGraphql(retries = 3, sleepTime = 1000) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    assert.ok(response.ok, `Failed to execute query: ${response.statusText}`);
    const json = await response.json();

    assert.strictEqual(json.errors, undefined);

    assert.ok(json.data?.version?.version, 'Version not found');
    assert.ok(json.data?.version?.databaseVersion, 'Database version not found');

    console.log(`Success!`);
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    console.error(error.message);
    console.error(`Retrying in ${sleepTime}ms...`);

    await setTimeout(sleepTime);
    return executeGraphql(retries - 1, sleepTime * 2);
  }
}

console.log(`Checking server health at ${url}...`);

await executeGraphql();
