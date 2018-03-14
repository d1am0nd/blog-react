import {
  newPost as newPostApi,
  update,
  deletePost as deletePostApi,
  findBySlug,
  getMine,
} from '../../api/posts';

import {
  SET_POSTS,
  SET_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../const/posts';

export function fetchPosts() {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      getMine()
        .then((res) => {
          dispatch({type: SET_POSTS, payload: res.data});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export function fetchPostBySlug(slug) {
  return function(dispatch, store) {
    return new Promise((resolve, reject) => {
      dispatch({type: SET_POST, payload: {}});
      findBySlug(slug)
        .then((res) => {
          dispatch({type: SET_POST, payload: res.data});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export function fetchMyPosts() {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      getMine()
        .then((res) => {
          dispatch({type: SET_POSTS, payload: res.data});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export function newPost(post) {
  return function(dispatch, store) {
    return new Promise((resolve, reject) => {
      newPostApi(post)
        .then((res) => {
          dispatch({type: SET_POST, payload: res.data});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export function updatePost(post) {
  return function(dispatch, store) {
    return new Promise((resolve, reject) => {
      update(post)
        .then((res) => {
          dispatch({type: UPDATE_POST, payload: post});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export function deletePost(id) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      deletePostApi(id)
        .then((res) => {
          dispatch({type: DELETE_POST, payload: id});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
