import { combineReducers } from "redux";
import { userConstants } from "../constants/userConstants";
import { pageConstants } from "../constants/pageConstants";

const initialLoginState = {
  isLoggedIn: false,
  loggedUser: {
    email: "guest@gmail.com",
    password: "",
  },
};

const initialYearState = {
  year: "",
};

const initialRegisterState = {
  registeringUser: {
    email: "",
    password: "",
    confirmedPassword: "",
  },
};

export function loggedUser(state = initialLoginState, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        loggedUser: action.user,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        loggedUser: {},
      };
    default:
      return state;
  }
}

export function registeredUser(state = initialRegisterState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registeringUser: action.user,
      };
    case userConstants.REGISTER_FAIL:
      return {
        ...state,
        registeringUser: {},
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registeringUser: action.user,
      };
    case userConstants.REGISTER:
      return {
        ...state,
        registeringUser: action.user,
      };
    default:
      return state;
  }
}

export function selectedYear(state = initialYearState, action) {
  switch (action.type) {
    case userConstants.SELECT_YEAR:
      return {
        year: action.year,
      };
    default:
      return state;
  }
}

export function redirect(state = {}, action) {
  switch (action.type) {
    case pageConstants.REDIRECT_TO:
      return {
        redirectTo: action.link,
      };
    default:
      return state;
  }
}

export function json(state = [], action) {
  switch (action.type) {
    case pageConstants.UPDATE_TABLE:
      return {};
  }
}

export const rootReducer = combineReducers({
  loggedUser,
  selectedYear,
  registeredUser,
  redirect,
});
