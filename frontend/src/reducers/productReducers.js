const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
  } = require('../constants/productConstants'); //actions type
  
  //reducer is a function which takes state and action as arguments, and returns a newly updated state to redux store.
  export const productListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };