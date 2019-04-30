import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions/types';

const initialState = {
  isSuccessful: false,
  access_token: '',
  errors: {},
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload.access_token,
        logged_in_as: action.payload.logged_in_as,
        message: action.payload.message,
        status: action.payload.status,
        isSuccessful: true,
        errors: {},
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isSuccessful: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
