import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { MutationResetInstrumentsArgs, MutationUpdateInstrumentArgs } from '../graphql/gen/index.ts';
import { initializeServerFixture } from './setup.ts';

await describe('Instrument', async () => {
  const fixture = initializeServerFixture();

  await it('updateInstrument mutation updates the instrument', async () => {
    await fixture.executeGraphql<MutationUpdateInstrumentArgs>({
      query: `#graphql
        mutation updateInstrument($pk: PosInt!, $extraParams: JSON!) {
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

  await describe('resetInstruments mutation', async () => {
    await it('removes temporary instruments', async () => {
      const where = { wfs: 'NONE', name: 'GMOS_NORTH', issPort: 5 } as const;
      await fixture.prisma.instrument.create({
        data: { ...where, isTemporary: true, extraParams: { foo: 'bar' } },
      });
      const countWithTemporary = await fixture.prisma.instrument.count({
        where,
      });

      await fixture.executeGraphql<MutationResetInstrumentsArgs>({
        query: `#graphql
          mutation resetInstruments($name: Instrument!) {
            resetInstruments(name: $name)
          }`,
        variables: { name: 'GMOS_NORTH' },
      });

      const [countAfterReset, temporaryCount] = await Promise.all([
        fixture.prisma.instrument.count({
          where,
        }),
        fixture.prisma.instrument.count({
          where: { ...where, isTemporary: true },
        }),
      ]);
      assert.equal(countAfterReset, countWithTemporary - 1);
      assert.equal(temporaryCount, 0);
    });
  });
});
