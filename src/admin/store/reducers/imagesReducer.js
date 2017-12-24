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
      break;
    }
    case SET_IMAGE: {
      state = {
        ...state,
        image: action.payload,
      };
      break;
    }
    case UPDATE_IMAGE: {
      break;
    }
    case DELETE_IMAGE: {
      state = {
        ...state,
        images: state.images.filter(image => {
          return image.id !== action.payload;
        }),
      };
      break;
    }
  }
  return state;
};
