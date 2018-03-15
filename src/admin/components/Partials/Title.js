import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string,
};

export default radium(Title);
