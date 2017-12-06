import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import Index from './Pages/Index';
import Show from './Pages/Show';
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
];

export default routes;

class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return routes;
  }
};

const routesArray2 = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index,
      },
      {
        path: '/posts/write',
        exact: true,
        component: NewPost,
      },
      {
        path: '/posts/:slug',
        exact: true,
        component: Show,
      },
      {
        path: '/posts/edit/:slug',
        exact: true,
        component: Edit,
      },
      {
        path: '/admin/images',
        exact: true,
        component: Images,
      },
      {
        path: '/admin/images/new',
        exact: true,
        component: NewImage,
      },
      {
        path: '/admin/images/edit/:id',
        exact: true,
        component: EditImage,
      },
      {
        path: '/login',
        exact: true,
        component: Login,
      },
    ],
  },
];
// export default routesArray;

// export default Routes;
