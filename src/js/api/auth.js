import axios from 'axios';
import qs from 'qs';
import p from './params';

const LOGIN_URL = p.apiUrl + '/api/users/login';
// const REGISTER_URL = p.apiUrl + '/api/users/register'
const LOGOUT_URL = p.apiUrl + '/api/users/logout';
const REFRESH_URL = p.apiUrl + '/api/users/current';

export default {
  login(creds) {
    return axios.post(LOGIN_URL, qs.stringify(creds), {
      withCredentials: true,
    });
  },

  refresh(token = null) {
    return axios.get(REFRESH_URL);
  },
};
