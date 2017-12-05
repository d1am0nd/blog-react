import React from 'react';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider, connect} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <StyleRoot><Layout/></StyleRoot>
        </Router>
      </Provider>
    );
  }
}

export default App;
