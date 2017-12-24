import React from 'react';

import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleRoot>
          <Router><Layout/></Router>
        </StyleRoot>
      </Provider>
    );
  }
}

export default App;
