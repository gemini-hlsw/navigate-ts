import type { GetCentralWavelengthQuery, Instrument } from '@gql/odb/gen/graphql';

export function extractCentralWavelength(
  instrument: Instrument | undefined | null,
  data: GetCentralWavelengthQuery | undefined,
) {
  if (!instrument) return undefined;

  const config = data?.executionConfig;
  if (!config) return undefined;

  // TODO: Add other instruments when odb supports them
  let instrumentName: keyof typeof config;
  switch (instrument) {
    case 'FLAMINGOS2':
      instrumentName = 'flamingos2';
      break;
    case 'GMOS_NORTH':
      instrumentName = 'gmosNorth';
      break;
    case 'GMOS_SOUTH':
      instrumentName = 'gmosSouth';
      break;
    default:
      return undefined;
  }

  const instrumentConfig = config[instrumentName];
  if (!instrumentConfig) return undefined;
  return instrumentConfig.acquisition?.nextAtom.steps[0]?.instrumentConfig.centralWavelength?.nanometers;
}
