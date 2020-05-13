import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">
          <p>Email</p>
        </label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Enter email"
        />
        <label for="password">
          <p>Password</p>
        </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="Enter password"
        />
      </form>
      <br></br>
      <button type="submit">Submit</button>
      <br></br>
      <br></br>
      Don't have an account? <Link to="/register">Register here</Link>
    </div>
  );
};

export default LoginPage;
