import React from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "./assets/css/main.css";
import "./assets/css/order.css";
import "./assets/css/vieworder.css";

const App = () => (
        <div>
            <ToastContainer />
            <Routes />
        </div>
);

export default App;
