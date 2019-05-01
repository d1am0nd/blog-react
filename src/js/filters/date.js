export const pretty = (date) => {
  const [y, m, d] = date.split('-');
  return `${m}/${d}/${y}`;
};
