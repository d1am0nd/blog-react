import React from 'react';
import radium from 'radium';

import {Link} from 'react-router-dom';
import {containerStyle, linkStyle} from './styles';

class Title extends React.Component {
  render() {
    return (
      <div style={containerStyle()}>
        <Link style={linkStyle()} to={`/`}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

export default radium(Title);
