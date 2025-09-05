import type { Instrument } from '../../../graphql/gen/index.ts';
import type { Prisma } from '../../gen/client.ts';

export const INITIAL_ENGINEERING_TARGETS: (Prisma.EngineeringTargetCreateInput & { instrument: Instrument })[] = [
  {
    coord1: 147.0,
    coord2: 89.9,
    pmRa: null,
    pmDec: null,
    radialVelocity: null,
    parallax: null,
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
