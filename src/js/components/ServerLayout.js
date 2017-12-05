import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from './Layout/Title';
import Index from './Pages/Index';
import Show from './Pages/Show';
import Login from './Pages/Auth/Login';
import Edit from './Pages/Auth/Edit';
import NewPost from './Pages/Auth/NewPost';
import Images from './Pages/Auth/Images';
import NewImage from './Pages/Auth/NewImage';
import EditImage from './Pages/Auth/EditImage';

import AdminHeader from './Partials/AdminHeader';

import {Route, StaticRouter as Router} from 'react-router-dom';

import {fetchMyPosts, deletePost} from '../store/actions/postsActions';
import {login, logout} from '../store/actions/userActions';
import postsApi from '../api/posts';
import authApi from '../api/auth';
import auth from '../auth/auth';

import meta from '../meta/meta';
import LayoutStyle from '../styles/layout';

class Layout extends React.Component {
  constructor() {
    super();
    meta.setTitle(null);
    meta.setDescription(null);

    this.styles = new LayoutStyle();
  }

  componentDidMount() {
    if (auth.loggedIn()) {
      this.props.dispatch(fetchMyPosts());
    }
  }

  getStyles(title) {
    return this.styles.layoutStyles();
  }

  logout(e) {
    this.props.dispatch(logout());
  }

  login(e, creds) {
    this.props.dispatch(login(creds));
  }

  onPostDelete(postId) {
    if (!confirm('Really delete post with id ' + postId + '?')) {
      return;
    }
    this.props.dispatch(deletePost(postId));
  }

  renderAdminPanel() {
    if (!auth.loggedIn()) {
      return;
    }
    return (
      <AdminHeader
        onPostDelete={(id) => this.onPostDelete(id)}
        logout={e => this.logout(e)}
        posts={this.props.posts.myPosts}
        user={this.props.users.user}/>
    );
  }

  renderLogin() {
    if (auth.loggedIn()) {
      return '';
    }
    return (
      <Route
        exact={true}
        path="/login"
        render={(props) => {
            return <Login
              {...props}
              handleSubmit={(e, creds) => this.login(e, creds)}/>;
          }
        }/>
    );
  }

  render() {
    return (
      <Router context={this.props.context} location={this.props.location}>
        <div style={this.getStyles()}>
          <Title text={'My Programming Blog'}/>
          {this.renderAdminPanel()}
          <Route exact={true} path="/" component={Index}/>
          <Route exact={true} path="/posts/write" component={NewPost}/>
          <Route exact={true} path="/posts/:slug" component={Show}/>
          <Route exact={true} path="/posts/edit/:slug" component={Edit}/>
          <Route exact={true} path="/admin/images" component={Images}/>
          <Route exact={true} path="/admin/images/new" component={NewImage}/>
          <Route
            exact={true}
            path="/admin/images/edit/:id"
            component={EditImage}/>
          {this.renderLogin()}
        </div>
      </Router>
    );
  }
}

export default connect(store => {
  return {
     ...store,
  };
})(radium(Layout));
