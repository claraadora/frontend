import React from "react";
import { combineReducers } from "redux";

const initialUserState = {
  isLoggedIn: false,
  loggedUser: {
    email: "guest@gmail.com",
    password: "",
  },
};

const initialYearState = {
  year: 2020,
};

export function loggedUser(state = initialUserState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        loggedUser: action.user,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        loggedUser: {},
      };
    case "REGISTER":
      return {
        ...state,
        isLoggedIn: false,
        loggedUser: {},
      };
    default:
      return state;
  }
}

export function selectedYear(state = initialYearState, action) {
  switch (action.type) {
    case "SELECT_YEAR":
      return {
        year: action.year,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  loggedUser,
  selectedYear,
});
