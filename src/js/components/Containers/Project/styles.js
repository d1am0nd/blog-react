import {color1, color3, transition} from 'styles/vars';

export const wrapperStyle = () => {
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
export const linkStyle = () => {
  return {
    'color': 'black',
    'textDecoration': 'none',
  };
};
export const imgWrapperStyle = () => {
  return {
    'width': '100%',
  };
};
export const imgStyle = () => {
  return {
    'width': '100%',
  };
};
