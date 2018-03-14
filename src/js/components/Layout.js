import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Routes from './Routes';
import MainTitle from './Simple/MainTitle';
import Header from './Static/Header';
import Cookies from './Static/Cookies';

import {withRouter} from 'react-router-dom';

import {setCookiesDismissed} from 'store/actions/miscActions';
import {
  dismiss as dismissCookies,
  alreadyDismissed as cookiesDismissed,
} from 'cookies';

import {layout as layoutStyle} from 'styles/layout';

class Layout extends React.Component {
  // Used for SSR
  static fetchData(store) {
    return store.dispatch(fetchMyPosts());
  }

  componentDidMount() {
    if (!cookiesDismissed()) {
      this.props.setCookiesDismissed(false);
    }
  }

  handleCookieDismiss(e) {
    this.props.setCookiesDismissed(true);
    dismissCookies();
  }

  render() {
    return (
      <div style={layoutStyle(this.props.misc.cookiesDismissed)}>
        <MainTitle>My Programming Blog</MainTitle>
        <Header url={this.props.location.pathname}/>
        {Routes}
        <Cookies
          show={!this.props.misc.cookiesDismissed}
          handleDismiss={(e) => this.handleCookieDismiss(e)}/>
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  misc: PropTypes.object,
  fetchMyPosts: PropTypes.func,
  setCookiesDismissed: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    misc: state.misc,
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
