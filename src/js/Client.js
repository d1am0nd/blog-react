import React from 'react';
import ReactGA from 'react-ga';
import {StyleRoot} from 'radium';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import PropTypes from 'prop-types';

import client from 'config/client.json';
import history from '@/history';
import {setDataLoaded} from '@/store/actions/miscActions';
import Layout from '@/components/Layout';

if ((client.env === 'prod' || client.env === 'production') &&
  navigator.userAgent.indexOf('Speed Insights') == -1) {
  ReactGA.initialize(client.analytics);
  ReactGA.pageview(window.location.pathname + window.location.search);

  history.listen(({pathname}) => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
    document
      .getElementById('link-canonical')
      .setAttribute('href', `https://kordes.dev${pathname}`);
  });
} else {
  history.listen(({pathname}) => {
    document
      .getElementById('link-canonical')
      .setAttribute('href', `https://kordes.dev${pathname}`);
  });
}

class App extends React.Component {
  componentDidMount() {
    this.props.store.dispatch(setDataLoaded(true));
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <StyleRoot>
          <Router history={history}>
            <Layout/>
          </Router>
        </StyleRoot>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
