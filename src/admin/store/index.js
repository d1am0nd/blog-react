import {combineReducers, applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';

import {imagesReducer} from './reducers/imagesReducer';
import {postsReducer} from './reducers/postsReducer';
import {userReducer} from './reducers/userReducer';
import {projectsReducer} from './reducers/projectsReducer';

const reducers = combineReducers({
  posts: postsReducer,
  users: userReducer,
  images: imagesReducer,
  projects: projectsReducer,
});
const middleware = applyMiddleware(thunk);

export const store = createStore(reducers, middleware);
