import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {
  mainTitle as titleStyle,
} from '../../styles/layout';

class Title extends React.Component {
  render() {
    return (
      <div style={titleStyle()}>{this.props.text}</div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string,
};

export default radium(Title);
