import {
  SET_USER,
} from '../const/user';

import {login as apiLogin} from '../../api/user';
import {login as sessLogin} from '../../auth';

export const login = function(creds) {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      apiLogin(creds)
        .then(res => {
          dispatch({type: SET_USER, payload: res.data});
          sessLogin(res.data, res.headers.authorization);
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  };
};
export const setUser = function(user) {
  return (dispatch, state) => {
    dispatch({type: SET_USER, payload: user});
  };
};
