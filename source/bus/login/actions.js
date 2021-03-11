import { types } from "./types";

export const loginActions = {
  login: (userData) => {
    return {
      type: types.LOGIN,
      payload: userData,
    };
  },

  loginAsync: (userData) => {
    return {
      type: types.LOGIN_ASYNC,
      payload: userData,
    };
  },
};
