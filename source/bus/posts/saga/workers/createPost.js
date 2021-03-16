// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../API";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* createPost({ payload: comment }) {
  try {
    yield put(uiActions.startFetching());

    const response = yield apply(api, api.posts.create, [comment]);
    const { data: post, message } = yield apply(response, response.json);

    if (response.status !== 200) {
      throw new Error(message);
    }

    if (response.status !== 200) {
      if (response.status === 401) {
        yield apply(localStorage, localStorage.removeItem, ["token"]);
        yield apply(localStorage, localStorage.removeItem, ["remember"]);

        return null;
      }
      throw new Error(message);
    }

    yield put(postsActions.createPost(post));
  } catch (error) {
    yield put(uiActions.emitError(error, "createPost worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
