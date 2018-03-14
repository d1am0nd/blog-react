import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {subStyle} from './styles';

class Subtle extends React.Component {
  render() {
    return (
      <div style={subStyle()}>
        {this.props.children}
      </div>
    );
  }
}

Subtle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(Subtle);
