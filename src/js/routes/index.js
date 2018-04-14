import {
  defaultTitle,
  defaultDescription,
} from '@/meta/meta';

import Home from '@/components/Pages/Home';
import Post from '@/components/Pages/Post';
import Projects from '@/components/Pages/Projects';
import About from '@/components/Pages/About';

import {
  mapToFetchPosts,
  mapToFetchPostBySlug,
  mapToFetchProjects,
} from './map';
import fetchesData from '@/components/hoc/fetchesData';
import {about} from 'config/page';

const FetchedHome = fetchesData(Home, mapToFetchPosts);
const FetchedPost = fetchesData(Post, mapToFetchPostBySlug);
const FetchedProjects = fetchesData(Projects, mapToFetchProjects);

const routes = [
  {
    component: FetchedHome,
    path: '/',
    fetchMethod: mapToFetchPosts,
    meta: {
      title: () => defaultTitle,
      description: () => defaultDescription,
    },
  },
  {
    component: FetchedPost,
    path: '/posts/:slug',
    fetchMethod: mapToFetchPostBySlug,
    meta: {
      title: (store) => 'todo',
      description: (store) => 'todo',
    },
  },
  {
    component: FetchedProjects,
    path: '/my-projects',
    fetchMethod: mapToFetchProjects,
    meta: {
      title: () => 'My projects',
      description: () => 'My side projects.',
    },
  },
  {
    component: About,
    path: '/about-me',
    meta: {
      title: () => about.title,
      description: () => about.summary,
    },
  },
];

export {
  routes,
};
