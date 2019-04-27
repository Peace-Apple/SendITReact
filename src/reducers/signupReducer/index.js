import {REGISTER_SUCCESS, REGISTER_FAIL} from "../../actions/types";

const initialState = {
    isSuccessful: false,
    errors: {},
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
          return {
            ...state,
            message: action.payload.message,
            status: action.payload.status,
            isSuccessful: true,
            errors: {},
          };

        case REGISTER_FAIL:
          return {
            ...state,
            isSuccessful: false,
            errors: action.payload,
          };
          
        default:
          return state;
        }
      }; 

export default signupReducer;
