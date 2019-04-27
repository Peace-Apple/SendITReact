import React from "react";
import { shallow } from "enzyme";
import HomeView from "../../../views/homeView";

it("renders without crashing", () => {
  const wrapper = shallow(<HomeView />);
  expect(wrapper).toMatchSnapshot();
});