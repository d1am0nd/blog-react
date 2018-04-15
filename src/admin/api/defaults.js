import axios from 'axios';

import {token} from 'admin/auth';

// To add token on the go
const paramsWithToken = (params = {}) => {
  const bearer = token();
  return bearer !== null ? {
    ...params,
    headers: {
      ...params.headers,
      Authorization: bearer,
    },
  } : params;
};

const post = (url, data = {}, params = {}) => axios
  .post(url, data, paramsWithToken(params));

const get = (url, params = {}) => axios
  .get(url, paramsWithToken(params));

const patch = (url, data = {}, params = {}) => axios
  .patch(url, data, paramsWithToken(params));

const del = (url) => axios
  .delete(url);

export {
  post,
  patch,
  get,
  del,
};
