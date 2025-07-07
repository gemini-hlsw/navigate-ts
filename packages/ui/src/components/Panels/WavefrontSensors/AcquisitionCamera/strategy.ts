import type { HandsetAdjustmentInput } from '@gql/server/gen/graphql';

import type { CoordSystem } from './Controls';

export interface Coords {
  horizontal: number;
  vertical: number;
}

export type CoordsMod = (value: Coords, step: number) => Coords;

export const minusVertical: CoordsMod = (coords, step) => ({
  horizontal: coords.horizontal,
  vertical: coords.vertical - step,
});
export const plusHorizontal: CoordsMod = (coords, step) => ({
  horizontal: coords.horizontal + step,
  vertical: coords.vertical,
});
export const minusHorizontal: CoordsMod = (coords, step) => ({
  horizontal: coords.horizontal - step,
  vertical: coords.vertical,
});
export const plusVertical: CoordsMod = (coords, step) => ({
  horizontal: coords.horizontal,
  vertical: coords.vertical + step,
});
export const setHorizontal: CoordsMod = (coords, value) => ({ horizontal: value, vertical: coords.vertical });
export const setVertical: CoordsMod = (coords, value) => ({ horizontal: coords.horizontal, vertical: value });

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
  horizontal: LabelledCoordsMod;
  vertical: LabelledCoordsMod;
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
    horizontal: { label: 'Az', mod: setHorizontal },
    vertical: { label: 'El', mod: setVertical },
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
    horizontal: { label: 'Y', mod: setHorizontal },
    vertical: { label: 'X', mod: setVertical },
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
    horizontal: { label: 'P', mod: setHorizontal },
    vertical: { label: 'Q', mod: setVertical },
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
    horizontal: { label: 'Ra', mod: setHorizontal },
    vertical: { label: 'Dec', mod: setVertical },
    toInput: (coords: Coords) => ({
      equatorialAdjustment: {
        deltaDec: { arcseconds: coords.vertical },
        deltaRA: { arcseconds: coords.horizontal },
      },
    }),
  },
} satisfies Record<CoordSystem, HandsetStrategy>;
