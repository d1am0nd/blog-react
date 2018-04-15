import {
  SET_USER,
} from '../const/user';

import {login as apiLogin} from '../../api/user';
import {login as sessLogin} from '../../auth';

export const login = (creds) => {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      apiLogin(creds)
        .then((res) => {
          dispatch({type: SET_USER, payload: res.data});
          sessLogin(res.data, res.headers.authorization);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
export const setUser = (user) => {
  return (dispatch, state) => {
    dispatch({type: SET_USER, payload: user});
  };
};
