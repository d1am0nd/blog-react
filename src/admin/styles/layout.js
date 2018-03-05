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
    'fontSize': '28px',
  };
};

export const navigationUl = function() {
  return {
    'fontSize': '18px',
    'listStyleType': 'none',
    'marginTop': 0,
    'marginBottom': '10px',
    'padding': 0,
  };
};

export const navigationLi = function() {
  return {
    'fontSize': '18px',
    'marginRight': '20px',
    'display': 'inline-block',
  };
};
