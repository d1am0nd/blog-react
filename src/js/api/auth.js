import axios from 'axios';
import qs from 'qs';

const LOGIN_URL = '/api/users/login';
// const REGISTER_URL = '/api/users/register'
const LOGOUT_URL = '/api/users/logout';
const REFRESH_URL = '/api/users/current';

export default {
  login(creds) {
    return axios.post(LOGIN_URL, qs.stringify(creds));
  },

  refresh(token = null) {
    return axios.get(REFRESH_URL);
  },
};
