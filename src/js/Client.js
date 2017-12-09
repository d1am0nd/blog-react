import React from 'react';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {setDataLoaded} from './store/actions/miscActions';

class App extends React.Component {
  componentDidMount() {
    this.props.store.dispatch(setDataLoaded(true));
  }

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
