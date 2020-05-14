import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const user = useSelector((state) => state.loggedUser);
  console.log(user);
  return <h5>Welcome, {user.email} </h5>;
};
