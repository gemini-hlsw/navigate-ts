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
  const { selectedGuiderTarget, selectedOiTarget, selectedP1Target, selectedP2Target } = configuration ?? {};

  if (isNotNullish(selectedOiTarget) && selectedGuiderTarget === selectedOiTarget) return 'OIWFS';
  if (isNotNullish(selectedP1Target) && selectedGuiderTarget === selectedP1Target) return 'PWFS1';
  if (isNotNullish(selectedP2Target) && selectedGuiderTarget === selectedP2Target) return 'PWFS2';
  else return 'NONE';
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
    return round(signedArcSeconds(num), 2, { useGrouping: false });
  }
}

/**
 * Round a number to a specified number of decimal places
 */
export function round(
  value: number,
  decimals: number,
  options: Omit<Intl.NumberFormatOptions, 'minimumFractionDigits' | 'maximumFractionDigits'> = {},
): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    ...options,
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
export function firstIfOnlyOne<T>(arr: T[] | undefined): T | null {
  return arr?.length === 1 ? (arr[0] ?? null) : null;
}

export function groupBy<K extends PropertyKey, T>(arr: T[], criteria: (element: T) => K): Partial<Record<K, T[]>> {
  if (Object.groupBy) return Object.groupBy(arr, criteria);
  else
    return arr.reduce(
      (acc, item) => {
        const key = criteria(item);
        acc[key] ??= [];
        acc[key].push(item);
        return acc;
      },
      // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
      Object.create(null) as Partial<Record<K, T[]>>,
    );
}
