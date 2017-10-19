import React from 'react';
import radium from 'radium';

class Title extends React.Component {
  constructor() {
    super();
  }

  getStyles() {
    return {
      fontSize: '30px',
    };
  }

  render() {
    return (
      <div style={this.getStyles()}>
        {this.props.text}
      </div>
    );
  }
}

export default radium(Title);
