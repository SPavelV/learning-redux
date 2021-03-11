// Core
import { takeEvery, all, call, take } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { login } from "./workers";

function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchLogins() {
  yield all([call(watchLogin)]);
}
