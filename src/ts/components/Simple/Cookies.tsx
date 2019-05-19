import * as React from 'react';
import {
  baseWidth,
  transition,
  darkBackground,
  lightBackground,
} from '../../misc/styles';

const fixedWrapper = (show: boolean) => ({
  ...transition,
  ...lightBackground,
  'opacity': show ? 1 : 0,
  'position': 'fixed' as 'fixed',
  'paddingTop': '5px',
  'paddingBottom': '5px',
  'bottom': 0,
  'left': 0,
  'width': '100%',
});

const relativeWrapper = () => ({
  ...baseWidth,
  'position': 'relative' as 'relative',
  'margin': 'auto',
});

const left = () => ({
  'float': 'left' as 'left',
});

const right = () => ({
  'float': 'right' as 'right',
});

const button = () => ({
  ...darkBackground,
  'border': 'none',
  'borderRadius': '2px',
  'paddingTop': '5px',
  'paddingBottom': '5px',
  'paddingRight': '10px',
  'paddingLeft': '10px',
  'color': 'white',
  'cursor': 'pointer',
  ':focus': {
    'border': 'none',
  },
});

interface IProps {
  display: boolean;
  handleDismiss: () => void;
};

const Cookies: React.FunctionComponent<IProps> = ({
  display,
  handleDismiss,
}) => (
  <div style={fixedWrapper(display)}>
    <div style={relativeWrapper()}>
      <div style={left()}>
        This website uses &nbsp;
        <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
          Google Analytics
        </a>
        &nbsp; cookies. Beware.
      </div>
      <div style={right()}>
        <button
          onClick={() => handleDismiss()}
          style={button()}>
          Dismiss
        </button>
      </div>
    </div>
  </div>
);

export default Cookies;
