import type { Prisma } from '../../gen/client.ts';

export const INITIAL_GUIDE_ALARMS: Prisma.GuideAlarmCreateInput[] = [
  {
    wfs: 'PWFS1',
    limit: 1000,
    enabled: true,
  },
  {
    wfs: 'PWFS2',
    limit: 1000,
    enabled: true,
  },
  {
    wfs: 'OIWFS',
    limit: 1000,
    enabled: true,
  },
];
