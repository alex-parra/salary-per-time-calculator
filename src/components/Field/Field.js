import React from 'react';

import './Field.scss';
import { Input } from '../Input';

export const Field = ({ label, value, precision = 0, currency = 'USD', onChange }) => {
  const ariaLabel = currency ? `${currency} ${label}` : label;

  return (
    <div className="field">
      <label>{label}</label>
      <Input value={value} precision={precision} currency={currency} onChange={onChange} label={ariaLabel} />
    </div>
  );
};
