import React from 'react';
import radium from 'radium';

class Submit extends React.Component {
  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

export default radium(Submit);
