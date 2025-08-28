import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
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

const Layout: React.FC = () => (
  <div style={wrapperStyle()}>
    <Title>Admin</Title>
    {loggedIn() ? user()?.email : ''}
    <Navigation />
    <Routes>
      <Route path='/admin' element={<Home />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/admin/posts' element={<Posts />} />
      <Route path='/admin/posts/:slug' element={<PostEdit />} />
      <Route path='/admin/post/new' element={<PostCreate />} />
      <Route path='/admin/images' element={<Images />} />
      <Route path='/admin/image/edit/:id' element={<ImageEdit />} />
      <Route path='/admin/image/new' element={<ImageCreate />} />
      <Route path='/admin/projects' element={<Projects />} />
      <Route path='/admin/projects/:id' element={<ProjectEdit />} />
      <Route path='/admin/project/new' element={<ProjectCreate />} />
    </Routes>
  </div>
);

export default Layout;
