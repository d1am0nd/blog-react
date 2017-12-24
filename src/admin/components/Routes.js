import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Posts from './Pages/Posts/Index';
import Post from './Pages/Posts/Edit';
import NewPost from './Pages/Posts/New';
import Images from './Pages/Images/Index';

const routes = [
  <Route exact={true} key="0" path="/admin" component={Home}/>,
  <Route exact={true} key="1" path="/admin/login" component={Login}/>,
  <Route exact={true} key="3" path="/admin/post/new" component={NewPost}/>,
  <Route exact={true} key="2" path="/admin/posts" component={Posts}/>,
  <Route exact={true} key="4" path="/admin/posts/:slug" component={Post}/>,
  <Route exact={true} key="5" path="/admin/images/" component={Images}/>,
];

export default routes;
