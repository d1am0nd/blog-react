import axios, {AxiosPromise} from 'axios';
import {url} from './params';

export interface IPost {
  title: string;
  slug: string;
  summary: string;
  content?: string;
  published_at: string;
};

export const getPublished = (): AxiosPromise<Array<IPost>> => (
  axios.get(url('api/posts/all'))
);

export const findBySlug = (slug: string): AxiosPromise<IPost> => (
  axios.get(url(`api/posts/single/${slug}`))
);
