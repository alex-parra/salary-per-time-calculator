export const asInt = (v) => {
  if (v === `${v}`) {
    v = v.replace(/[^0-9.]/g, '');
    v = v.replace(/\.(\.+)/g, '');
  }

  return Math.round(Number(v));
};
