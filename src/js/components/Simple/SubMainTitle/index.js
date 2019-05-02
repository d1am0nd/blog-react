import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';
import {containerStyle} from './styles';

class SubMainTitle extends React.Component {
  render() {
    return (
      <div style={containerStyle()}>
        {this.props.children}
      </div>
    );
  }
}

SubMainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(SubMainTitle);
