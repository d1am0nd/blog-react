import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SmallText from 'admin/components/Partials/Form/SmallText';
import Submit from 'admin/components/Partials/Form/Submit';

import {login} from 'admin/store/actions/userActions';

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
    this.props.login(this.state.creds);
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <SmallText
            key={`email-input`}
            handleChange={(e) => this.handleChange(e, 'email')}
            label={`Email label`}/>
          <SmallText
            key={`password-input`}
            type={`password`}
            handleChange={(e) => this.handleChange(e, 'password')}
            label={`Password`}/>
          <Submit text={`Submit`}/>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds)),
  };
};

export default connect(null, mapDispatchToProps)(radium(Login));
