import { combineReducers } from "redux";
import loginReducer from "./loginReducer/loginReducer";

export default combineReducers({
  login:loginReducer,
});
