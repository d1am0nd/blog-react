import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';
// import {matchPath} from 'react-router';

import {
  ul as ulStyle,
  li as liStyle,
  link as linkStyle,
} from '../../styles/header';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul style={ulStyle()}>
        <li key={`home`} style={liStyle(this.props.url === '/')}>
          <Link style={linkStyle()} to={`/`}>
          Home
          </Link>
        </li>
        <li key={`about`} style={liStyle(this.props.url === '/about-me')}>
          <Link style={linkStyle()} to={`/about-me`}>
          About me
          </Link>
        </li>
        <li key={`projects`} style={liStyle(this.props.url === '/my-projects')}>
          <Link style={linkStyle()} to={`/my-projects`}>
          Projects
          </Link>
        </li>
      </ul>
    );
  }
}

export default radium(Header);
