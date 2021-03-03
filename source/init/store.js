// Core
import { createStore } from "redux";

// Roots
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Middleware
import { enhacedStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhacedStore);

sagaMiddleware.run(rootSaga);
