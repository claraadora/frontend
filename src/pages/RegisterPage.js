import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

export const RegisterPage = () => {
  //States
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const validate = (values) => {
    if (values.password == values.confirmedPassword) {
      return true;
    }
    return false;
  };

  //Redux
  const dispatch = useDispatch();
  const updateStore = (user) => dispatch(register(user));

  //clear fields
  const clearErrors = () => {
    setUser({
      email: user.email,
      password: "",
      confirmedPassword: "",
    });
  };

  const clearFields = () => {
    setUser({
      email: "",
      password: "",
      confirmedPassword: "",
    });
  };

  /*if valid, redirect to login
    if invalid, clear fields
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(user)) {
      console.log(user);
      updateStore(user);
      alert(`registered successfully!`);
      clearFields();
      //redirect
    } else {
      alert("Passwords do not match!");
      clearErrors();
    }
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
        <label htmlFor="password">
          <p>Confirm Password</p>
        </label>
        <input
          type="password"
          name="confirmedPassword"
          onChange={onChange}
          value={user.confirmedPassword}
          placeholder="Enter password"
        />
        <br />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
      <br></br>
      Already have an account? <Link to="/login">Login here</Link>
    </div>
  );
};

export default RegisterPage;
