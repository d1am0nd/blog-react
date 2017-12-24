import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './Pages/Index';
import Show from './Pages/Show';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Edit from './Pages/Auth/Edit';
import NewPost from './Pages/Auth/NewPost';
import Images from './Pages/Auth/Images';
import NewImage from './Pages/Auth/NewImage';
import EditImage from './Pages/Auth/EditImage';

const routes = [
  <Route exact={true} key="0" path="/" component={Index}/>,
  <Route exact={true} key="1" path="/posts/write" component={NewPost}/>,
  <Route exact={true} key="2" path="/posts/:slug" component={Show}/>,
  <Route exact={true} key="3" path="/posts/edit/:slug" component={Edit}/>,
  <Route exact={true} key="4" path="/admin/images" component={Images}/>,
  <Route exact={true} key="5" path="/admin/images/new" component={NewImage}/>,
  <Route
    exact={true}
    key="6"
    path="/admin/images/edit/:id"
    component={EditImage}/>,
  <Route
    exact={true}
    key="7"
    path="/login"
    component={Login}/>,
  <Route exact={true} key="8" path="/about-me" component={About}/>,
  <Route exact={true} key="9" path="/my-projects" component={Projects}/>,
];

export default routes;
