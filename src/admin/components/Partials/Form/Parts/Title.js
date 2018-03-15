import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string,
};

export default radium(Title);
