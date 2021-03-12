//create a redux store so we need two things initial state & reducer.

import { applyMiddleware, createStore, compose, combineReducers } from "redux";

//redux-thunk -: send AJAX request in our redux actions.
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const initialState = {};
const reducer =  combineReducers({
  productList: productListReducer
});

//Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
