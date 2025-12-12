import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { SiderealTargetUpdateInput, Target } from '../graphql/gen/types.generated.ts';
import { initializeServerFixture } from './setup.ts';

await describe('updateTarget', async () => {
  const fixture = initializeServerFixture();

  await it('updates a target', async () => {
    const target = await fixture.prisma.target.create({
      data: {
        id: 't-1',
        name: 'Initial Target',
        type: 'SCIENCE',
      },
      select: { pk: true },
    });
    const query = `#graphql
      mutation updateTarget($pk: PosInt!, $name: String!) {
        updateTarget(pk: $pk, name: $name) {
          pk
          name
        }
      }`;

    const response = await fixture.executeGraphql<Partial<Target>, { updateTarget: Target }>({
      query,
      variables: {
        pk: target.pk,
        name: 'Updated Target',
      },
    });

    assert.equal(response.data?.updateTarget.pk, target.pk);
    assert.equal(response.data?.updateTarget.name, 'Updated Target');
    const updatedTarget = await fixture.prisma.target.findUnique({ where: { pk: target.pk } });
    assert.equal(updatedTarget?.name, 'Updated Target');
  });

  await it('also updates sidereal data', async () => {
    const target = await fixture.prisma.target.create({
      data: {
        id: 't-2',
        name: 'Sidereal Target',
        type: 'SCIENCE',
        sidereal: {
          create: {
            coord1: 10,
            coord2: 20,
            epoch: 'J2000',
          },
        },
      },
      select: { pk: true },
    });
    const query = `#graphql
      mutation updateTarget($pk: PosInt!, $sidereal: SiderealTargetUpdateInput!) {
        updateTarget(pk: $pk, sidereal: $sidereal) {
          pk
          name
          sidereal {
            epoch
          }
        }
      }`;

    const response = await fixture.executeGraphql<Record<string, unknown>, { updateTarget: Target }>({
      query,
      variables: {
        pk: target.pk,
        sidereal: {
          epoch: 'J2001',
        } satisfies SiderealTargetUpdateInput,
      },
    });

    assert.equal(response.data?.updateTarget.pk, target.pk);
    assert.equal(response.data?.updateTarget.sidereal?.epoch, 'J2001');
    const updatedTarget = await fixture.prisma.target.findUnique({
      where: { pk: target.pk },
      include: { sidereal: true },
    });
    assert.equal(updatedTarget?.sidereal?.epoch, 'J2001');
  });

  await it('also updates nonsidereal data', async () => {
    const target = await fixture.prisma.target.create({
      data: {
        id: 't-3',
        name: 'Nonsidereal Target',
        type: 'BLINDOFFSET',
        nonsidereal: {
          create: {
            des: '2024 AB',
            keyType: 'MAJOR_BODY',
          },
        },
      },
      select: { pk: true },
    });
    const query = `#graphql
      mutation updateTarget($pk: PosInt!, $nonsidereal: NonsiderealTargetUpdateInput!) {
        updateTarget(pk: $pk, nonsidereal: $nonsidereal) {
          pk
          name
          nonsidereal {
            des
          }
        }
      }`;

    const response = await fixture.executeGraphql<Record<string, unknown>, { updateTarget: Target }>({
      query,
      variables: {
        pk: target.pk,
        nonsidereal: {
          des: '2024 AC',
        },
      },
    });

    assert.equal(response.data?.updateTarget.pk, target.pk);
    assert.equal(response.data?.updateTarget.nonsidereal?.des, '2024 AC');
    const updatedTarget = await fixture.prisma.target.findUnique({
      where: { pk: target.pk },
      include: { nonsidereal: true },
    });
    assert.equal(updatedTarget?.nonsidereal?.des, '2024 AC');
  });
});
