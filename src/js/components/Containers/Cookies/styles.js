import {baseWidth} from 'styles/general';
import {transition} from 'styles/vars';
import {
  light as lightBackground,
  dark as darkBackground,
} from 'styles/backgrounds';

export const fixedWrapper = show => {
  return {
    ...transition,
    ...lightBackground,
    'opacity': show ? 1 : 0,
    'position': 'fixed',
    'paddingTop': '5px',
    'paddingBottom': '5px',
    'bottom': 0,
    'left': 0,
    'width': '100%',
  };
};

export const relativeWrapper = () => {
  return {
    ...baseWidth,
    'position': 'relative',
    'margin': 'auto',
  };
};

export const left = () => {
  return {
    'float': 'left',
  };
};
export const right = () => {
  return {
    'float': 'right',
  };
};

export const button = () => {
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
