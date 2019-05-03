import * as React from 'react';
import {Link} from 'react-router-dom';

const ulStyle = () => ({
  'fontSize': '18px',
  'listStyleType': 'none',
  'marginTop': 0,
  'marginBottom': '10px',
  'padding': 0,
});

const liStyle = () => ({
  'fontSize': '18px',
  'marginRight': '20px',
  'display': 'inline-block',
});

const Navigation: React.FunctionComponent = () => (
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

export default Navigation;
