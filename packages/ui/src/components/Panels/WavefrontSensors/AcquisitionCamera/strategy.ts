import type { HandsetAdjustmentInput } from '@gql/server/gen/graphql';

import type { Alignment } from './Controls';

export interface Coords {
  horizontal: number;
  vertical: number;
}

export type CoordsMod = (step: number) => Coords;

export const minusVertical: CoordsMod = (step) => ({
  horizontal: 0,
  vertical: -step,
});
export const plusHorizontal: CoordsMod = (step) => ({
  horizontal: +step,
  vertical: 0,
});
export const minusHorizontal: CoordsMod = (step) => ({
  horizontal: -step,
  vertical: 0,
});
export const plusVertical: CoordsMod = (step) => ({
  horizontal: 0,
  vertical: +step,
});

interface LabelledCoordsMod {
  label: string;
  mod: CoordsMod;
}

/**
 * How to handle handset adjustments for different coordinate systems.
 */
export interface HandsetStrategy {
  up: LabelledCoordsMod;
  down: LabelledCoordsMod;
  right: LabelledCoordsMod;
  left: LabelledCoordsMod;
  horizontal: string;
  vertical: string;
  toInput: (coords: Coords) => HandsetAdjustmentInput;
}

/**
 * Different coordinate systems handle up, down, left, and right movements differently. This object defines a strategy for each.
 * Each strategy has up, down, left, and right movements, as well as horizontal and vertical adjustments. These are then 'translated' into El, Dec, Az, etc.
 */
export const strategies = {
  'Az/El': {
    up: { label: '+El', mod: plusVertical },
    down: { label: '-El', mod: minusVertical },
    right: { label: '+Az', mod: plusHorizontal },
    left: { label: '-Az', mod: minusHorizontal },
    horizontal: 'Az',
    vertical: 'El',
    toInput: (coords: Coords) => ({
      horizontalAdjustment: {
        elevation: { arcseconds: coords.vertical },
        azimuth: { arcseconds: coords.horizontal },
      },
    }),
  },
  AC: {
    up: { label: '-X', mod: minusVertical },
    down: { label: '+X', mod: plusVertical },
    right: { label: '+Y', mod: plusHorizontal },
    left: { label: '-Y', mod: minusHorizontal },
    horizontal: 'Y',
    vertical: 'X',
    toInput: (coords: Coords) => ({
      focalPlaneAdjustment: {
        deltaX: { arcseconds: coords.vertical },
        deltaY: { arcseconds: coords.horizontal },
      },
    }),
  },
  Instrument: {
    up: { label: '-Q', mod: minusVertical },
    down: { label: '+Q', mod: plusVertical },
    right: { label: '+P', mod: plusHorizontal },
    left: { label: '-P', mod: minusHorizontal },
    horizontal: 'P',
    vertical: 'Q',
    toInput: (coords: Coords) => ({
      instrumentAdjustment: {
        q: { arcseconds: coords.vertical },
        p: { arcseconds: coords.horizontal },
      },
    }),
  },
  'RA/Dec': {
    up: { label: 'N', mod: plusVertical },
    down: { label: 'S', mod: minusVertical },
    right: { label: 'E', mod: plusHorizontal },
    left: { label: 'W', mod: minusHorizontal },
    horizontal: 'Ra',
    vertical: 'Dec',
    toInput: (coords: Coords) => ({
      equatorialAdjustment: {
        deltaDec: { arcseconds: coords.vertical },
        deltaRA: { arcseconds: coords.horizontal },
      },
    }),
  },
} satisfies Record<Alignment, HandsetStrategy>;
