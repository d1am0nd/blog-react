import {
  SET_IMAGES,
  SET_IMAGE,
  ADD_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from '../const/images';

const initialState = {
  images: [],
  image: {},
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES: {
      state = {
        ...state,
        images: action.payload,
      };
    }
    case SET_IMAGE: {
      state = {
        ...state,
        image: action.payload,
      };
    }
    case UPDATE_IMAGE: {
      let filter = i => {
        if (i.id != action.payload.id) {
          return i;
        }
        return action.payload;
      };
      let image = state.image;
      let images = state.images.map(filter);
      if (action.payload.id == image.id) {
        Object.assign(image, action.payload);
      }
      state = {
        ...state,
        images: images,
        image: image,
      };
    }
    case DELETE_IMAGE: {
      let filter = i => i.id != action.payload.id;
      let image = state.image;
      let images = state.images.filter(filter);
      if (action.payload.id == image.id) {
        Object.assign(image, action.payload);
      }
      state = {
        ...state,
        images: images,
        image: image,
      };
    }
    case ADD_IMAGE: {

    }
  }
  return state;
};
