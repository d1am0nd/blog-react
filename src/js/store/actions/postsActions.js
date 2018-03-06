import postsApi from 'api/posts';

import {
  SET_POSTS,
  SET_POST,
} from '../const/posts';

export function fetchPosts() {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      postsApi
        .getPublished()
        .then(res => {
          dispatch({type: SET_POSTS, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function fetchPostBySlug(slug) {
  return function(dispatch, store) {
    return new Promise((resolve, reject) => {
      dispatch({type: SET_POST, payload: {}});
      postsApi
        .findBySlug(slug)
        .then(res => {
          dispatch({type: SET_POST, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};
