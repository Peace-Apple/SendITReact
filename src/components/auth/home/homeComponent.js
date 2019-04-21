import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Home = ({ testMessage }) => (
  <div>
    <h1>Welcome to SendIT</h1>
    {testMessage}
  </div>
);

Home.propTypes = {
  testMessage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  testMessage: state.login.testMessage,
});

export default connect(mapStateToProps)(Home);