import axios from 'axios';
import {token} from '../auth';
import p from './params';

const POST_NEW_URL = p.apiUrl + '/api/images/create';
const POST_EDIT_URL = p.apiUrl + '/api/images/edit/';
const GET_IMAGES_URL = p.apiUrl + '/api/images/all';
const GET_BY_ID_URL = p.apiUrl + '/api/images/single/';
const GET_DELETE_BY_ID = p.apiUrl + '/api/images/delete/';
/*
const GET_MINE_URL = '/api/images/my/all'
const GET_PUBLISHED_URL = '/api/images/all'
*/
export const newImage = function(image) {
  return axios.post(POST_NEW_URL, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': token(),
    },
  });
};
export const update = function(image, id) {
  return axios.post(POST_EDIT_URL + id, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': token(),
    },
  });
};
export const deleteById = function(id) {
  return axios.get(GET_DELETE_BY_ID + id, {
    headers: {
      'Authorization': token(),
    },
  });
};
export const getById = function(id) {
  return axios.get(GET_BY_ID_URL + id);
};
export const getImages = function() {
  return axios.get(GET_IMAGES_URL);
};
