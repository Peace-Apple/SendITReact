import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions/types';
import loginReducer from '../../reducers/loginReducer';

describe('login reducer', () => {
  it('should return the initial state', () => {
    const initialState = loginReducer(undefined, {});
    expect(initialState).toEqual({
      isSuccessful: false,
      access_token: '',
      errors: {},
    });
  });

  it('should handle successful user login', () => {
    const initialState = {
      isSuccessful: false,
    };

    const expected = {
      ...initialState,
      access_token: 'ijfoaejvnkvi',
      logged_in_as: 'users name',
      message: 'message',
      status: 'success',
      isSuccessful: true,
      errors: {},
    };

    const action = {
      type: LOGIN_SUCCESS,
      payload: {
        logged_in_as: 'users name',
        access_token: 'ijfoaejvnkvi',
        message: 'message',
        status: 'success',
        errors: {},
      },
    };

    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('should handle failed user login', () => {
    const initialState = {
      isSuccessful: false,
    };

    const expected = {
      ...initialState,
      isSuccessful: false,
      errors: {
        error_message: 'error_message',
        status: 'fail',
      },
    };

    const action = {
      type: LOGIN_FAIL,
      payload: {
        error_message: 'error_message',
        status: 'fail',
      },
    };

    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
