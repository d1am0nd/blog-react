import React from 'react';
import radium from 'radium';

import {Link} from 'react-router-dom';

class Title extends React.Component {
  constructor() {
    super();
  }

  getStyles() {
    return {
      'fontSize': '30px',
      'paddingBottom': '4px',
      'color': '#909090',
      'borderBottom': 'solid 2px #E5E5E5',
      'marginBottom': '10px',
    };
  }

  getLinkStyles() {
    return {
      'color': 'inherit',
      'textDecoration': 'none',
      ':visited': {
        color: '#909090',
        textDecoration: 'none',
      },
    };
  }

  render() {
    return (
      <div style={this.getStyles()}>
        <Link style={this.getLinkStyles()} to={`/`}>{this.props.text}</Link>
      </div>
    );
  }
}

export default radium(Title);
