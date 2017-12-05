import store from '../store';
import {SET_USER} from '../store/const/users';

const USER_SESS = 'user';
const TOKEN_SESS = 'bearer';

class Auth {
  constructor() {
    this.user = null;
    this.token = null;
    if (typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem(USER_SESS) !== null
      && sessionStorage.getItem(TOKEN_SESS) !== null) {
      this.user = JSON.parse(sessionStorage.getItem(USER_SESS));
      this.token = sessionStorage.getItem(TOKEN_SESS);
      store.dispatch({type: SET_USER, payload: this.user});
    }
  }

  loggedIn() {
    return this.user !== null;
  }

  user() {
    return this.user;
  }

  token() {
    return this.token;
  }

  login(user, token) {
    this.user = user;
    this.token = token;
    if (typeof sessionStorage === 'undefined') {
      return;
    }
    sessionStorage.setItem(USER_SESS, JSON.stringify(user));
    sessionStorage.setItem(TOKEN_SESS, token);
  }

  logout() {
    this.user = null;
    this.token = null;
    if (typeof sessionStorage === 'undefined') {
      return;
    }
    sessionStorage.removeItem(USER_SESS);
    sessionStorage.removeItem(TOKEN_SESS);
  }
};

export default new Auth();
