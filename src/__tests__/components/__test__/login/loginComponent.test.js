import React from "react";
import { shallow } from "enzyme";
import Login from "../../../../components/auth/login/loginComponent";

it("renders without crashing", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
