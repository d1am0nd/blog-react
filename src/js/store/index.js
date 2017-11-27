import {combineReducers, applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import {postsReducer} from './reducers/postsReducer';

const reducers = combineReducers({
  posts: postsReducer,
});
const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducers, middleware);

export default store;
