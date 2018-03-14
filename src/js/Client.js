import React from 'react';
import Layout from './components/Layout';
import ReactGA from 'react-ga';
import {StyleRoot} from 'radium';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {setDataLoaded} from './store/actions/miscActions';
import client from 'config/client.json';
import history from './history';
import PropTypes from 'prop-types';

if ((client.env === 'prod' || client.env === 'production') &&
  navigator.userAgent.indexOf('Speed Insights') == -1) {
  ReactGA.initialize(client.analytics);
  ReactGA.pageview(window.location.pathname + window.location.search);

  history.listen((location, action) => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
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
