import {
  baseWidth,
} from './general';

export const wrapper = function() {
  return {
    ...baseWidth(),
    'margin': 'auto',
  };
};

export const mainTitle = function() {
  return {
    'fontSize': '30px',
  };
};

export const navigationUl = function() {
  return {
    'fontSize': '20px',
    'listStyleType': 'none',
    'marginTop': 0,
    'marginBottom': '10px',
    'padding': 0,
  };
};

export const navigationLi = function() {
  return {
    'fontSize': '20px',
    'marginRight': '20px',
    'display': 'inline-block',
  };
};
