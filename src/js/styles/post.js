import {
  color1,
  color2,
  color3,
  linkColor,
} from './vars';

const title = () => {
  return {
    'marginBottom': '5px',
    'marginTop': 0,
  };
};

const date = () => {
  return {
    fontSize: '18px',
    marginTop: 0,
    marginBottom: '5px',
    color: color2,
  };
};

const summary = () => {
  return {
    fontSize: '18px',
    marginTop: 0,
    marginBottom: '5px',
  };
};

const content = () => {
  return {
    fontSize: '16px',
    marginTop: 0,
    marginBottom: 0,
  };
};

const wrapper = () => {
  return {
    'transition': 'all 0.2s ease',
    'marginBottom': '15px',
    'borderBottom': `1px solid ${color3}`,
  };
};

const indexWrapper = () => {
  return {
    ...wrapper(),
    ':hover': {
      'borderBottom': `1px solid ${color1}`,
    },
  };
}

const wrapperLink = () => {
  return {
    'color': 'black',
    'textDecoration': 'none',
  };
}

const showMore = () => {
  return {
    'fontSize': '20px',
    'color': color2,
    'transition': '0.1s',
  };
};

const hr = () => {
  return {
    'color': color2,
  };
};

export {
  title,
  date,
  summary,
  content,
  wrapper,
  indexWrapper,
  wrapperLink,
  showMore,
  hr,
}
