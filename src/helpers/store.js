import thunk from "redux-thunk";
import logger from "redux-logger";
import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
const composeUseDevtool =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;
    
/**
 * compose Enhancers redux devtools 
 */
const useDevTool = composeUseDevtool(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);
const store = createStore(rootReducer, useDevTool);
// console.log(store.getState(), "GetStoreData")
export default store;
