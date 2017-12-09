import {
  SET_DATA_LOADED,
} from '../const/misc';


export function setDataLoaded(bool) {
  return (dispatch, state) => {
    dispatch({type: SET_DATA_LOADED, payload: bool});
  };
};
