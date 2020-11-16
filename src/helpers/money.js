export const money = {
  o: (precision, currency = 'EUR') =>
    new Intl.NumberFormat(undefined, {
      style: currency ? 'currency' : 'decimal',
      ...(currency ? { currency } : null),
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
      useGrouping: true,
    }),
  f: (n, precision) => money.o(precision).format(n),
  uf: (v) => {
    v = `${v}`; // ensure string
    v = v.replace(/[^0-9.]/g, '');
    v = v.replace(/\.(\.+)/g, '');
    return Number(v);
  },
};
