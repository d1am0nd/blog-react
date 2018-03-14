import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

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

Item.propTypes = {
  active: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default radium(Item);
