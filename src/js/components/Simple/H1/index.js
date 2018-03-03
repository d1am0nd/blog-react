import React from 'react';
import radium from 'radium';

import {
  h1style,
} from './styles';

class H1 extends React.Component {
  render() {
    return (
      <h1 style={h1style()}>{this.props.children}</h1>
    );
  }
}

export default radium(H1);
