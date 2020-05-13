//action types
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const REGISTER = "REGISTER";

export function logIn(user) {
  return {
    tyoe: LOG_IN,
    user,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function register(user) {
  return {
    tyoe: LOG_IN,
    user,
  };
}
