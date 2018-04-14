import Home from '@/components/Pages/Home';
import Post from '@/components/Pages/Post';
import Projects from '@/components/Pages/Projects';
import About from '@/components/Pages/About';

import {
  mapToFetchPosts,
  mapToFetchPostBySlug,
  mapToFetchProjects,
} from './mapFetch';
import {
  getHomeTitle,
  getHomeDesc,

  getPostTitle,
  getPostDesc,

  getProjectsTitle,
  getProjectsDesc,

  getAboutTitle,
  getAboutDesc,
} from './mapMeta';

import fetchesData from '@/components/hoc/fetchesData';
import setsMeta from '@/components/hoc/setsMeta';

const HomeComp = fetchesData(
  setsMeta(
    Home,
    getHomeTitle,
    getHomeDesc
  ),
  mapToFetchPosts
);
const PostComp = fetchesData(
  setsMeta(
    Post,
    getPostTitle,
    getProjectsDesc
  ),
  mapToFetchPostBySlug
);
const ProjectsComp = fetchesData(
  setsMeta(
    Projects,
    getProjectsTitle,
    getProjectsDesc
  ),
  mapToFetchProjects
);

const AboutComp = setsMeta(About, getAboutTitle, getAboutDesc);

const routes = [
  {
    component: HomeComp,
    path: '/',
    fetchMethod: mapToFetchPosts,
    meta: {
      title: getHomeTitle,
      description: getHomeDesc,
    },
  },
  {
    component: PostComp,
    path: '/posts/:slug',
    fetchMethod: mapToFetchPostBySlug,
    meta: {
      title: getPostTitle,
      description: getPostDesc,
    },
  },
  {
    component: ProjectsComp,
    path: '/my-projects',
    fetchMethod: mapToFetchProjects,
    meta: {
      title: getProjectsTitle,
      description: getProjectsDesc,
    },
  },
  {
    component: AboutComp,
    path: '/about-me',
    meta: {
      title: getAboutTitle,
      description: getAboutDesc,
    },
  },
];

export {
  routes,
};
