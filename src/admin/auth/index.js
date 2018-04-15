const USER_SESS = 'user';
const TOKEN_SESS = 'bearer';

export const token = function() {
  return localStorage.getItem(TOKEN_SESS);
};

export const user = function() {
  return localStorage.getItem(USER_SESS) ?
    JSON.parse(localStorage.getItem(USER_SESS)) : null;
};

export const login = function(user, token) {
  localStorage.setItem(USER_SESS, JSON.stringify(user));
  localStorage.setItem(TOKEN_SESS, token);
};

export const logout = function() {
  localStorage.removeItem(USER_SESS);
  localStorage.removeItem(TOKEN_SESS);
};

export const loggedIn = function() {
  return user() !== null && token() !== null;
};
