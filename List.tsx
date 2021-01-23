import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Product } from "./Product";

export function List(props) {
  const [data, setData] = useState<Product[]>([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => setData(products));
  }, []);
  return (
    <div style={listContainer}>
      {data.length ? (
        data.map(item => <Product key={item.id} {...item} />)
      ) : (
        <Loader type="Bars" color="#00BFFF" height={100} width={100} />
      )}
    </div>
  );
}

const listContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
