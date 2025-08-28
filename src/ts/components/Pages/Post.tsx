import * as React from 'react';
import PostRender from '../Simple/Post';
import {IMeta} from '../hoc/setsMeta';
import {IRequest} from '../hoc/fetchesData';
import {IPost, findBySlug} from '../../api/posts';

interface IParams {
  slug: string;
};

interface IProps {
  post: IPost;
};

const Post: React.FC<IProps> = ({
  post,
}) => (
  <PostRender post={post} />
);

const postRequest: IRequest<IParams, IPost> = {
  request: (params?: IParams) => findBySlug(params!.slug!),
  paramName: 'post',
};

export const setMeta: IMeta<any> = {
  title: ({post}) => post?.title || '',
  description: ({post}) => post?.summary || '',
  url: ({post}) => `/posts/${post?.slug || ''}`,
};

export const requests = [postRequest];

export default Post;
