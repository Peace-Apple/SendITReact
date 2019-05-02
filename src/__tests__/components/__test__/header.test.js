import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
