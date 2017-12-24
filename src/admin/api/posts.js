import axios from 'axios';
import {token} from '../auth';
import qs from 'qs';
import p from './params';

const GET_PUBLISHED_URL = p.apiUrl + '/api/posts/all';
const GET_BY_SLUG_URL = p.apiUrl + '/api/posts/single/';
const GET_MINE_URL = p.apiUrl + '/api/posts/my/all';
const POST_EDIT_URL = p.apiUrl + '/api/posts/edit/';
const POST_NEW_URL = p.apiUrl + '/api/posts/create';
const DELETE_ID = p.apiUrl + '/api/posts/delete/';

export const newPost = function(post) {
  return axios.post(POST_NEW_URL, qs.stringify(post), {
    headers: {
      'Authorization': token(),
    },
  });
};

export const update = function(post) {
  return axios.post(POST_EDIT_URL + post.id, qs.stringify(post), {
    headers: {
      'Authorization': token(),
    },
  });
};

export const deletePost = function(id) {
  return axios.post(DELETE_ID + id, {}, {
    headers: {
      Authorization: token(),
    },
  });
};

export const getPublished = function() {
  return axios.get(GET_PUBLISHED_URL);
};

export const findBySlug = function(slug) {
  let headers = {};
  if (auth.loggedIn()) {
    headers.Authorization = token();
  }
  return axios.get(GET_BY_SLUG_URL + slug, {headers});
};

export const getMine = function() {
  return axios.get(GET_MINE_URL, {
    headers: {
      'Authorization': token(),
    },
  });
};
