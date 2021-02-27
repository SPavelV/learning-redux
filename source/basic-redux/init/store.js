// Core
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

// Reducer
import { rootReducer } from "./rootReducer";

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => "#139bfe",
    prevState: () => "#1c5faf",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005",
  },
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
