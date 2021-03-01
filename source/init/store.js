// Core
import { createStore } from "redux";

// Reducer
import { rootReducer } from "./rootReducer";

// Enhancer store
import { enhacedStore } from "./middleware/core";

export const store = createStore(rootReducer, enhacedStore);
