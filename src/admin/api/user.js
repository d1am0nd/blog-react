import axios from 'axios';
import qs from 'qs';
import p from './params';

const LOGIN_URL = p.apiUrl + '/api/users/login';
// const REGISTER_URL = p.apiUrl + '/api/users/register'
const REFRESH_URL = p.apiUrl + '/api/users/current';

export const login = function(creds) {
  return axios.post(LOGIN_URL, qs.stringify(creds), {
    withCredentials: true,
  });
};

export const refresh = function(token = null) {
  return axios.get(REFRESH_URL);
};
