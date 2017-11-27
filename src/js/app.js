import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider} from 'react-redux';
import store from './store';

const app = document.getElementById('root');

ReactDOM.render(
  <StyleRoot>
      <Provider store={store}><Layout/></Provider>
  </StyleRoot>, app);
