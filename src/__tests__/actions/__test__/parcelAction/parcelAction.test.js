import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import parcelAction from '../../../../actions/parcelActions';
import { CREATE_PARCEL_SUCCESS, CREATE_PARCEL_FAIL } from '../../../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('create parcel action', () => {
  let orderUrl;
  let store;

  beforeEach(() => {
    orderUrl = 'https://apple-sendit.herokuapp.com/api/v2/parcels/';
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful creation of a parcel delivery order', () => {
    fetchMock.postOnce(orderUrl, {
      body: { message: 'Successfully posted a parcel delivery order', data: 'true' },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [{
      type: CREATE_PARCEL_SUCCESS,
      payload: {
        message: 'Successfully posted a parcel delivery order',
        data: 'true',
      },
    }];

    const validData = {
      receivers_name: 'Kampala',
      pickup_location: 'Bunga',
      destination: 'Entebbe',
      weight: 3,
    };

    return store.dispatch(parcelAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles unsuccessful creation of a parcel delivery order', () => {
    fetchMock.postOnce(orderUrl, {
      body: { error_message: 'error message', data: 'false' },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [{
      type: CREATE_PARCEL_FAIL,
      payload: {
        error_message: 'error message',
        data: 'false',
      },
    }];

    const invalidData = {
      receivers_name: '12345',
      pickup_location: 'Bunga',
      destination: 'Entebbe',
      weight: 3,
    };

    return store.dispatch(parcelAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
