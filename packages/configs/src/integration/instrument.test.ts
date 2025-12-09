import assert from 'node:assert';
import { describe, it } from 'node:test';

import type {
  InstrumentConfig,
  MutationupdateInstrumentArgs,
  QueryinstrumentArgs,
} from '../graphql/gen/types.generated.ts';
import { initializeServerFixture } from './setup.ts';

await describe('Instrument', async () => {
  const fixture = initializeServerFixture();

  await it('updateInstrument mutation updates the instrument', async () => {
    await fixture.executeGraphql<MutationupdateInstrumentArgs>({
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

  await describe('get unexistent instrument configuration', async () => {
    await it('returns previous configuration as fallback', async () => {
      const response = await fixture.executeGraphql<QueryinstrumentArgs, { instrument: InstrumentConfig }>({
        query: `#graphql
          query instrument($name: Instrument!, $issPort: Int!, $wfs: WfsType!) {
            instrument(name: $name, issPort: $issPort, wfs: $wfs) {
              pk
              name
              issPort
              comment
            }
          }`,
        variables: { name: 'FLAMINGOS2', issPort: 5, wfs: 'OIWFS' },
      });

      assert.ok(
        response.data?.instrument?.comment?.includes(
          'Default fallback configuration, using parameters from previous configuration',
        ),
      );
    });

    await it('returns a default configuration if no previous config is found', async () => {
      const response = await fixture.executeGraphql<QueryinstrumentArgs, { instrument: InstrumentConfig }>({
        query: `#graphql
          query instrument($name: Instrument!, $issPort: Int!, $wfs: WfsType!) {
            instrument(name: $name, issPort: $issPort, wfs: $wfs) {
              pk
              name
              issPort
              comment
            }
          }`,
        variables: { name: 'FLAMINGOS2', issPort: 1, wfs: 'OIWFS' },
      });

      assert.ok(
        response.data?.instrument?.comment?.includes(
          'Default fallback configuration, using empty configuration please modify manually',
        ),
      );
    });
  });
});
