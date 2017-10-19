import React from 'react';
import radium from 'radium';

import Title from './Layout/Title';
import Navigation from './Layout/Navigation';

import LayoutStyle from '../styles/layout';

class Layout extends React.Component {
  constructor() {
    super();
    this.styles = new LayoutStyle();
  }

  getStyles(title) {
    return this.styles.layoutStyles();
  }

  render() {
    return (
      <div style={this.getStyles()}>
        <Title text={'My Programming Blog'}/>
        <Navigation/>
      </div>
    );
  }
}

export default radium(Layout);
