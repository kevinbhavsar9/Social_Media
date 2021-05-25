import React, { Component, createRef } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email input ', this.emailInputRef);
    console.log('Password input ', this.passwordInputRef);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            ref={this.emailInputRef}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            ref={this.passwordInputRef}
            required
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
