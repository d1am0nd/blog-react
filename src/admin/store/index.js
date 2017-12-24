import {combineReducers, applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import {imagesReducer} from './reducers/imagesReducer';
import {postsReducer} from './reducers/postsReducer';
import {userReducer} from './reducers/userReducer';
import {projectsReducer} from './reducers/projectsReducer';
// import {imagesReducer} from './reducers/imagesReducer';
// import {miscReducer} from './reducers/miscReducer';

const reducers = combineReducers({
  posts: postsReducer,
  users: userReducer,
  images: imagesReducer,
  projects: projectsReducer,
});
const middleware = applyMiddleware(promise(), thunk);

export const store = createStore(reducers, middleware);
