import React, { useState, useEffect } from "react";
// import { HiOutlineShoppingCart } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";

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
          <ClipLoader />
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
