import {
  newImage as newImageApi,
  update,
  deleteById,
  getById,
  getImages,
} from '../../api/images';

import {
  SET_IMAGES,
  SET_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from '../const/images';

export function fetchImages() {
  return function(dispatch, state) {
    return new Promise((resolve, reject) => {
      getImages()
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
      getById(id)
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
      newImageApi(data)
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
      deleteById(id)
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
      update(data, id)
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
