import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { UserParcelView, mapStateToProps } from '../../../views/userParcelView';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user parcels view', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });
  it('should render without crashing', () => {
    const props = {
      parcels: [],
    };
    const wrapper = shallow(<UserParcelView {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const initialState = {
      userParcelsReducer: {
        isSuccessful: false,
        parcels: [],
      },
    };
    expect(mapStateToProps(initialState)).toEqual({
      parcels: [],
    });
  });

  it('should call component did mount', () => {
    const props = {
      userParcelsAction: jest.fn(),
      parcels: [],
      userId: 7,
    };
    const actionSpy = sinon.spy(props.userParcelsAction);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <UserParcelView userParcelsAction={actionSpy} {...props} />
        </BrowserRouter>
      </Provider>,
    );
    props.userParcelsAction(props.userId);
    expect(props.userParcelsAction).toHaveBeenCalled();
  });

  it('should handle mapping through an array', () => {
    const props = {
      userParcelsAction: jest.fn(),
      parcels: [{}],
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <UserParcelView {...props} parcels={props.parcels} />
        </BrowserRouter>
      </Provider>,
    );
    expect(wrapper.find('tbody').children().find('tr')).toEqual({});
  });
});
