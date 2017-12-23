import {baseWidth} from './general';
import {transition} from './vars';

export function layout(cookiesDismissed) {
  return {
    ...transition,
    ...baseWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: '"Roboto"',
    lineHeight: 1.4,
    paddingBottom: cookiesDismissed ? '0px' : '30px',
  };
};
