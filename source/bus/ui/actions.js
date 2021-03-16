import { types } from "./types";

export const uiActions = {
  startFetching: () => {
    return {
      type: types.START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.STOP_FETCHING,
    };
  },
  setOnlineState: () => {
    return {
      type: types.SET_ONLINE_STATE,
    };
  },
  setOflineState: () => {
    return {
      type: types.SET_OFLINE_STATE,
    };
  },
  emitError: (error, meta = null) => {
    return {
      type: types.EMMIT_ERROR,
      payload: error,
      error: true,
      meta,
    };
  },
};
