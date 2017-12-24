import axios from 'axios';
import p from './params';

const GET_PUBLISHED_URL = p.apiUrl + '/api/posts/all';
const GET_BY_SLUG_URL = p.apiUrl + '/api/posts/single/';

export default {
  getPublished() {
    return axios.get(GET_PUBLISHED_URL);
  },

  findBySlug(slug) {
    return axios.get(GET_BY_SLUG_URL + slug);
  },
};
