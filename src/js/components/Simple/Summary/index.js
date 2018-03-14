import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {summaryStyle} from './styles';

class Summary extends React.Component {
  render() {
    return (
      <p style={summaryStyle()}>{this.props.children}</p>
    );
  }
}

Summary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(Summary);
