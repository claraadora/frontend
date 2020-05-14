import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";

export const LoginPage = () => {
  //States
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Redux
  const dispatch = useDispatch();
  const updateStore = (user) => dispatch(login(user));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    updateStore(user);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={user.email}
          placeholder="Enter email"
        />
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
          placeholder="Enter password"
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default LoginPage;
