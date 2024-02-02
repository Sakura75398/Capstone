import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

export default function Details({setCart}) {
  
    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
    .then(json=>{console.log(json);
    setItem(json)})
    }, []) 

    function addToCart(item) {
        const localCart = JSON.parse(localStorage.getItem("cart"));
        const result = localCart.find(product => product.id == item.id);
        console.log(result);
        if(!result) {
            item.quantity = 1
            const updatedCart = [...localCart, item]
            setCart(updatedCart)
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            result.quantity +=1
            const otherItems = localCart.filter(product => product.id!=result.id);
            const updatedCart = [...otherItems, result]
            setCart(updatedCart)
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    }

    return(
        <div className="detail-container">
            <h2>{item?.title}</h2>
            <img src={item?.image} alt={item?.title}/>
            <p>{item?.description}</p>
            <button onClick={() => {
                addToCart(item)
            }}>Add to Cart</button>
        </div>
    );
}