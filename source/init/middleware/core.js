// Core
import { applyMiddleware, compose } from "redux";

// Middleware
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { customThunk } from "./custom";
import createSagaMiddleware from "redux-saga";

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
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, thunk];

if (__DEV__) {
  middleware.push(logger);
}

const enhacedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhacedStore, sagaMiddleware };
