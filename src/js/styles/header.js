import {
  color2,
  color3,
  transition,
} from './vars';

export const ul = function() {
  return {
    'fontSize': '20px',
    'listStyleType': 'none',
    'marginTop': 0,
    'marginBottom': '10px',
    'padding': 0,
  };
};
export const li = function(selected = false) {
  const borderColor = selected ? color2 : color3;
  return {
    ...transition,
    'fontSize': '20px',
    'marginRight': '20px',
    'display': 'inline-block',
    'borderBottom': `1px solid ${borderColor}`,
    ':hover': {
      'borderBottom': `1px solid black`,
    },
  };
};
export const link = function() {
  return {
    'color': color2,
    'textDecoration': 'none',
  };
};
