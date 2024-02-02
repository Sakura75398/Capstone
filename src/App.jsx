import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./components/Products/AllProducts";
import Details from "./components/Products/Details";
// import NavBar from "./components/NavBar";
// import CreatePost from "./components/Products/CreatePost";

export default function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if(!localCart) {
      localStorage.setItem("cart", JSON.stringify([]))
    } else {
      setCart(JSON.parse(localCart))
    }
  }, [])

  return (
      
    <div>
      {/* <NavBar /> */}
     <Routes>
       <Route path="/" element={<AllProducts/>} />
      <Route path="/products/:id" element={<Details setCart={setCart} />} />
      {/* <Route path="/addNew" element={<CreatePost />} /> */}
      <Route path="*" element={<AllProducts />} />
     </Routes>
      </div>
  )
}

{/* /* <NavBar /> */ }
    // <Routes>
    //   <Route path="/" element={<AllProducts/>} />
    //   <Route path="/posts/:id" element={<Details />} />
    //   {/* <Route path="/addNew" element={<CreatePost />} /> */}
    //   <Route path="*" element={<AllProducts />} />
    // </Routes>