import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {
  h1style,
} from './styles';

class H1 extends React.Component {
  render() {
    return (
      <h1 style={h1style()}>{this.props.children}</h1>
    );
  }
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(H1);
