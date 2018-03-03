import React from 'react';
import radium from 'radium';

import {summaryStyle} from './styles';

class Summary extends React.Component {
  render() {
    return (
      <p style={summaryStyle()}>{this.props.children}</p>
    );
  }
}

export default radium(Summary);
