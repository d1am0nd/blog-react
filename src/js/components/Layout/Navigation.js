import React from 'react';
import radium from 'radium';

class Title extends React.Component {
  constructor() {
    super();
  }

  getStyles() {
    return {};
  }

  render() {
    return (
      <ul style={this.getStyles()}>
        <li>test</li>
      </ul>
    );
  }
}

export default radium(Title);
