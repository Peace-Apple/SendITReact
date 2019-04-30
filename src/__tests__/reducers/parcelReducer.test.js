import { CREATE_PARCEL_SUCCESS, CREATE_PARCEL_FAIL } from '../../actions/types';
import parcelReducer from '../../reducers/parcelReducer';

describe('parcel reducer', () => {
  it('should return the initial state', () => {
    const initialState = parcelReducer(undefined, {});
    expect(initialState).toEqual({
      isSuccessful: false,
      errors: {},
    });
  });

  it('should handle successful parcel order creation', () => {
    const initialState = {
      isSuccessful: false,
    };

    const expected = {
      ...initialState,
      isSuccessful: true,
      message: 'message',
      data: true,
      errors: {},
    };

    const action = {
      type: CREATE_PARCEL_SUCCESS,
      payload: {
        message: 'message',
        data: true,
        errors: {},
      },
    };

    const newState = parcelReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('should handle unsuccessful successful parcel order creation', () => {
    const initialState = {
      isSuccessful: false,
    };

    const expected = {
      ...initialState,
      isSuccessful: false,
      errors: { error_message: 'error message' },
    };

    const action = {
      type: CREATE_PARCEL_FAIL,
      payload: { error_message: 'error message' },
    };

    const newState = parcelReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
