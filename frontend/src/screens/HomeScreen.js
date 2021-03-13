import React, { useState, useEffect } from "react";
//import axios from "axios";
import Product from "../Components/Product";
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import { useSelector, useDispatch } from "react-redux";
import listProducts from "../actions/productActions";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  //import dispatch from useDispatch()-:
  const dispatch = useDispatch();

  //useSelector() takes in a function argument that returns the part of the state in redux store that you want-:
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // useEffect(() => {
  //   //Fetch products data from server-:
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/api/products");
  //       setLoading(false);
  //       setProducts(data);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []); 
  //[] -: After first time rendering component it will run only one time.
  
  useEffect(() => {
    //dispatch(action) an action. This is the only way to trigger a state change-:
    dispatch(listProducts());
  }, [dispatch]);

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
