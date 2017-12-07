import {combineReducers, applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import {imagesReducer} from './reducers/imagesReducer';
import {postsReducer} from './reducers/postsReducer';
import {userReducer} from './reducers/userReducer';
import {imagesReducer} from './reducers/imagesReducer';

const reducers = combineReducers({
  posts: postsReducer,
  users: userReducer,
  images: imagesReducer,
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

export default store;

let clientStore = {};

if (typeof window !== 'undefined') {
  const is = window.__INITIAL_STATE__;
  clientStore = createStore(
    reducers, is, applyMiddleware(thunk)
  );
}
export {
  clientStore,
};
