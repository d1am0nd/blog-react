import React from 'react';
import radium from 'radium';

import {subStyle} from './styles';

class SubH1 extends React.Component {
  render() {
    return (
      <div style={subStyle()}>
        {this.props.children}
      </div>
    );
  }
}

export default radium(SubH1);
