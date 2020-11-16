import { xrates } from './xrates';

describe('helpers/xrates', () => {
  it('has indentity coverters', () => {
    expect(xrates.EUR.EUR(1)).toBe(1);
    expect(xrates.GBP.GBP(1)).toBe(1);
    expect(xrates.USD.USD(1)).toBe(1);
  });

  it('has fluent converter', () => {
    expect(xrates.from('EUR', 1).to('EUR')).toBe(1);
    expect(xrates.from('GBP', 1).to('GBP')).toBe(1);
    expect(xrates.from('USD', 1).to('USD')).toBe(1);
  });
});
