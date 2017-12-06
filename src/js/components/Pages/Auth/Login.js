import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import {login} from '../../../store/actions/userActions';

import LoginForm from '../../Partials/Forms/LoginForm';

class Login extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e, creds) {
    this.props.login(creds);
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

export default connect(store => {
  return {};
}, dispatch => {
  return {
    login: creds => dispatch(login(creds)),
  };
})(radium(Login));
