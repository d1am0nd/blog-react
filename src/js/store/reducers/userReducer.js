import {SET_USER} from '../const/users';

const initialState = {
  user: {},
};

export const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      state = {
        ...state,
        user: action.payload,
      };
    }
  }
  return state;
};
