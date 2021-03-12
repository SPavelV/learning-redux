// Core
import { takeEvery, all, call, take } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { signup, login, authenticate } from "./workers";

function* watchSignup() {
  yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, login);
}

function* wathcAuthenticate() {
  yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

export function* watchAuth() {
  yield all([call(watchSignup), call(watchLogin), call(wathcAuthenticate)]);
}
