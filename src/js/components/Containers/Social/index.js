import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {
  title as titleStyle,
  ul as ulStyle,
  li as liStyle,
  link as linkStyle,
} from './styles';

class Social extends React.Component {
  renderUrls() {
    return this.props.links.map((item) => {
      return (
        <li key={item.name} style={liStyle()}>
          <a
            style={linkStyle()}
            target="_blank"
            rel="noopener noreferrer"
            href={item.url}>
            {item.name}
          </a>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div style={titleStyle()}>Public profiles</div>
        <ul style={ulStyle()}>
          {this.renderUrls()}
        </ul>
      </div>
    );
  }
}

Social.propTypes = {
  links: PropTypes.array.isRequired,
};

export default radium(Social);
