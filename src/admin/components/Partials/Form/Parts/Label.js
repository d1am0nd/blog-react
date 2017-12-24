import React from 'react';
import radium from 'radium';

class Label extends React.Component {
  render() {
    return (
      <label>{this.props.text}</label>
    );
  }
}

export default radium(Label);
