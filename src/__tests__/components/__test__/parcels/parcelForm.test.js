import React from 'react';
import { shallow } from 'enzyme';
import ParcelForm from '../../../../components/parcels/parcelForm';

it('renders without crashing', () => {
  const props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
  };
  const wrapper = shallow(<ParcelForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});
