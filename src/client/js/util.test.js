import isValidUrl from './util';

describe("URL validation function", () => {
    test("it should return true when URL is valid", () => {
      // actual test
      expect(isValidUrl('https://www.udacity.com')).toBe(true);
    });
    test("it should return false when URL is not valid", () => {
      // actual test
      expect(isValidUrl('Some arbitrary string')).toBe(false);
    });
  });