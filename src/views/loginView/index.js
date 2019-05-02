import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/auth/loginForm";
import loginAction from "../../actions/loginActions";
import { toast } from "react-toastify";
import CircularProgressLoader from "../../loader/loader";

export class LoginView extends Component {
    state = {
        user_name: "",
        password: "",
        errors: {},
        loader: {
          loading: false,
        },
      };

      componentWillReceiveProps(nextProps){
        if(nextProps.errors.error_message === "User does not exist."){
          toast.error("A user with that email and password was not found.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
          });
        } else { 
          toast.success("You have successfully logged in", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            });
            this.props.history.push("/parcels");
      }
      this.setState({ loader: { loading: false } });
    }

      onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const userData = {  
          user_name: this.state.user_name,
          password: this.state.password,
        }
        this.props.loginAction(userData);
        this.setState({ loader: { loading: true } });
      }

    render() {
      const loader = this.state.loader;
      return (
        <div>
          <CircularProgressLoader {...loader} />
          <LoginForm
          onSubmit={this.handleSubmit}
          onChange={this.onChange}
          />
        </div>
      
      );
    }
}

export const mapStateToProps = state => ({
  isSuccessful: state.loginReducer.isSuccessful,
  errors: state.loginReducer.errors,
  logged_in_as: state.loginReducer.logged_in_as,
  access_token: state.loginReducer.access_token,
});

export default connect(mapStateToProps, 
  { loginAction })(LoginView);
