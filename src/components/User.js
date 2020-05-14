import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const data = useSelector((state) => state.loggedUser);
  return <h5>Welcome, {data.loggedUser.email} </h5>;
};
