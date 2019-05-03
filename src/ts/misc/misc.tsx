export const prettyDate = (date?: string) => {
  if (!date) {
    return '';
  }

  const [y, m, d] = date.split('-');
  return `${m}/${d}/${y}`;
};
