import * as React from 'react';
import {Route} from 'react-router-dom';
import {baseWidth} from '../misc/styles';
import Title from './Simple/Title';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import PostEdit from './Pages/PostEdit';
import PostCreate from './Pages/PostCreate';
import Images from './Pages/Images';
import ImageEdit from './Pages/ImageEdit';
import ImageCreate from './Pages/ImageCreate';
import Projects from './Pages/Projects';
import ProjectCreate from './Pages/ProjectCreate';
import ProjectEdit from './Pages/ProjectEdit';
import Login from './Pages/Login';
import Navigation from './Navigation';
import {loggedIn, user} from '../misc/auth';

const wrapperStyle = () => ({
  ...baseWidth(),
  'margin': 'auto',
});

const Layout: React.FunctionComponent = () => (
  <div style={wrapperStyle()}>
    <Title>Admin</Title>
    {loggedIn() ? user()?.email : ''}
    <Navigation />
    <Route path='/admin' exact component={Home} />
    <Route path='/admin/login' exact component={Login} />
    <Route path='/admin/posts' exact component={Posts} />
    <Route path='/admin/posts/:slug' exact component={PostEdit} />
    <Route path='/admin/post/new' exact component={PostCreate} />
    <Route path='/admin/images' exact component={Images} />
    <Route path='/admin/image/edit/:id' exact component={ImageEdit} />
    <Route path='/admin/image/new' exact component={ImageCreate} />
    <Route path='/admin/projects' exact component={Projects} />
    <Route path='/admin/projects/:id' exact component={ProjectEdit} />
    <Route path='/admin/project/new' exact component={ProjectCreate} />
  </div>
);

export default Layout;
