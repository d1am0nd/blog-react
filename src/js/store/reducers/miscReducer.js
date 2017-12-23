import {
  SET_DATA_LOADED,
  SET_COOKIES_DISMISSED,
} from '../const/misc';

const initialState = {
  dataLoaded: false,
  cookiesDismissed: true,
};

export const miscReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LOADED: {
      state = {
        ...state,
        dataLoaded: action.payload,
      };
      break;
    }
    case SET_COOKIES_DISMISSED: {
      state = {
        ...state,
        cookiesDismissed: action.payload,
      };
      break;
    }
  }
  return state;
};
