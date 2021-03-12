import React, { useEffect } from "react";
import Product from "../Components/Product";
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import {useSelector, useDispatch} from 'react-redux';
import listProducts from "../actions/productActions";
 
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {products, loading, error} = productList;

  useEffect(() => {
     dispatch(listProducts());
  }, [dispatch]); //[] -: After first time rendering component it will run only one time.

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
