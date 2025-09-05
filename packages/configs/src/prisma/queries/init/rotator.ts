import type { Prisma } from '../../gen/client.ts';

export const INITIAL_ROTATOR: Prisma.RotatorCreateInput = {
  angle: 0.0,
  tracking: 'TRACKING',
};
