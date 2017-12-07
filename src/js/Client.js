import React from 'react';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StyleRoot>
          <Router><Layout/></Router>
        </StyleRoot>
      </Provider>
    );
  }
}

export default App;
