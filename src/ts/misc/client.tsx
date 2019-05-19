export const getSsrData = () => {
  if (typeof window === 'undefined') return undefined;
  // @ts-ignore
  const data = window.__PRELOADED_STATE__;
  // @ts-ignore
  window.__PRELOADED_STATE__ = undefined;
  return data;
};

export const isFirstLoad = () => {
  if (typeof window === 'undefined') return true;
  // @ts-ignore
  if (typeof window.__PRELOADED_STATE__ === 'undefined') return false;
  // @ts-ignore
  window.__PRELOADED_STATE__ = undefined;
  return true;
};
