import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';

import Routes from './Routes';
import Title from './Layout/Title';

import Header from './Partials/Header';
import AdminHeader from './Partials/AdminHeader';
import Cookies from './Partials/Cookies';

import {Route, Switch, withRouter} from 'react-router-dom';

import {setCookiesDismissed} from '../store/actions/miscActions';
import {fetchMyPosts, deletePost} from '../store/actions/postsActions';
import {login, logout} from '../store/actions/userActions';
import postsApi from '../api/posts';
import authApi from '../api/auth';
import auth from '../auth/auth';
import {
  dismiss as dismissCookies,
  alreadyDismissed as cookiesDismissed,
} from '../cookies';

import {layout as layoutStyle} from '../styles/layout';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  static fetchData(store) {
    return store.dispatch(fetchMyPosts());
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {

  }

  componentDidMount() {
    if (!cookiesDismissed()) {
      this.props.dispatch(setCookiesDismissed(false));
    }
    if (auth.loggedIn()) {
      this.props.dispatch(fetchMyPosts());
    }
  }

  handleCookieDismiss(e) {
    this.props.dispatch(setCookiesDismissed(true));
    dismissCookies();
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

  render() {
    return (
      <div style={layoutStyle(this.props.misc.cookiesDismissed)}>
        <Title text={'My Programming Blog'}/>
        <Header test={`test`} url={this.props.location.pathname}/>
        {this.renderAdminPanel()}
        {Routes}
        <Cookies
          show={!this.props.misc.cookiesDismissed}
          handleDismiss={e => this.handleCookieDismiss(e)}/>
      </div>
    );
  }
}

export default withRouter(connect(store => {
  return {
     ...store,
  };
})(radium(Layout)));
