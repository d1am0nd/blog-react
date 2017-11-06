import React from 'react';
import radium from 'radium';

import Title from './Layout/Title';
import Navigation from './Layout/Navigation';
import Index from './Pages/Index';
import Show from './Pages/Show';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import LayoutStyle from '../styles/layout';

class Layout extends React.Component {
  constructor() {
    super();
    this.styles = new LayoutStyle();
    this.state = {
      posts: [],
      post: {},
    };
  }

  getStyles(title) {
    return this.styles.layoutStyles();
  }

  render() {
    return (
      <Router>
        <div style={this.getStyles()}>
          <Title text={'My Programming Blog'}/>
          {this.state.posts.map(i => i.title)}
          <Navigation/>
          <Route exact={true} path="/" component={Index}/>
          <Route exact={true} path="/posts/:slug" component={Show}/>
        </div>
      </Router>
    );
  }
}

export default radium(Layout);
