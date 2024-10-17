import { useMutation, useQuery } from '@apollo/client';
import { graphql } from './gen';

export const GET_ROTATOR = graphql(`
  query getRotator {
    rotator {
      pk
      angle
      tracking
    }
  }
`);

export function useRotator() {
  return useQuery(GET_ROTATOR, {
    context: { clientName: 'navigateConfigs' },
  });
}

const UPDATE_ROTATOR = graphql(`
  mutation updateRotator($pk: Int!, $angle: Float, $tracking: TrackingType) {
    updateRotator(pk: $pk, angle: $angle, tracking: $tracking) {
      pk
      angle
      tracking
    }
  }
`);

export function useUpdateRotator() {
  return useMutation(UPDATE_ROTATOR, {
    context: { clientName: 'navigateConfigs' },
  });
}
