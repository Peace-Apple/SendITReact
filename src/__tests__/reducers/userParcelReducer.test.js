import { FETCH_PARCELS_SUCCESS } from '../../actions/types';
import userParcelsReducer from '../../reducers/userParcelsReducer';

describe('user parcels reducer', () => {
  it('should return the initial state', () => {
    const initialState = userParcelsReducer(undefined, {});
    expect(initialState).toEqual({
        isSuccessful: false,
        parcels: [],
    });
  });

  it('should handle successful fetching of users parcels', () => {
    const initialState = {
        isSuccessful: false,
        parcels: [],
    };

    const expected = {
      ...initialState,
      message: 'message',
      isSuccessful: true,
      parcels: [],
    };

    const action = {
      type: FETCH_PARCELS_SUCCESS,
      payload: {
        message: 'message',
        data: [],
      },
    };

    const newState = userParcelsReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
