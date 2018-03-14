import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {pStyle} from './styles';

class P extends React.Component {
  render() {
    return (
      <p style={pStyle()}>
        {this.props.children}
      </p>
    );
  }
}

P.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(P);
