import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Item from './Item';
import {tabs} from './content';
import {
  ul as ulStyle,
} from './styles';

class Header extends React.Component {
  render() {
    return (
      <ul style={ulStyle()}>
        {tabs.map((i) => (
          <Item
            key={i.url}
            active={this.props.url === i.url}
            to={i.url}>
            {i.name}
          </Item>
        ))}
      </ul>
    );
  }
}

Header.propTypes = {
  url: PropTypes.string.isRequired,
};

export default radium(Header);
