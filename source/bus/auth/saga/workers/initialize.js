// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { authActions } from "../../actions";

export function* initialize() {
  const token = yield apply(localStorage, localStorage.getItem, ["token"]);
  console.log("initialize async");
  if (token) {
    yield put(authActions.authenticateAsync());
  } else {
    yield put(authActions.initialize());
  }
}
