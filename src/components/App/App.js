import { useState } from 'react';

import './App.scss';

import { CONFIG } from '../../config';
import { Settings } from '../Settings';

export const App = () => {
  const [yearMonths, setYearMonths] = useState(CONFIG.WORK_MONTHS_PER_YEAR);
  const [monthDays, setMonthDays] = useState(CONFIG.WORK_DAYS_PER_MONTH);
  const [dayHours, setDayHours] = useState(CONFIG.WORK_HOURS_PER_DAY);

  return (
    <div className="App">
      <h1>Salary per Time Calculator</h1>
      <Settings
        yearMonths={{ value: yearMonths, set: setYearMonths }}
        monthDays={{ value: monthDays, set: setMonthDays }}
        dayHours={{ value: dayHours, set: setDayHours }}
      />
    </div>
  );
};
