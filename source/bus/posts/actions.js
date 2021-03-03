// Types
import { FILL_POSTS, FETCH_POSTS_ASYNC, CREATE_POST_ASYNC } from "./types";

// Instruments
import { api } from "../../API";

export const fillPosts = (posts) => {
  return {
    type: FILL_POSTS,
    payload: posts,
  };
};

export const fetchPostsAsync = () => async (dispatch) => {
  dispatch({
    type: FETCH_POSTS_ASYNC,
  });

  const response = await api.posts.fetch();
  const result = await response.json();

  dispatch(fillPosts(result.data));
};

export const createPostAsync = (post) => async (dispatch) => {
  dispatch({
    type: CREATE_POST_ASYNC,
  });

  const response = await api.posts.create(post);
  console.log("response ", response);
  const result = await response.json();
  console.log("result", result);
};
