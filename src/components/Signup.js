import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, removeError } from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: {},
      email: '',
      password: '',
      confirm_password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(removeError());
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };
  handleSignupClick = (e) => {
    e.preventDefault();
    const { name, email, password, confirm_password } = this.state;
    this.props.dispatch(signup(name, email, password, confirm_password));
  };

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    // console.log(this.props);
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleEmailChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleConfirmPasswordChange}
            required
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleSignupClick} disabled={inProgress}>
              Signing Up
            </button>
          ) : (
            <button onClick={this.handleSignupClick}>Sign Up </button>
          )}
        </div>
      </form>
    );
  }
}

function mapPropsToStore(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapPropsToStore)(Signup);
