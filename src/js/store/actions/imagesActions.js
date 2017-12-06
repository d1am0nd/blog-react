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
      if (state().images.images.length > 0) {
        return;
      }
      imagesApi
        .getImages()
        .then(res => {
          dispatch({type: SET_IMAGES, payload: res.data});
          resolve(res.data);
        })
        .catch(err => {
          console.log('Err fetching images', err);
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
          console.log('Err fetching image', id, err);
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
          console.log('added');
          resolve(res.data);
        })
        .catch(err => {
          console.log('Err updating image', id, err);
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
          console.log('Err deleting image', id, err);
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
          console.log('Err updating image', id, err);
          reject(err);
        });
    });
  };
};
