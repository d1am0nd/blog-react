const USER_SESS = 'user';
const TOKEN_SESS = 'bearer';

export const token = function() {
  return sessionStorage.getItem(TOKEN_SESS);
};

export const user = function() {
  return sessionStorage.getItem(USER_SESS) ?
    JSON.parse(sessionStorage.getItem(USER_SESS)) : null;
};

export const login = function(user, token) {
  sessionStorage.setItem(USER_SESS, JSON.stringify(user));
  sessionStorage.setItem(TOKEN_SESS, token);
};

export const logout = function() {
  sessionStorage.removeItem(USER_SESS);
  sessionStorage.removeItem(TOKEN_SESS);
};

export const loggedIn = function() {
  return user() !== null && token() !== null;
};
