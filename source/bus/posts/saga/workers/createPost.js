// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../API";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* createPost({ payload: comment }) {
  try {
    yield put(uiActions.startFetching);
    console.log("comment", comment);

    const response = yield apply(api, api.posts.create, [comment]);
    console.log("response", response);
    const { data: post, message } = yield apply(response, response.json);
    console.log(post);

    if (response.status !== 200) {
      throw new Error(message);
    }

    yield put(postsActions.createPost(post));
  } catch (error) {
    yield put(uiActions.emitError(error, "createPost worker"));
  } finally {
    yield put(uiActions.stopFetching);
  }
}
