import React, { memo } from 'react';

import './Amounts.scss';
import { Field } from '../Field';
import { useAmounts } from '../../hooks/useAmounts';
import { noop, currencyFlag } from '../../helpers';

const AmountsComp = (props) => {
  const { yearMonths, monthDays, dayHours, perYear, currency } = props;
  const { onUpdate = noop } = props;

  const onChange = (y) => onUpdate(currency, { y });

  const [m, d, h, setAmounts] = useAmounts({
    perYear,
    yearMonths,
    monthDays,
    dayHours,
    callback: onChange,
  });

  return (
    <div className="amounts">
      <h4>
        <img src={currencyFlag[currency]} width="30px" height="20px" alt={currency} />
      </h4>
      <Field label="per Year" value={perYear} currency={currency} onChange={setAmounts.year} />
      <Field label="per Month" value={m} currency={currency} onChange={setAmounts.month} />
      <Field label="per Day" value={d} currency={currency} onChange={setAmounts.day} />
      <Field label="per Hour" value={h} currency={currency} onChange={setAmounts.hour} />
    </div>
  );
};

export const Amounts = memo(AmountsComp);
