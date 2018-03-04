import {
  color2,
  color3,
  transition,
} from 'styles/vars';

export const liStyle = (selected = false) => {
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
export const linkStyle = () => {
  return {
    'color': color2,
    'textDecoration': 'none',
  };
};
