import { graphql } from './gen';

export const MOUNT_PARK_MUTATION = graphql(`
  mutation mountPark {
    mountPark {
      result
      msg
    }
  }
`);

export const ROTATOR_PARK_MUTATION = graphql(`
  mutation rotatorPark {
    rotatorPark {
      result
      msg
    }
  }
`);

export const OIWFS_PARK_MUTATION = graphql(`
  mutation oiwfsPark {
    oiwfsPark {
      result
      msg
    }
  }
`);
