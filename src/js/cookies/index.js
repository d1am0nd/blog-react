const REMEMBER_COOKIE = 'REMEMBER_COOKIE';

function setCookie(name, val, nDays) {
 const today = new Date();
 const expire = new Date();
 if (nDays == null || nDays == 0) nDays = 1;
 expire.setTime(today.getTime() + 3600000 * 24 * nDays);
 document.cookie = `${name}=${escape(val)};expires=${expire.toGMTString()}`;
}

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
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
}

if (typeof window !== 'undefined') {
  window.dc = function() {
    document.cookie =
      `${REMEMBER_COOKIE}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };
  window.gc = function() {
    return getCookie(REMEMBER_COOKIE);
  };
  window.sc = function() {
    return dismiss();
  };
}
export const alreadyDismissed = function() {
  return typeof document === 'undefined' ||
    getCookie(REMEMBER_COOKIE) !== '';
};
export const dismiss = function() {
  setCookie(REMEMBER_COOKIE, REMEMBER_COOKIE, 365 * 10);
};
