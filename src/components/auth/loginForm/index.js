import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => (
  <div className="login-content">
    <div className="login-main">
      <div className="login-heading">
        <h2>SENDIT</h2>
        <p>Send your parcels now</p>
      </div>
      <div className="login-field">
        <form onSubmit={props.onSubmit}>
          <input type="text" name="user_name" onChange={props.onChange} placeholder="Username" required />
          <input type="password" name="password" onChange={props.onChange} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <p className="down">
          <a className="lft" href="/signup">Create account</a>
        </p>
      </div>
    </div>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;
