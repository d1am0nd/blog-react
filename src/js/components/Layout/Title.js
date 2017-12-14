import React from 'react';
import radium from 'radium';

import {Link} from 'react-router-dom';
import {color2, color3} from '../../styles/vars';

class Title extends React.Component {
  constructor() {
    super();
  }

  getStyles() {
    return {
      'fontSize': '30px',
      'paddingBottom': '4px',
      'color': color2,
      'borderBottom': `solid 2px ${color3}`,
      'marginBottom': '10px',
    };
  }

  getLinkStyles() {
    return {
      'color': 'inherit',
      'textDecoration': 'none',
      ':visited': {
        color: color2,
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
