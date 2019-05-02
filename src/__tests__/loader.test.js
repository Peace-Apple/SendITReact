import React from 'react';
import { shallow } from 'enzyme';
import CircularProgressLoader from '../loader/loader';

const props = {
  loading: false,
};
it('renders without crashing', () => {
  const wrapper = shallow(<CircularProgressLoader {...props} />);
  expect(wrapper).toMatchSnapshot();
});
