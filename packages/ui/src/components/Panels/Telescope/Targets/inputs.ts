import type { CalParams, Configuration, InstrumentConfig, Rotator, Target } from '@gql/configs/gen/graphql';
import type {
  BaffleConfigInput,
  InstrumentSpecificsInput,
  RotatorTrackingInput,
  TargetPropertiesInput,
  TcsConfigInput,
} from '@gql/server/gen/graphql';

export function createRotatorTrackingInput(rotator: Rotator): RotatorTrackingInput {
  return { ipa: { degrees: rotator.angle }, mode: rotator.tracking };
}

export function createInstrumentSpecificsInput(instrument: InstrumentConfig): InstrumentSpecificsInput {
  return {
    iaa: { degrees: instrument.iaa },
    focusOffset: { micrometers: instrument.focusOffset },
    agName: instrument.name,
    origin: { x: { arcseconds: instrument.originX }, y: { arcseconds: instrument.originY } },
  };
}

export function createTargetPropertiesInput(target: Target): TargetPropertiesInput {
  return {
    id: target.id,
    name: target.name,
    sidereal:
      target.type !== 'FIXED'
        ? {
            ra: { hms: target.ra?.hms },
            dec: { dms: target.dec?.dms },
            epoch: target.epoch,
            properMotion: {
              ra: {
                microarcsecondsPerYear: target.properMotion?.ra,
              },
              dec: {
                microarcsecondsPerYear: target.properMotion?.dec,
              },
            },
            radialVelocity: {
              centimetersPerSecond: target.radialVelocity,
            },
            parallax: {
              microarcseconds: target.parallax,
            },
          }
        : undefined,
    azel:
      target.type === 'FIXED'
        ? {
            azimuth: { degrees: target.az?.degrees },
            elevation: { degrees: target.el?.degrees },
          }
        : undefined,
    // nonsidereal: // <- ???
    wavelength: target.wavelength ? { nanometers: target.wavelength } : undefined,
  };
}

export function createBafflesInput(
  calParams: Pick<CalParams, 'baffleVisible' | 'baffleNearIR'>,
  configuration: Pick<Configuration, 'baffleMode' | 'centralBaffle' | 'deployableBaffle'>,
): BaffleConfigInput | undefined {
  switch (configuration.baffleMode) {
    case 'AUTO':
      return {
        autoConfig: {
          nearirLimit: { micrometers: calParams.baffleNearIR },
          visibleLimit: { micrometers: calParams.baffleVisible },
        },
      };
    case 'MANUAL':
      return {
        manualConfig: {
          centralBaffle: configuration.centralBaffle!,
          deployableBaffle: configuration.deployableBaffle!,
        },
      };
    case 'IGNORED':
      return undefined;
    default:
      console.warn(`Unknown baffle mode: ${String(configuration.baffleMode)}`);
      return undefined;
  }
}

export function createTcsConfigInput(
  instrument: InstrumentConfig,
  rotator: Rotator,
  target: Target,
  oiTarget: Target | undefined,
  calParams: Pick<CalParams, 'baffleVisible' | 'baffleNearIR'>,
  configuration: Pick<Configuration, 'baffleMode' | 'centralBaffle' | 'deployableBaffle'>,
): TcsConfigInput {
  const rotatorInput = createRotatorTrackingInput(rotator);

  const instrumentInput = createInstrumentSpecificsInput(instrument);

  const targetInput = createTargetPropertiesInput(target);

  const bafflesInput = createBafflesInput(calParams, configuration);

  return {
    instrument: instrument.name,
    instParams: instrumentInput,
    rotator: rotatorInput,
    sourceATarget: targetInput,
    baffles: bafflesInput,
    oiwfs: oiTarget
      ? {
          tracking: {
            // TODO: this should be selected depending on the "GuiderFooter" dropdown value!
            nodAchopA: true,
            nodAchopB: false,
            nodBchopA: false,
            nodBchopB: true,
          },
          target: {
            name: oiTarget.name,
            sidereal: {
              ra: { hms: oiTarget.ra?.hms },
              dec: { dms: oiTarget.dec?.dms },
              epoch: oiTarget.epoch,
              properMotion: {
                ra: {
                  microarcsecondsPerYear: oiTarget.properMotion?.ra,
                },
                dec: {
                  microarcsecondsPerYear: oiTarget.properMotion?.dec,
                },
              },
              radialVelocity: {
                centimetersPerSecond: oiTarget.radialVelocity,
              },
              parallax: {
                microarcseconds: oiTarget.parallax,
              },
            },
          },
        }
      : undefined,
  };
}
