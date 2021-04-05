import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { navigationReducer } from "./components/nav/navigationReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({ mobileNavigation: navigationReducer });

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
