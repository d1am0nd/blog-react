import {color1, color3, transition} from './vars';

const projectWrapper = () => {
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
const projectWrapperLink = () => {
  return {
    'color': 'black',
    'textDecoration': 'none',
  };
};
const imgWrapper = () => {
  return {
    'width': '100%',
  };
};
const img = () => {
  return {
    'width': '100%',
  };
};

export {
  projectWrapper,
  projectWrapperLink,
  imgWrapper,
  img,
};
