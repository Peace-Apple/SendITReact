import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginAction from '../../../../actions/loginActions';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login user action', () => {
  let loginUrl;
  let store;

  beforeEach(() => {
    loginUrl = 'https://apple-sendit.herokuapp.com/api/v2/auth/login/';
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful login of a user', () => {
    fetchMock.postOnce(loginUrl, {
      body: { message: 'You are logged in', status: 'success' },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [{
      type: LOGIN_SUCCESS,
      payload: {
        message: 'You are logged in',
        status: 'success',
      },
    }];

    const validData = {
      user_name: 'Apple',
      password: 'acirebapeace',
    };

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles failed login of a user', () => {
    fetchMock.postOnce(loginUrl, {
      body: { error_message: 'User does not exist.', status: 'fail' },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [{
      type: LOGIN_FAIL,
      payload: {
        error_message: 'User does not exist.',
        status: 'fail',
      },
    }];

    const invalidData = {
      user_name: '12345',
      password: 'acirebapeace',
    };

    return store.dispatch(loginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
