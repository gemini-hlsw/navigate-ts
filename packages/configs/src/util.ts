/**
 * Get the first element of an array if it has only one element
 */
export function firstIfOnlyOne<T>(arr: T[] | undefined): T | null {
  return arr?.length === 1 ? (arr[0] ?? null) : null;
}
