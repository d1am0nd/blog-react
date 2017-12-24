import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Title from './Layout/Title';
import Navigation from './Layout/Navigation';
import Routes from './Routes';

import {loggedIn, user} from '../auth';
import {setUser} from '../store/actions/userActions';

import {
  wrapper as wrapperStyle,
  mainTitle as mainTitleStyle,
} from '../styles/layout';

class Layout extends React.Component {
  componentWillMount() {
    if (loggedIn()) {
      this.props.dispatch(setUser(user()));
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

export default withRouter(connect(store => {
  return {
    user: store.users.user,
  };
})(radium(Layout)));
