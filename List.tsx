import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export function List(props) {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => setData(products));
  }, []);
  return (
    <div>
      <ul>
        {data.length ? (
          data.map(item => {
            return <li>{item.title}</li>;
          })
        ) : (
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </ul>
    </div>
  );
}

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
