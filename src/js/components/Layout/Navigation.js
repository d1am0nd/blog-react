import React from 'react';
import radium from 'radium';

import {Link} from 'react-router-dom';

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
        <li>
          <Link to={`/`}>
            Home
          </Link>
        </li>
      </ul>
    );
  }
}

export default radium(Title);
