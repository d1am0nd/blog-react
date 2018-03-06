import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';

import Routes from './Routes';
import MainTitle from './Simple/MainTitle';

import Header from './Static/Header';
import Cookies from './Static/Cookies';

import {Route, Switch, withRouter} from 'react-router-dom';

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
      this.props.dispatch(setCookiesDismissed(false));
    }
  }

  handleCookieDismiss(e) {
    this.props.dispatch(setCookiesDismissed(true));
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
          handleDismiss={e => this.handleCookieDismiss(e)}/>
      </div>
    );
  }
}

export default withRouter(connect(store => {
  return {
    ...store,
  };
})(radium(Layout)));
