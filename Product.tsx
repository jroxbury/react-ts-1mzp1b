import React from "react";
import { Product } from "./List";

export function Product(props: Product) {
  return (
    <div style={productContainer}>
      <img style={imgStyle} src={props.image} />
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

const productContainer = {
  padding: "10px",
  border: "1px solid black",
  marginBottom: "10px",
  maxWidth: "325px"
};

const imgStyle = {
  maxWidth: "200px"
};
