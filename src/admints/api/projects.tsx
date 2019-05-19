import {AxiosPromise} from 'axios';
import {get, post} from './defaults';

export interface IProjectEdit {
  position: number;
  title: string;
  url: string;
  source: string;
  description: string;
  img_src: string;
};

export interface IProject extends IProjectEdit {
  id: number;
};

export const create = (project: IProjectEdit) => post(
  'api/projects/create',
  project
);

export const update = (id: number, project: IProjectEdit) => post(
  `api/projects/edit/${id}`,
  project
);

export const deleteById = (id: number) => post(
  `api/projects/delete/${id}`
);

export const findById = (id: number): AxiosPromise<IProject> => get(
  `api/projects/single/${id}`
);

export const getAll = (): AxiosPromise<Array<IProject>> => get(
  `api/projects/all`
);
