import {color1, color2} from '@/styles/vars';
import {wrapperStyle as ws} from '../styles';

export const wrapperStyle = () => {
  return {
    ...ws(),
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
