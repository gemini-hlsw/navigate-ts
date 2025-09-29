import { useQuery } from '@apollo/client/react';
import { useMemo } from 'react';

import { graphql } from './gen';

const GET_ENGINEERING_TARGETS = graphql(`
  query getEngineeringTargets {
    engineeringTargets {
      pk
      id
      name
      ra {
        degrees
        hms
      }
      dec {
        degrees
        dms
      }
      az {
        degrees
        dms
      }
      el {
        degrees
        dms
      }
      properMotion {
        ra
        dec
      }
      radialVelocity
      parallax
      epoch
      type
      wavelength
      instrument
      createdAt
      rotatorAngle
      rotatorMode
    }
  }
`);

export function useEngineeringTargets() {
  const result = useQuery(GET_ENGINEERING_TARGETS, {
    context: { clientName: 'navigateConfigs' },
  });

  return useMemo(() => ({ ...result, data: result.data?.engineeringTargets ?? [] }), [result]);
}
