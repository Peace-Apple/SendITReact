import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import userParcelsAction from '../../../../actions/userParcelActions';
import { FETCH_PARCELS_SUCCESS } from '../../../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userId = 7;


describe('list users parcels action', () => {
  let parcelsUrl;
  let store;
  let token;

  beforeEach(() => {
    parcelsUrl = `https://apple-sendit.herokuapp.com/api/v2/users/${userId}/parcels/`;
    store = mockStore();
    token = 'hhjdihjdsvio';
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("handles successful fetching of a user's parcels", () => {
    fetchMock.getOnce(parcelsUrl, {
      body: { message: 'message' },
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const expectedActions = [{
      type: FETCH_PARCELS_SUCCESS,
      payload: { message: 'message' },
    }];
    return store.dispatch(userParcelsAction(userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
