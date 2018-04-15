import {get, post} from './defaults';
import p from './params';

const POST_NEW_URL = p.apiUrl + '/api/images/create';
const POST_EDIT_URL = p.apiUrl + '/api/images/edit/';
const GET_IMAGES_URL = p.apiUrl + '/api/images/all';
const GET_BY_ID_URL = p.apiUrl + '/api/images/single/';
const GET_DELETE_BY_ID = p.apiUrl + '/api/images/delete/';

export const newImage = (image) => {
  return post(POST_NEW_URL, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const update = (id, image) => {
  return post(POST_EDIT_URL + id, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const deleteById = (id) => {
  return get(GET_DELETE_BY_ID + id);
};
export const getById = (id) => {
  return get(GET_BY_ID_URL + id);
};
export const getImages = () => {
  return get(GET_IMAGES_URL);
};
