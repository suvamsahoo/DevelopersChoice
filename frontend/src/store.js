import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialState = {};

//combineReducer() function takes multiple reducer functions as an argument and turns down into a single reducer function.
const reducer =  combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

//For connect between redux store & Redux DevTools Extension-: 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create a redux store, we need two things initial state & reducer.
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

/* 
 compose-: compose is used when you want to pass multiple store enhancers to the store.
 Store enhancers are higher order functions that add some extra functionality to the store. 
 The only store enhancer which is supplied with Redux by default is applyMiddleware.
*/

/*
 redux-thunk-: By the help of redux-thunk we can make send AJAX request in our redux actions.
*/

