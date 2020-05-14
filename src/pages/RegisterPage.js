import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

export const RegisterPage = () => {
  //States
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Redux
  const dispatch = useDispatch();
  const updateStore = (user) => dispatch(register(user));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    updateStore(user);
    alert(`registered successfully!`);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Register</h1>
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
