import * as React from 'react';
import Preview from '../Simple/Preview';
import H1 from '../Simple/H1';
import {IMeta} from '../hoc/setsMeta';
import {IRequest} from '../hoc/fetchesData';
import {IPost, getPublished} from '../../api/posts';

interface IProps {
  posts: Array<IPost>;
};

const Home: React.FunctionComponent<IProps> = ({
  posts,
}) => (
  <>
    <H1>Home</H1>
    {posts.map((post, i) => (
      <Preview key={i} post={post} />
    ))}
  </>
);

const postsRequest: IRequest<undefined, Array<IPost>> = {
  request: () => getPublished(),
  paramName: 'posts',
};

export const setMeta: IMeta = {
  title: () => 'Home',
  description: () => 'My journey to becoming a better web developer.' +
  'And many cool side projects and opinionated stories in between.',
  url: () => '/',
};

export const requests = [postsRequest];

export default Home;
