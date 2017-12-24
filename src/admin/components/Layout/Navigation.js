import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import {
  navigationUl as ulStyle,
  navigationLi as liStyle,
} from '../../styles/layout';

class Navigation extends React.Component {
  render() {
    return (
      <ul style={ulStyle()}>
        <li key={'login'} style={liStyle()}>
          <Link to={`/admin/login`}>
            Login
          </Link>
        </li>
        <li key={'posts'} style={liStyle()}>
          <Link to={`/admin/posts`}>
            Posts
          </Link>
        </li>
        <li key={'images'} style={liStyle()}>
          <Link to={`/admin/images`}>
            Images
          </Link>
        </li>
      </ul>
    );
  }
}

export default radium(Navigation);
