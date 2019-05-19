const USER_SESS = 'user';
const TOKEN_SESS = 'bearer';

export interface IUser {
  email: string;
  name: string;
};

export const token = (): string | null => {
  return localStorage.getItem(TOKEN_SESS);
};

export const user = (): IUser | null => {
  const user = localStorage.getItem(USER_SESS);

  return user ? JSON.parse(user) : null;
};

export const login = (user: IUser, token: string): void => {
  localStorage.setItem(USER_SESS, JSON.stringify(user));
  localStorage.setItem(TOKEN_SESS, token);
};

export const logout = (): void => {
  localStorage.removeItem(USER_SESS);
  localStorage.removeItem(TOKEN_SESS);
};

export const loggedIn = (): boolean => {
  return user() !== null && token() !== null;
};
