export const UserActions = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  REGISTER: "REGISTER",
};

export function logIn(email, password) {
  return {
    tyoe: LOG_IN,
    email: email,
    password: password,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function register(email, password) {
  return {
    tyoe: LOG_IN,
    email: email,
    password: password,
  };
}
