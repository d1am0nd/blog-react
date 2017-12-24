import {
  SET_POSTS,
  SET_POST,
} from '../const/posts';

const initialState = {
  posts: [],
  post: {
    published_at: {},
  },
  myPosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      state = {
        ...state,
        posts: action.payload,
      };
      break;
    }
    case SET_POST: {
      state = {
        ...state,
        post: action.payload,
      };
      break;
    }
  }
  return state;
};

export {
  postsReducer,
};
