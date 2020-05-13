import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { User } from "./User";
import { useSelector, useDispatch } from "react-redux";

export const Nav = () => {
  const data = useSelector((state) => state.loggedUser);
  const currentUser = data.loggedUser;

  console.log(currentUser);
  return (
    <nav>
      <ul>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/logout">
          <li>Logout</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
        <User user={currentUser} />
      </ul>
    </nav>
  );
};

export default Nav;
