const pretty = (date) => {
  return new Date(date).toLocaleDateString('en-US');
};

export {
  pretty,
};
