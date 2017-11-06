import React from 'react';
import radium from 'radium';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.credentials = {
      email: '',
      password: '',
    };
  }

  formGroupStyle() {
    return {
      width: '100%',
      marginBottom: '5px',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.handleSubmit) {
      this.props.handleSubmit(e, this.credentials);
    }
  }

  handleCredChange(e, cred) {
    if (this.props.handleCredChange) {
      this.props.handleCredChange(e, cred);
    }
    this.credentials[cred] = e.target.value;
  }

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}>
        <div
          style={this.formGroupStyle()}>
          <label>Email</label>
          <input
            onChange={e => this.handleCredChange(e, 'email')}
            autoFocus="true"
            type="text"/>
        </div>
        <div
          style={this.formGroupStyle()}>
          <label>Password</label>
          <input
            onChange={e => this.handleCredChange(e, 'password')}
            type="password"/>
        </div>
        <div
          style={this.formGroupStyle()}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default radium(LoginForm);
