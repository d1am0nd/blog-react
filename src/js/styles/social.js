import {
  color2,
  color3,
  transition,
} from './vars';

const title = () => {
  return {
    'fontSize': '22px',
    'marginTop': 0,
    'marginBottom': '5px',
    'padding': 0,
  };
};
const ul = () => {
  return {
    'fontSize': '20px',
    'listStyleType': 'none',
    'marginTop': 0,
    'marginBottom': '20px',
    'padding': 0,
  };
};
const li = () => {
  return {
    ...transition,
    'fontSize': '20px',
    'marginRight': '20px',
    'display': 'inline-block',
  };
};
const link = () => {
  return {
    'textDecoration': 'none',
  };
};

export {
  title,
  ul,
  li,
  link,
};
