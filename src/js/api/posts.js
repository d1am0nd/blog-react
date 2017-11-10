import axios from 'axios';
import auth from '../auth/auth';
import qs from 'qs';

const GET_PUBLISHED_URL = '/api/posts/all';
const GET_BY_SLUG_URL = '/api/posts/single/';
const GET_MINE_URL = '/api/posts/my/all';
const POST_EDIT_URL = '/api/posts/edit/';
const POST_NEW_URL = '/api/posts/create';

export default {
  new(post) {
    return axios.post(POST_NEW_URL, qs.stringify(post), {
      headers: {
        'Authorization': auth.token,
      },
    });
  },

  update(post) {
    return axios.post(POST_EDIT_URL + post.id, qs.stringify(post), {
      headers: {
        'Authorization': auth.token,
      },
    });
  },

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
