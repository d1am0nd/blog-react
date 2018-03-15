import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

class Label extends React.Component {
  render() {
    return (
      <label>{this.props.text}</label>
    );
  }
}

Label.propTypes = {
  text: PropTypes.string,
};

export default radium(Label);
