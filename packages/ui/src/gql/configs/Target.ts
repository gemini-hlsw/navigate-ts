import { useMutation, useQuery } from '@apollo/client/react';
import { isBaseTarget, isOiTarget, isP1Target, isP2Target } from '@gql/util';
import { useMemo } from 'react';

import { graphql } from './gen';
import type { Target } from './gen/graphql';
import { GET_INSTRUMENT } from './Instrument';

export const TARGET_FRAGMENT = graphql(`
  fragment ConfigsTargetItem on Target {
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
`);

export const GET_TARGETS = graphql(`
  query getTargets {
    targets {
      ...ConfigsTargetItem
    }
  }
`);

export function useTargets() {
  const result = useQuery(GET_TARGETS, {
    context: { clientName: 'navigateConfigs' },
  });

  return useMemo(() => {
    const targets: Target[] = result.data?.targets ?? [];

    const oiTargets = targets.filter(isOiTarget);
    const p1Targets = targets.filter(isP1Target);
    const p2Targets = targets.filter(isP2Target);
    return {
      ...result,
      data: {
        baseTargets: targets.filter(isBaseTarget),
        oiTargets: oiTargets,
        p1Targets: p1Targets,
        p2Targets: p2Targets,
        allTargets: targets,
        guiderTargets: [...oiTargets, ...p1Targets, ...p2Targets],
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
      ...ConfigsTargetItem
    }
  }
`);

export function useUpdateTarget() {
  const targets = useTargets().data.allTargets;
  return useMutation(UPDATE_TARGET, {
    context: { clientName: 'navigateConfigs' },
    optimisticResponse: (vars, { IGNORE }) => {
      const target = targets.find((t) => t.pk === vars.pk);
      return target
        ? {
            updateTarget: {
              ...target,
              ...vars,
            } as typeof target,
          }
        : IGNORE;
    },
  });
}

export const REMOVE_AND_CREATE_BASE_TARGETS = graphql(`
  mutation removeAndCreateBaseTargets($targets: [TargetInput!]!) {
    removeAndCreateBaseTargets(targets: $targets) {
      ...ConfigsTargetItem
    }
  }
`);

export function useRemoveAndCreateBaseTargets() {
  return useMutation(REMOVE_AND_CREATE_BASE_TARGETS, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [GET_TARGETS],
  });
}

export const DO_IMPORT_OBSERVATION = graphql(`
  mutation doImportObservation($input: ImportObservationInput!) {
    importObservation(input: $input) {
      rotator {
        ...RotatorItem
      }
      configuration {
        ...ConfigurationItem
      }
    }
  }
`);

export function useDoImportObservation() {
  return useMutation(DO_IMPORT_OBSERVATION, {
    context: { clientName: 'navigateConfigs' },
    refetchQueries: [GET_TARGETS, GET_INSTRUMENT],
  });
}
