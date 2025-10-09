import assert from 'node:assert';
import { describe, it } from 'node:test';

import type { MutationupdateGuideAlarmArgs } from '../graphql/gen/types.generated.ts';
import { initializeServerFixture } from './setup.ts';

await describe('GuideAlarm', async () => {
  const fixture = initializeServerFixture();

  await it('guideAlarms query returns seeded results', async () => {
    const response = await fixture.executeGraphql({
      query: `#graphql
        query guideAlarms {
          guideAlarms {
            OIWFS {
              limit
              enabled
            }
            PWFS1 {
              limit
              enabled
            }
            PWFS2 {
              limit
              enabled
            }
          }
        }`,
      variables: {},
    });

    assert.partialDeepStrictEqual(response.data, {
      guideAlarms: {
        OIWFS: {
          enabled: true,
          limit: 900,
        },
        PWFS1: {
          enabled: true,
          limit: 900,
        },
        PWFS2: {
          enabled: true,
          limit: 900,
        },
      },
    });
  });

  await it('updateGuideAlarm mutation updates the guide alarm', async () => {
    await fixture.executeGraphql<MutationupdateGuideAlarmArgs>({
      query: `#graphql
        mutation updateGuideAlarm($wfs: WfsType!, $enabled: Boolean, $limit: Int) {
          updateGuideAlarm(wfs: $wfs, enabled: $enabled, limit: $limit) {
            enabled
            limit
          }
        }`,
      variables: {
        wfs: 'PWFS1',
        enabled: false,
        limit: 1000,
      },
    });

    assert.deepStrictEqual(await fixture.prisma.guideAlarm.findFirstOrThrow({ where: { wfs: 'PWFS1' } }), {
      wfs: 'PWFS1',
      enabled: false,
      limit: 1000,
    });
  });
});
