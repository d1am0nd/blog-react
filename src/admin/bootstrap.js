import axios from 'axios';

import {
  loggedIn,
  user,
} from 'admin/auth';
import {store} from 'admin/store';
import {setUser} from 'admin/store/actions/userActions';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

if (loggedIn()) {
  store.dispatch(setUser(user()));
}
