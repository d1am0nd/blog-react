import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter, Route} from 'react-router-dom';

import MainTitle from './Simple/MainTitle';
import Header from './Static/Header';
import Cookies from './Static/Cookies';

import {setCookiesDismissed} from '@/store/actions/miscActions';
import {cookiesDismissed} from '@/store/selectors/misc';
import {
  dismiss as dismissCookies,
  alreadyDismissed as alreadyDismissed,
} from '@/cookies';
import {routes} from '@/routes';

import {layout as layoutStyle} from '@/styles/layout';

class Layout extends React.Component {
  // Used for SSR
  static fetchData(store) {
    return store.dispatch(fetchMyPosts());
  }

  componentDidMount() {
    if (!alreadyDismissed()) {
      this.props.setCookiesDismissed(false);
    }
  }

  handleCookieDismiss(e) {
    this.props.setCookiesDismissed(true);
    dismissCookies();
  }

  render() {
    return (
      <div style={layoutStyle(this.props.cookiesDismissed)}>
        <MainTitle>My Programming Blog</MainTitle>
        <Header url={this.props.location.pathname}/>
        {routes.map((route, i) => (
          <Route exact key={i} path={route.path} component={route.component}/>
        ))}
        <Cookies
          show={!this.props.cookiesDismissed}
          handleDismiss={(e) => this.handleCookieDismiss(e)}/>
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  cookiesDismissed: PropTypes.bool,
  fetchMyPosts: PropTypes.func,
  setCookiesDismissed: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cookiesDismissed: cookiesDismissed(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyPosts: () => dispatch(fetchMyPosts()),
    setCookiesDismissed: (bool) => dispatch(setCookiesDismissed(bool)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(radium(Layout)));
