import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import Item from './Item';
import {tabs} from './content';
import {
  ul as ulStyle,
} from './styles';

class Header extends React.Component {
  render() {
    return (
      <ul style={ulStyle()}>
        {tabs.map(i => (
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

export default radium(Header);
