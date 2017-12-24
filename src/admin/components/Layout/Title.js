import React from 'react';
import radium from 'radium';

import {
  mainTitle as titleStyle,
} from '../../styles/layout';

class Title extends React.Component {
  render() {
    return (
      <div style={titleStyle()}>{this.props.text}</div>
    );
  }
}

export default radium(Title);
