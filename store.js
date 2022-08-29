import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./src/reducers/productReducers"
import { authReducer } from "./src/reducers/userReducers";

const reducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

let initialstate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
