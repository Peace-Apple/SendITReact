import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignupView, mapStateToProps } from '../../../views/signupView';

describe('user signup view', () => {
  it('should render without crashing', () => {
    const props = {};
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  it('should call handle submit', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(props.signupAction).toHaveBeenCalled();
  });

  it('should map state to props', () => {
    const initialState = {
      signupReducer: {
        isSuccessful: false,
        errors: {},
      },
    };
    expect(mapStateToProps(initialState)).toEqual({
      isSuccessful: false,
      errors: {},
    });
  });

  it('should call handle email change with correct email input', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handleEmailChange({ target: { name: 'email', value: 'apple@gmail.com' } });
    expect(instance.state.email).toEqual('apple@gmail.com');
  });

  it('should call handle email change with wrong email input', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handleEmailChange({ target: { name: 'email', value: 'applegmail.com' } });
    expect(instance.state.errors.email).toEqual('Please enter a correct email address.');
  });

  it('should call handle successful username change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handleUsernameChange({ target: { name: 'user_name', value: 'applelurve' } });
    expect(instance.state.user_name).toEqual('applelurve');
  });

  it('should call handle failed username change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handleUsernameChange({ target: { name: 'user_name', value: 'ap2' } });
    expect(instance.state.errors.username).toEqual('Username should be atleast 3 characters long and consist of only letters');
  });

  it('should call handle successful phone number change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handlePhoneChange({ target: { name: 'phone_number', value: '0704678902' } });
    expect(instance.state.phone_number).toEqual('0704678902');
  });

  it('should call handle failed phone_number change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handlePhoneChange({ target: { name: 'phone_number', value: '070' } });
    expect(instance.state.errors.phone_number).toEqual('Phone number should be in the form 070******* and between 10 and 13 digits');
  });

  it('should call handle successful password change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handlePasswordChange({ target: { name: 'password', value: 'applepeace' } });
    expect(instance.state.password).toEqual('applepeace');
  });

  it('should call handle failed password change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handlePasswordChange({ target: { name: 'password', value: 'apple' } });
    expect(instance.state.errors.password).toEqual('Password should be atleast 8 characters long');
  });

  it('should call handle successful confirm password change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    wrapper.setState({ password: 'applepeace', confirmPassword: 'applepeace' });
    instance.handleConfirmPasswordChange({ target: { name: 'confirmPassword', value: 'applepeace' } });
    expect(instance.state.confirmPassword).toEqual('applepeace');
  });

  it('should call handle failed confirm password change', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    const instance = wrapper.instance();
    instance.handleConfirmPasswordChange({ target: { name: 'confirmPassword', value: 'applepeace' } });
    expect(instance.state.errors.confirmPassword).toEqual('Passwords do not match!');
  });

  it('should call history.push to redirect to login page', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.setProps({ errors: { error_message: 'error_message' } });
    expect(props.history.push).toHaveBeenCalled();
  });

  it('should call component will receive email props', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
      errors: {
        error_message: 'email already exists',
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.setProps({ errors: { error_message: 'email already exists' } });
    expect(props.errors.error_message).toBe('email already exists');
  });

  it('should call component will receive user name props', () => {
    const props = {
      signupAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
      errors: {
        error_message: 'Username already taken',
      },
    };
    const wrapper = shallow(<SignupView {...props} />);
    wrapper.setProps({ errors: { error_message: 'Username already taken' } });
    expect(props.errors.error_message).toBe('Username already taken');
  });
});
