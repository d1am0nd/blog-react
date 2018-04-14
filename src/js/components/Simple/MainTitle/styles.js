import {color2, color3} from '@/styles/vars';

export const linkStyle = () => {
  return {
    'color': 'inherit',
    'textDecoration': 'none',
    ':visited': {
      color: color2,
      textDecoration: 'none',
    },
  };
};

export const containerStyle = () => {
  return {
    'fontSize': '30px',
    'paddingBottom': '4px',
    'color': color2,
    'borderBottom': `solid 2px ${color3}`,
    'marginBottom': '10px',
  };
};
