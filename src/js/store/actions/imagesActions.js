import imagesApi from '../../api/images';

import {
  SET_IMAGES,
  SET_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from '../const/images';

export function fetchImages() {
  return function(dispatch, state) {
    if (state().images.images.length > 0) {
      return;
    }
    imagesApi
      .getImages()
      .then(res => {
        dispatch({type: SET_IMAGES, payload: res.data});
      })
      .catch(err => {
        console.log('Err fetching images', err);
      });
  };
};

export function fetchImage(id) {
  return function(dispatch, state) {
    imagesApi
      .getById(id)
      .then(res => {
        dispatch({type: SET_IMAGE, payload: res.data});
      })
      .catch(err => {
        console.log('Err fetching image', id, err);
      });
  };
};

export function newImage(data) {
  return function(dispatch, state) {
    imagesApi
      .new(data)
      .then(res => {
        dispatch({type: ADD_IMAGE, payload: res.data});
      })
      .catch(err => {
        console.log('Err updating image', id, err);
      });
  };
};

export function deleteImage(id) {
  return function(dispatch, state) {
    imagesApi
      .deleteById(id)
      .then(res => {
        dispatch({type: DELETE_IMAGE, payload: id});
      })
      .catch(err => {
        console.log('Err deleting image', id, err);
      });
  };
};

export function updateImage(data, id) {
  return function(dispatch, state) {
    imagesApi
      .update(data, id)
      .then(res => {
        dispatch({type: UPDATE_IMAGE, payload: data});
      })
      .catch(err => {
        console.log('Err updating image', id, err);
      });
  };
};
