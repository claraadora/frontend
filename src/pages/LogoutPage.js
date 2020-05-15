import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { Redirect } from "react-router-dom";

function LogoutPage() {
  //Update store to logout the user
  const dispatch = useDispatch();
  dispatch(logout());

  return <Redirect to="/login" />;
}

export default LogoutPage;
