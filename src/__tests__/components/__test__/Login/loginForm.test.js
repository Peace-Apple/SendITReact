import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../../../components/auth/loginForm';

it('renders without crashing', () => {
  const props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
  };
  const wrapper = shallow(<LoginForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});
