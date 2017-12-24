import axios from 'axios';
import {token} from '../auth';
import qs from 'qs';
import p from './params';

const GET_BY_ID_URL = p.apiUrl + '/api/projects/single/';
const GET_ALL_URL = p.apiUrl + '/api/projects/all';
const POST_EDIT_URL = p.apiUrl + '/api/projects/edit/';
const POST_NEW_URL = p.apiUrl + '/api/projects/create';
const DELETE_ID = p.apiUrl + '/api/projects/delete/';

export const newProject = function(project) {
  return axios.post(POST_NEW_URL, qs.stringify(project), {
    headers: {
      'Authorization': token(),
    },
  });
};

export const update = function(project) {
  return axios.post(POST_EDIT_URL + project.id, qs.stringify(project), {
    headers: {
      'Authorization': token(),
    },
  });
};

export const deleteProject = function(id) {
  return axios.post(DELETE_ID + id, {}, {
    headers: {
      Authorization: token(),
    },
  });
};

export const findById = function(id) {
  return axios.get(GET_BY_ID_URL + id, {
    headers: {
      Authorization: token(),
    },
  });
};

export const getAll = function() {
  return axios.get(GET_ALL_URL, {
    headers: {
      'Authorization': token(),
    },
  });
};
