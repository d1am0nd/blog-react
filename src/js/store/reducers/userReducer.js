import {SET_USER} from '../const/users';

const initialState = {
  user: {},
};

const usersReducer = (state = initialState, action) => {
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

export default usersReducer;
