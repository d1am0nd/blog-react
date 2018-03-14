import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {containerStyle, linkStyle} from './styles';

class MainTitle extends React.Component {
  render() {
    return (
      <div style={containerStyle()}>
        <Link to={'/'} style={linkStyle()}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(MainTitle);
