import {
  color2,
  color3,
  transition,
} from './vars';

export const title = function() {
  return {
    'fontSize': '24px',
    'marginTop': 0,
    'marginBottom': '5px',
    'padding': 0,
  };
};
export const ul = function() {
  return {
    'fontSize': '22px',
    'listStyleType': 'none',
    'marginTop': 0,
    'marginBottom': '20px',
    'padding': 0,
  };
};
export const li = function() {
  return {
    ...transition,
    'fontSize': '22px',
    'marginRight': '20px',
    'display': 'inline-block',
  };
};
export const link = function() {
  return {
    'textDecoration': 'none',
  };
};
