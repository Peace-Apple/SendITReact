import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import signupAction from '../../../../actions/signupActions';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../../../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('register user action', () => {
  let registerUrl;
  let store;

  beforeEach(() => {
    registerUrl = 'https://apple-sendit.herokuapp.com/api/v2/auth/signup/';
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful registration of a user', () => {
    fetchMock.postOnce(registerUrl, {
      body: { message: 'Your account has been created successfully', status: 'success' },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [{
      type: REGISTER_SUCCESS,
      payload: {
        message: 'Your account has been created successfully',
        status: 'success',
      },
    }];

    const validData = {
      user_name: 'Apple',
      email: 'apple@gmaiol.com',
      phone_number: '0704789065',
      password: 'acirebapeace',
    };

    return store.dispatch(signupAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles unsuccessful registration of a user', () => {
    fetchMock.postOnce(registerUrl, {
      body: { error_message: 'A name should consist of only alphabetic characters', status: 'fail' },
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [{
      type: REGISTER_FAIL,
      payload: {
        error_message: 'A name should consist of only alphabetic characters',
        status: 'fail',
      },
    }];

    const invalidData = {
      user_name: '12345',
      email: 'apple@gmaiol.com',
      phone_number: '0704789065',
      password: 'acirebapeace',
    };

    return store.dispatch(signupAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
