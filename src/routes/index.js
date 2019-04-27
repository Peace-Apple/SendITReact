import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "../views/homeView";
import LoginView from "../views/loginView";
import SignupView from "../views/signupView";

const Routes = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={HomeView} />
      <Route path="/signup" component={SignupView} />
      <Route path="/login" component={LoginView} />
    </BrowserRouter>
  </div>
);

export default Routes;
