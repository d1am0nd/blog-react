import {
  color1,
  color2,
  color3,
} from 'styles/vars';
import {wrapper} from 'styles/post';

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
