import { useMutation, useQuery } from '@apollo/client/react';
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

const UPDATE_ENGINEERING_TARGET = graphql(`
  mutation updateEngineeringTarget(
    $pk: PosInt!
    $id: String
    $name: String
    $coord1: Float
    $coord2: Float
    $pmRa: Float
    $pmDec: Float
    $radialVelocity: Float
    $parallax: Float
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
      pmRa: $pmRa
      pmDec: $pmDec
      radialVelocity: $radialVelocity
      parallax: $parallax
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

export function useUpdateTarget() {
  const [mutationFunction] = useMutation(UPDATE_ENGINEERING_TARGET, {
    context: { clientName: 'navigateConfigs' },
  });

  return mutationFunction;
}
