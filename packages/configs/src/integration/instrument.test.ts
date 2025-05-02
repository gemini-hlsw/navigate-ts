import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { MutationUpdateInstrumentArgs } from '../graphql/gen/index.js';
import { initializeServerFixture } from './setup.js';

await describe('Instrument', async () => {
  const fixture = initializeServerFixture();

  await it('updateInstrument mutation updates the instrument', async () => {
    await fixture.executeGraphql<MutationUpdateInstrumentArgs>({
      query: `#graphql
        mutation updateInstrument($pk: Int!, $extraParams: JSON!) {
          updateInstrument(pk: $pk, extraParams: $extraParams) {
            pk
            extraParams
          }
        }`,
      variables: {
        pk: 1,
        extraParams: { foo: 'bar' },
      },
    });

    assert.deepStrictEqual((await fixture.prisma.instrument.findFirstOrThrow({ where: { pk: 1 } })).extraParams, {
      foo: 'bar',
    });
  });
});
