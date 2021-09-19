import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({ trace: true });
export const store = createStore(rootReducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;
