import React from 'react';
import radium from 'radium';

import {
  summary as summaryStyle,
} from '../../../styles/general';

class Summary extends React.Component {
  render() {
    return (
      <p style={summaryStyle}>{this.props.text}</p>
    );
  }
}

export default radium(Summary);
