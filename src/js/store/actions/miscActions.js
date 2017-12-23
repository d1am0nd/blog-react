import {
  SET_DATA_LOADED,
  SET_COOKIES_DISMISSED,
} from '../const/misc';

export function setDataLoaded(bool) {
  return (dispatch, state) => {
    dispatch({type: SET_DATA_LOADED, payload: bool});
  };
};
export function setCookiesDismissed(bool) {
  return (dispatch, state) => {
    dispatch({type: SET_COOKIES_DISMISSED, payload: bool});
  };
};
