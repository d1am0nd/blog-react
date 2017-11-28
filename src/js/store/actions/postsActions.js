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
    if (state().posts.posts.length > 0) {
      return;
    }
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
    dispatch({type: SET_POST, payload: {}});
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

export function newPost(post) {
  return function(dispatch, store) {
    postsApi
      .new(post)
      .then(res => {
        dispatch({type: NEW_POST, payload: res.data});
      })
      .catch(err => {
        console.log('Err updating the user', err);
      });
  };
};

export function updatePost(post) {
  return function(dispatch, store) {
    postsApi
      .update(post)
      .then(res => {
        dispatch({type: UPDATE_POST, payload: post});
      })
      .catch(err => {
        console.log('Err updating the user', err);
      });
  };
};

export function deletePost(id) {
  return function(dispatch) {
    postsApi
      .delete(id)
      .then(res => {
        dispatch({type: DELETE_POST, payload: id});
      })
      .catch(err => {
        console.log('Err deleting a post', err);
      });
  };
};
