import React from 'react'
import "./productCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({product}) {
    const navigate = useNavigate("");
  return (
    <div className="product-card-container">
        <h3>
        {product?.title}</h3>
        <img src={product?.image} alt={product?.title}/>
        <p>{product?.description}</p>
        <button onClick={() => {navigate(`/products/${product?.id}`)}}>See Details</button>
    </div>
  )
}
