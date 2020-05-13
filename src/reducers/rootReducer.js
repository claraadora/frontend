import { combineReducers } from "redux";
import register from "./registerReducer";
import auth from "./authReducer";
import alert from "./alertReducer";

const rootReducer = combineReducers({
  register,
  auth,
  alert,
});

export default rootReducer;
