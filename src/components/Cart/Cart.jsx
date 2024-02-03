import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Products/ProductCard";

export default function Cart({ cart, setCart }) {
  console.log(cart);
  function removeItem(item) {
    const updatedCart = cart.filter((product) => product.id != item.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {cart.map((item) => (
        <ProductCard
          parentComponent="cart"
          width={40}
          product={item}
          removeItem={removeItem}
        />
      ))}
      <button onClick={() => {
        alert("Thank you for your purchase!")
      }}>Check out</button>
      
    </div>
  );
}
