import { toPrecision } from '.';

export const amounts = (yearMonths = 12, monthDays = 21, dayHours = 8) => {
  const yearToMonth = (v) => toPrecision(v / yearMonths, 2);
  const monthToYear = (v) => toPrecision(v * yearMonths, 0);

  const monthToDay = (v) => toPrecision(v / monthDays, 2);
  const dayToMonth = (v) => toPrecision(v * monthDays, 2);

  const dayToHour = (v) => toPrecision(v / dayHours, 2);
  const hourToDay = (v) => toPrecision(v * dayHours, 2);

  const yearToDay = (v) => monthToDay(yearToMonth(v));
  const yearToHour = (v) => dayToHour(yearToDay(v));

  const dayToYear = (v) => monthToYear(dayToMonth(v));
  const hourToYear = (v) => dayToYear(hourToDay(v));

  return {
    yearToMonth,
    yearToDay,
    yearToHour,

    monthToYear,
    monthToDay,

    dayToMonth,
    dayToYear,

    dayToHour,
    hourToYear,
  };
};
