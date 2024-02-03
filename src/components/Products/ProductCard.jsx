import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  width,
  parentComponent,
  removeItem,
}) {
  const navigate = useNavigate("");
  const cardStyle = { width: `${width}%` };

  return (
    <div style={cardStyle} className="product-card-container">
      <h3>{product?.title}</h3>
      <img src={product?.image} alt={product?.title} />
      <p>{product?.description}</p>
      {parentComponent !== "cart" && (
        <button
          onClick={() => {
            navigate(`/products/${product?.id}`);
          }}
        >
          See Details
        </button>
      )}
      {parentComponent === "cart" && (
        <button
          onClick={() => {
            removeItem(product);
          }}
        >
          Remove Item
        </button>
      )}
    </div>
  );
}
