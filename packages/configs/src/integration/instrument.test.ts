import type { AssertionError } from 'node:assert';
import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { Instrument, MutationResetInstrumentsArgs, MutationUpdateInstrumentArgs } from '../graphql/gen/index.js';
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

  await describe('resetInstruments mutation', async () => {
    await it('resets the instrument to initial state', async () => {
      const where = { wfs: 'NONE', name: 'GMOS_NORTH', issPort: 5 } as const;
      const initialInstrument = await fixture.prisma.instrument.findFirstOrThrow({
        where,
      });
      assert.deepStrictEqual(initialInstrument.extraParams, {});

      await fixture.prisma.instrument.update({
        where: { pk: initialInstrument.pk },
        data: { extraParams: { foo: 'bar' } },
      });

      await fixture.executeGraphql<MutationResetInstrumentsArgs>({
        query: `#graphql
          mutation resetInstruments($name: Instrument!) {
            resetInstruments(name: $name) {
              pk
              extraParams
            }
          }`,
        variables: { name: initialInstrument.name as Instrument },
      });

      const resetInstrument = await fixture.prisma.instrument.findFirstOrThrow({
        where,
      });
      // Compare without the primary key
      assert.deepStrictEqual({ ...resetInstrument, pk: undefined }, { ...initialInstrument, pk: undefined });
    });

    await it('resets multiple instruments with the name', async () => {
      const where = { wfs: 'NONE', name: 'GMOS_NORTH' } as const;
      const initialInstruments = await fixture.prisma.instrument.findMany({
        where,
      });
      assert(initialInstruments.length > 1, 'There should be multiple instruments with the name GMOS_NORTH');

      for (const instrument of initialInstruments) {
        await fixture.prisma.instrument.update({
          where: { pk: instrument.pk },
          data: { extraParams: { foo: 'bar' } },
        });
      }

      await fixture.executeGraphql<MutationResetInstrumentsArgs>({
        query: `#graphql
          mutation resetInstruments($name: Instrument!) {
            resetInstruments(name: $name) {
              pk
              extraParams
            }
          }`,
        variables: { name: 'GMOS_NORTH' },
      });

      const resetInstruments = await fixture.prisma.instrument.findMany({ where });
      resetInstruments.forEach((instrument, i) => {
        assert.deepStrictEqual(instrument.extraParams, initialInstruments[i].extraParams);
      });
    });

    await it('throws an error if no initial instruments found for the name', async () => {
      await assert.rejects(
        fixture.executeGraphql<MutationResetInstrumentsArgs>({
          query: `#graphql
            mutation resetInstruments($name: Instrument!) {
              resetInstruments(name: $name) {
                pk
                extraParams
              }
            }`,
          variables: { name: 'SCORPIO' },
        }),
        (err: AssertionError) => err.message.includes('No initial instruments found for name: SCORPIO'),
      );
    });
  });
});
