import React from 'react';
import radium from 'radium';

class Title extends React.Component {
  constructor() {
    super();
  }

  getStyles() {
    return {
      fontSize: '30px',
      paddingBottom: '4px',
      color: '#909090',
      borderBottom: 'solid 2px #E5E5E5',
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
