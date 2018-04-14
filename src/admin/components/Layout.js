import React from 'react';
import radium from 'radium';
import {withRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Title from './Layout/Title';
import Navigation from './Layout/Navigation';

import {loggedIn, user} from '../auth';
import {setUser} from '../store/actions/userActions';
import {routes} from 'admin/routes';

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
        {routes.map((route, i) => (
          <Route exact key={i} path={route.path} component={route.component}/>
        ))}
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
