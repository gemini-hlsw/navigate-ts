import { formatToSignedArcseconds, isNotNullish, isNullish } from './functions';

describe(formatToSignedArcseconds.name, () => {
  it('should format signed arcseconds correctly', () => {
    expect(formatToSignedArcseconds(360 * 60 * 60)).toBe('0.00');
    expect(formatToSignedArcseconds(180 * 60 * 60)).toBe('-648000.00');
    expect(formatToSignedArcseconds(90 * 60 * 60)).toBe('324000.00');
    expect(formatToSignedArcseconds(-90 * 60 * 60)).toBe('-324000.00');
    expect(formatToSignedArcseconds(270 * 60 * 60)).toBe('-324000.00');
  });

  it('should handle string inputs', () => {
    expect(formatToSignedArcseconds('1.234567'), 'Custom Default').toBe('1.23');
    expect(formatToSignedArcseconds('-1.234567')).toBe('-1.23');
    expect(formatToSignedArcseconds('0')).toBe('0.00');
  });

  it('should return "N/A" for nullish values', () => {
    expect(formatToSignedArcseconds(null)).toBe('N/A');
    expect(formatToSignedArcseconds(undefined)).toBe('N/A');
  });

  it('should return default value for non-numeric strings', () => {
    expect(formatToSignedArcseconds('not a number')).toBe('N/A');
  });

  it('should return custom default value', () => {
    expect(formatToSignedArcseconds(null, 'Custom Default')).toBe('Custom Default');
    expect(formatToSignedArcseconds(undefined, 'Custom Default')).toBe('Custom Default');
  });
});

describe(isNullish.name, () => {
  it('should return true for null or undefined', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
  });

  it('should return false for non-nullish values', () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish([])).toBe(false);
    expect(isNullish({})).toBe(false);
    expect(isNullish(1)).toBe(false);
  });
});

describe(isNotNullish.name, () => {
  it('should return false for null or undefined', () => {
    expect(isNotNullish(null)).toBe(false);
    expect(isNotNullish(undefined)).toBe(false);
  });

  it('should return true for non-nullish values', () => {
    expect(isNotNullish(0)).toBe(true);
    expect(isNotNullish('')).toBe(true);
    expect(isNotNullish([])).toBe(true);
    expect(isNotNullish({})).toBe(true);
    expect(isNotNullish(1)).toBe(true);
  });
});
