imoprt React, { useState } from "react";
import { login } from "../API/index";

export default function Logout() {
    const [isLoggedin, setIsLoggedin] = useState(false);

    return (
        <>
        <div className="logout">
            <h3>Logout</h3>
            <button onClick={Logout}>Logout</button>
        </div>
        </>
    )
}