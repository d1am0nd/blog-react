import {combineReducers, applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';

import {userReducer} from './reducers/userReducer';

const reducers = combineReducers({
  users: userReducer,
});
const middleware = applyMiddleware(thunk);

export const store = createStore(reducers, middleware);
