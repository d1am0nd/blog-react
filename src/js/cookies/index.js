const REMEMBER_COOKIE = 'REMEMBER_COOKIE';

const setCookie = (name, val, nDays) => {
  const today = new Date();
  const expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie = `${name}=${escape(val)};expires=${expire.toGMTString()}`;
};

const getCookie = (cname) => {
  let name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const alreadyDismissed = () => {
  return typeof document === 'undefined' ||
    getCookie(REMEMBER_COOKIE) !== '';
};
const dismiss = () => {
  setCookie(REMEMBER_COOKIE, REMEMBER_COOKIE, 365 * 10);
};

export {
  alreadyDismissed,
  dismiss,
};
