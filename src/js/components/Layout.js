import React from 'react';
import radium from 'radium';

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

import {BrowserRouter as Router, Route} from 'react-router-dom';

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
    this.state = {
      posts: [],
      post: {},
      myPosts: [],
      user: auth.user,
    };
    if (auth.loggedIn()) {
      postsApi
        .getMine()
        .then(res => {
          this.setState({
            myPosts: res.data,
          });
        });
    }
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
        postsApi
          .getMine()
          .then(res => {
            this.setState({
              myPosts: res.data,
            });
          });
      })
      .catch(err => {
        console.log(err);
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
        posts={this.state.myPosts}
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

export default radium(Layout);
