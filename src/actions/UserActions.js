export const login = (user) => {
  return {
    type: userActions.LOGIN,
    user,
  };
};

export const logout = () => {
  return {
    type: userActions.LOGOUT,
  };
};

export const registerRequest = (user) => {
  return {
    type: userActions.REGISTER_REQUEST,
    user,
  };
};

export const registerSuccess = (user) => {
  return {
    type: userActions.REGISTER_SUCCESS,
    user,
  };
};

export const registerFail = (user) => {
  return {
    type: userActions.REGISTER_FAIL,
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
  registerRequest,
  registerSuccess,
  registerFail,
  selectYear,
};
