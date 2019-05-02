import React from 'react';
import { shallow, mount } from 'enzyme';
import Logout from '../../views/logoutView';

const props = {
  history: {
    push: jest.fn(),
  },
};

describe('logout view', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Logout {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
