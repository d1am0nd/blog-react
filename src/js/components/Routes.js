import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Index from './Pages/Index';
import Show from './Pages/Show';
import Login from './Pages/Auth/Login';
import Edit from './Pages/Auth/Edit';
import NewPost from './Pages/Auth/NewPost';
import Images from './Pages/Auth/Images';
import NewImage from './Pages/Auth/NewImage';
import EditImage from './Pages/Auth/EditImage';

class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/posts/write" component={NewPost}/>
          <Route exact path="/posts/:slug" component={Show}/>
          <Route exact path="/posts/edit/:slug" component={Edit}/>
          <Route exact path="/admin/images" component={Images}/>
          <Route exact path="/admin/images/new" component={NewImage}/>
          <Route
            exact
            path="/admin/images/edit/:id"
            component={EditImage}/>
          <Route
            exact
            path="/login"
            component={Login}/>
        </Switch>
      </div>
    );
  }
};

export default Routes;
