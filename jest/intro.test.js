const { sum, nativeNull } = require('./intro');
const expect = (value) => {
  return {
    toBe: exp => {
      if (exp === value) {
        console.log('Success');
      } else {
        console.log('Failed');
      }
    }
  }
};
expect(sum(1,3)).toBe(4);


describe('Sum function: ', () => {
  test('should return sum of two values', () => {
    expect(sum(1,3)).toBe(4);
    expect(sum(1,3)).toEqual(4);
  })
  test('should return value correctly comparing to other values', () => {
    expect(sum(2,3)).toBeGreaterThan(4);
    expect(sum(2,3)).toBeGreaterThanOrEqual(4);
    expect(sum(2,3)).toBeLessThan(10);
    expect(sum(2,3)).toBeLessThanOrEqual(5);
  })
});

describe('Native null function: ', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  })
});