import {
  SET_DATA_LOADED,
} from '../const/misc';

const initialState = {
  dataLoaded: false,
};

export const miscReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LOADED: {
      state = {
        ...state,
        dataLoaded: action.payload,
      };
    }
  }
  return state;
};
