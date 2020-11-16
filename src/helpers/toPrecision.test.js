import { toPrecision } from './toPrecision';

describe('helpers/toPrecision', () => {
  it('returns int 123456 unchanged for precision 0', () => {
    expect(toPrecision(123456, 0)).toBe(123456);
  });

  it('returns float 12.34 unchanged for precision 2', () => {
    expect(toPrecision(12.34, 2)).toBe(12.34);
  });

  it('rounds number 12.3456 to 12.35 for precision 2', () => {
    expect(toPrecision(12.3456, 2)).toBe(12.35);
  });

  it('rounds number 12.3446 to 12.34 for precision 2', () => {
    expect(toPrecision(12.3446, 2)).toBe(12.34);
  });

  it('rounds string 12.3456 to 12.35 for precision 2', () => {
    expect(toPrecision('12.3456', 2)).toBe(12.35);
  });

  it('rounds number 12.3456 to 12.346 for precision 3', () => {
    expect(toPrecision(12.3456, 3)).toBe(12.346);
  });

  it('rounds number 12.3454 to 12.345 for precision 3', () => {
    expect(toPrecision(12.3454, 3)).toBe(12.345);
  });

  it('rounds string 12.3456 to 12.35 for precision 3', () => {
    expect(toPrecision('12.3456', 3)).toBe(12.346);
  });
});
