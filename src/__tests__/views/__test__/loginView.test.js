import React from "react";
import { shallow } from "enzyme";
import LoginView from "../../../views/loginView";

it("renders without crashing", () => {
  const wrapper = shallow(<LoginView />);
  expect(wrapper).toMatchSnapshot();
});
