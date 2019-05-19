import axios, {AxiosPromise} from 'axios';
import {url} from './params';

export interface IProject {
  id?: number;
  title: string;
  url: string;
  source: string;
  description: string;
  img_src: string;
};

export const getProjects = (): AxiosPromise<Array<IProject>> => (
  axios.get(url('api/projects/all'))
);
