import { useState } from 'react';

import './App.scss';

import { CONFIG } from '../../config';
import { xrates } from '../../helpers';
import { Amounts } from '../Amounts';
import { Settings } from '../Settings';

export const App = () => {
  const [yearMonths, setYearMonths] = useState(CONFIG.WORK_MONTHS_PER_YEAR);
  const [monthDays, setMonthDays] = useState(CONFIG.WORK_DAYS_PER_MONTH);
  const [dayHours, setDayHours] = useState(CONFIG.WORK_HOURS_PER_DAY);

  const yearDefault = xrates.from('EUR', CONFIG.YEAR_EUR_SALARY);
  const [yearAmounts, setYearAmounts] = useState(yearDefault.all());

  const syncAmounts = (currency, amounts) => {
    setYearAmounts(xrates.from(currency, amounts.y).all());
  };

  return (
    <div className="App">
      <h1>
        Salary <small>per Time &amp; Currency</small> Calculator
      </h1>

      <div className="amountsWrap">
        {Object.keys(xrates.EUR).map((c) => (
          <Amounts
            key={c}
            currency={c}
            perYear={yearAmounts[c]}
            yearMonths={yearMonths}
            monthDays={monthDays}
            dayHours={dayHours}
            onUpdate={syncAmounts}
          />
        ))}
      </div>

      <Settings
        yearMonths={{ value: yearMonths, set: setYearMonths }}
        monthDays={{ value: monthDays, set: setMonthDays }}
        dayHours={{ value: dayHours, set: setDayHours }}
      />
    </div>
  );
};
