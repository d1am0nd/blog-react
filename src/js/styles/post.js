import {
  color1,
  color2,
  color3,
  linkColor,
} from './vars';

export function title() {
  return {
    'marginBottom': '5px',
    'marginTop': 0,
  };
};

export function date() {
  return {
    fontSize: '20px',
    marginTop: 0,
    marginBottom: '5px',
    color: color2,
  };
};

export function summary() {
  return {
    fontSize: '20px',
    marginTop: 0,
    marginBottom: '5px',
  };
};

export function content() {
  return {
    fontSize: '18px',
    marginTop: 0,
    marginBottom: 0,
  };
};

export function wrapper() {
  return {
    'transition': 'all 0.2s ease',
    'marginBottom': '15px',
    'borderBottom': `1px solid ${color3}`,
  };
};

export function indexWrapper() {
  return {
    ...wrapper(),
    ':hover': {
      'borderBottom': `1px solid ${color1}`,
    },
  };
}

export function wrapperLink() {
  return {
    'color': 'black',
    'textDecoration': 'none',
  };
}

export function showMore() {
  return {
    'fontSize': '22px',
    'color': color2,
    'transition': '0.1s',
  };
};

export function hr() {
  return {
    'color': color2,
  };
};
