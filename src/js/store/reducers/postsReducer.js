import {SET_POSTS, SET_POST, SET_MY_POSTS} from '../const/posts';

const initialState = {
  posts: [],
  post: {},
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
    case SET_MY_POSTS: {
      state = {
        ...state,
        myPosts: action.payload,
      };
    }
  }
  return state;
};

export {
  postsReducer,
};
