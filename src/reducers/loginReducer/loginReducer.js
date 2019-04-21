import {LOGIN_SUCCESS} from "../../actions/types";

const initialState = {
  testMessage: "SendIT test",

};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return state;

  default:
    return state;
  }
};

export default loginReducer;
