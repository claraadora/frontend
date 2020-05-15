import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { Redirect } from "react-router-dom";

function LogoutPage() {
  const dispatch = useDispatch();
  dispatch(logout());
  return <Redirect to="/login" />;
}

export default LogoutPage;
