import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Posts from './Pages/Posts/Index';

const routes = [
  <Route exact={true} key="0" path="/admin" component={Home}/>,
  <Route exact={true} key="1" path="/admin/login" component={Login}/>,
  <Route exact={true} key="2" path="/admin/posts" component={Posts}/>,
];

export default routes;
