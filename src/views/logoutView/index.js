import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";

export class Logout extends Component {
  componentWillMount() {
    localStorage.removeItem("accessToken");
    this.props.history.push("/");
    toast.success("You have successfully Logged out", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
  }

  render() {
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

export default Logout;
