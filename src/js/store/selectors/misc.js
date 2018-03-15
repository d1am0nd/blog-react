import {createSelector} from 'reselect';

const miscSelector = (state) => state.misc;

const dataLoaded = createSelector(
  miscSelector,
  (misc) => misc.dataLoaded === true
);

const showCookies = createSelector(
  miscSelector,
  (misc) => misc.cookiesDismissed === false
);

const cookiesDismissed = createSelector(
  miscSelector,
  (misc) => misc.cookiesDismissed === true
);

export {
  dataLoaded,
  showCookies,
  cookiesDismissed,
};
