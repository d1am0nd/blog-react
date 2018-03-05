import {baseWidth} from './general';
import {transition} from './vars';

export const layout = cookiesDismissed => {
  return {
    ...transition,
    ...baseWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: '\'Lato\', sans-serifs',
    fontWeight: '300',
    lineHeight: 1.4,
    paddingBottom: cookiesDismissed ? '0px' : '30px',
  };
};
