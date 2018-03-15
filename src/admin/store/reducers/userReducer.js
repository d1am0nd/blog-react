import {
  SET_USER,
} from '../const/user';

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER: {
    state = {
      ...state,
      user: action.payload,
    };
    break;
  }
  }
  return state;
};
