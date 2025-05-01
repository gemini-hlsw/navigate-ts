import type { QueryAndSubscriptionOptions } from '../use-query-and-subscription';
import { useQueryAndSubscription } from '../use-query-and-subscription';
import { graphql } from './gen';

const GET_TELESCOPE_STATE = graphql(`
  query getTelescopeState {
    telescopeState {
      mount {
        parked
        follow
      }
      scs {
        parked
        follow
      }
      crcs {
        parked
        follow
      }
      pwfs1 {
        parked
        follow
      }
      pwfs2 {
        parked
        follow
      }
      oiwfs {
        parked
        follow
      }
    }
  }
`);

const TELESCOPE_STATE_SUBSCRIPTION = graphql(`
  subscription telescopeStates {
    telescopeState {
      mount {
        parked
        follow
      }
      scs {
        parked
        follow
      }
      crcs {
        parked
        follow
      }
      pwfs1 {
        parked
        follow
      }
      pwfs2 {
        parked
        follow
      }
      oiwfs {
        parked
        follow
      }
    }
  }
`);

export function useTelescopeState(options?: QueryAndSubscriptionOptions) {
  return useQueryAndSubscription(GET_TELESCOPE_STATE, TELESCOPE_STATE_SUBSCRIPTION, 'telescopeState', options);
}
