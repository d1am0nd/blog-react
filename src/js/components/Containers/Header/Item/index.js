import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import {
  liStyle,
  linkStyle,
} from './styles';

/**
 * Props:
 * active - boolean
 * to - url
 */
class Item extends React.Component {
  render() {
    return (
      <li style={liStyle(this.props.active)}>
        <Link style={linkStyle()} to={this.props.to}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

export default radium(Item);
