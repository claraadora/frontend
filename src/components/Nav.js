import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { User } from "./User";

export const Nav = () => {
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
        <User />
      </ul>
    </nav>
  );
};

export default Nav;
