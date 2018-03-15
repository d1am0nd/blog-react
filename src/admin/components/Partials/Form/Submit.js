import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

class Submit extends React.Component {
  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

Submit.propTypes = {
  text: PropTypes.string,
};

export default radium(Submit);
