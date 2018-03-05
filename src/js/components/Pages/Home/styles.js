import {
  color1,
  color2,
  color3,
  linkColor,
} from 'styles/vars';

export const wrapper = () => {
  return {
    'transition': 'all 0.2s ease',
    'marginBottom': '15px',
    'borderBottom': `1px solid ${color3}`,
  };
};

export const wrapperStyle = () => {
  return {
    ...wrapper(),
    ':hover': {
      'borderBottom': `1px solid ${color1}`,
    },
  };
};

export const linkStyle = () => {
  return {
    'color': 'black',
    'textDecoration': 'none',
  };
};

export const moreStyle = () => {
  return {
    'fontSize': '20px',
    'color': color2,
    'transition': '0.1s',
  };
};
