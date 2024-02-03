import { useState } from "react";
import { login } from "../../API/index";
import { useNavigate } from "react-router-dom";
// import { Authenticate } from "../../components/Authenticate";

export default function LogIn({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [authenticated, setAuthenticated] = useState(sessionStorage.getItem(sessionStorage.getItem("authenticated")|| false));

  const navigate = useNavigate();

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const result = await login(username, password);
      console.log(result);
      if (result.token) {
        setToken(result.token);
        localStorage.setItem("token", result.token);
        alert("Login Successful");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="login-container">
      <h3 id="login-header">LogIn</h3>
      <form className="styleForm" onSubmit={handleSubmitRegistration}>
        <label htmlFor="username">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="button">Log In</button>
      </form>
    </div>
  );
}
