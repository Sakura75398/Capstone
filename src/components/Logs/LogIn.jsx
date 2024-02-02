import { useState } from "react";
import { login } from "../API/index";
import { useNavigate } from "react-router-dom";
import { Authenticate } from "../components/Authenticate";

export default function LogIn(props) {
    const [username, setUsername] = useState("");
    cosnt [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(sessionStorage.getItem(sessionStorage.getItem("authenticated")|| false));

    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
        const result = await loginUser();
        console.log(result.data);
    } catch (err);
}

return (
    <div id="login-container">
        <h3 id="login-header">LogIn</h3>
    <form className="styleForm">
        <label htmlFor="username">
            <input className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <label htmlFor="password">
            <input className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            required autoComplete="off" onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <button className="button" onClick={handleSubmitRegistration}>Log In</button>
    </form>
    </div>
)}