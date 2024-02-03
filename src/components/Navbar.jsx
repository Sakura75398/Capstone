import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ token, setToken }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {!token && <Link to="/login">Login</Link>}
      {token && (
        <button
          onClick={() => {
            localStorage.removeItem("cart");
            localStorage.removeItem("token");
            setToken(null);
          }}
        >
          Logout
        </button>
      )}
      <Link to="/registerUser">CreateUser</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
