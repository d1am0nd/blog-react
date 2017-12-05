import React from 'react';
import ReactDOM from 'react-dom';
import App from './Client';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import store from './store';

const rootDom = document.getElementById('root');

ReactDOM.render(
  (
    <App store={store}/>
  ),
rootDom);
