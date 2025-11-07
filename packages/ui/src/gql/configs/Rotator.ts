import { useMutation, useQuery } from '@apollo/client/react';

import { graphql } from './gen';

export const ROTATOR_FRAGMENT = graphql(`
  fragment RotatorItem on Rotator {
    pk
    angle
    tracking
  }
`);

export const GET_ROTATOR = graphql(`
  query getRotator {
    rotator {
      ...RotatorItem
    }
  }
`);

export function useRotator() {
  return useQuery(GET_ROTATOR, {
    context: { clientName: 'navigateConfigs' },
  });
}

export const UPDATE_ROTATOR = graphql(`
  mutation updateRotator($pk: PosInt!, $angle: Float, $tracking: RotatorTrackingMode) {
    updateRotator(pk: $pk, angle: $angle, tracking: $tracking) {
      ...RotatorItem
    }
  }
`);

export function useUpdateRotator() {
  return useMutation(UPDATE_ROTATOR, {
    context: { clientName: 'navigateConfigs' },
  });
}
