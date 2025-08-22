import type { InstrumentConfig, Rotator, Target } from '@gql/configs/gen/graphql';
import type {
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
    id: target.id ?? '',
    name: target.name,
    sidereal: {
      ra: { hms: target?.ra?.hms },
      dec: { dms: target?.dec?.dms },
      epoch: target?.epoch,
    },
    // nonsidereal: // <- ???
    wavelength: target.wavelength ? { nanometers: target.wavelength } : undefined,
  };
}

export function createTcsConfigInput(
  instrument: InstrumentConfig,
  rotator: Rotator,
  target: Target,
  oiTarget: Target | undefined,
): TcsConfigInput {
  const rotatorInput = createRotatorTrackingInput(rotator);

  const instrumentInput = createInstrumentSpecificsInput(instrument);

  const targetInput = createTargetPropertiesInput(target);

  return {
    instrument: instrument.name,
    instParams: instrumentInput,
    rotator: rotatorInput,
    sourceATarget: targetInput,
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
            },
          },
        }
      : undefined,
  };
}
