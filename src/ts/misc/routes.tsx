import * as React from 'react';
import Home, {
  setMeta as homeSetMeta,
  requests as homeRequests,
} from '../components/Pages/Home';
import Post, {
  setMeta as postSetMeta,
  requests as postRequests,
} from '../components/Pages/Post';
import Projects, {
  setMeta as projectsSetMeta,
  requests as projectsRequests,
} from '../components/Pages/Projects';
import About, {
  setMeta as aboutSetMeta,
} from '../components/Pages/About';
import fetchesData, {IRequest} from '../components/hoc/fetchesData';
import setsMeta, {IMeta} from '../components/hoc/setsMeta';

export {
  setsMeta,
};

interface IRoute {
  Component: React.ComponentType;
  requests?: Array<IRequest<any, any>>;
  setMeta: IMeta;
  path: string;
};

export const routes: Array<IRoute> = [
  {
    Component: Home,
    requests: homeRequests,
    setMeta: homeSetMeta,
    path: '/',
  },
  {
    Component: About,
    setMeta: aboutSetMeta,
    path: '/about-me',
  },
  {
    Component: Post,
    requests: postRequests,
    setMeta: postSetMeta,
    path: '/posts/:slug',
  },
  {
    Component: Projects,
    requests: projectsRequests,
    setMeta: projectsSetMeta,
    path: '/my-projects',
  },
];

export const builtComponents = routes.map(
  ({Component, requests, setMeta, ...rest}) => ({
    ...rest,
    Component: fetchesData(requests || [])(
      setsMeta(setMeta)(Component)
    ),
  })
);
