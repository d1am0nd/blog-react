import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Pages/Home';
import Post from './Pages/Post';
import Projects from './Pages/Projects';
import About from './Pages/About';

const routes = [
  <Route exact={true} key="0" path="/" component={Home}/>,
  <Route exact={true} key="2" path="/posts/:slug" component={Post}/>,
  <Route exact={true} key="8" path="/about-me" component={About}/>,
  <Route exact={true} key="9" path="/my-projects" component={Projects}/>,
];

export default routes;
