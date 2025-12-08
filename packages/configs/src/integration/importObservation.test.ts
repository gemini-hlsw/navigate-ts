import assert from 'node:assert';
import { describe, it } from 'node:test';

import { initializeServerFixture } from './setup.ts';

await describe('importObservation', async () => {
  const fixture = initializeServerFixture();

  await it('imports rotator and configuration data', async () => {
    const response = await fixture.executeGraphql({
      query: `#graphql
        mutation doImportObservation($input: ImportObservationInput!) {
          importObservation(input: $input) {
            rotator {
              pk
            }
            configuration {
              pk
            }
          }
        }`,
      variables: {
        input: {
          configurationPk: 1,
          rotatorPk: 1,
          observation: {
            id: 'o-123',
            title: 'obs title',
            subtitle: 'obs subtitle',
            reference: null,
            instrument: 'GMOS_NORTH',
          },
          targets: {
            base: [],
            oiwfs: [],
            pwfs1: [],
            pwfs2: [],
          },
          guideEnvironmentAngle: { degrees: 1.1 },
        },
      },
    });

    assert.equal((await fixture.prisma.rotator.findUnique({ where: { pk: 1 } }))?.angle, 1.1);
    assert.deepEqual(await fixture.prisma.configuration.findUnique({ where: { pk: 1 } }), {
      pk: 1,
      baffleMode: 'AUTO',
      centralBaffle: null,
      deployableBaffle: null,
      obsId: 'o-123',
      obsInstrument: 'GMOS_NORTH',
      obsReference: null,
      obsSubtitle: 'obs subtitle',
      obsTitle: 'obs title',
      oiGuidingType: 'NORMAL',
      p1GuidingType: 'NORMAL',
      p2GuidingType: 'NORMAL',
      selectedGuiderTarget: null,
      selectedOiTarget: null,
      selectedP1Target: null,
      selectedP2Target: null,
      selectedTarget: null,
    });
    assert.deepStrictEqual(response.data, {
      importObservation: {
        configuration: { pk: 1 },
        rotator: { pk: 1 },
      },
    });
  });
});
