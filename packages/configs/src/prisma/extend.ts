import { deg2dms, deg2hms } from 'lucuma-core';

import type { PrismaClient } from '../../gen/prisma/index.js';

/**
 * Extend the prisma client by adding computed fields to Target
 */
export function extendPrisma(prisma: PrismaClient) {
  return prisma.$extends({
    result: {
      target: {
        ra: {
          needs: { type: true, coord1: true },
          compute(target) {
            if (target.type === 'FIXED') {
              return undefined;
            } else {
              return {
                hms: deg2hms(target.coord1),
                degrees: target.coord1,
              };
            }
          },
        },
        dec: {
          needs: { type: true, coord2: true },
          compute(target) {
            if (target.type === 'FIXED') {
              return undefined;
            } else {
              return {
                dms: deg2dms(target.coord2),
                degrees: target.coord2,
              };
            }
          },
        },
        az: {
          needs: { type: true, coord1: true },
          compute(target) {
            if (target.type === 'FIXED') {
              return {
                dms: deg2dms(target.coord1),
                degrees: target.coord1,
              };
            } else {
              return undefined;
            }
          },
        },
        el: {
          needs: { type: true, coord2: true },
          compute(target) {
            if (target.type === 'FIXED') {
              return {
                dms: deg2dms(target.coord2),
                degrees: target.coord2,
              };
            } else {
              return undefined;
            }
          },
        },
      },
    },
  });
}
