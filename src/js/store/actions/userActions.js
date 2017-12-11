import auth from '../../auth/auth';
import authApi from '../../api/auth';
import {SET_USER} from '../const/users';
import {fetchMyPosts} from './postsActions';

export function login(creds) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      authApi
        .login(creds)
        .then(res => {
          let user = res.data;
          let token = res.headers.authorization;
          console.log(res, token);
          auth.login(user, token);

          dispatch({type: SET_USER, payload: user});
          dispatch(fetchMyPosts());
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function logout() {
  return function(dispatch) {
    auth.logout();
    dispatch({type: SET_USER, payload: {}});
  };
};
