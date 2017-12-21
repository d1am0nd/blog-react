import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import {
  title as titleStyle,
  ul as ulStyle,
  li as liStyle,
  link as linkStyle,
} from '../../../styles/social';

class Social extends React.Component {
  linkedinUrl() {
    return `https://www.linkedin.com/in/dev-korde%C5%A1/`;
  }
  stackUrl() {
    return `https://stackoverflow.com/users/5405630/devk`;
  }
  githubUrl() {
    return `https://github.com/d1am0nd/`;
  }
  render() {
    return (
      <div>
        <div style={titleStyle()}>Public profiles</div>
        <ul style={ulStyle()}>
          <li key={`linkedin`} style={liStyle()}>
            <a style={linkStyle()} target="_blank" href={this.linkedinUrl()}>
            LinkedIn
            </a>
          </li>
          <li key={`github`} style={liStyle()}>
            <a style={linkStyle()} target="_blank" href={this.githubUrl()}>
            Github
            </a>
          </li>
          <li key={`stack`} style={liStyle()}>
            <a style={linkStyle()} target="_blank" href={this.stackUrl()}>
            StackOverflow
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default radium(Social);
