import { useMutation, useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { graphql } from './gen';
import type { EngineeringTarget } from './gen/graphql';

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

  const filteredData = useMemo(() => {
    const targets: EngineeringTarget[] = result.data?.engineeringTargets ?? [];
    return targets;
  }, [result.data]);

  return { ...result, data: filteredData };
}

const UPDATE_ENGINEERING_TARGET = graphql(`
  mutation updateEngineeringTarget(
    $pk: PosInt!
    $id: String
    $name: String
    $coord1: Float
    $coord2: Float
    $epoch: String
    $type: TargetType
    $wavelength: Int
    $instrument: Instrument
    $rotatorAngle: Float
    $rotatorMode: RotatorTrackingMode
  ) {
    updateEngineeringTarget(
      pk: $pk
      id: $id
      name: $name
      coord1: $coord1
      coord2: $coord2
      epoch: $epoch
      type: $type
      wavelength: $wavelength
      instrument: $instrument
      rotatorAngle: $rotatorAngle
      rotatorMode: $rotatorMode
    ) {
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

export function useUpdateTarget() {
  const [mutationFunction] = useMutation(UPDATE_ENGINEERING_TARGET, {
    context: { clientName: 'navigateConfigs' },
  });

  return mutationFunction;
}
