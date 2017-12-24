import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './Pages/Index';
import Show from './Pages/Show';
import Projects from './Pages/Projects';
import About from './Pages/About';

const routes = [
  <Route exact={true} key="0" path="/" component={Index}/>,
  <Route exact={true} key="2" path="/posts/:slug" component={Show}/>,
  <Route exact={true} key="8" path="/about-me" component={About}/>,
  <Route exact={true} key="9" path="/my-projects" component={Projects}/>,
];

export default routes;
