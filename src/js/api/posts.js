import axios from 'axios';
import auth from '../auth/auth';

const GET_PUBLISHED_URL = '/api/posts/all';
const GET_BY_SLUG_URL = '/api/posts/single/';
const GET_MINE_URL = '/api/posts/my/all';
/*
const POST_NEW_URL = '/api/posts/create';
const POST_EDIT_URL = '/api/posts/edit/';
*/

export default {
  /*
  new(post) {
    return axios.post(POST_NEW_URL, post, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
      emulateHTTP: true,
    });
  },

  update(post) {
    return axios.post(POST_EDIT_URL + post.id, post, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
      emulateHTTP: true,
    });
  },
  */
  getPublished() {
    return axios.get(GET_PUBLISHED_URL);
  },

  findBySlug(slug) {
    return axios.get(GET_BY_SLUG_URL + slug, {
      headers: {
        'Authorization': auth.token,
      },
    });
  },

  getMine() {
    return axios.get(GET_MINE_URL, {
      headers: {
        'Authorization': auth.token,
      },
    });
  },
};
