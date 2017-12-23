import {
  baseWidth,
} from './general';
import {
  transition,
} from './vars';
import {
  light as lightBackground,
  dark as darkBackground,
} from './backgrounds';

export const fixedWrapper = function(show) {
  return {
    ...transition,
    ...lightBackground,
    // 'display': show ? 'block' : 'none',
    'opacity': show ? 1 : 0,
    'position': 'fixed',
    'paddingTop': '5px',
    'paddingBottom': '5px',
    'bottom': 0,
    'left': 0,
    'width': '100%',
  };
};

export const relativeWrapper = function() {
  return {
    ...baseWidth,
    'position': 'relative',
    'margin': 'auto',
  };
};

export const left = function() {
  return {
    'float': 'left',
  };
};
export const right = function() {
  return {
    'float': 'right',
  };
};

export const button = function() {
  return {
    ...darkBackground,
    'border': 'none',
    'borderRadius': '2px',
    'paddingTop': '5px',
    'paddingBottom': '5px',
    'paddingRight': '10px',
    'paddingLeft': '10px',
    'color': 'white',
    'cursor': 'pointer',
    ':focus': {
      'border': 'none',
    },
  };
};
