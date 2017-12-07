import imagesApi from '../../api/images';

import {
  SET_IMAGES,
  SET_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from '../const/images';

export function fetchImages() {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      imagesApi
        .getImages()
        .then(res => {
          dispatch({type: SET_IMAGES, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function fetchImage(id) {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      imagesApi
        .getById(id)
        .then(res => {
          dispatch({type: SET_IMAGE, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function newImage(data) {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      imagesApi
        .new(data)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function deleteImage(id) {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      imagesApi
        .deleteById(id)
        .then(res => {
          dispatch({type: DELETE_IMAGE, payload: id});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export function updateImage(data, id) {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      imagesApi
        .update(data, id)
        .then(res => {
          dispatch({type: UPDATE_IMAGE, payload: data});
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};
