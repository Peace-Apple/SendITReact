import { combineReducers } from "redux";
import loginReducer from "./loginReducer/loginReducer";
import signupReducer from "./signupReducer"

export default combineReducers({
  login:loginReducer,
  signupReducer,
});
