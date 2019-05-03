import {AxiosPromise} from 'axios';
import {get, post} from './defaults';

export interface IImage {
  id?: number;
  path: string;
  name: string;
};

export interface IImageEdit {
  image?: any;
  imgSrc: string;
  name: string;
};

const headers = {
  'Content-Type': 'multipart/form-data',
};

const imageFormData = ({image, name}: IImageEdit) => {
  const formData = new FormData();
  formData.set('image', image);
  formData.set('name', name);
  return formData;
};

export const create = (image: IImageEdit) => post(
  `api/images/create`,
  imageFormData(image),
  {headers}
);

export const update = (id: number, image: IImageEdit) => post(
  `api/images/edit/${id}`,
  imageFormData(image),
  {headers}
);

// TODO: Why is this GET?
export const deleteById = (id: number) => get(
  `api/images/delete/${id}`
);

export const getById = (id: number): AxiosPromise<IImage> => get(
  `api/images/single/${id}`
);

export const getImages = (): AxiosPromise<Array<IImage>> => get(
  `api/images/all`
);
