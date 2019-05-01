import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "../../components/auth/signupForm";
import signupAction from "../../actions/signupActions";
import { toast } from "react-toastify";

export class SignupView extends Component {
    state = {
        user_name: "",
        email: "",
        phone_number: "",
        password: "",
        confirmPassword: "",
        errors: {}
      };

      componentWillReceiveProps(nextProps){
        if(nextProps.errors.error_message === "email already exists"){
          toast.error("Email already exists, please use another", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
          });
        } else if(nextProps.errors.error_message === "Username already taken") { 
          toast.error("Username already taken, please use another", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            });
        } else {
          toast.success("Your account has been created successfully, please log in", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            });
          this.props.history.push("/login");
        }
        
      }

      handleEmailChange = (e) => {
        this.setState({email: e.target.value});
        const email = this.state.email;
        if(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,3}$/.test(email)){
          this.setState({
            errors: {}
          });
        } else {
          this.setState({
            errors: {
              email: "Please enter a correct email address."
            }
          });
        }
      }

      handleUsernameChange = (e) => {
        this.setState({user_name: e.target.value});
        const user_name = this.state.user_name;
        if(/^[A-Za-z\s]{2,30}$/.test(user_name)){
          this.setState({
            errors: {}
          })
        }else {
            this.setState({
              errors: {
                username: "Username should be atleast 3 characters long and consist of only letters"
              }
            })
        }
      }

      handlePhoneChange = (e) => {
        this.setState({phone_number: e.target.value});
        const phone_number = this.state.phone_number;
        if (/^[0-9]{9,12}$/.test(phone_number)) {
          this.setState({
            errors: {}
          });
        } else {
          this.setState({
            errors: {
              phone_number: "Phone number should be in the form 070******* and between 10 and 13 digits"
            }
          });
        }
      }
      
      handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
        const password = this.state.password;
        if (password.length >= 7){
          this.setState({
            errors: {}
          });
        } else {
          this.setState({
            errors: {
              password: "Password should be atleast 8 characters long"
            }
          });
        }
      }

      handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        const {password} = this.state;
        if (password === confirmPassword){
          this.setState({
            errors: {}
          });
        } else {
          this.setState({
            errors: {
              confirmPassword: "Passwords do not match!"
            }
          });
        }
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const userData = {  
          user_name: this.state.user_name,
          email: this.state.email,
          phone_number: this.state.phone_number,
          password: this.state.password,
        }
        this.props.signupAction(userData);
      }

    render() {
      return (
        <div>
          <SignupForm
            onSubmit={this.handleSubmit}
            onChange={this.onChange}
            handleUsernameChange={this.handleUsernameChange}
            handleEmailChange={this.handleEmailChange}
            handlePasswordChange={this.handlePasswordChange}
            handleConfirmPasswordChange={this.handleConfirmPasswordChange}
            handlePhoneChange={this.handlePhoneChange}
            errors={this.state.errors}
          />
        </div>
      
      );
    }
}

export const mapStateToProps = state => ({
  isSuccessful: state.signupReducer.isSuccessful,
  errors: state.signupReducer.errors,
  message: state.signupReducer.message,
});

export default connect(mapStateToProps, 
  { signupAction })(SignupView);
