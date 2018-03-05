import React from 'react';
import radium from 'radium';

import {h2style} from './styles';

class H2 extends React.Component {
  render() {
    return (
      <h2 style={h2style()}>{this.props.children}</h2>
    );
  }
}

export default radium(H2);
