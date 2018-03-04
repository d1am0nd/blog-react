import React from 'react';
import radium from 'radium';

import {
  h2 as h2style,
} from 'styles/general';

class Title extends React.Component {
  render() {
    return (
      <h2 style={h2style}>{this.props.text}</h2>
    );
  }
}

export default radium(Title);
