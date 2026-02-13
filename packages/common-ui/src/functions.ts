export function isNotNullish<T>(val: T | undefined | null): val is T {
  return !isNullish(val);
}

export function isNullish(val: unknown): val is undefined | null {
  return val === null || val === undefined;
}
