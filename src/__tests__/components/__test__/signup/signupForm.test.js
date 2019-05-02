import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../../../components/auth/signupForm';

it('renders without crashing', () => {
  const props = {
    errors: {
      username: '',
    },
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    handleUsernameChange: jest.fn(),
    handleEmailChange: jest.fn(),
    handlePasswordChange: jest.fn(),
    handleConfirmPasswordChange: jest.fn(),
    handlePhoneChange: jest.fn(),

  };
  const wrapper = shallow(<SignupForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});
