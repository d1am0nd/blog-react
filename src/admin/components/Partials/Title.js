import React from 'react';
import radium from 'radium';

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}

export default radium(Title);
