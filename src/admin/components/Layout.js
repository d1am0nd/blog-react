import React from 'react';
import radium from 'radium';
import {withRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Title from 'admin/components/Layout/Title';
import Navigation from 'admin/components/Layout/Navigation';

import {routes} from 'admin/routes';

import {
  wrapper as wrapperStyle,
} from 'admin/styles/layout';

class Layout extends React.Component {
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
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

export default withRouter(connect(
  mapStateToProps,
)(radium(Layout)));
