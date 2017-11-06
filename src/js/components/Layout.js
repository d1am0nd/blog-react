import React from 'react';
import radium from 'radium';

import Title from './Layout/Title';
import Navigation from './Layout/Navigation';

import Index from './Pages/Index';
import Show from './Pages/Show';
import Login from './Pages/Auth/Login';

import AdminHeader from './Partials/AdminHeader';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import authApi from '../api/auth';
import auth from '../auth/auth';

import LayoutStyle from '../styles/layout';

class Layout extends React.Component {
  constructor() {
    super();
    this.styles = new LayoutStyle();
    this.state = {
      posts: [],
      post: {},
      user: auth.user,
    };
  }

  getStyles(title) {
    return this.styles.layoutStyles();
  }

  logout(e) {
    auth.logout();
    this.setState({
      user: auth.user,
    });
  }

  login(e, creds) {
    authApi
      .login(creds)
      .then(res => {
        let user = res.data;
        let token = res.headers.authorization;
        auth.login(user, token);
        this.setState({
          user: auth.user,
        });
      })
      .catch(err => {
        alert('Wrong credentials');
      });
  }

  renderAdminPanel() {
    if (!auth.loggedIn()) {
      return;
    }
    return (
      <AdminHeader
        logout={e => this.logout(e)}
        user={this.state.user}/>
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
      <Router>
        <div style={this.getStyles()}>
          <Title text={'My Programming Blog'}/>
          {this.state.posts.map(i => i.title)}
          <Navigation/>
          {this.renderAdminPanel()}
          <Route exact={true} path="/" component={Index}/>
          <Route exact={true} path="/posts/:slug" component={Show}/>
          {this.renderLogin()}
        </div>
      </Router>
    );
  }
}

export default radium(Layout);
