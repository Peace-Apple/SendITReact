import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

const signupAction = userData => dispatch => fetch(`https://apple-sendit.herokuapp.com/api/v2/auth/signup/`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    'Accept': 'application/json'
  },
  cache: 'no-cache',
  body: JSON.stringify(userData),

})
  .then(res => res.json())
  .then((data) => {
    if (data.error_message) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {
            error_message: data.error_message,
            status: data.status
        },
      });
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
            message: data.message,
            status: data.status
        }
      });
    }
  });
    
export default signupAction;
