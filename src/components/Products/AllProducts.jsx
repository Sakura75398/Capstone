import React, { useEffect, useState } from "react";
import { fetchProductData } from "../../API/index";
import ProductCard from "./ProductCard";
import ProductFilter from "../ProductFilter";

export default function AllProducts({token}) {
    const [products, setProducts] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    useEffect(() => {
        async function getProductData() {
            try {
                const products = await fetchProductData();
                console.log(products);
                setProductsData(products);
                setProducts(products);
                setDisplayData(products);
            } catch (err) {
                console.log(err);
            }
        }
        getProductData();
    }, []);


    return (
        <>
        <ProductFilter productsData={productsData} setDisplayData={setDisplayData}/>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>{displayData.map(item => <ProductCard width={28} product={item}/>)}</div>
        </>
        
    )
}