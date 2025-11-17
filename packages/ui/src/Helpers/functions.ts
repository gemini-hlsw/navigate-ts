import type { Configuration, WfsType } from '@gql/configs/gen/graphql';
import type { GuideProbe, Instrument } from '@gql/server/gen/graphql';
import { signedArcSeconds } from 'lucuma-core';

export function isNotNullish<T>(val: T | undefined | null): val is T {
  return !isNullish(val);
}

export function isNullish(val: unknown): val is undefined | null {
  return val === null || val === undefined;
}

/**
 * When `condition` is not null or undefined, returns the result of calling `trueCase()`, else
 * returns the result of calling `falseCase()` if `falseCase` is defined.
 *
 * This is a convenience wrapper around a ternary expression that makes it a
 * little nicer to write an inline conditional without an else.
 */
export function when<C, T, F = undefined>(
  condition: C | undefined | null | false,
  trueCase: (c: C) => T,
  falseCase?: () => F,
): C extends undefined | null ? F : T {
  return isNullish(condition) || condition === false
    ? (falseCase?.() as C extends undefined | null ? F : T)
    : (trueCase(condition) as C extends undefined | null ? F : T);
}

export function getConfigWfs(configuration: Configuration | undefined | null): WfsType {
  const oiNull = isNullish(configuration?.selectedOiTarget);
  const p1Null = isNullish(configuration?.selectedP1Target);
  const p2Null = isNullish(configuration?.selectedP2Target);

  // So far we only support 'OIWFS' or 'NONE' WFS.
  // TODO: There are special cases where multiple WFS are enabled,
  // but this is not supported yet and we need to discuss how to do it.
  if (oiNull && p1Null && p2Null) return 'NONE';
  if (!oiNull && p1Null && p2Null) return 'OIWFS';
  if (oiNull && !p1Null && p2Null) return 'PWFS1';
  if (oiNull && p1Null && !p2Null) return 'PWFS2';

  // For now will return 'NONE' if any other case is detected.
  return 'NONE';
}

/**
 * Format unsigned arcseconds of an angle to signed arcseconds, with two decimal places.
 * If the value is nullish, it returns a default value.
 */
export function formatToSignedArcseconds(arcseconds: number | string | undefined | null, defaultValue = 'N/A'): string {
  if (isNullish(arcseconds)) {
    return defaultValue;
  } else {
    const num = typeof arcseconds === 'number' ? arcseconds : parseFloat(arcseconds);
    if (Number.isNaN(num)) {
      return defaultValue;
    }
    return round(signedArcSeconds(num), 2);
  }
}

/**
 * Round a number to a specified number of decimal places
 */
export function round(value: number, decimals: number): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: false,
  });
}

/**
 * Convert instrument to OIWFS name.
 * TODO: Add other instruments when odb supports them.
 */
export function instrumentToOiwfs(instrument: Instrument | null | undefined): GuideProbe | undefined {
  switch (instrument) {
    case 'GMOS_NORTH':
    case 'GMOS_SOUTH':
      return 'GMOS_OIWFS';
    case 'FLAMINGOS2':
      return 'FLAMINGOS2_OIWFS';
    default:
      return undefined;
  }
}

/**
 * Get the first element of an array if it has only one element
 */
export function firstIfOnlyOne<T>(arr: T[] | undefined): T | undefined {
  return arr?.length === 1 ? arr[0] : undefined;
}
