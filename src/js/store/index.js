import {combineReducers, applyMiddleware, createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import {imagesReducer} from './reducers/imagesReducer';
import {postsReducer} from './reducers/postsReducer';
import {projectsReducer} from './reducers/projectsReducer';
import {miscReducer} from './reducers/miscReducer';
import {setDataLoaded} from './actions/miscActions';
import config from '../../../config/env.json';

const reducers = combineReducers({
  posts: postsReducer,
  misc: miscReducer,
  projects: projectsReducer,
});
const middleware = applyMiddleware(thunk);
const serverStore = createStore(reducers, middleware);

if (config.env === 'local') {
  serverStore.dispatch(setDataLoaded(true));
}

export default serverStore;

let clientStore = {};

if (typeof window !== 'undefined') {
  const is = window.__PRELOADED_STATE__;
  clientStore = createStore(
    reducers, is, applyMiddleware(thunk)
  );
}
export {
  clientStore,
  serverStore,
};

export const newServerStore = () => {
  return createStore(reducers, middleware);
};
