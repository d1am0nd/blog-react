import Home from '@/components/Pages/Home';
import Post from '@/components/Pages/Post';
import Projects from '@/components/Pages/Projects';
import About from '@/components/Pages/About';

const routes = [
  {
    component: Home,
    path: '/',
  },
  {
    component: Post,
    path: '/posts/:slug',
  },
  {
    component: Projects,
    path: '/my-projects',
  },
  {
    component: About,
    path: '/about-me',
  },
];

export {
  routes,
};
