import React from 'react';
import radium from 'radium';

class Label extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

export default radium(Label);
