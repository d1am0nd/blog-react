import React from 'react';
import radium from 'radium';

class Title extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

export default radium(Title);
