// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../API";
import { loginActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { authActions } from "../../../auth/actions";

export function* login({ payload: userInfo }) {
  try {
    yield put(uiActions.startFetching);
    console.log("Login");

    const response = yield apply(api, api.auth.login, [userInfo]);
    console.log("response ", response);
    const { data: login, message } = yield apply(response, response.json);

    if (response.status !== 200) {
      throw new Error(message);
    }

    yield put(loginActions.login(login));
    yield put(authActions.authenticate());
  } catch (error) {
    yield put(uiActions.emitError(error, "login worker"));
  } finally {
    yield put(uiActions.stopFetching);
  }
}
