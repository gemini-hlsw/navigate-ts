import { useMutation, useQuery } from '@apollo/client';
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

  const filteredData = useMemo(() => {
    const targets: Target[] = result.data?.targets ?? [];
    return {
      baseTargets: targets.filter(isBaseTarget),
      oiTargets: targets.filter(isOiTarget),
      p1Targets: targets.filter(isP1Target),
      p2Targets: targets.filter(isP2Target),
      allTargets: targets,
    };
  }, [result.data]);

  return { ...result, data: filteredData };
}

const UPDATE_TARGET = graphql(`
  mutation updateTarget(
    $pk: PosInt!
    $id: TargetId
    $name: String
    $coord1: Float
    $coord2: Float
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
  const [mutationFunction] = useMutation(UPDATE_TARGET, {
    context: { clientName: 'navigateConfigs' },
  });

  return mutationFunction;
}

const CREATE_TARGET = graphql(`
  mutation createTarget(
    $id: TargetId
    $name: String!
    $ra: Float
    $az: Float
    $dec: Float
    $el: Float
    $magnitude: Float
    $band: String
    $epoch: String
    $type: TargetType!
    $wavelength: Int
  ) {
    createTarget(
      id: $id
      name: $name
      ra: $ra
      az: $az
      dec: $dec
      el: $el
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
      magnitude
      band
      epoch
      type
      wavelength
      createdAt
    }
  }
`);

export function useCreateTarget() {
  const [mutationFunction] = useMutation(CREATE_TARGET, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [GET_TARGETS],
  });

  return mutationFunction;
}

const REMOVE_AND_CREATE_BASE_TARGETS = graphql(`
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

const REMOVE_AND_CREATE_WFS_TARGETS = graphql(`
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
