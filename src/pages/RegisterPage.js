import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import { redirectTo } from "../actions/pageActions";

export const RegisterPage = () => {
  //States
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [redirectLink, setRedirectLink] = useState("");

  //Validate the form if the password matches the confirmed password
  const validate = (values) => {
    if (values.password === values.confirmedPassword) {
      return true;
    }
    return false;
  };

  //Update store upon registration and redirection
  const dispatch = useDispatch();
  const updateUser = (user) => dispatch(register(user));
  const updateRedirect = (link) => dispatch(redirectTo(link));

  //Clear error fields (when submitting unmatched passwords)
  const clearErrors = () => {
    setUser({
      email: user.email,
      password: "",
      confirmedPassword: "",
    });
  };

  /*Iff valid, redirect to login
    if invalid, clear fields
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(redirectTo);

    if (validate(user)) {
      updateUser(user);
      updateRedirect("/login");
      alert(`registered successfully!`);
      setRedirectLink("/login");
    } else {
      alert("Passwords do not match!");
      clearErrors();
    }
  };

  //Set changes to local states
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Redirection
  if (redirectLink !== "") {
    return <Redirect to={redirectLink} />;
  }

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
