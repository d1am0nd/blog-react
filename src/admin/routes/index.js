import Home from 'admin/components/Pages/Home';
import Login from 'admin/components/Pages/Login';
import Posts from 'admin/components/Pages/Posts/Index';
import Post from 'admin/components/Pages/Posts/Edit';
import NewPost from 'admin/components/Pages/Posts/New';
import Images from 'admin/components/Pages/Images/Index';
import Image from 'admin/components/Pages/Images/Edit';
import NewImage from 'admin/components/Pages/Images/New';
import Projects from 'admin/components/Pages/Projects/Index';
import Project from 'admin/components/Pages/Projects/Edit';
import NewProject from 'admin/components/Pages/Projects/New';

const routes = [
  {
    component: Home,
    path: '/admin',
  },
  {
    component: Login,
    path: '/admin/login',
  },
  {
    component: NewPost,
    path: '/admin/post/new',
  },
  {
    component: Posts,
    path: '/admin/posts',
  },
  {
    component: Post,
    path: '/admin/posts/:slug',
  },
  {
    component: Images,
    path: '/admin/images',
  },
  {
    component: Image,
    path: '/admin/images/:id',
  },
  {
    component: NewImage,
    path: '/admin/image/new',
  },
  {
    component: Projects,
    path: '/admin/projects',
  },
  {
    component: NewProject,
    path: '/admin/project/new',
  },
  {
    component: Project,
    path: '/admin/projects/:id',
  },
];

export {
  routes,
};
