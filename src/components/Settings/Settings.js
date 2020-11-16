import './Settings.scss';
import { Field } from '../Field';

export const Settings = ({ yearMonths, monthDays, dayHours }) => {
  return (
    <div className="settings">
      <h5>Settings</h5>
      <Field label="Months / Year" value={yearMonths.value} precision={0} currency={null} onChange={yearMonths.set} />
      <Field label="Days / Month" value={monthDays.value} precision={0} currency={null} onChange={monthDays.set} />
      <Field label="Hours / Day" value={dayHours.value} precision={0} currency={null} onChange={dayHours.set} />
    </div>
  );
};
