import { formatToSignedArcseconds, isNotNullish, isNullish, round, when } from './functions.ts';

describe(isNullish.name, () => {
  it('should return true for null or undefined', () => {
    expect(isNullish(null)).true;
    expect(isNullish(undefined)).true;
  });

  it('should return false for non-nullish values', () => {
    expect(isNullish(0)).false;
    expect(isNullish('')).false;
    expect(isNullish([])).false;
    expect(isNullish({})).false;
    expect(isNullish(1)).false;
  });
});

describe(isNotNullish.name, () => {
  it('should return false for null or undefined', () => {
    expect(isNotNullish(null)).false;
    expect(isNotNullish(undefined)).false;
  });

  it('should return true for non-nullish values', () => {
    expect(isNotNullish(0)).true;
    expect(isNotNullish('')).true;
    expect(isNotNullish([])).true;
    expect(isNotNullish({})).true;
    expect(isNotNullish(1)).true;
  });
});

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

describe(round.name, () => {
  it('should round numbers correctly', () => {
    expect(round(1.23, 2)).toBe('1.23');
    expect(round(1.2349, 2)).toBe('1.23');
    expect(round(1.235, 2)).toBe('1.24');
    expect(round(-1.2349, 2)).toBe('-1.23');
    expect(round(-1.235, 2)).toBe('-1.24');
    expect(round(1.2, 3)).toBe('1.200');
    expect(round(1.9999, 3)).toBe('2.000');
  });

  it('should handle zero decimals', () => {
    expect(round(1.5, 0)).toBe('2');
    expect(round(1.4, 0)).toBe('1');
  });

  it('throws for negative decimals', () => {
    expect(() => round(1.2345, -2)).toThrow();
  });
});

describe(when.name, () => {
  it('should return the value when condition is not nullish', () => {
    expect(when('value', (t) => t)).toBe('value');
    expect(when(true, () => 'value')).toBe('value');
  });
  it('should return undefined when condition is nullish', () => {
    expect(when(null, (t) => t)).toBeUndefined();
    expect(when(undefined, (t) => t)).toBeUndefined();
    expect(when(false, (t) => t)).toBeUndefined();
  });

  it('should return third arg when condition is nullish', () => {
    expect(
      when(
        null,
        (t) => t,
        () => 'default',
      ),
    ).toBe('default');
    expect(
      when(
        undefined,
        (t) => t,
        () => 'default',
      ),
    ).toBe('default');
  });
});
