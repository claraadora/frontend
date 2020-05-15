import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../actions/userActions";

export const LoginPage = () => {
  //States
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [redirectLink, setRedirectLink] = useState("");

  //To update store
  const dispatch = useDispatch();
  const updateStore = (user) => dispatch(login(user));

  //Update store and redirection link upon submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStore(user);
    setRedirectLink("/");
    alert(`logged in successfully!`);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Redirect to home page
  if (redirectLink !== "") {
    return <Redirect to={redirectLink} />;
  }

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
        <br />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
      <br></br>
      Don't have an account? <Link to="/register">Register here</Link>
    </div>
  );
};

export default LoginPage;
