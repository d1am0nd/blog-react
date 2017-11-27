import postsApi from '../../api/posts';

import {SET_POSTS, SET_POST, SET_MY_POSTS} from '../const/posts';

export function fetchPosts() {
  return function(dispatch) {
    console.log('fetchPosts');
    postsApi
      .getPublished()
      .then(res => {
        dispatch({type: SET_POSTS, payload: res.data});
      })
      .catch(err => {
        console.log('err fetching posts', err);
      });
  };
};

export function fetchPostBySlug(slug) {
  return function(dispatch) {
    postsApi
      .findBySlug(slug)
      .then(res => {
        dispatch({type: SET_POST, payload: res.data});
      })
      .catch(err => {
        console.log('err fetchinig a post', err);
      });
  };
};

export function fetchMyPosts() {
  return function(dispatch) {
    postsApi
      .getMine()
      .then(res => {
        dispatch({type: SET_MY_POSTS, payload: res.data});
      })
      .catch(err => {
        console.log('err fetching my posts', err);
      });
  };
};
