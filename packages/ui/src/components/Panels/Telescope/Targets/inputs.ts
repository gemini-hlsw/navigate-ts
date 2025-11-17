import type { CalParams, Configuration, InstrumentConfig, Rotator, Target } from '@gql/configs/gen/graphql';
import type {
  AzElTargetInput,
  BaffleConfigInput,
  InstrumentSpecificsInput,
  RotatorTrackingInput,
  SiderealInput,
  TargetPropertiesInput,
  TcsConfigInput,
} from '@gql/server/gen/graphql';

import { when } from '@/Helpers/functions';

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
    sidereal: when(target.type !== 'FIXED', () => createSiderealInput(target)),
    azel: when(target.type === 'FIXED', () => createAzElTargetInput(target)),
    // nonsidereal: // <- ???
    wavelength: when(target.wavelength, (w) => ({ nanometers: w })),
  };
}

function createAzElTargetInput(target: Target): AzElTargetInput | undefined {
  return when(target.az, (az) =>
    when(target.el, (el) => ({
      azimuth: { degrees: az.degrees },
      elevation: { degrees: el.degrees },
    })),
  );
}

export function createSiderealInput(target: Target): SiderealInput {
  return {
    ra: when(target.ra, ({ hms }) => ({ hms })),
    dec: when(target.dec, ({ dms }) => ({ dms })),
    epoch: target.epoch,
    properMotion: when(target.properMotion, ({ ra, dec }) => ({
      ra: {
        microarcsecondsPerYear: ra,
      },
      dec: {
        microarcsecondsPerYear: dec,
      },
    })),
    radialVelocity: when(target.radialVelocity, (rv) => ({
      centimetersPerSecond: rv,
    })),
    parallax: when(target.parallax, (p) => ({
      microarcseconds: p,
    })),
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
    oiwfs: when(oiTarget, (oiTarget) => ({
      tracking: {
        // TODO: this should be selected depending on the "GuiderFooter" dropdown value!
        nodAchopA: true,
        nodAchopB: false,
        nodBchopA: false,
        nodBchopB: true,
      },
      target: {
        name: oiTarget.name,
        sidereal: createSiderealInput(oiTarget),
      },
    })),
  };
}
