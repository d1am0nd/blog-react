import {
  SET_POSTS,
  SET_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../const/posts';

const initialState = {
  posts: [],
  post: {
    published_at: {},
  },
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
    case UPDATE_POST: {
      state = {
        ...state,
        post: action.payload,
        posts: state.posts.map(p => {
          if (p.id === action.payload.id) {
            Object.assign(p, action.payload.id);
          }
          return p;
        }),
      };
      break;
    }
    case DELETE_POST: {
      state = {
        ...state,
        posts: state.posts.filter(p => {
          return p.id !== action.payload;
        }),
      };
      break;
    }
  }
  return state;
};

export {
  postsReducer,
};
