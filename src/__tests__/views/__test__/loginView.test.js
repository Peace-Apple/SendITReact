import React from "react";
import { shallow, mount } from "enzyme";
import {LoginView, mapStateToProps} from "../../../views/loginView";

describe("user login view", () => {
    it("should render without crashing", () => {
        const props = {};
        const wrapper = shallow(<LoginView {...props}/>);
        const instance = wrapper.instance();
        expect(instance).toMatchSnapshot();
      });

      it("should call handle submit", () => {
        const props = {
            loginAction: jest.fn(),
            isSuccessful: false,
            history: {
              push: jest.fn(),
            },
          };
        const wrapper = shallow(<LoginView {...props}/>);
        const instance = wrapper.instance();
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(props.loginAction).toHaveBeenCalled();
      });

      it("should map state to props", () => {
        const initialState = {
          loginReducer: {
            isSuccessful: false,
            errors: {},
            logged_in_as: "name",
            access_token: "jkkjn",
          },
        };
        expect(mapStateToProps(initialState)).toEqual({
            isSuccessful: false,
            errors: {},
            logged_in_as: "name",
            access_token: "jkkjn",
        });
      });

      it("should call on change", () => {
        const props = {
            loginAction: jest.fn(),
            isSuccessful: false,
            history: {
              push: jest.fn(),
            },
          };
        const wrapper = shallow(<LoginView {...props}/>);
        const instance = wrapper.instance();
        instance.onChange({ target: { name: "user_name", value: "Apple" } });
        expect(instance.state.user_name).toEqual("Apple");
      });

      it("should call history.push to redirect to order page", () => {
        const props = {
            loginAction: jest.fn(),
            isSuccessful: false,
            history: {
              push: jest.fn(),
            },
          };
        const wrapper = shallow(<LoginView {...props}/>)
        wrapper.setProps({ errors:{error_message: "error_message" }});
        expect(props.history.push).toHaveBeenCalled();
      });

      it("should call component will receive props", () => {
        const props = {
            loginAction: jest.fn(),
            isSuccessful: false,
            history: {
              push: jest.fn(),
            },
            errors: {
                error_message: "User does not exist."
            }
          };
        const wrapper = shallow(<LoginView {...props}/>)
        wrapper.setProps({ errors:{error_message: "User does not exist." }});
        expect(props.errors.error_message).toBe("User does not exist.");
      });
});
