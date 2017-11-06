import axios from 'axios';

const GET_PUBLISHED_URL = '/api/posts/all';
const GET_BY_SLUG_URL = '/api/posts/single/';
/*
const POST_NEW_URL = '/api/posts/create';
const POST_EDIT_URL = '/api/posts/edit/';
const GET_MINE_URL = '/api/posts/my/all';
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
        'Authorization': null, // auth.getToken()
      },
    });
  },
  /*

  getMine() {
    if (!store.getters.loggedIn) {
      return;
    }
    return axios.get(GET_MINE_URL, {
      headers: {
        'Authorization': auth.getToken(),
      },
    });
  }
  */
};
