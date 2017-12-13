import {
  NEW_POST,
  SET_POSTS,
  SET_POST,
  SET_MY_POSTS,
  UPDATE_POST,
  DELETE_POST,
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
    case SET_MY_POSTS: {
      state = {
        ...state,
        myPosts: action.payload,
      };
    }
    case SET_POST: {
      state = {
        ...state,
        post: action.payload,
      };
      break;
    }
    case UPDATE_POST: {
      let filter = i => {
        if (i.id != action.payload.id) {
          return i;
        }
        return action.payload;
      };
      let post = state.post;
      let posts = state.posts.map(filter);
      let myPosts = state.myPosts.map(filter);
      if (action.payload.id == post.id) {
        Object.assign(post, action.payload);
      }
      state = {
        ...state,
        posts: posts,
        post: post,
        myPosts: myPosts,
      };
    }
    case DELETE_POST: {
      let filter = i => i.id !== action.payload;
      let posts = state.posts.filter(filter);
      let myPosts = state.myPosts.filter(filter);
      let post = state.post;
      if (post.id === action.payload) {
        post = {};
      }
      state = {
        ...state,
        posts: posts,
        post: post,
        myPosts: myPosts,
      };
    }
  }
  return state;
};

export {
  postsReducer,
};
