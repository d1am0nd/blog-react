import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Routes from './Routes';
import Title from './Layout/Title';

import AdminHeader from './Partials/AdminHeader';

import {Route, Switch, withRouter} from 'react-router-dom';

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

  componentWillMount() {
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
      <div style={this.getStyles()}>
        <Title text={'My Programming Blog'}/>
        {this.renderAdminPanel()}
        <Routes/>
      </div>
    );
  }
}

export default withRouter(connect(store => {
  return {
     ...store,
  };
})(radium(Layout)));
