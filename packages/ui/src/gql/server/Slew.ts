import { graphql } from './gen';

export const SLEW_MUTATION = graphql(`
  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!, $obsId: ObservationId) {
    slew(slewOptions: $slewOptions, config: $config, obsId: $obsId) {
      result
    }
  }
`);
