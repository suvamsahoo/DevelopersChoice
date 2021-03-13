import React from "react";

export default function CartScreen(props) {
    console.log(props)
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>Add To Cart: ProductId: {productId} Qty: {qty}</p>
    </div>
  );
}
