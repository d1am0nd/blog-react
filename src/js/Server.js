import React from 'react';
import PropTypes from 'prop-types';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider} from 'react-redux';
import {StaticRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StyleRoot
          radiumConfig={this.props.radiumConfig}>
          <Router context={this.props.context} location={this.props.location}>
            <Layout/>
          </Router>
        </StyleRoot>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  radiumConfig: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default App;
