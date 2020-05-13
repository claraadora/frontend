export const logIn = (user) => {
  return {
    tyoe: "LOG_IN",
    user,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const register = (user) => {
  return {
    tyoe: "REGISTER",
    user,
  };
};

export const selectYear = (year) => {
  return {
    type: "SELECT_YEAR",
    year,
  };
};
