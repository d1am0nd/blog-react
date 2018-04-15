const USER_SESS = 'user';
const TOKEN_SESS = 'bearer';

export const token = () => {
  return localStorage.getItem(TOKEN_SESS);
};

export const user = () => {
  return localStorage.getItem(USER_SESS) ?
    JSON.parse(localStorage.getItem(USER_SESS)) : null;
};

export const login = (user, token) => {
  localStorage.setItem(USER_SESS, JSON.stringify(user));
  localStorage.setItem(TOKEN_SESS, token);
};

export const logout = () => {
  localStorage.removeItem(USER_SESS);
  localStorage.removeItem(TOKEN_SESS);
};

export const loggedIn = () => {
  return user() !== null && token() !== null;
};
