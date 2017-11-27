import auth from '../../auth/auth';
import authApi from '../../api/auth';
import {SET_USER} from '../const/users';
import {fetchMyPosts} from './postsActions';

export function login(creds) {
  return function(dispatch) {
    authApi
      .login(creds)
      .then(res => {
        let user = res.data;
        let token = res.headers.authorization;
        auth.login(user, token);

        dispatch({type: SET_USER, payload: user});
        dispatch(fetchMyPosts());
      })
      .catch(err => {
        console.log('Err logging in', err);
      });
  };
}

export function logout() {
  return function(dispatch) {
    auth.logout();
    dispatch({type: SET_USER, payload: {}});
  };
};
