import React from 'react';
import radium from 'radium';

import {
  fixedWrapper as fixedStyle,
  relativeWrapper as relativeStyle,
  left as leftStyle,
  right as rightStyle,
  button as buttonStyle,
} from 'styles/cookies';

const rememberCookie = 'REMEMBER_COOKIE';

class Cookies extends React.Component {
  handleDismiss(e) {
    if (this.props.handleDismiss) {
      this.props.handleDismiss(e);
    }
  }

  render() {
    return (
      <div style={fixedStyle(this.props.show)}>
        <div style={relativeStyle()}>
          <div style={leftStyle()}>
            This website uses &nbsp;
            <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
              Google Analytics
            </a>
            &nbsp; cookies. Beware.
          </div>
          <div style={rightStyle()}>
            <button onClick={e => this.handleDismiss(e)} style={buttonStyle()}>
              Dismiss
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default radium(Cookies);
