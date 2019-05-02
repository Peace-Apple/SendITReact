import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from '../views/homeView';
import LoginView from '../views/loginView';
import SignupView from '../views/signupView';
import ParcelView from '../views/createParcelView';
import UserParcelView from '../views/userParcelView';
import Logout from '../views/logoutView';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Route path="/" exact component={HomeView} />
      <Route path="/signup" exact component={SignupView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/order" exact component={ParcelView} />
      <Route path="/parcels" exact component={UserParcelView} />
      <Route path="/logout" exact component={Logout} />
    </BrowserRouter>
  </div>
);

export default Routes;
