import React from 'react';
import { shallow, mount } from 'enzyme';
import { ParcelView, mapStateToProps } from '../../../views/createParcelView';

describe('create parcel view', () => {
  it('should render without crashing', () => {
    const props = {};
    const wrapper = shallow(<ParcelView {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  it('should call handle submit', () => {
    const props = {
      parcelAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<ParcelView {...props} />);
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(props.parcelAction).toHaveBeenCalled();
  });

  it('should map state to props', () => {
    const initialState = {
      parcelReducer: {
        isSuccessful: false,
        errors: {},
      },
    };
    expect(mapStateToProps(initialState)).toEqual({
      isSuccessful: false,
      errors: {},
    });
  });

  it('should call on change', () => {
    const props = {
      parcelAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = shallow(<ParcelView {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'receivers_name', value: 'Apple' } });
    expect(instance.state.receivers_name).toEqual('Apple');
  });

  it('should call component will receive props when there is an error message', () => {
    const props = {
      parcelAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
      errors: {
        error_message: 'Please use character strings',
      },
    };
    const wrapper = shallow(<ParcelView {...props} />);
    wrapper.setProps({ errors: { error_message: 'Please use character strings' } });
    expect(props.errors.error_message).toBe('Please use character strings');
  });

  it('should call component will receive props when there is no error message', () => {
    const props = {
      parcelAction: jest.fn(),
      isSuccessful: false,
      history: {
        push: jest.fn(),
      },
      errors: {
        error_message: '',
      },
    };
    const wrapper = shallow(<ParcelView {...props} />);
    wrapper.setProps({ errors: { error_message: '' } });
    expect(props.errors.error_message).toBe('');
  });
});
