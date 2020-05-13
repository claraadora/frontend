import React from "react";

export const User = ({ user }) => {
  console.log(user.email);
  return <h5>Welcome, {user.email} </h5>;
};

export default User;
