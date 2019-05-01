import React from "react";
import { shallow, mount } from "enzyme";
import {UserParcelView, mapStateToProps} from "../../../views/userParcelView";

describe("user parcels view", () => {
    it("should render without crashing", () => {
        const props = {
            parcels: []
        };
        const wrapper = shallow(<UserParcelView {...props}/>);
        const instance = wrapper.instance();
        expect(instance).toMatchSnapshot();
      });

      it("should map state to props", () => {
        const initialState = {
            userParcelsReducer: {
                isSuccessful: false,
                parcels: [],
          },
        };
        expect(mapStateToProps(initialState)).toEqual({
            parcels: [],
        });
      });

      it("should call component will mount", () => {
        const props = {
            userParcelsAction: jest.fn(),
            parcels: [],
            userId: 7
          };
          const wrapper = shallow(<UserParcelView {...props} />);
          expect(wrapper.instance().props.userParcelsAction(7)).toBe(undefined);
      });
});
