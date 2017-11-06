import React from 'react';
import radium from 'radium';

import LoginForm from '../../Partials/Forms/LoginForm';

class Login extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e, creds) {
    if (this.props.handleSubmit) {
      this.props.handleSubmit(e, creds);
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm
          handleSubmit={(e, creds) => this.handleSubmit(e, creds)}/>
      </div>
    );
  }
}

export default radium(Login);
