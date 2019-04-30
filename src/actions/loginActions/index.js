import { LOGIN_SUCCESS, LOGIN_FAIL } from '../types';

const loginAction = loginData => dispatch => fetch('https://apple-sendit.herokuapp.com/api/v2/auth/login/', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
  cache: 'no-cache',
  body: JSON.stringify(loginData),

})
  .then(res => res.json())
  .then((data) => {
    const token = data.access_token;
    localStorage.setItem('accessToken', token);
    if (data.error_message) {
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          error_message: data.error_message,
          status: data.status,
        },
      });
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          access_token: data.access_token,
          logged_in_as: data.logged_in_as,
          message: data.message,
          status: data.status,
        },
      });
    }
  });

export default loginAction;
