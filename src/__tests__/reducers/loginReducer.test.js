import loginReducer from "../../reducers/loginReducer/loginReducer";
  
  describe("login reducer", () => {
    it("should return the initial state", () => {
      const initialState = loginReducer(undefined, {});
      expect(initialState).toEqual({
        testMessage: "SendIT test",
      });
    });
  });
