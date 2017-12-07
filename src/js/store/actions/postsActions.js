import postsApi from '../../api/posts';

import {
  NEW_POST,
  SET_POSTS,
  SET_POST,
  SET_MY_POSTS,
  UPDATE_POST,
  DELETE_POST,
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

export function fetchMyPosts() {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      postsApi
        .getMine()
        .then(res => {
          dispatch({type: SET_MY_POSTS, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function newPost(post) {
  return function(dispatch, store) {
    return new Promise((resolve, reject) => {
      postsApi
        .new(post)
        .then(res => {
          dispatch({type: NEW_POST, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function updatePost(post) {
  return function(dispatch, store) {
    return new Promise((resolve, reject) => {
      postsApi
        .update(post)
        .then(res => {
          dispatch({type: UPDATE_POST, payload: post});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function deletePost(id) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      postsApi
        .delete(id)
        .then(res => {
          dispatch({type: DELETE_POST, payload: id});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};
