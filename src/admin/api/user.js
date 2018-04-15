import {get, post} from './defaults';
import p from './params';

const LOGIN_URL = p.apiUrl + '/api/users/login';
const REFRESH_URL = p.apiUrl + '/api/users/current';

export const login = (creds) => {
  return post(LOGIN_URL, creds, {
    withCredentials: true,
  });
};

export const refresh = (token = null) => {
  return get(REFRESH_URL);
};
