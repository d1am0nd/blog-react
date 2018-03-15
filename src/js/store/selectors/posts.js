import {createSelector} from 'reselect';

const postsSelector = (state) => state.posts;

// Get posts: array
const getPosts = createSelector(
  postsSelector,
  (posts) => posts.posts
);

const getPost = createSelector(
  postsSelector,
  (posts) => posts.post
);

export {
  getPosts,
  getPost,
};
