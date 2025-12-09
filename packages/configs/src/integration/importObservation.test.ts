import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { ImportObservationInput } from '../graphql/gen/types.generated.ts';
import { initializeServerFixture } from './setup.ts';

await describe('importObservation', async () => {
  const fixture = initializeServerFixture();

  const query = `#graphql
    mutation doImportObservation($input: ImportObservationInput!) {
      importObservation(input: $input) {
        rotator {
          pk
        }
        configuration {
          pk
        }
      }
    }`;

  await it('imports rotator and configuration data', async () => {
    const response = await fixture.executeGraphql({
      query,
      variables: {
        input: {
          configurationPk: 1,
          rotatorPk: 1,
          observation: {
            id: 'o-123',
            title: 'obs title',
            subtitle: 'obs subtitle',
            reference: undefined,
            instrument: 'GMOS_NORTH',
          },
          targets: {
            base: [],
            oiwfs: [],
            pwfs1: [],
            pwfs2: [],
          },
          guideEnvironmentAngle: { degrees: 1.1 },
        } satisfies ImportObservationInput,
      },
    });

    assert.deepEqual(await fixture.prisma.rotator.findUnique({ where: { pk: 1 } }), {
      pk: 1,
      tracking: 'TRACKING',
      angle: 1.1,
    });
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

  await it('imports targets', async () => {
    const response = await fixture.executeGraphql({
      query,
      variables: {
        input: {
          configurationPk: 1,
          rotatorPk: 1,
          observation: {
            id: 'o-456',
            title: 'obs title 2',
            subtitle: 'obs subtitle 2',
            reference: 'ref-456',
            instrument: 'GMOS_SOUTH',
          },
          targets: {
            base: [
              {
                id: 't-1',
                name: 'Base Target',
                coord1: 10,
                coord2: 20,
                type: 'SCIENCE',
              },
            ],
            oiwfs: [
              {
                id: 't-2',
                name: 'OIWFS Target',
                coord1: 30,
                coord2: 40,
                type: 'OIWFS',
              },
            ],
            pwfs1: [],
            pwfs2: [],
          },
          guideEnvironmentAngle: { degrees: 2.2 },
        } satisfies ImportObservationInput,
      },
    });

    assert.deepEqual(
      (await fixture.prisma.target.findMany()).map((t) => ({ id: t.id, name: t.name, type: t.type })),
      [
        { id: 't-1', name: 'Base Target', type: 'SCIENCE' },
        { id: 't-2', name: 'OIWFS Target', type: 'OIWFS' },
      ],
    );
    assert.deepEqual(await fixture.prisma.configuration.findUnique({ where: { pk: 1 } }), {
      pk: 1,
      baffleMode: 'AUTO',
      centralBaffle: null,
      deployableBaffle: null,
      obsId: 'o-456',
      obsInstrument: 'GMOS_SOUTH',
      obsReference: 'ref-456',
      obsSubtitle: 'obs subtitle 2',
      obsTitle: 'obs title 2',
      oiGuidingType: 'NORMAL',
      p1GuidingType: 'NORMAL',
      p2GuidingType: 'NORMAL',
      selectedGuiderTarget: 2,
      selectedOiTarget: 2,
      selectedP1Target: null,
      selectedP2Target: null,
      selectedTarget: 1,
    });
    assert.deepStrictEqual(response.data, {
      importObservation: {
        configuration: { pk: 1 },
        rotator: { pk: 1 },
      },
    });
  });

  await it('deletes temporary instruments', async () => {
    await fixture.prisma.instrument.create({
      data: {
        name: 'GMOS_NORTH',
        isTemporary: true,
        issPort: 2,
        extraParams: {},
      },
    });

    await fixture.executeGraphql({
      query,
      variables: {
        input: {
          configurationPk: 1,
          rotatorPk: 1,
          observation: {
            id: 'o-789',
            title: 'obs title 3',
            subtitle: 'obs subtitle 3',
            reference: 'ref-789',
            instrument: 'GMOS_NORTH',
          },
          targets: {
            base: [],
            oiwfs: [],
            pwfs1: [],
            pwfs2: [],
          },
          guideEnvironmentAngle: { degrees: 3.3 },
        } satisfies ImportObservationInput,
      },
    });

    const instruments = await fixture.prisma.instrument.findMany({ where: { isTemporary: true } });
    assert.strictEqual(instruments.length, 0);
  });
});
