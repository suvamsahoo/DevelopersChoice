import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Rating from "../Components/Rating";
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);

  // const product = data.products.find(
  //   (obj) => obj._id === props.match.params.id
  // );

  //import dispatch from useDispatch()-:
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  //useSelector() takes in a function argument that returns the part of the state in redux store that you want-:
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`); //triger this route
  };

  useEffect(() => {
    //dispatch(action) an action. This is the only way to trigger a state change-:
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>

          <div className="row center">
            <div>
              <img
                className="medium"
                src={product.image}
                alt={product.name}
              ></img>
            </div>

            <div>
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price : ₹{product.price}</li>
                <li>
                  Description : <p>{product.description}</p>
                </li>
              </ul>
            </div>

            <div>
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price : </div>
                      <div className="price">₹{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status : &nbsp;</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span style={{ color: "green" }}>In Stock</span>
                        ) : (
                          <span style={{ color: "red" }}>Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>

                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
