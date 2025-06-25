export function isNotNullish<T>(val: T | undefined | null): val is T {
  return !isNullish(val);
}

export function isNullish<T>(val: T | undefined | null): val is undefined | null {
  return val === null || val === undefined;
}
