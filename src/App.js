import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import './assets/css/main.css';
import './assets/css/order.css';
import './assets/css/vieworder.css';
import './assets/css/profile.css';
import './assets/css/home.css';

const App = () => (
  <div>
    <ToastContainer />
    <Routes />
  </div>
);

export default App;
