import {color1, color3, transition} from './vars';

export const projectWrapper = function() {
  return {
    ...transition,
    'width': '100%',
    'marginBottom': '15px',
    'borderBottom': `1px solid ${color3}`,
    ':hover': {
      'borderBottom': `1px solid ${color1}`,
    },
  };
};
export const projectWrapperLink = function() {
  return {
    'color': 'black',
    'textDecoration': 'none',
  };
};
export const imgWrapper = function() {
  return {
    'width': '100%',
  };
};
export const img = function() {
  return {
    'width': '100%',
  };
};
