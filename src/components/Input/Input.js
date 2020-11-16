import React from 'react';

import CurrencyInput from 'react-currency-input-field';

import { money, noop } from '../../helpers';

const ops = {
  ArrowUp: (v, inc = 1) => v + inc,
  ArrowDown: (v, inc = 1) => v - inc,
};

export const Input = ({ value, precision = 0, currency = 'EUR', label = '', onChange = noop }) => {
  const _onChange = (v) => {
    onChange(v || value);
  };

  const onKeyDown = (ev) => {
    if (Object.keys(ops).includes(ev.key)) {
      ev.preventDefault();
      const mod = [ev.shiftKey, ev.altKey].filter(Boolean).length;
      const inc = 10 ** mod;
      onChange(ops[ev.key](Number(value), inc));
    }
  };

  const parts = money.o(precision, currency).formatToParts(value);
  const currencyPart = Object.values(parts).find((p) => p.type === 'currency') || {};
  let symbol = currencyPart.value || '';
  symbol = symbol.replace('US$', '$');

  return (
    <div className="input" data-symbol={symbol}>
      <CurrencyInput
        defaultValue={value}
        value={value}
        allowDecimals={true}
        allowNegativeValue={false}
        precision={precision}
        fixedDecimalLength={precision}
        onChange={_onChange}
        onKeyDown={onKeyDown}
        aria-label={label}
      />
    </div>
  );
};
