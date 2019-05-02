import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = props => (
  <div>
    <div className="login-content">
      <div className="login-main signup">
        <div className="login-heading">
          <h2>SENDIT</h2>
          <p>Get started today!</p>

        </div>
        <div className="login-field">
          <form id="create_account" onSubmit={props.onSubmit}>
            <input type="text" name="user_name" placeholder="Username" onChange={props.handleUsernameChange} required />
            {props.errors.username && (<span style={{ color: 'red', fontSize: '13px' }}>{props.errors.username}</span>) }
            <input type="email" name="email" placeholder="Email" onChange={props.handleEmailChange} required />
            {props.errors.email && (<span style={{ color: 'red', fontSize: '13px' }}>{props.errors.email}</span>) }
            <input type="number" name="phone_number" placeholder="Phone Number" onChange={props.handlePhoneChange} required />
            {props.errors.phone_number && (<span style={{ color: 'red', fontSize: '13px' }}>{props.errors.phone_number}</span>) }
            <input type="password" name="password" placeholder="Password" onChange={props.handlePasswordChange} required />
            {props.errors.password && (<span style={{ color: 'red', fontSize: '13px' }}>{props.errors.password}</span>) }
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={props.handleConfirmPasswordChange} required />
            {props.errors.confirmPassword && (<span style={{ color: 'red', fontSize: '13px' }}>{props.errors.confirmPassword}</span>) }
            <button id="signup-button" type="submit">Signup</button>
            <p className="down">
              <a className="lft" href="/login">Have an account?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
  handlePhoneChange: PropTypes.func.isRequired,
};

export default SignupForm;
