import React from 'react';
import radium from 'radium';

import {pStyle} from './styles';

class P extends React.Component {
  render() {
    return (
      <p style={pStyle()}>
        {this.props.children}
      </p>
    );
  }
}

export default radium(P);
