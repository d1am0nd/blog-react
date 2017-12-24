import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import SmallText from '../Partials/Form/SmallText';
import Submit from '../Partials/Form/Submit';

import {login} from '../../store/actions/userActions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      creds: {
        email: '',
        password: '',
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(login(this.state.creds));
  }

  handleChange(e, attribute) {
    const creds = this.state.creds;
    creds[attribute] = e.target.value;
    this.setState({
      creds: creds,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <SmallText
            key={`email-input`}
            handleChange={e => this.handleChange(e, 'email')}
            label={`Email label`}/>
          <SmallText
            key={`password-input`}
            type={`password`}
            handleChange={e => this.handleChange(e, 'password')}
            label={`Password`}/>
          <Submit text={`Submit`}/>
        </form>
      </div>
    );
  }
}
export default connect()(radium(Login));
