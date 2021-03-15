// Types
import { types } from "./types";

export const postsActions = {
  // Sync
  fillPosts: (posts) => {
    return {
      type: types.FILL_POSTS,
      payload: posts,
    };
  },
  createPost: (post) => {
    return {
      type: types.CREATE_POST,
      payload: post,
    };
  },
  clearPosts: () => {
    return {
      type: types.CLEAR_POSTS,
    };
  },
  removePost: (id) => {
    return {
      type: types.REMOVE_POST,
      payload: id,
    };
  },
  likePost: (likedPostData) => {
    return {
      type: types.LIKE_POST,
      payload: likedPostData,
    };
  },
  unlikePost: (unlikedPostData) => {
    return {
      type: types.UNLIKE_POST,
      payload: unlikedPostData,
    };
  },

  // Async
  fetchPostsAsync: () => {
    return {
      type: types.FETCH_POSTS_ASYNC,
    };
  },
  createPostAsync: (comment) => {
    return {
      type: types.CREATE_POST_ASYNC,
      payload: comment,
    };
  },
  removePostAsync: (id) => {
    return {
      type: types.REMOVE_POST_ASYNC,
      payload: id,
    };
  },
  likePostAsync: (id) => {
    return {
      type: types.LIKE_POST_ASYNC,
      payload: id,
    };
  },
  unlikePostAsync: (unlikedPostData) => {
    return {
      type: types.ASYNC_UNLIKE_POST,
      payload: unlikedPostData,
    };
  },
};
