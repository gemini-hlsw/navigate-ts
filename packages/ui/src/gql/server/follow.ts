import { graphql } from './gen';

// MCS
export const MOUNT_FOLLOW_MUTATION = graphql(`
  mutation changeMountState($enable: Boolean!) {
    mountFollow(enable: $enable) {
      result
      msg
    }
  }
`);

// CRCS
export const ROTATOR_FOLLOW_MUTATION = graphql(`
  mutation changeRotatorState($enable: Boolean!) {
    rotatorFollow(enable: $enable) {
      result
      msg
    }
  }
`);

// SCS
export const SCS_FOLLOW_MUTATION = graphql(`
  mutation changeScsState($enable: Boolean!) {
    scsFollow(enable: $enable) {
      result
      msg
    }
  }
`);

// OIWFS
export const OIWFS_FOLLOW_MUTATION = graphql(`
  mutation changeOiwfsState($enable: Boolean!) {
    oiwfsFollow(enable: $enable) {
      result
      msg
    }
  }
`);
