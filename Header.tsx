import React from "react";
import { HiShoppingCart } from "react-icons/hi";

export function Header() {
  return (
    <header style={header}>
      <div>Cool Store</div>
      <HiShoppingCart />
    </header>
  );
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  backgroundColor: "dodgerblue",
  color: "white",
  fontSize: "20px",
  boxShadow: "0 2px 4px black",
  marginBottom: "10px"
};
