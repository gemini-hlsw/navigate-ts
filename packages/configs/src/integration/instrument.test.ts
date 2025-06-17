import type { AssertionError } from 'node:assert';
import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { MutationResetInstrumentsArgs, MutationUpdateInstrumentArgs } from '../graphql/gen/index.js';
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
      const initialInstrument = await fixture.prisma.instrument.findFirstOrThrow({
        where: { wfs: 'NONE', name: 'GMOS_SOUTH' },
      });
      assert.deepStrictEqual(initialInstrument.extraParams, {});

      await fixture.prisma.instrument.update({
        where: { pk: initialInstrument.pk },
        data: { extraParams: { foo: 'bar' } },
      });

      await fixture.executeGraphql<MutationResetInstrumentsArgs>({
        query: `#graphql
          mutation resetInstruments($name: String!) {
            resetInstruments(name: $name) {
              pk
              extraParams
            }
          }`,
        variables: { name: initialInstrument.name },
      });

      const resetInstrument = await fixture.prisma.instrument.findFirstOrThrow({
        where: { wfs: 'NONE', name: 'GMOS_SOUTH' },
      });
      // Compare without the primary key
      assert.deepStrictEqual({ ...resetInstrument, pk: undefined }, { ...initialInstrument, pk: undefined });
    });

    await it('resets multiple instruments with the name', async () => {
      const where = { wfs: 'NONE', name: 'GMOS_SOUTH' } as const;
      const initialInstruments = await fixture.prisma.instrument.findMany({
        where,
      });
      assert(initialInstruments.length > 1, 'There should be multiple instruments with the name GMOS_SOUTH');

      for (const instrument of initialInstruments) {
        await fixture.prisma.instrument.update({
          where: { pk: instrument.pk },
          data: { extraParams: { foo: 'bar' } },
        });
      }

      await fixture.executeGraphql<MutationResetInstrumentsArgs>({
        query: `#graphql
          mutation resetInstruments($name: String!) {
            resetInstruments(name: $name) {
              pk
              extraParams
            }
          }`,
        variables: { name: 'GMOS_SOUTH' },
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
            mutation resetInstruments($name: String!) {
              resetInstruments(name: $name) {
                pk
                extraParams
              }
            }`,
          variables: { name: 'NON_EXISTENT_INSTRUMENT' },
        }),
        (err: AssertionError) => err.message.includes('No initial instruments found for name: NON_EXISTENT_INSTRUMENT'),
      );
    });
  });
});
