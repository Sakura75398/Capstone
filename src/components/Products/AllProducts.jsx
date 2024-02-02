import React, { useEffect, useState } from "react";
import { fetchProductData } from "../../API/index";
import ProductCard from "./ProductCard";

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        async function getProductData() {
            try {
                const products = await fetchProductData();
                console.log(products);
                setProductsData(products);
                setProducts(products);
            } catch (err) {
                console.log(err);
            }
        }
        getProductData();
    }, []);

    function handleSearch(e) {
        const searchResults = productData.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setProducts(searchResults);
    }

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>{products.map(item => <ProductCard product={item}/>)}</div>
    )
}