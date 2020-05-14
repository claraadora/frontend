export const login = (user) => {
  return {
    type: "LOGIN",
    user,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const register = (user) => {
  return {
    type: "REGISTER",
    user,
  };
};

export const selectYear = (year) => {
  return {
    type: "SELECT_YEAR",
    year,
  };
};

export const allActions = {
  login,
  logout,
  register,
  selectYear,
};
