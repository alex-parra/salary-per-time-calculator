import { useEffect, useState, useMemo } from 'react';

import { amounts, noop } from '../helpers';

export const useAmounts = (opts) => {
  const { perYear = 0, yearMonths = 12, monthDays = 21, dayHours = 8, callback = noop } = opts;

  const a = amounts(yearMonths, monthDays, dayHours);

  const [perMonth, setPerMonth] = useState(a.yearToMonth(perYear));
  const [perDay, setPerDay] = useState(a.monthToDay(perMonth));
  const [perHour, setPerHour] = useState(a.dayToHour(perDay));

  const setters = useMemo(() => {
    return {
      year: (perYear) => {
        setPerMonth(a.yearToMonth(perYear));
        setPerDay(a.yearToDay(perYear));
        setPerHour(a.yearToHour(perYear));
        callback(perYear);
      },
      month: (perMonth) => setters.year(a.monthToYear(perMonth)),
      day: (perDay) => setters.year(a.dayToYear(perDay)),
      hour: (perHour) => setters.year(a.hourToYear(perHour)),
    };
  }, [a, callback]);

  useEffect(() => {
    setters.year(perYear);
  }, [perYear, yearMonths, monthDays, dayHours, setters]);

  return [perMonth, perDay, perHour, setters];
};
