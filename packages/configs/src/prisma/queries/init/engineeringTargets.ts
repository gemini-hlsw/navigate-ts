import type { Prisma } from '../../../../gen/prisma/index.js';

export const INITIAL_ENGINEERING_TARGETS: Prisma.EngineeringTargetCreateInput[] = [
  {
    coord1: 147.0,
    coord2: 89.9,
    type: 'FIXED',
    name: 'Zenith',
    wavelength: 640.0,
    instrument: 'ACQ_CAM',
    epoch: 'zenith',
    id: 'zenith',
    rotatorMode: 'TRACKING',
    rotatorAngle: 0.0,
  },
];
