import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {h2style} from './styles';

class H2 extends React.Component {
  render() {
    return (
      <h2 style={h2style()}>{this.props.children}</h2>
    );
  }
}

H2.propTypes = {
  children: PropTypes.node,
};

export default radium(H2);
