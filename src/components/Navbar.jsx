import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/registerUser">CreateUser</Link>
            <Link to="/logOut">LogOut</Link>
        </nav>
    )
}