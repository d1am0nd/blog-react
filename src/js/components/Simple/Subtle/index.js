import React from 'react';
import radium from 'radium';

import {subStyle} from './styles';

class Subtle extends React.Component {
  render() {
    return (
      <div style={subStyle()}>
        {this.props.children}
      </div>
    );
  }
}

export default radium(Subtle);
