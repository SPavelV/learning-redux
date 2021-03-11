// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchPosts } from "../bus/posts/saga/watchers";
import { watchAuth } from "../bus/auth/saga/watchers";
import { watchLogins } from "../bus/login/saga/watchers";

export function* rootSaga() {
  yield all([call(watchPosts), call(watchAuth), call(watchLogins)]);
}
