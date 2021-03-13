// Core
import { takeEvery, all, call, take } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { signup, login, authenticate, initialize } from "./workers";

function* watchSignup() {
  yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, login);
}

function* watchAuthenticate() {
  yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

function* watchInitialize() {
  yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

export function* watchAuth() {
  yield all([
    call(watchSignup),
    call(watchLogin),
    call(watchAuthenticate),
    call(watchInitialize),
  ]);
}
