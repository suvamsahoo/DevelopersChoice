import React from "react";
import {Link} from 'react-router-dom';
import data from "../data";
import Rating from "../Components/Rating";

const ProductScreen = (props) => {
  const product = data.products.find(
    (obj) => obj._id === props.match.params.id
  );

  if (!product) {
    return <div>Product Not Found</div>;
    //break
  }
  //else
  return (
    <div>
      <Link to="/"><button>Back</button></Link>

      <div className="row center">
        <div>
          <img className="medium" src={product.image} alt={product.name}></img>
        </div>

        <div>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
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
                      <span style={{color:"green"}}>In Stock</span>
                    ) : (
                      <span style={{color:"red"}}>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;


