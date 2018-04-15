import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import {
  navigationUl as ulStyle,
  navigationLi as liStyle,
} from 'admin/styles/layout';

class Navigation extends React.Component {
  render() {
    return (
      <ul style={ulStyle()}>
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
        <li key={'projects'} style={liStyle()}>
          <Link to={`/admin/projects`}>
            Projects
          </Link>
        </li>
        <li key={'login'} style={liStyle()}>
          <Link to={`/admin/login`}>
            Login
          </Link>
        </li>
      </ul>
    );
  }
}

export default radium(Navigation);
