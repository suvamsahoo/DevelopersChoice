import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initialState = {
  //If we refresh the page data will get from localStorage-:
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },

  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},

    paymentMethod: "PayPal",
  },
};

//combineReducer() function takes multiple reducer functions as an argument and turns down into a single reducer function.
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

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
