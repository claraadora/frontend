import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`registered successfully!`);
  };

  return (
    <div>
      <h1>Register</h1>
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
          placeholder="Enter new password"
        />
        <br />
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      <br></br>
      Already have an account? <Link to="/login">Login here</Link>
    </div>
  );
};

export default RegisterPage;
