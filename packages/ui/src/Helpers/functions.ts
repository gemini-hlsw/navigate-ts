import type { Configuration, WfsType } from '@gql/configs/gen/graphql';
import { signedArcSeconds } from 'lucuma-core';

export function isNotNullish<T>(val: T | undefined | null): val is T {
  return !isNullish(val);
}

export function isNullish(val: unknown): val is undefined | null {
  return val === null || val === undefined;
}

export function getConfigWfs(configuration: Configuration | null | undefined): WfsType {
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
    if (isNaN(num)) {
      return defaultValue;
    }
    return signedArcSeconds(num).toFixed(2);
  }
}
