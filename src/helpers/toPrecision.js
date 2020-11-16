export const toPrecision = (v, decimals = 2) => {
  v = `${v}`; // ensure string
  v = Number(v).toFixed(decimals);
  return Number(v);
};
