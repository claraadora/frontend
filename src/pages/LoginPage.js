import React, { useState, useContext } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={submit}>
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
      <button type="submit">Submit</button>
    </div>
  );
};

export default LoginPage;
