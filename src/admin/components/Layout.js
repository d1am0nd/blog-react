import React from 'react';
import radium from 'radium';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Title from './Layout/Title';
import Navigation from './Layout/Navigation';
import Routes from './Routes';

import {loggedIn, user} from '../auth';
import {setUser} from '../store/actions/userActions';

import {
  wrapper as wrapperStyle,
} from '../styles/layout';

class Layout extends React.Component {
  componentWillMount() {
    if (loggedIn()) {
      this.props.setUser(user());
    }
  }

  render() {
    return (
      <div style={wrapperStyle()}>
        <Title text={`Admin`}/>
        {this.props.user.email}
        <Navigation/>
        {Routes}
      </div>
    );
  }
}

Layout.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Layout)));
