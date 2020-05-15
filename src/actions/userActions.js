import { userConstants } from "../constants/userConstants";

export const login = (user) => {
  return {
    type: userConstants.LOGIN,
    user,
  };
};

export const logout = () => {
  return {
    type: userConstants.LOGOUT,
  };
};

export const register = () => {
  return {
    type: userConstants.REGISTER,
  };
};

export const registerRequest = (user) => {
  return {
    type: userConstants.REGISTER_REQUEST,
    user,
  };
};

export const registerSuccess = (user) => {
  return {
    type: userConstants.REGISTER_SUCCESS,
    user,
  };
};

export const registerFail = (user) => {
  return {
    type: userConstants.REGISTER_FAIL,
    user,
  };
};

export const selectYear = (year) => {
  return {
    type: userConstants.SELECT_YEAR,
    year,
  };
};

export const allActions = {
  login,
  logout,
  registerRequest,
  registerSuccess,
  registerFail,
  register,
  selectYear,
};
