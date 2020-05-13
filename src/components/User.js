import React from "react";

export const User = ({ isLoggedIn, loggedUser }) => {
  return <h3> {isLoggedIn ? loggedUser : "guest"} </h3>;
};

export default User;
