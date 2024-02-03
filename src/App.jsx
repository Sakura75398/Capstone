import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./components/Products/AllProducts";
import Details from "./components/Products/Details";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar";
import LogIn from "./components/Logs/LogIn";
// import CreatePost from "./components/Products/CreatePost";

export default function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const localCart = localStorage.getItem("cart");
      if (!localCart) {
        localStorage.setItem("cart", JSON.stringify([]));
      } else {
        setCart(JSON.parse(localCart));
      }
    }
  }, [token]);

  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route
          path="/products/:id"
          element={<Details setCart={setCart} token={token} />}
        />
        {/* <Route path="/addNew" element={<CreatePost />} /> */}
        <Route path="*" element={<AllProducts />} />
        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
        <Route path="/login" element={<LogIn setToken={setToken} />} />
      </Routes>
    </div>
  );
}
