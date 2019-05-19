import {AxiosPromise} from 'axios';
import {get, post} from './defaults';

export interface IPostCreateData {
  title: string;
  slug: string;
  summary: string;
  content: string;
  published_at: string;
};

export interface IPost extends IPostCreateData {
  id: number;
};

export const create = (
  data: IPostCreateData
): AxiosPromise => post(
  'api/posts/create',
  data
);

export const update = (
  {id, ...rest}: IPost
): AxiosPromise => post(
  `api/posts/edit/${id}`,
  rest
);

export const deletePost = (id: number) => post(
  `api/posts/delete/${id}`
);

export const findBySlug = (slug: string): AxiosPromise<IPost> => get(
  `api/posts/single/${slug}`
);

export const getMine = (): AxiosPromise<Array<IPost>> => get(
  `api/posts/my/all`
);

