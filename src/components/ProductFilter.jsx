import React from "react";

export default function ProductFilter({ productsData, setDisplayData }) {
  function handleSearch(category) {
    if (category === "") {
      setDisplayData(productsData);
      return;
    }
    const searchResults = productsData.filter(
      (product) => product.category.toLowerCase() == category.toLowerCase()
    );
    console.log(searchResults);
    setDisplayData(searchResults);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p
        onClick={() => {
          handleSearch("Men's Clothing");
        }}
      >
        Men's Clothing
      </p>
      <p
        onClick={() => {
          handleSearch("Women's Clothing");
        }}
      >
        Women's Clothing
      </p>
      <p
        onClick={() => {
          handleSearch("Electronics");
        }}
      >
        Electronics
      </p>
      <p
        onClick={() => {
          handleSearch("Jewelery");
        }}
      >
        Jewelry
      </p>
      <p
        onClick={() => {
          handleSearch("");
        }}
      >
        Clear
      </p>
    </div>
  );
}
