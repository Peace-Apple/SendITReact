import { REGISTER_SUCCESS, REGISTER_FAIL } from '../../actions/types';
import signupReducer from '../../reducers/signupReducer';

describe('signup reducer', () => {
  it('should return the initial state', () => {
    const initialState = signupReducer(undefined, {});
    expect(initialState).toEqual({
      isSuccessful: false,
      errors: {},
    });
  });

  it('should handle successful user registration', () => {
    const initialState = {
      isSuccessful: false,
    };

    const expected = {
      ...initialState,
      isSuccessful: true,
      message: 'message',
      errors: {},
    };

    const action = {
      type: REGISTER_SUCCESS,
      payload: {
        message: 'message',
        errors: {},
      },
    };

    const newState = signupReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('should handle unsuccessful user registration', () => {
    const initialState = {
      isSuccessful: false,
    };

    const expected = {
      ...initialState,
      isSuccessful: false,
      errors: { error_message: 'error message' },
    };

    const action = {
      type: REGISTER_FAIL,
      payload: { error_message: 'error message' },
    };

    const newState = signupReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
