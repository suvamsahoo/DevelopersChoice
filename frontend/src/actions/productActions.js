import Axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants"; //actions type

//listProducts action-:
const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export default listProducts;

/*
-> payload is a naming convention for the property that holds the actual data in a Redux action object.
-> dispatch(action) is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
*/
