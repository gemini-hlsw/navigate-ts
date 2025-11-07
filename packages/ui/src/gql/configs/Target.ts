import { useMutation, useQuery } from '@apollo/client/react';
import { isBaseTarget, isOiTarget, isP1Target, isP2Target } from '@gql/util';
import { useMemo } from 'react';

import { graphql } from './gen';
import type { Target } from './gen/graphql';

export const GET_TARGETS = graphql(`
  query getTargets {
    targets {
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
      magnitude
      band
      epoch
      type
      wavelength
      createdAt
    }
  }
`);

export function useTargets() {
  const result = useQuery(GET_TARGETS, {
    context: { clientName: 'navigateConfigs' },
  });

  return useMemo(() => {
    const targets: Target[] = result.data?.targets ?? [];

    return {
      ...result,
      data: {
        baseTargets: targets.filter(isBaseTarget),
        oiTargets: targets.filter(isOiTarget),
        p1Targets: targets.filter(isP1Target),
        p2Targets: targets.filter(isP2Target),
        allTargets: targets,
      },
    };
  }, [result]);
}

export const UPDATE_TARGET = graphql(`
  mutation updateTarget(
    $pk: PosInt!
    $id: TargetId
    $name: String
    $coord1: Float
    $coord2: Float
    $pmRa: Float
    $pmDec: Float
    $radialVelocity: Float
    $parallax: Float
    $magnitude: Float
    $band: String
    $epoch: String
    $type: TargetType
    $wavelength: Int
  ) {
    updateTarget(
      pk: $pk
      id: $id
      name: $name
      coord1: $coord1
      coord2: $coord2
      pmRa: $pmRa
      pmDec: $pmDec
      radialVelocity: $radialVelocity
      parallax: $parallax
      magnitude: $magnitude
      band: $band
      epoch: $epoch
      type: $type
      wavelength: $wavelength
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
      magnitude
      band
      epoch
      type
      wavelength
      createdAt
    }
  }
`);

export function useUpdateTarget() {
  return useMutation(UPDATE_TARGET, {
    context: { clientName: 'navigateConfigs' },
  });
}

export const REMOVE_AND_CREATE_BASE_TARGETS = graphql(`
  mutation removeAndCreateBaseTargets($targets: [TargetInput!]!) {
    removeAndCreateBaseTargets(targets: $targets) {
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
      magnitude
      band
      epoch
      type
      wavelength
      createdAt
    }
  }
`);

export function useRemoveAndCreateBaseTargets() {
  return useMutation(REMOVE_AND_CREATE_BASE_TARGETS, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [GET_TARGETS],
  });
}

export const REMOVE_AND_CREATE_WFS_TARGETS = graphql(`
  mutation removeAndCreateWfsTargets($wfs: TargetType!, $targets: [TargetInput!]!) {
    removeAndCreateWfsTargets(wfs: $wfs, targets: $targets) {
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
      magnitude
      band
      epoch
      type
      wavelength
      createdAt
    }
  }
`);

export function useRemoveAndCreateWfsTargets() {
  return useMutation(REMOVE_AND_CREATE_WFS_TARGETS, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [GET_TARGETS],
  });
}
