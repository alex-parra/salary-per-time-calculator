import { toPrecision } from '.';

const EURUSD = 1.1815;
const EURGBP = 0.89683;

export const xrates = {
  from: (fromCurrency, amount) => ({
    to: (toCurrency) => xrates[toCurrency][fromCurrency](amount),
    all: () => {
      const currencies = Object.keys(xrates[fromCurrency]);
      return currencies.reduce((acc, currency) => {
        acc[currency] = xrates[currency][fromCurrency](amount);
        return acc;
      }, {});
    },
  }),
  EUR: {
    EUR: (valEur) => toPrecision(valEur, 0),
    GBP: (valGbp) => toPrecision(valGbp / EURGBP, 0),
    USD: (valUsd) => toPrecision(valUsd / EURUSD, 0),
  },
  GBP: {
    EUR: (valEur) => toPrecision(valEur * EURGBP, 0),
    GBP: (valGbp) => toPrecision(valGbp, 0),
    USD: (valUsd) => xrates.GBP.EUR(xrates.EUR.USD(valUsd)),
  },
  USD: {
    EUR: (valEur) => toPrecision(valEur * EURUSD, 0),
    GBP: (valGbp) => xrates.USD.EUR(xrates.EUR.GBP(valGbp)),
    USD: (valUsd) => toPrecision(valUsd, 0),
  },
};
