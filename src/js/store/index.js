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
const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducers, middleware);

export default store;
