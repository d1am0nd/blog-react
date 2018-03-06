import {
  transition,
} from 'styles/vars';

export const title = () => {
  return {
    'fontSize': '22px',
    'marginTop': 0,
    'marginBottom': '5px',
    'padding': 0,
  };
};
export const ul = () => {
  return {
    'fontSize': '20px',
    'listStyleType': 'none',
    'marginTop': 0,
    'marginBottom': '20px',
    'padding': 0,
  };
};
export const li = () => {
  return {
    ...transition,
    'fontSize': '20px',
    'marginRight': '20px',
    'display': 'inline-block',
  };
};
export const link = () => {
  return {
    'textDecoration': 'none',
  };
};
