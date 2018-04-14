import {
  SET_DATA_LOADED,
  SET_COOKIES_DISMISSED,
} from '../const/misc';

const setDataLoaded = (bool) => {
  return (dispatch, state) => {
    dispatch({type: SET_DATA_LOADED, payload: bool});
  };
};
const setCookiesDismissed = (bool) => {
  return (dispatch, state) => {
    dispatch({type: SET_COOKIES_DISMISSED, payload: bool});
  };
};

export {
  setDataLoaded,
  setCookiesDismissed,
};
